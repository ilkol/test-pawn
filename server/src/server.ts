import {
	createConnection,
	DidChangeConfigurationNotification,
	ProposedFeatures,
} from 'vscode-languageserver/node';

import { Logger } from './Logger/Logger';
import { Locale } from './Locale';
import { FileManager } from './Managers/FileManager';
import { VSCode } from './VSCode';
import { sendNotification } from './utils';
import { Preprocessor } from './Preprocessor/Preprocessor';
import { CacheManager } from './cache/CacheManager';
import { serializeInit } from './cache/Serialization/serializeInit';
import { SemanticTokensLegendManager, SymbolManager } from './SymbolSystem';
import { LSPHandlers } from './LSPHandlers';
import { CapabilitiesManager } from './Managers/CapabilitiesManager';
import { AnalasisOrchestrator } from './AnalasisOrchestrator';
import { SettingsManager } from './Settings/SettingsManager';
import { PathResolver } from './PathResolver';
import { URI } from 'vscode-uri';

import * as Sentry from "@sentry/node";

async function main() {
	const startTime = Date.now();
	const isDebug = process.env.IS_LSP_DEBUG === 'true';
	if (!isDebug) {
		Sentry.init({
			dsn: "https://22d28a9fcd44413118bf6eddba25667d@o4511298449702912.ingest.de.sentry.io/4511298455404624",
			release: "test-pawn@2.0.0",
			sendDefaultPii: true,
		});

		process.on('uncaughtException', (err) => {
			Sentry.captureException(err);
		});

		Sentry.setContext("environment", {
			platform: process.platform, // win32, linux, darwin
			arch: process.arch,         // x64, arm64
			nodeVersion: process.version
		});
	} else {
		console.log("Sentry disabled: Debug mode detected via env");
	}

	const connection = createConnection(ProposedFeatures.all);


	SemanticTokensLegendManager.init();

	Logger.init(connection.console);
	Locale.init();
	const fileManager = new FileManager();
	const preprocessor = new Preprocessor(fileManager);
	serializeInit();

	const symbolManager = new SymbolManager();
	const pathResolver = new PathResolver();
	const settingsManager = new SettingsManager(connection);

	const orchestrator = new AnalasisOrchestrator(connection, preprocessor, symbolManager);

	fileManager.onFileManagerOpenFileListener = async (document) => {
		Logger.log(`${document.path} has been opened`);
		const start = Date.now();
		try {
			await orchestrator.analyze(document);
		} catch (e) {
			console.error(e);
			Sentry.captureException(e, { tags: { stage: "initial_analysis" } });
		}
		const duration = Date.now() - start;
		const fileSizeKb = Math.round(document.getText().length / 1024);
		const sizeBucket = fileSizeKb < 10 ? "small" : fileSizeKb < 50 ? "medium" : "large";

		Sentry.metrics.distribution("analyze_file_time", duration, {
			unit: "millisecond",
			attributes: {
				file_size_kb: fileSizeKb,
				size_bucket: sizeBucket,
			}
		});
	}

	const capabilitiesManager = new CapabilitiesManager();

	connection.onInitialize(params => {
		let workspaceRoot: string | undefined = undefined;
		if (params.workspaceFolders && params.workspaceFolders.length > 0) {
			workspaceRoot = URI.parse(params.workspaceFolders[0].uri).fsPath;
		}
		pathResolver.workspaceRoot = workspaceRoot;

		const clientInfo = params.clientInfo;
		Sentry.setContext("client", {
			name: clientInfo?.name,
			version: clientInfo?.version // Это и есть версия VS Code
		});

		return capabilitiesManager.getInitializeResult(params, fileManager);
	});

	const afterInitializing = async () => {
		try {
			const settings = await settingsManager.refresh();
			await fileManager.setup(pathResolver, settings);


			await CacheManager.init(fileManager);
			fileManager.init();
		} catch (e) {
			if (e instanceof Error) {
				sendNotification(connection, VSCode.NotificationType.Error, e.message);
			}
			else {
				console.error(e);
			}
		}
	}

	connection.onInitialized(() => {
		if (capabilitiesManager.hasWorkspaceFolderCapability) {
			connection.workspace.onDidChangeWorkspaceFolders(_event => {
				Logger.log('Workspace folder change event received.');
			});
		}
		if (capabilitiesManager.hasConfigurationCapability) {
			connection.client.register(DidChangeConfigurationNotification.type);
		}
		Logger.log(Locale.t('LSP server initialized.'));
		afterInitializing();
	});

	connection.onPrepareRename(params => LSPHandlers.onPrepareRename(params, fileManager, symbolManager))
	connection.onRenameRequest(params => LSPHandlers.onRenameRequest(params, fileManager, symbolManager));
	connection.onReferences(params => LSPHandlers.onReferences(params, fileManager, symbolManager));
	connection.onDefinition(params => LSPHandlers.onDefinition(params, fileManager, symbolManager));
	connection.languages.semanticTokens.on(params => LSPHandlers.onSemanticTokens(params, fileManager, symbolManager));
	connection.languages.diagnostics.on(params => LSPHandlers.onDiagnostics(params, fileManager));
	connection.onDidChangeWatchedFiles(change => LSPHandlers.onDidChangeWatchedFiles(change));
	connection.onCompletion(params => LSPHandlers.onCompletion(params, fileManager));
	connection.onDocumentLinks(params => LSPHandlers.onDocumentLinks(params, fileManager));
	connection.onDocumentSymbol(params => LSPHandlers.onDocumentSymbols(params, fileManager, symbolManager));
	connection.onCompletionResolve(item => LSPHandlers.onCompletionResolve(item));
	// connection.onDidChangeConfiguration(change => LSPHandlers.onDidChangeConfiguration(capabilitiesManager.hasConfigurationCapability, connection, settingsManager));

	connection.onRequest('pawn/getPreprocessed', async (uriStr: string) => {
		// Извлекаем путь к файлу из URI (pawn-preprocessed://...)
		const document = fileManager.getOpenedFile(uriStr);
		if (document) {
			// Убеждаемся, что препроцессинг завершен
			await document.waitForAnalysis();
			return document.processedCode; // Та самая строка после всех замен
		}
		return "// Ошибка: Файл не найден или еще не проанализирован";
	});

	fileManager.documentsManager.listen(connection);

	connection.onShutdown(async () => {
		const sessionDurationMinutes = Math.round((Date.now() - startTime) / 1000 / 60);

		Sentry.captureMessage("Session Ended", {
			level: "info",
			extra: {
				durationMinutes: sessionDurationMinutes
			},
			tags: {
				sessionType: sessionDurationMinutes > 30 ? "long_work" : "short_edit"
			}
		});
		await Sentry.flush(2000);
	});
	connection.listen();
}


main();