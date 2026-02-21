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
	Location,
	WorkspaceEdit,
	SemanticTokenTypes,
	SemanticTokenModifiers,
	CompletionItemKind
} from 'vscode-languageserver/node';

import { getDefaultCompletions } from './DefaultCompletions/DefaultCompletions';
import { Logger } from './Logger/Logger';
import { Locale } from './Locale';
import { FileManager } from './Managers/FileManager';
import { VSCode } from './VSCode';
import { sendNotification } from './utils';
import { Parser } from './Parser/Parser';
import { LSPConnection, Position } from './types';
import { AbstractOpenFile, ParsingStep } from './AbstractOpenFile';
import { Preprocessor } from './Preprocessor/Preprocessor';
import { CacheManager } from './cache/CacheManager';
import { Serialization } from './cache/Serialization';
import { FileCache } from './cache/FileCache';
import { serializeInit } from './cache/Serialization/serializeInit';
import { ASTNode } from './antlr/AST/Nodes/ASTNode';
import { SemanticTokensLegendManager, SymbolManager } from './SymbolSystem';
import { DocumentUri, TextEdit } from 'vscode-languageserver-textdocument';
import { SemanticTokensBuilder } from './SymbolSystem/SemanticTokensBuilder';
import { Function } from './SymbolSystem/Symbols';

function sendFileDiagnostics(connection: LSPConnection, document: AbstractOpenFile) {
	connection.sendDiagnostics({
		uri: document.URI,
		diagnostics: document.diagnostics
	});
}

async function main() {
	const connection = createConnection(ProposedFeatures.all);

	[
		SemanticTokenTypes.type,
		SemanticTokenTypes.enum,
		SemanticTokenTypes.parameter,
		SemanticTokenTypes.enumMember,
		SemanticTokenTypes.macro,
		SemanticTokenTypes.comment,
		SemanticTokenTypes.string,
		SemanticTokenTypes.keyword,
		SemanticTokenTypes.number,
		SemanticTokenTypes.operator,
		SemanticTokenTypes.function,
		SemanticTokenTypes.variable
	].forEach(SemanticTokensLegendManager.registerTokenType);
	[
		SemanticTokenModifiers.declaration,
		SemanticTokenModifiers.definition,
		SemanticTokenModifiers.readonly,
		SemanticTokenModifiers.static,
		SemanticTokenModifiers.deprecated,
		SemanticTokenModifiers.documentation,
		SemanticTokenModifiers.modification,
		SemanticTokenModifiers.defaultLibrary,
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
				},
				referencesProvider: {
					workDoneProgress: true
				},
				definitionProvider: {
					workDoneProgress: true
				},
				renameProvider: {
					prepareProvider: true,
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

	connection.onPrepareRename(async (params) => {

		Logger.log("Request prepare rename")
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getPathFromURI(uri));
		if(!document) {
			return null;
		}
		
		await document.waitForAnalysis();

		const position = Position.fromLSP(params.position);
		const {symbol, ref} = symbolManager.getSymbolOnPosition(document.path, position, document.scopeManager) ?? {};
	
		if(!symbol || !ref) {
			return null;
		}
		
		return {
			range: ref.tokenRange,
			placeholder: symbol.name
		};
	})

	connection.onRenameRequest(async (params, _, __, ___) => {
		Logger.log("Request rename")
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getPathFromURI(uri));
		if(!document) {
			return null;
		}
		
		await document.waitForAnalysis();

		const position = Position.fromLSP(params.position);
		const {symbol} = symbolManager.getSymbolOnPosition(document.path, position, document.scopeManager) ?? {};
	
		if(!symbol) {
			return null;
		}
		
		const changes: {
			[uri: DocumentUri]: TextEdit[]
		} = {};
		
		const newName = params.newName;

		symbol.getReferences().forEach(ref => {
			const uri = FileManager.getUriFromPath(ref.filePath);
			if (!changes[uri]) {
				changes[uri] = [];
			}
			changes[uri].push({
				range: ref.tokenRange,
				newText: newName,
			} satisfies TextEdit);
		});
		
		return {
			changes
		} satisfies WorkspaceEdit;
	});

	connection.onReferences(async (params, _, __, ___) => {
		Logger.log("Request references")
		const references: Location[] = [];	
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getPathFromURI(uri));
		if(!document) {
			return references;
		}
		
		await document.waitForAnalysis();

		const position = Position.fromLSP(params.position);
		const result = symbolManager.getSymbolOnPosition(document.path, position, document.scopeManager);
		if(result) {
			const { symbol } = result;
			const refs = symbol.getReferences();

			return refs
				.filter(ref => params.context.includeDeclaration || !ref.tokenRange.isEqual(symbol.defenition.tokenRange))
				.map(ref => ({
					range: ref.tokenRange,
					uri: FileManager.getUriFromPath(ref.filePath)
				}));
		}
		
		return [];
	});

	connection.onDefinition(async (params, _, __, ___) => {
		Logger.log("Request defenition")
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getPathFromURI(uri));
		if(!document) {
			return null;
		}
		
		await document.waitForAnalysis();
		const position = params.position;
		const fileSymbols = symbolManager.getFileSymbols(document.path);
		const symbol = fileSymbols.find(symbol => {
			const references = symbol.getFileReferances(document.path);
			for(const ref of references) {
				const res = position.line === ref.tokenRange.start.line &&
				position.character >= ref.tokenRange.start.character &&
				position.character <= ref.tokenRange.end.character;
				if(res) {
					return true;
				}
			}
			return false;
		});
		if(!symbol) {
			return null;
		}
		
		return {
			range: symbol.defenition.tokenRange,
			uri: FileManager.getUriFromPath(symbol.defenition.filePath)
		};
	});

	connection.languages.semanticTokens.on(async (params, token) => {
		Logger.log("Request semantic tokens")
		const builder = new SemanticTokensBuilder();	
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getPathFromURI(uri));
		if(!document) {
			return builder.build();

		}
		await document.waitForAnalysis();

		const tokens: {
			line: number;
			char: number;
			length: number;
			tokenType: number;
			tokenModifiers: number[];
		}[] = [];
		symbolManager.getFileSymbols(document.path).forEach((symbol) => {
			symbol.getFileSemanticTokens(document.path).forEach(info => tokens.push(info))
		});		

		tokens.sort((a, b) => {
			if (a.line !== b.line) return a.line - b.line;
			return a.char - b.char;
		});

		tokens.forEach(info => {
			builder.push(info)
		});

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
	
	connection.onDidChangeWatchedFiles(_change => {
		
	});

	connection.onCompletion(
		async (_params: TextDocumentPositionParams): Promise<CompletionItem[]> => {
			let result: CompletionItem[] = [];// getDefaultCompletions();
			const uri = _params.textDocument.uri;
			const document = fileManager.getOpenedFile(FileManager.getPathFromURI(uri));
			if(!document) {
				return result;
			}
			
			await document.waitForAnalysis();


			const position = new Position(_params.position.line, _params.position.character)
			const currentScope = document.scopeManager.findInnermostAt(position);
			const symbols = currentScope.getAllVisibleSymbols(position);

			const items = symbols.map(symbol => {
				return {
					label: symbol.name,
					kind: symbol.completionKind,
					data: symbol.id
				} satisfies CompletionItem;
			});
			result = result.concat(items);

			return result;
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
		
		symbolManager.getFileGlobalSymbols(document.path).forEach((symbol) => {
			symbols.push(
				symbol.defenition.getSymbolInfo(),
			);
		});

		document.defines.forEach(definelist => {
			definelist.forEach(define => {
				if(define.symbol) {
					symbols.push(define.symbol.defenition.getSymbolInfo());
				}
			})
		})

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