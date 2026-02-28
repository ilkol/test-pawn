import { CharStreams, CommonTokenStream } from "antlr4ts";
import { AbstractOpenFile } from "../AbstractOpenFile";
import { pawnLexer } from "../antlr/generated/pawnLexer";
import { LexerErrorListener } from "../antlr/LexerErrorListener";
import { pawnParser } from "../antlr/generated/pawnParser";
import { ParserErrorListener } from "../antlr/ParserErrorListener";
import { PawnListener } from "../antlr/PawnListener";
import { pawnListener as IPawnListener } from "../antlr/generated/pawnListener";
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { Declarations } from "../antlr/AST/Nodes/Declarations";
import { Logger } from "../Logger/Logger";
import { Analyzer } from "../antlr/AST/visitor/Analyzer";
import { SymbolManager } from "../SymbolSystem";
import { Tag } from "../antlr/AST/Nodes/Tag";
import { FunctionDeclaration } from "../antlr/AST/Nodes/Functions/FunctionDeclaration";

export type OnFileParsedListener = (file: AbstractOpenFile) => (Promise<void> | void);
export type OnFileWalkedASTListener = (file: AbstractOpenFile) => (Promise<void> | void);

export class Parser
{
	/**
	 * Фукнция, которая вызывается после окончания обработки препроцессором файла
	 */
	private static _onFileParsedListener?: OnFileParsedListener;
	private static _onFileWalkedASTListener?: OnFileWalkedASTListener;
	
	static set onFileParsedListener(value: OnFileParsedListener) {
		Parser._onFileParsedListener = value;
	}
	static set onFileWalkedASTListener(value: OnFileWalkedASTListener) {
		Parser._onFileWalkedASTListener = value;
	}

	private constructor() {

	}

	public static parseFile(document: AbstractOpenFile) {
		// TODO: обработка файла препроцессором
		const code = document.processedCode;

		const stream = CharStreams.fromString(code);
		const lexer = new pawnLexer(stream);
		const lexerErrorListener = new LexerErrorListener(document);
		lexer.addErrorListener(lexerErrorListener);
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new pawnParser(tokenStream);
		const parserErrorListener = new ParserErrorListener(document);
		parser.addErrorListener(parserErrorListener);
		const ruleContext = parser.file();
		const listener: IPawnListener = new PawnListener();
		
		ParseTreeWalker.DEFAULT.walk(listener, ruleContext);
	
		let listen = (<PawnListener>listener);
		document.AST = <Declarations>listen.Root;

		Parser._onFileParsedListener?.(document);
	}

	public static async walkAST(document: AbstractOpenFile, symbolManager: SymbolManager) {
		if(!document.AST) {
			Logger.error("AST is not initialized, cannot walk the tree.");
			return;
		}
		let analyzer = new Analyzer(
			document,
			document.globalScope,
			symbolManager,
			document.scopeManager
		);

		analyzer.declaraedFunctions.clear();
		if(document.AST instanceof Declarations) {
			const functions: Map<string, Tag> = analyzer.declaraedFunctions;
			for(const decl of document.AST.declarations) {
				if(!(decl instanceof FunctionDeclaration)) {
					continue;
				}
				functions.set(decl.id, decl.tag);
			}
		}  
	
		try {
			document.AST.accept(analyzer); // Здесь тоже может быть нужен await, если accept асинхронный
		}
		catch (e) {
			Logger.error("Error on tree visit");
			console.error(e);
		}
	
		// this.diagnostic(analyzer.diagnostics);
		// analyzer.functions.forEach((val, key) => {
		// 	this.functions.set(key, val);
		// });
		// this.prepareSignatures();
	
		console.log(document.AST);
		
		// analyzer.functionsDeclarations.forEach((value, key) => {	
		// 	const keyMap = this.fileManager.definitionProvider.definitions.get(key);
		// 	if(keyMap) {
		// 		keyMap.set(this.file.uri, value);
		// 	}
		// 	else {
		// 		const map = new Map<vscode.Uri, Definition<Declaration>[]>();
		// 		map.set(this.file.uri, value);
		// 		this.fileManager.definitionProvider.definitions.set(key, map);
		// 	}
		// });
		// analyzer.functionsCalls.forEach((value, key) => {	
		// 	const keyMap = this.fileManager.referenceProvider.references.get(key);
		// 	if(keyMap) {
		// 		keyMap.set(this.file.uri, value);
		// 	}
		// 	else {
		// 		const map = new Map<vscode.Uri, Reference<IHasID>[]>();
		// 		map.set(this.file.uri, value);
		// 		this.fileManager.referenceProvider.references.set(key, map);
		// 	}
		// });
		// this._isParsed = true;

		await Parser._onFileWalkedASTListener?.(document);
	}
}