import { AbstractOpenFile, FunctionInfo } from "./AbstractOpenFile";
import { FileManager } from "./Managers/FileManager";
import * as vscode from 'vscode';

import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
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
import { Include, IncludeType } from "./Prepocessor/Include";
import { PreprocessorDirective } from "./Prepocessor/PreprocessorDirective";
import { Define } from "./Prepocessor/Define";
import { Token } from "./Managers/SemanticTokensManager";
import { Definition } from "./Linking/Definition";
import { Declaration } from "./antlr/AST/Nodes/Declaration";
import { Reference } from "./Linking/Reference";
import { IHasID } from "./antlr/AST/Nodes/IHasID";
import { ChunkedCharStream } from "./antlr/ChunkedCharStream";
import { SemanticTokens } from "./SemanticTokens";

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
	get tokens(): Token[] {
		
		// const functions = this.scope.functions();
		// functions.forEach(element => {
		// 	this.tokensManager.addToken();
		// });
		
		const tokens = this.tokensManager.tokens;
		return tokens;
	}
	// eslint-disable-next-line @typescript-eslint/naming-convention
	private AST: ASTNode | null = null;
	private ppParser: PPParser = new PPParser(this.file, this.symbolsManager, this.tokensManager, this.diagnositcManager);
	private curCode: string = "";
	private chunks: string[] = [];

	get defines(): Map<string, Define[]> {
		return this.ppParser.defines;
	}


	public constructor(file: vscode.TextDocument, fileManager: FileManager)
	{
		super(file, fileManager);
	}

	fileName() {
		return this.file.fileName;
	}

	get exportDirectives(): Define[] {
		return this.ppParser.exportDirectives;
	}

	async processIncludededDirectives(array: PreprocessorDirective[]) {
		// this.curCode = await this.ppParser.processIncludedDirectives(this.curCode, array);
	}
	
	public async processIncludes(): Promise<void> {
		const pawnDir = this.fileManager._includePath;
		if(pawnDir) {
			for (let el of this.ppParser.includes) {
				if(el.skiped) {continue;}
				if(el.uri)
					{await this.handleInclude(el);}
			}
		}
	}

	public async parseCode() {

		// const stream = new ChunkedCharStream(this.chunks);	
		const stream = CharStreams.fromString(this.curCode);
		const lexer = new pawnLexer(stream);
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
			this,
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

		analyzer.functionsDeclarations.forEach((value, key) => {	
			const keyMap = this.fileManager.definitionProvider.definitions.get(key);
			if(keyMap) {
				keyMap.set(this.file.uri, value);
			}
			else {
				const map = new Map<vscode.Uri, Definition<Declaration>[]>();
				map.set(this.file.uri, value);
				this.fileManager.definitionProvider.definitions.set(key, map);
			}
		});
		analyzer.functionsCalls.forEach((value, key) => {	
			const keyMap = this.fileManager.referenceProvider.references.get(key);
			if(keyMap) {
				keyMap.set(this.file.uri, value);
			}
			else {
				const map = new Map<vscode.Uri, Reference<IHasID>[]>();
				map.set(this.file.uri, value);
				this.fileManager.referenceProvider.references.set(key, map);
			}
		});
		this._isParsed = true;
	}

	/**
	 * Ищет все команды препрцоессора в файле
	 */
	protected async findAllDirectives()
	{
		this.curCode = this.ppParser.collectDirectives(this.curCode);
	}
	public get includes()
	{
		return this.ppParser.includes;
	}
	/**
	 * Открывает все инклуды в файле
	 */
	private async openAllIncludes()
	{
		const pawnDir = this.fileManager._includePath;
		if (pawnDir) {
			for (let el of this.ppParser.includes) {
				if(el.skiped) {continue;}
				let directive;
				switch(el.type) {
					case IncludeType.default: {
						const directoryPath = path.dirname(this.file.uri.fsPath);
						directive = vscode.Uri.file(directoryPath);
						break;
					}
					default:
						directive = pawnDir;

				}

				el.uri = await this.checkInclude(directive, el.path, "");
				if(!el.uri) {
					el.uri = await this.checkInclude(directive, el.path, ".inc");
				}
				else if(!el.uri) {
					el.uri = await this.checkInclude(directive, el.path, ".pwn");
				}
				else if(!el.uri) {
					el.uri = await this.checkInclude(directive, el.path, ".pawn");
				}
			
				if(el.uri) {
					if(el.uri.path.indexOf("YSI") !== -1 || el.uri.path.indexOf("y_") !== -1) {return;}
		
					if(!this.fileManager.openedFiles.has(el.uri)) {
						await this.fileManager.openFile(el.uri);
						const doc = this.fileManager.parsingStack.peek();
						if(doc && this.file.uri !== doc.uri)
						{
							await this.fileManager.parse(doc);
						}
					}
					
					
				}
				else {
					this.diagnositcManager.addDiagnostic("Файл не найден", vscode.DiagnosticSeverity.Error, this.file.uri.path, el.pathRange);
			
				}
			}
			
		}
	}

	public async parsePreprocessor() {
		// this.documentsLinks.clear();
		// this.scope = new Scope(this);
		// this.complitions = [];
		


		// Регистрируем инклуды
		
	}

	private async checkInclude(directive: vscode.Uri, path: string, ex: string): Promise<vscode.Uri|undefined> {
		let uri = vscode.Uri.joinPath(directive, path + ex);	
		return await this.fileManager.isFileExist(uri) ? uri : undefined;
	}

	/**
	 * Находит и открывает все инклуды
	 */
	public async findDirectives(): Promise<void> {
		this.ppParser = new PPParser(this.file, this.symbolsManager, this.tokensManager, this.diagnositcManager);
		this.curCode = this.file.getText();

		await this.findAllDirectives();
		// await this.openAllIncludes();
	}
	public updateSemanticTokens()
	{
		let ranges = this.ppParser.getDefinedRanges();
		ranges.forEach(range => {
			this.tokensManager.addToken(range, SemanticTokens.macro);
			
		});
	}
	public getComplitions(): vscode.CompletionItem[] {
		this.complitions = [];
		this.loadDefaultComplitions();

		// Регистрируем дефайны
		const complitions = this.ppParser.preprocessorTokens();
		complitions.forEach(el => {
			this.complitions.push(el);
		});

		const functions = this.scope.functions();
		functions.forEach(element => {
			const compl = new vscode.CompletionItem(element.id, vscode.CompletionItemKind.Function);
			if(element.parameters.length === 0) {
				compl.insertText = new vscode.SnippetString(`${element.id}()$0`);
			}
			else {
				compl.insertText = new vscode.SnippetString(`${element.id}`);
			}
			this.complitions.push(compl);
		});

		return this.complitions;
	}
	public async processDirectives(): Promise<void>
	{
		this.curCode = await this.ppParser.processAllDirectives(this.curCode);
	}
	public async processDefines(): Promise<void> {
		this.curCode = await this.ppParser.processDefines(this.curCode);
	}

	public includeIncludesScopse(includes: AbstractOpenFile[]) {
		includes.forEach(file => {
			const uri = file.uri;
			file.getComplitions().forEach(compl => {
				if (!compl.detail)
					{compl.detail = path.parse(path.basename(uri.fsPath)).name;}
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
				value.file = file;
			});
			file.scope.functions().forEach((value) => {
				this.scope.addFunction(value);
				value.file = file;
			});
			const directives: Define[] = [];
			file.exportDirectives.forEach(el => {
				const directive = el.copy();
				directive.curStartIndex = 0;
				directive.curEndIndex = this.file.getText().length;
				directives.push(directive);
			});

			directives.forEach(define => {
				this.ppParser.defines.set(define.prefix, [define]);
			});
		});
	}

	private async handleInclude(include: Include): Promise<void> {
		const uri = include.uri;
		if(!uri) {return;}
		if(uri.path.indexOf("YSI") !== -1 || uri.path.indexOf("y_") !== -1) {return;}
		const file = this.fileManager.getFile(uri.path);
		if (file) {
			
			file.getComplitions().forEach(compl => {
				if (!compl.detail)
					{compl.detail = path.parse(path.basename(uri.fsPath)).name;}
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
				value.file = file;
			});
			file.scope.functions().forEach((value) => {
				this.scope.addFunction(value);
				value.file = file;
			});
			const directives: Define[] = [];
			file.exportDirectives.forEach(el => {
				const directive = el.copy();
				directive.curStartIndex = include.curStartIndex;
				directive.curEndIndex = include.curEndIndex;
				directives.push(directive);
			});

			await this.processIncludededDirectives(directives);
			// file.processIncludededDirectives();
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

	public async openFileWithOutPreprocessor() {
		console.log("Открываю распаршенный файл");
		const document = await vscode.workspace.openTextDocument({
			content: '', // Изначально пустой документ
			language: 'plaintext', // Устанавливаем язык (можно заменить на другой, например, 'javascript')
		});

		// Открываем файл в редакторе
		const editor = await vscode.window.showTextDocument(document);

		// Добавляем строки постепенно
		// for (const line of this.chunks) {
			const position = new vscode.Position(document.lineCount, 0); // Позиция в конце документа
			await editor.edit(editBuilder => {
				editBuilder.insert(position, this.curCode + '\n'); // Вставляем строку с новой строкой
			});
			// Ждем немного перед добавлением следующей строки
			await new Promise(resolve => setTimeout(resolve, 500)); // Задержка 500 мс
		// }
		
	}

}