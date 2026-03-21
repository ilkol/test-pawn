import {
	createConnection,
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

async function main() {
	const connection = createConnection(ProposedFeatures.all);

	SemanticTokensLegendManager.init();

	Logger.init(connection.console);
	Locale.init();
	const fileManager = new FileManager();
	const preprocessor = new Preprocessor(fileManager);
	serializeInit();

	const symbolManager = new SymbolManager();

	const orchestrator = new AnalasisOrchestrator(connection, preprocessor, symbolManager);
	
	fileManager.onFileManagerOpenFileListener = async (document) => {
		Logger.log(`${document.path} has been opened`);
		await orchestrator.analyze(document);
	}
	
	const capabilitiesManager = new CapabilitiesManager();

	connection.onInitialize(params => capabilitiesManager.getInitializeResult(params, fileManager));

	const afterInitializing = async () => {
		try {
			await fileManager.findPawnDir();
			await CacheManager.init(fileManager);
			fileManager.init();
		} catch(e) {
			if(e instanceof Error) {
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
	connection.listen();
}


main();