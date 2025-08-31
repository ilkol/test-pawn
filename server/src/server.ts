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
import { AbstractOpenFile, ParsingStep } from './AbstractOpenFile';
import { Preprocessor } from './Preprocessor/Preprocessor';
import { CacheManager } from './cache/CacheManager';
import { Serialization } from './cache/Serialization';
import { FileCache } from './cache/FileCache';
import { serializeInit } from './cache/Serialization/serializeInit';
import { ASTNode } from './antlr/AST/Nodes/ASTNode';

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
	serializeInit();

	const continueParsing = async (document: AbstractOpenFile): Promise<void> => {
		switch(document.parsinState) {
			case ParsingStep.newFile: {
				document.parsinState++;
				const texttHash = CacheManager.hashText(document.text);
				if(document.cache.cacheVersion >= CacheManager.VERSION) {
					if(document.cache.texttHash !== texttHash) {
						document.cache = undefined
						Logger.log(`File ${document.path} has old (bad) cache. Delete cache.`);
					} else {
						Logger.log(`Found valid cache for file ${document.path}.`);
						if(document.cache.diagnostics.length != 0) {
							document.cache.diagnostics.forEach(d => document.diagnostics.push(d));
						}
					}
				} else {
					document.cache = undefined
					Logger.log(`File ${document.path} has old (bad) cache. Delete cache.`);
				}
				CacheManager.setFileCache(document.cache);
				return;
			}
			case ParsingStep.textHashed: 
			case ParsingStep.directivesCollected:
			case ParsingStep.directivesProcessed:
			case ParsingStep.buildedDependcyGraph:
			case ParsingStep.processedIncludes: {
				await preprocessor.processFile(document);
				return;
			}
			case ParsingStep.preprocessed: {
				await Parser.parseFile(document); // на всякий await, но по идее async нет
				return;
			}
			case ParsingStep.parsed: {
				await Parser.walkAST(document);
				return;
			}
			case ParsingStep.astWalked: {
				return;
			}
		}
	}
	
	fileManager.onFileManagerOpenFileListener = async (document) => {
		Logger.log(`${document.path} has been opened`);
		document.cache = await CacheManager.getFileCache(document.path);
		await continueParsing(document);
		await continueParsing(document);
	}
	preprocessor.onFileProcessedListener = async (document) => {
		Logger.log(`${document.path} has been preprocessed`);
		let cache: FileCache = (await CacheManager.getFileCache(document.path))!;

		CacheManager.setFileCache(cache);

		if(cache.rootAST) {
			document.AST = Serialization.Deserialize.object<ASTNode>(cache.rootAST);
			document.parsinState++;
			Logger.log(`${document.path} has been already parsed. Skip parsing.`);
		}

		await continueParsing(document);
	}
	Parser.onFileParsedListener = async (document) => {
		Logger.log(`${document.path} has been parsed`);
		
		document.parsinState++;
		let cache: FileCache = (await CacheManager.getFileCache(document.path))!;
		try {
			if(document.AST) {
				const code = Serialization.Serialize.toString(document.AST);
				cache.rootAST = code;
			}
		} catch(e) {
			console.error("Ошибка сериализации AST");
			console.error(e);
		}
		CacheManager.setFileCache(cache);
		await continueParsing(document);
	}
	Parser.onFileWalkedASTListener = (document) => {
		document.parsinState++;
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