import { CompletionItem, CompletionItemKind, DiagnosticSeverity, Hover, MarkdownString, Position, Range, TextDocument, Uri } from "vscode";
import { InputStream } from "./parser/InputStream";
import { TokenStream } from "./parser/TokenStream";
import { Parser } from "./parser/Parser";
import { Environment, FunctionData, Modifires, enumData, funcData, saveData } from "./parser/Environment";
import { Evaluater} from "./parser/evaluate";
import { DiagnosticManager } from "./Managers/diagnostic";
import { CaseAfterDefault, ExtraDefault, InputError, SymbolIsNeverUsed, TypeMismatch, UndefinedVariable, UnhandleCharacter } from "./Errors";
import { TokenStruct } from "./Strucutres/TokensStruct";
import { EnumStruct } from "./Strucutres/memory/EnumStruct";
import { ConstantStruct } from "./Strucutres/memory/ConstantStruct";
import { ArrayStruct } from "./Strucutres/memory/ArrayStruct";
import { IntStruct } from "./Strucutres/literals/IntStruct";
import { SubProgrammStruct } from "./Strucutres/SubProgrammStruct";
import { FileManager } from "./Managers/FileManager";
import { FunctionDeclaration } from "./Strucutres/functions/FunctionDeclaration";
import { FunctionImplementation } from "./Strucutres/functions/FunctionImplementation";
import { LiteralStruct } from "./Strucutres/literals/LiteralStruct";
import { TokenString } from "./Tokens/literals/TokenString";
import { SemanticTokensManager } from "./Managers/SemanticTokensManager";
import { SymbolsManager } from "./Managers/SymbolsManager";
import { DefineStruct } from "./Strucutres/preprocessor/DefineStruct";

export class OpenedFile {
	private ast: TokenStruct[] = [];
	private env: Environment = new Environment();
	private _changed: boolean = true;

	private includes: string[] = [];
	private diagnositcManager: DiagnosticManager;
	public readonly tokensManager: SemanticTokensManager = new SemanticTokensManager();
	public readonly symbolsManager: SymbolsManager = new SymbolsManager();

	
	get tokens() {
		return this.tokensManager.tokens;
	}
	constructor(private file: TextDocument, public readonly fileManager: FileManager) {
		this.diagnositcManager = fileManager.getDiagnostic();
		console.log("Был открыт файл!");
	}
	set changed(value: boolean) {
		this._changed = value;
	}
	get changed() {
		return this._changed;
	}
	
	get Env() {
		return this.env;
	}
	public getEnv() {
		return this.env;
	}
	public addInclude(str: string): void {
		this.includes.push(str);
	}
	public getURI(): Uri {
		return this.file.uri;
	}
	public getHover(word: string, document?: TextDocument): MarkdownString {
		let markdown: MarkdownString = new MarkdownString("");
		
		if(this.env.vars.has(word))
			this.getHoverVar(word, markdown);
		else if(this.env.functions.has(word))
			this.getHoverFunc(word, markdown);
		else if(this.env.defines.has(word))
			this.getHoverDefine(word, markdown);
		else if(this.env.enums.has(word))
			this.getHoverEnum(word, markdown);
		return markdown;
	}
	private getHoverEnum(name: string, markdown: MarkdownString): void {
		let variable = this.env.getEnum(name);
		markdown.appendCodeblock(this.getCodeByEnumData(name, variable), "pawn");
	}
	private getHoverDefine(name: string, markdown: MarkdownString): void {
		let variable = this.env.getDefine(name);
		markdown.appendCodeblock(this.getCodeByDefineData(name, variable), "pawn");
		if(variable.value instanceof IntStruct)
			markdown.appendText(`Числовая константа ${variable.value.getValue()}`);
		else if(variable.value instanceof TokenString)
			markdown.appendText(`Константа строки "${variable.value.getValue()}"`);
	}

	private getHoverVar(name: string, markdown: MarkdownString): void {
		let variable
		try {
			variable = this.env.get(name);
		} catch(e) {
			if(e instanceof UndefinedVariable) return;
			else console.error(e);
		}
		if(!variable) throw new UndefinedVariable(name);
		
		let modfirestr = "";
		let isConst = false;
		
		let sizeStr = "";
		if(variable.struct instanceof ArrayStruct) {
			variable.struct.getSize().forEach(elements => {
				if(elements instanceof IntStruct)
					sizeStr += `[${elements.getValue()}]`;
				else sizeStr += `[${elements}]`;
			});
		}
		name += sizeStr;
		if(variable.struct instanceof ConstantStruct) {
			isConst = true;
			name += " = "
			if(variable.struct.variable instanceof ArrayStruct) {
				// if(variable.struct.value instanceof SubProgrammStruct) {
				// 	let arStruct = variable.struct.value;
				// 	arStruct.value.forEach(element => {
				// 		console.log(element);
				// 	});
				// }
				name += "массив крч, но пока ты его не увидишь :)";
				
			}
			else if(variable.struct.value instanceof LiteralStruct || variable.struct.value instanceof TokenString) name += variable.struct.value.getValue();
		}
		// if(variable.modifire.length > 0) {
		// 	variable.modifire.forEach(modifire => {
		// 		if(modifire == Modifires.const) isConst = true;
		// 		modfirestr += modifire + " ";
		// 	});
		// }
		
		
		markdown.appendCodeblock("new " + modfirestr + variable.getTag() + ":" + name + ";", "pawn");
	}
	private getHoverFunc(name: string, markdown: MarkdownString): void {
		let variable = this.env.getFunction(name);
		markdown.appendCodeblock(variable.hover, "pawn");
	}
	
	private getCodeByEnumData(name: string, data: EnumStruct): string {
		let constatns = data.getElements();
		let str = "";
		constatns.forEach((element, key) => {
			str += `\t${key} = ${element.value},\n`;
		});
		return "enum " + name + " {\n" + str + "}";
	}
	private getCodeByDefineData(name: string, data: DefineStruct): string {
		return "#define " + name + " " + data.to;
	}
	public getPathFile(): string {
		return this.getURI().path;
	
	}
	public getPath(): string {
		let path = this.getPathFile();
		let pos = path.lastIndexOf('/');
		path = path.substring(0, pos);
		
		return path;
	}
	public getDiagnosticManager():DiagnosticManager {
		return this.diagnositcManager;
	}
	public changeStatus() {
		this.changed = true;
	}
	public async tryParse() {
		if(this.changed == false) {
			console.log("Пропускаем парсинг");
			return;
		}
		console.log("Something try parse file", this.file.fileName);
		this.diagnositcManager.clear();
		this.env = new Environment();
		this.makeTree();
		await this.tryEvaluate().then(() => {
		});
		this.diagnositcManager.updateDiagnostic();
		this.changed = false;
	}
	private makeTree() {
		try {
			// InputStream.reset();
			var stream: InputStream = new InputStream(this.file.getText());
			var tokStream: TokenStream = new TokenStream(stream);
			var parser: Parser = new Parser(tokStream);
			this.ast =  parser.parse().prg;
		} catch(e) {
			if(e instanceof UnhandleCharacter) {
				this.addDiagnostic(e.message, DiagnosticSeverity.Error, new Range(new Position(e.line, e.col), new Position(e.line, e.col+1)));
			}
			if(e instanceof ExtraDefault || e instanceof CaseAfterDefault || e instanceof TypeMismatch || e instanceof InputError) {
				this.addDiagnostic(e.message, DiagnosticSeverity.Error, e.pos);
			}
			if(e instanceof InputError) {
				console.error(e.pos);
				console.error(e);
			}
			else console.error(e);
		}
	}
	private addDiagnostic(msg: string, type: DiagnosticSeverity, pos: Range) {
		this.diagnositcManager.addDiagnostic(msg, type, this.file.uri.path, pos);
	}
	private async tryEvaluate() {
		let evaluater = new Evaluater(this);
		console.log("file ", this.file.uri.path);
		console.log("ast:", this.ast);
		let i = 0;
		for(const element of this.ast)
		{
			try {
				await evaluater.evaluate(element, this.env).then((result) => {
					this.symbolsManager.addSymbol(this.env.symbols[i++]);
					
				});
				
			} catch(e) {
				console.error(e);
			}
			
		}
		// console.error(this.getPathFile(), this.env.includes);
		
		// this.checkNeverUsedSymbols();
		
	}

	private checkNeverUsedSymbols(): void {
		// this.env.vars.forEach((value: saveData, key: string) => {
		// 	if(!value.used)
		// 		this.addDiagnostic("Symbol is never used \""+ key +"\"", DiagnosticSeverity.Warning, value.definitionPos);
		// });
	}

	public getComplitions(complitions: CompletionItem[]) {
		this.env.functions.forEach((value, key) => {	
			complitions.push(value.complition);
		});
		this.env.defines.forEach((value: DefineStruct, key: string) => {

			const complition = new CompletionItem(key);
			complition.documentation = new MarkdownString('');
			complition.documentation.appendCodeblock(this.getCodeByDefineData(key, value), "pawn");
			// if(value.file) complition.documentation.appendText(value.file.toString());
			complition.kind = CompletionItemKind.Constant;
			complition.detail = `define`;
			
			complitions.push(complition);
		});
	}
}