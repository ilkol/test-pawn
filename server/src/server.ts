import {
	createConnection,
	ProposedFeatures,
	InitializeParams,
	CompletionItem,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	DocumentDiagnosticReportKind,
	type DocumentDiagnosticReport
} from 'vscode-languageserver/node';

import { getDefaultCompletions } from './DefaultCompletions/DefaultCompletions';
import { Logger } from './Logger/Logger';
import { Locale } from './Locale';
import { FileManager } from './Managers/FileManager';
import { VSCode } from './VSCode';
import { sendNotification } from './utils';
import { Parser } from './Parser/Parser';
import { LSPConnection } from './types';
import { AbstractOpenFile } from './AbstractOpenFile';
import { Preprocessor } from './Preprocessor/Preprocessor';
import { CacheManager } from './cache/CacheManager';
import { Serialization } from './cache/Serialization';
import { createHash } from 'crypto';
import { FileCache } from './cache/FileCache';

function sendFileDiagnostics(connection: LSPConnection, document: AbstractOpenFile) {
	connection.sendDiagnostics({
		uri: document.URI,
		diagnostics: document.diagnostics
	});
}

async function main() {
	const connection = createConnection(ProposedFeatures.all);

	Logger.init(connection.console);
	Locale.init();
	const fileManager = new FileManager();
	const preprocessor = new Preprocessor(fileManager);
	
	fileManager.onFileManagerOpenFileListener = async (document) => {
		Logger.log(`${document.path} has been opened`);
		let cache = await CacheManager.getFileCache(document.path);
		const texttHash = CacheManager.hashText(document.text);
		if(cache && cache.cacheVersion >= CacheManager.VERSION) {
			cache.texttHash = texttHash
		} else {
			cache = {
				cacheVersion: CacheManager.VERSION,
				path: document.path,
				texttHash
			}
		}

		await preprocessor.processFile(document);

		CacheManager.setFileCache(cache);
	}
	preprocessor.onFileProcessedListener = async (document) => {
		Logger.log(`${document.path} has been preprocessed`);
		let cache: FileCache = (await CacheManager.getFileCache(document.path))!;
		
		await Parser.parseFile(document); // на всякий await, но по идее async нет
		
		if(!document.AST) {
			return;
		}
		try {
			const code = Serialization.Serialize.toString(document.AST);
			cache.rootAST = code;
		} catch(e) {
			console.error("Ошибка сериализации AST");
			console.error(e);
		}

		CacheManager.setFileCache(cache);
	}
	Parser.onFileParsedListener = async (document) => {
		Logger.log(`${document.path} has been parsed`);
		await Parser.walkAST(document);
	}
	Parser.onFileWalkedASTListener = (document) => {
		Logger.log(`${document.path} AST has walked`);
		sendFileDiagnostics(connection, document);
	}
	

	let hasConfigurationCapability = false;
	let hasWorkspaceFolderCapability = false;
	let hasDiagnosticRelatedInformationCapability = false;

	connection.onInitialize((params: InitializeParams) => {
		const capabilities = params.capabilities;

		// fileManager.currentUri = params.workspaceFolders
		if(params.workspaceFolders) {
			const uri = params.workspaceFolders[0];
			if(uri) {
				fileManager.currentUri = uri.uri;
			}
		}
		if(params.locale) {
			Locale.locale = params.locale;
		}

		hasConfigurationCapability = !!(
			capabilities.workspace && !!capabilities.workspace.configuration
		);
		hasWorkspaceFolderCapability = !!(
			capabilities.workspace && !!capabilities.workspace.workspaceFolders
		);
		hasDiagnosticRelatedInformationCapability = !!(
			capabilities.textDocument &&
			capabilities.textDocument.publishDiagnostics &&
			capabilities.textDocument.publishDiagnostics.relatedInformation
		);

		const result: InitializeResult = {
			capabilities: {
				textDocumentSync: TextDocumentSyncKind.Incremental,
				completionProvider: {
					resolveProvider: true
				},
				diagnosticProvider: {
					interFileDependencies: false,
					workspaceDiagnostics: false
				}
			}
		};
		if (hasWorkspaceFolderCapability) {
			result.capabilities.workspace = {
				workspaceFolders: {
					supported: true
				}
			};
		}
		return result;
	});

	const afterInitializing = async () => {
		try {
			await fileManager.findPawnDir();
			await CacheManager.init(fileManager);
		} catch(e) {
			console.log(e instanceof Error);
			if(e instanceof Error) {
				sendNotification(connection, VSCode.NotificationType.Error, e.message);
			}
			else {
				console.error(e);
			}
		}
	}

	connection.onInitialized(() => {
		if (hasWorkspaceFolderCapability) {
			connection.workspace.onDidChangeWorkspaceFolders(_event => {
				Logger.log('Workspace folder change event received.');
			});
		}
		Logger.log(Locale.t('LSP server initialized.'));
		afterInitializing();
	});


	connection.languages.diagnostics.on(async (params) => {
		const document = fileManager.documentsManager.get(params.textDocument.uri);
		if (document !== undefined) {
			return {
				kind: DocumentDiagnosticReportKind.Full,
				items: []
			} satisfies DocumentDiagnosticReport;
		} else {
			return {
				kind: DocumentDiagnosticReportKind.Full,
				items: []
			} satisfies DocumentDiagnosticReport;
		}
	});

	// documents.onDidChangeContent(change => {

	// });

	
	connection.onDidChangeWatchedFiles(_change => {

	});

	// documents.onDidOpen(e => {
		
	// 	console.log(e.document.uri);
	// });

	connection.onCompletion(
		(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
			return getDefaultCompletions();
		}
	);

	connection.onCompletionResolve(
		(item: CompletionItem): CompletionItem => {
			return item;
		}
	);

	fileManager.documentsManager.listen(connection);
	connection.listen();
}


main();