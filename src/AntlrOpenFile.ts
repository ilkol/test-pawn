import { AbstractOpenFile, FunctionInfo } from "./AbstractOpenFile";
import { FileManager } from "./Managers/FileManager";
import * as vscode from 'vscode';

import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { pawnLexer } from "./antlr/generated/pawnLexer";
import { pawnParser } from "./antlr/generated/pawnParser";
import { pawnListener } from "./antlr/generated/pawnListener";
import { PawnListener } from "./antlr/PawnListener";
import { DiagnosticMessage } from "./antlr/diagnostic/DiagnosticMessage";
import { Analyzer } from "./antlr/AST/visitor/Analyzer";
import { Declarations } from "./antlr/AST/Nodes/Declarations";
import { LexerErrorListener } from "./antlr/LexerErrorListener";
import { ParserErrorListener } from "./antlr/ParserErrorListener";
import { ASTNode } from "./antlr/AST/Nodes/ASTNode";
import { PPParser } from "./Prepocessor/PPParser";
import path = require("path");
import { Scope } from "./antlr/Scopes/Scope";
import { IScope } from "./antlr/Scopes/IScope";

class Semaphore {
    private tasks: (() => void)[] = [];
    private count: number;

    constructor(count: number) {
        this.count = count;
    }

    public acquire(): Promise<void> {
        if (this.count > 0) {
            this.count--;
            return Promise.resolve();
        }

        return new Promise(resolve => {
            this.tasks.push(resolve);
        });
    }

    public release(): void {
        this.count++;
        if (this.tasks.length > 0) {
            const resolve = this.tasks.shift();
            if (resolve) {
                this.count--;
                resolve();
            }
        }
    }
}

// Пример использования в вашем коде

const semaphore = new Semaphore(1);

export class AntrlOpenFile extends AbstractOpenFile
{
	private AST: ASTNode | null = null;
	public constructor(file: vscode.TextDocument, fileManager: FileManager)
	{
		super(file, fileManager);
	}

	fileName() {
		return this.file.fileName;
	}
	
	public async tryParse(): Promise<void> {
		this.scope = new Scope();
		this.complitions = [];
		const ppParser = new PPParser(this.file, this.symbolsManager, this.tokensManager, this.diagnositcManager);
		let code = ppParser.parse();
	
		// Регистрируем дефайны
		const complitions = ppParser.preprocessorTokens();
		complitions.forEach(el => {
			this.complitions.push(el);
		});
	
		// Регистрируем инклуды
		const pawnDir = this.fileManager._includePath;
		if (pawnDir) {
			for (let el of ppParser.includes) {
				const uri: vscode.Uri = vscode.Uri.joinPath(pawnDir, el.path + ".inc");
				this.documentsLinks.set(el.pathRange, uri);
				await this.handleInclude(uri);
			}
		}
	
		const lexer = this.tryLex(code);
		const lexerErrorListener = new LexerErrorListener();
		lexer.addErrorListener(lexerErrorListener);
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new pawnParser(tokenStream);
		const parserErrorListener = new ParserErrorListener();
		parser.addErrorListener(parserErrorListener);
		const ruleContext = parser.file();
		const listener: pawnListener = new PawnListener();
		
		ParseTreeWalker.DEFAULT.walk(listener, ruleContext);
	
		let listen = (<PawnListener>listener);
		this.AST = <Declarations>listen.Root;
	
		let analyzer = new Analyzer(
			this.scope,
			listen.diagnostics.concat(parserErrorListener.diagnostic).concat(lexerErrorListener.diagnostic),
			this.tokensManager,
			this.symbolsManager,
			this.complitions,
			this.signatures
		);
	
		try {
			this.AST.accept(analyzer); // Здесь тоже может быть нужен await, если accept асинхронный
		}
		catch (e) {
			console.error("Error on tree visit");
			console.error(e);
		}
	
		console.debug("Обход дерева окончен для файла ", this.file.uri.path);
	
		this.diagnostic(analyzer.diagnostics);
		this.functions = analyzer.functions;
		this.prepareSignatures();
	
		console.log(this.AST);
	}

	private async handleInclude(uri: vscode.Uri): Promise<void> {
		await this.fileManager.openFile(uri);
		const file = this.fileManager.getFile(uri.path);
		if (file) {
			file.getComplitions().forEach(compl => {
				if (!compl.detail)
					compl.detail = path.parse(path.basename(uri.fsPath)).name;
				this.complitions.push(compl);
			});
			file.signatures.forEach((value, key) => {
				this.signatures.set(key, value);
			});
			file.functionsInfo.forEach((value, key) => {
				this.functionsInfo.set(key, value);
			});
	
			file.scope.variables().forEach((value) => {
				this.scope.addVar(value);
			});
			file.scope.functions().forEach((value) => {
				this.scope.addFunction(value);
			});
		}
	}

	private tryLex(text: string): pawnLexer
	{
		const stream = CharStreams.fromString(text);
		return new pawnLexer(stream);
	}

	private diagnostic(diagnostics: DiagnosticMessage[])
	{
		diagnostics.forEach(element => {
			this.diagnositcManager.addDiagnostic(element.message, element.type, this.file.uri.path, element.pos, element.tags);
		});
	}

}