import {
	createConnection,
	ProposedFeatures,
	InitializeParams,
	TextDocumentSyncKind,
	InitializeResult,
} from 'vscode-languageserver/node';

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
import { SemanticTokensLegendManager, SymbolManager } from './SymbolSystem';
import { LSPHandlers } from './LSPHandlers';
import { CapabilitiesManager } from './Managers/CapabilitiesManager';

function sendFileDiagnostics(connection: LSPConnection, document: AbstractOpenFile) {
	connection.sendDiagnostics({
		uri: document.URI,
		diagnostics: document.diagnostics
	});
}

async function main() {
	const connection = createConnection(ProposedFeatures.all);

	SemanticTokensLegendManager.init();

	Logger.init(connection.console);
	Locale.init();
	const fileManager = new FileManager();
	const preprocessor = new Preprocessor(fileManager);
	serializeInit();

	const symbolManager = new SymbolManager();

	const continueParsing = async (document: AbstractOpenFile): Promise<void> => {
		if(document.parsinState !== ParsingStep.newFile) {
			document.cache.diagnostics = document.diagnostics;
		}

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
				symbolManager.resetAllFileSymbols(document.path);
				await preprocessor.processFile(document, symbolManager);
				return;
			}
			case ParsingStep.preprocessed: {
				await Parser.parseFile(document); // на всякий await, но по идее async нет
				return;
			}
			case ParsingStep.parsed: {
				await Parser.walkAST(document, symbolManager);
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
			document.processedCode = ""; // чтобы не занимал память
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
	Parser.onFileWalkedASTListener = async (document) => {
		document.parsinState++;
		Logger.log(`${document.path} AST has walked`);
		sendFileDiagnostics(connection, document);
		let cache: FileCache = (await CacheManager.getFileCache(document.path))!;
		cache.processCode = "";
		CacheManager.writeFileCache(cache);
		document.completeAnalysis();
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

	fileManager.documentsManager.listen(connection);
	connection.listen();
}


main();