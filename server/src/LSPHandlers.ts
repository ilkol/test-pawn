import { CompletionItem, CompletionItemKind, DidChangeConfigurationParams, DidChangeWatchedFilesParams, DocumentDiagnosticParams, DocumentDiagnosticReport, DocumentDiagnosticReportKind, DocumentLink, DocumentLinkParams, DocumentSymbol, DocumentSymbolParams, DocumentUri, Location, PrepareRenameParams, ReferenceParams, RenameParams, SemanticTokensParams, TextDocumentPositionParams, TextEdit, WorkspaceEdit } from "vscode-languageserver";
import { FileManager } from "./Managers/FileManager";
import { Position, Range } from "./types";
import { Logger } from "./Logger/Logger";
import { SymbolManager } from "./SymbolSystem";
import { SemanticTokensBuilder } from "./SymbolSystem/SemanticTokensBuilder";
import { Locale } from "./Locale";
import { ICompletionProvider } from "./Completions/ICompletionProvider";
import { PreprocessorCompletionsProvider } from "./Completions/PreprocessorDirectivesCompletionsProvider";
import { SymbolCompletionsProvider } from "./Completions/SymbolCompletionsProvider";
import { SettingsManager } from "./Settings/SettingsManager";
import { ClientConnection } from "./ClientConnection";

export class LSPHandlers {
	private static completionsProviders: ICompletionProvider[] = [ 
		new PreprocessorCompletionsProvider(), 
		new SymbolCompletionsProvider()
	];
	public static async onCompletion(params: TextDocumentPositionParams, fileManager: FileManager): Promise<CompletionItem[]>  {
		const document = fileManager.getOpenedFile(FileManager.getAbsolutePathFromURI(params.textDocument.uri));
		if(!document) {
			return [];
		}

		const lineTillCursor = document.getText(new Range(
			new Position(params.position.line, 0), 
			new Position(params.position.line, params.position.character))
		);

		for(const provider of this.completionsProviders) {
			if(provider.checkContext(lineTillCursor, params)) {
				return provider.getCompletions(lineTillCursor, params, document);
			}
		}
		
		return [];
	}

	public static async onDefinition(params: TextDocumentPositionParams, fileManager: FileManager, symbolManager: SymbolManager) {
		Logger.log("Request defenition")
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getAbsolutePathFromURI(uri));
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
	}

	public static async onPrepareRename(params: PrepareRenameParams, fileManager: FileManager, symbolManager: SymbolManager) {
		Logger.log("Request prepare rename")
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getAbsolutePathFromURI(uri));
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
	}
	public static async onRenameRequest(params: RenameParams, fileManager: FileManager, symbolManager: SymbolManager) {
		Logger.log("Request rename")
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getAbsolutePathFromURI(uri));
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
	}
	public static async onReferences(params: ReferenceParams, fileManager: FileManager, symbolManager: SymbolManager) {
		Logger.log("Request references")
		const references: Location[] = [];	
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getAbsolutePathFromURI(uri));
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
	}
	public static async onSemanticTokens(params: SemanticTokensParams, fileManager: FileManager, symbolManager: SymbolManager) {
		Logger.log("Request semantic tokens")
		const builder = new SemanticTokensBuilder();	
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getAbsolutePathFromURI(uri));
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
		}).forEach(info => {
			builder.push(info);
		});


		return builder.build();
	}
	public static async onDiagnostics(params: DocumentDiagnosticParams, fileManager: FileManager) {
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
	}
	public static async onDidChangeWatchedFiles(change: DidChangeWatchedFilesParams) {

	}
	public static async onDocumentLinks(params: DocumentLinkParams, fileManager: FileManager) {
		Logger.log("клиент запросил список ссылок")
		const links: DocumentLink[] = [];
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getAbsolutePathFromURI(uri));

		if(!document) {
			return links;
		}
		await document.waitForAnalysis();
		document.includes.forEach(include => {
			links.push({
				range: include.pathRange,
				target: FileManager.getUriFromPath(include.absolutePath ?? include.pathText)
			});
		});

		return links;
	}
	public static async onDocumentSymbols(params: DocumentSymbolParams, fileManager: FileManager, symbolManager: SymbolManager) {
		Logger.log("клиент запросил список символов")
		const symbols: DocumentSymbol[] = [];
		const uri = params.textDocument.uri;
		const document = fileManager.getOpenedFile(FileManager.getAbsolutePathFromURI(uri));
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
	}
	public static async onCompletionResolve(item: CompletionItem) {
		return item;
	}
	public static async onDidChangeConfiguration(hasConfigurationCapability: boolean, connection: ClientConnection, settingsManager: SettingsManager) {
		if(!hasConfigurationCapability) {
			return;
		}
		await settingsManager.refresh();
	}
}