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
import { Include } from "./Prepocessor/Include";
import { PreprocessorDirective } from "./Prepocessor/PreprocessorDirective";
import { Define } from "./Prepocessor/Define";
import { Token } from "./Managers/SemanticTokensManager";
import { Definition } from "./Linking/Definition";
import { Declaration } from "./antlr/AST/Nodes/Declaration";
import { Reference } from "./Linking/Reference";
import { IHasID } from "./antlr/AST/Nodes/IHasID";
import { SemanticTokens } from "./SemanticTokens";
import { EnumMember } from "./antlr/AST/Nodes/enum/EnumMember";
import { CodeBlock } from "./antlr/AST/Nodes/CodeBlock";
import { Ellipse } from "./antlr/AST/Nodes/Operators/Ellipse";
import { FunctionDeclaration } from "./antlr/AST/Nodes/Functions/FunctionDeclaration";
import { Tag } from "./antlr/AST/Nodes/Tag";
import { diff } from "deep-diff";
import { FunctionDeclarationParameter } from "./antlr/AST/Nodes/Functions/FunctionDeclarationParameter";
import { Serialization } from "./cache/Serialization";
import { Variable } from "./antlr/AST/Nodes/Variable";
import { IntLiteral } from "./antlr/AST/Nodes/Literals/IntLiteral";
import { FloatLiteral } from "./antlr/AST/Nodes/Literals/FloatLiteral";
import { FixedLiteral } from "./antlr/AST/Nodes/Literals/FixedLiteral";
import { StringLiteral } from "./antlr/AST/Nodes/Literals/StringLiteral";
import { BinarLiteral } from "./antlr/AST/Nodes/Literals/BinarLiteral";
import { HexLiteral } from "./antlr/AST/Nodes/Literals/HexLiteral";
import { OperatorNew } from "./antlr/AST/Nodes/Operators/OperatorNew";
import { VarDeclaration } from "./antlr/AST/Nodes/Variables/VarDeclaration";
import { VariableInit } from "./antlr/AST/Nodes/VariableInit";
import { ArrayDeclaration } from "./antlr/AST/Nodes/Variables/ArrayDeclaration";
import { EnumDeclaration } from "./antlr/AST/Nodes/enum/EnumDeclaration";
import { Array } from "./antlr/AST/Nodes/Variables/Array";

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
		// const pawnDir = this.fileManager._includePath;
		// if(pawnDir) {
		// 	for (let el of this.ppParser.includes) {
		// 		if(el.skiped) {continue;}
		// 		if(el.uri)
		// 			{await this.handleInclude(el);}
		// 	}
		// }
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
	
		// console.debug("Обход дерева окончен для файла ", this.file.uri.path);
	
		this.diagnostic(analyzer.diagnostics);
		analyzer.functions.forEach((val, key) => {
			this.functions.set(key, val);
		});
		this.prepareSignatures();
	
		console.log(this.AST);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.CodeBlock, CodeBlock);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.Declarations, Declarations);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.Ellipse, Ellipse);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.FunctionDeclaration, FunctionDeclaration);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.FunctionDeclarationParameter, FunctionDeclarationParameter);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.Tag, Tag);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.Variable, Variable);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.IntLiteral, IntLiteral);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.FloatLiteral, FloatLiteral);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.FixedLiteral, FixedLiteral);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.StringLiteral, StringLiteral);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.BinaryLiteral, BinarLiteral);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.HexLiteral, HexLiteral);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.OperatorNew, OperatorNew);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.VariableDeclaration, VarDeclaration);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.VariableInit, VariableInit);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.ArrayDeclaration, ArrayDeclaration);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.EnumMember, EnumMember);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.Enum, EnumDeclaration);
		Serialization.Deserialize.registerSerializable(Serialization.NodeList.Array, Array);
		try {
			console.log("Сериализую AST");
			const code = Serialization.Serialize.toString(this.AST);
			if(code === undefined) {
				throw new Error("Ошибка сериализации AST: код не определен");
			}
			console.log(code);
			const newAST = Serialization.Deserialize.object(code);
			console.log(newAST);
			const differences = diff(this.AST, newAST);
			if(differences) {
				differences.forEach((difference) => {
					if(difference.path) {
						console.log(`Difference at path: ${difference.path.join(".")}`);
					}
				});
			}
			else {
				console.log("AST идентичны");
			}
			
			// console.log(this.AST === newAST);
		} catch (e) {
			console.error("Ошибка сериализации AST: ");
			console.error(e);
		}

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

		this.scope.functions().forEach(element => {
			const compl = new vscode.CompletionItem(element.id, vscode.CompletionItemKind.Function);
			if(element.parameters.length === 0) {
				compl.insertText = new vscode.SnippetString(`${element.id}()$0`);
			}
			else {
				compl.insertText = new vscode.SnippetString(`${element.id}`);
			}
			this.complitions.push(compl);
		});

		this.defines.forEach((defines, name) => {
			defines.forEach(define => {
				const compl = new vscode.CompletionItem(define.prefix, vscode.CompletionItemKind.Constant);
				compl.detail = define.replacement;
				this.complitions.push(compl);

			});
		});

		this.scope.enums.forEach(enumStruct => {
			const compl = new vscode.CompletionItem(enumStruct.id, vscode.CompletionItemKind.Enum);
			this.complitions.push(compl);
		});
		this.scope.variables().forEach(variable => {
			if(variable instanceof EnumMember) {
				const compl = new vscode.CompletionItem(variable.id, vscode.CompletionItemKind.EnumMember);
				const parent = variable.parent?.id;
				compl.detail = `(enummember) ${parent}`;
				compl.documentation = new vscode.MarkdownString("").appendCodeblock(`enum ${parent} {\n\t...\n\t${variable.id} = ${variable.value}\n\t...\n}`, "pawn");
				this.complitions.push(compl);
			}
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
				value.importFile = file;
			});
			file.scope.functions().forEach((value) => {
				this.scope.addFunction(value);
				value.importFile = file;
			});
			const directives: Define[] = [];
			file.exportDirectives.forEach(el => {
				const directive = el.copy();
				directive.curEndIndex = directive.curEndIndex - directive.curStartIndex;
				directive.curStartIndex = 0;
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
				value.importFile = file;
			});
			file.scope.functions().forEach((value) => {
				this.scope.addFunction(value);
				value.importFile = file;
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
				editBuilder.insert(position, this.curCode); // Вставляем строку с новой строкой
			});
			// Ждем немного перед добавлением следующей строки
			await new Promise(resolve => setTimeout(resolve, 500)); // Задержка 500 мс
		// }
		
	}

}