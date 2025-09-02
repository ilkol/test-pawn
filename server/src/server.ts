import {
	createConnection,
	ProposedFeatures,
	InitializeParams,
	CompletionItem,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	DocumentDiagnosticReportKind,
	type DocumentDiagnosticReport,
	DocumentSymbol,
	DocumentLink,
	SymbolKind,
	SemanticTokensBuilder
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
import { SemanticTokens, SemanticTokensLegendManager, SemanticTokensModifiers, SymbolManager } from './SymbolSystem';

function sendFileDiagnostics(connection: LSPConnection, document: AbstractOpenFile) {
	connection.sendDiagnostics({
		uri: document.URI,
		diagnostics: document.diagnostics
	});
}

async function main() {
	const connection = createConnection(ProposedFeatures.all);

	[
		SemanticTokens.type,
		SemanticTokens.enum,
		SemanticTokens.parameter,
		SemanticTokens.enumMember,
		SemanticTokens.macro,
		SemanticTokens.comment,
		SemanticTokens.string,
		SemanticTokens.keyword,
		SemanticTokens.number,
		SemanticTokens.operator,
		SemanticTokens.function,
		SemanticTokens.variable
	].forEach(SemanticTokensLegendManager.registerTokenType);
	[
		SemanticTokensModifiers.declaration,
		SemanticTokensModifiers.const,
		SemanticTokensModifiers.static,
		SemanticTokensModifiers.deprecated,
		SemanticTokensModifiers.doc,
		SemanticTokensModifiers.modification,
		SemanticTokensModifiers.default
	].forEach(SemanticTokensLegendManager.registerTokenModifier);

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
				await preprocessor.processFile(document, symbolManager);
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
	Parser.onFileWalkedASTListener = (document) => {
		document.parsinState++;
		Logger.log(`${document.path} AST has walked`);
		sendFileDiagnostics(connection, document);
		document.completeAnalysis();
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
				},
				documentLinkProvider: {
					workDoneProgress: true,
				},
				documentSymbolProvider: {
					workDoneProgress: true
				},
				semanticTokensProvider: {
					full: true,
					legend: SemanticTokensLegendManager.getLegend(),
					workDoneProgress: true
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

	connection.languages.semanticTokens.on(async (params, token) => {
		Logger.log("Request semantik tokens")
		const builder = new SemanticTokensBuilder();	
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getPathFromURI(uri));
		if(!document) {
			return builder.build();

		}
		await document.waitForAnalysis();
		Logger.log("Collecting semantik tokens")
		
		document.defines.forEach((defines, pattern) => {
			const length = pattern.length;
			defines.forEach(define => {
				define.getFileReferences(document.path).forEach(ref => {
					builder.push(ref.start.line, ref.start.character, length, 4, 1)
				});
				builder.push(define.patternRange.start.line, define.patternRange.start.character, length, 4, 1)
		
			})
		});
		
		Logger.log("Sending semantik tokens");
		console.log(builder.build());
		return builder.build();
		
	});

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

	connection.onCompletion(
		(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
			return getDefaultCompletions();
		}
	);

	connection.onDocumentLinks(async (params, token, workDoneProgress, resultProgress) => {
		Logger.log("клиент запросил список ссылок")
		const links: DocumentLink[] = [];
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getPathFromURI(uri));

		if(!document) {
			return links;
		}
		workDoneProgress.report("Waiting for file parsing");
		await document.waitForAnalysis();
		document.includes.forEach(include => {
			links.push({
				range: include.pathRange,
				target: FileManager.getUriFromPath(include.absolutePath ?? include.pathText)
			});
		});
		workDoneProgress.done();

		return links;
	})

	

	connection.onDocumentSymbol(async(params, token, wokrDoneProgress, resultProgress) => {
		Logger.log("клиент запросил список символов")
		const symbols: DocumentSymbol[] = [];
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getPathFromURI(uri));
		if(!document) {
			return symbols;

		}
		await document.waitForAnalysis();
		
		console.log(symbolManager.getFileSymbols(document.path));

		symbolManager.getFileSymbols(document.path).forEach((symbol) => {
			symbols.push(
				symbol.getSymbolInfo(),
				...symbol.getFileSymbolReferancesInfo(document.path),
			);
		});

		console.log(symbols);
		
		return symbols;
	});

	connection.onCompletionResolve(
		(item: CompletionItem): CompletionItem => {
			return item;
		}
	);

	fileManager.documentsManager.listen(connection);
	connection.listen();
}


main();