import { CompletionItem, CompletionItemKind, DocumentSymbol, MarkdownString, Range, SnippetString, SymbolKind, Uri } from "vscode";
import { FunctionAlreadyHaveImplementation, FunctionHeadDifferentFromPrototype, FunctionImplementationBeforeDeclaration, SymbolAlredyDefined, TypeMismatch, UndefinedVariable } from "../Errors";
import { FunctionDeclaration } from "../Strucutres/functions/FunctionDeclaration";
import { EnumStruct } from "../Strucutres/memory/EnumStruct";
import { FunctionImplementation } from "../Strucutres/functions/FunctionImplementation";
import { PreprocessorScrut } from "../Strucutres/PreprocessorStruct";
import { VarDefenitionStruct } from "../Strucutres/memory/VarDefenitionStruct";
import { VarStruct } from "../Strucutres/memory/VarStruct";
import { AssignOperator } from "../Strucutres/operators/AssignOperator";
import { IntStruct } from "../Strucutres/literals/IntStruct";
import { FloatStruct } from "../Strucutres/literals/FloatStruct";
import { TokenString } from "../Tokens/literals/TokenString";
import { HasTagStruct } from "../HasTagStruct";

export enum Modifires {
	const = "const",
	static = "static",
	stock = "stock"
}
export enum FuncModifires {
	nan = "",
	native = "native",
	public = "public",
	stock = "stock",
}

export interface saveData {
	type: string,
	value?: any
	modifire: Modifires[],	
	used: boolean,
	definitionPos: Range,
	size: (number | string)[]
}

export interface argsData {
	name: string
	type: string,
	defaultValue: any
	modifiref: Modifires[],	
	isArray: boolean
}

export interface funcData {
	// name: string
	definitionPos: Range
	type: string,
	modifire: FuncModifires,
	args: argsData[],
	argStr: string
}

export interface enumData {
	pos: Range
	value: Map<string, enumElData>
}
export interface enumElData {
	value: number,
	pos: Range
}

export enum FunctioDeclType {
	function,
	public,
	forward,
	stock,
	native
}

export class ParamInfo {
	constructor(public readonly name: string, public defaultvalue?: string | number) {

	}
}

export class FunctionData {
	private _included = false;
	public readonly hover;
	public readonly complition;
	private type: FunctioDeclType
	public readonly args: ParamInfo[] = [];

	constructor(public readonly func: FunctionDeclaration | FunctionImplementation) {
		this.args = this.getParams();
		this.hover = this.getHoverText();
		this.type = this.detectType();	
		this.complition = this.getComplition();
	}
	private getParams(): ParamInfo[] {
		let params: ParamInfo[] = [];
		this.func.args.forEach(element => {
			if(element instanceof VarStruct)
				params.push(new ParamInfo(element.name)) ;
			else if(element instanceof AssignOperator) {
				if(element.right instanceof TokenString)
					params.push(new ParamInfo(element.left.name, element.right.getValue())) ;
				// else if(element.right instanceof HasTagStruct)
				// 	params.push(new ParamInfo(element.left.name, element.right.)) ;
			}
		});
		return params;
	}
	private detectType(): FunctioDeclType {
		switch(this.func.word) {
			case "stock": 
				return  FunctioDeclType.stock;
			case "forward":
				return FunctioDeclType.forward;
			case "public":
			case "public:":
				return FunctioDeclType.public;	
			case "native:":
				return FunctioDeclType.native;	
			default: 
				return FunctioDeclType.function;
		}
	}
	private getComplition(): CompletionItem {
		const complition = new CompletionItem(this.func.name);
		complition.documentation = new MarkdownString('');
		complition.documentation.appendCodeblock(this.hover, "pawn");
		let complStr: string = this.func.name + "(";
		let args = "";
				
		switch(this.type) {
			case FunctioDeclType.public, FunctioDeclType.forward:
				complition.detail = `public`;
				complition.kind = CompletionItemKind.Event;
				complStr = "public " + complStr;

				let func = this.func;
				let first = true;
				func.args.forEach(element => {
					if(!first) args += ", ";
					if(element instanceof VarStruct)
						args += element.name;
					else if(element instanceof AssignOperator) {
						args += element.left.name;
					}
					first = false;
				});
				complStr += args + ")\n{\n\t$0\n}";

				break;
			default:
				let detail = "";
				if(this.type === FunctioDeclType.stock)
					detail += "stock"
				else if(this.type === FunctioDeclType.native)
					detail += "native"
				complition.detail = detail + `function`;
				complition.kind = CompletionItemKind.Function;

				let index = 1;
				this.func.args.forEach(element => {
					if(index != 1) args += ", ";
					if(element instanceof VarStruct)
						args += "${" + (index++) + ":" + element.name + "}";
				});

				complStr += args + ")";
				break;
				
		}
		

		

		complition.insertText = new SnippetString(complStr);
		return complition;
	}
	private getHoverText(): string {
		let func = this.func;
		let args = "";
		let first = true;
		func.args.forEach(element => {
			if(!first) args += ", ";
			if(element instanceof VarStruct)
				args += element.name;
			else if(element instanceof AssignOperator) {
				args += element.left.name + " = ";
				let right = element.right
				if(right instanceof IntStruct || right instanceof FloatStruct) {
					args += right.getValue();
				}
			}
			first = false;
		});
		return func.getTag() + ":" + func.name + "(" + args + ");";
	}
	set included(value: boolean) {
		this._included = value;
	}
	get included():boolean {
		return this._included;
	}
}
export class Environment {


	public readonly vars: Map<string, VarDefenitionStruct> = new Map<string, VarDefenitionStruct>;
	public readonly functions: Map<string, FunctionData> = new Map<string, FunctionData>;

	public readonly defines: Map<string, PreprocessorScrut> = new Map<string, PreprocessorScrut>;
	public readonly includes: Map<Range, Uri> = new Map<Range, Uri>;
	public retValue: string = "";

	public readonly enums: Map<string, EnumStruct> = new Map<string, EnumStruct>;
	public symbols: DocumentSymbol[] = [];


	constructor(public parnet: Environment | undefined = undefined) {
		if(parnet) {
			parnet.vars.forEach((value, key) => {
				this.vars.set(key, value);
			});
			parnet.defines.forEach((value, key) => {
				this.defines.set(key, value);
			});
			parnet.functions.forEach((value, key) => {
				this.functions.set(key, value);
			});
			parnet.enums.forEach((value, key) => {
				this.enums.set(key, value);
			});
		}
	}
	public extendEnv(pos: Range, uri: Uri, env: Environment) {
		this.includes.set(pos, uri);
		env.functions.forEach((element, key) => {
			element.included = true;
			this.functions.set(key, element);
		});
		env.defines.forEach((element, key) => {
			element.included = true;
			element.file = uri;
			this.defines.set(key, element);
		});
	}
	public extend(symbols: undefined | DocumentSymbol[] = undefined): Environment {
		let env = new Environment(this);
		if(symbols)
			env.symbols = symbols;
		return env;
	}
	public lookup(name: string) {
		var scope: Environment | undefined = this;
		while(scope) {
			if(scope.vars.has(name)) return scope;
			scope = scope.parnet;
		}
	}
	public get(name: string): VarDefenitionStruct {
		if(!this.vars.has(name)) throw new UndefinedVariable(name);
		let res = this.vars.get(name);
		if(!res)throw new UndefinedVariable(name);
		// res.used = true;
		this.vars.set(name, res);
		return res;
	}
	// public set(name: string, value: any = undefined) {
	// 	var scope = this.lookup(name);
	// 	if(!scope && this.parnet) 
	// 		throw new UndefinedVariable(name);
	// 	let ins = (scope || this);
	// 	let val: saveData | undefined = ins.vars.get(name);
	// 	if(!ins.vars.has(name) || !val)
	// 		throw new UndefinedVariable(name);
	// 	val.modifire.forEach(modifire => {
	// 		if(modifire == Modifires.const)
	// 			throw new CantAssignToConst();
	// 	});
	// 	if(value)
	// 		if(val && !isOneTag(val.type, value.type))
	// 			n ins.vars.set(name, val);
	// }throw new TypeMismatch(name, val.type, value.type);
		
	// 	val.value = value;
	// 	val.used = true;

	// 	retur
	public define(variable: VarDefenitionStruct) {
		let name = variable.name;
		if(this.vars.has(name)) 
			throw new SymbolAlredyDefined(name, variable.getPos());
		if(this.enums.has(name)) 
			throw new SymbolAlredyDefined(name, variable.getPos());
		if(this.functions.has(name)) 
			throw new SymbolAlredyDefined(name, variable.getPos());
		this.symbols.push(new DocumentSymbol(name, "", SymbolKind.Variable, variable.getPos(), variable.getPos()));
		// size.reverse();
		// let variable: saveData = {
		// 	type: type,
		// 	value: value,
		// 	modifire: modifire,
		// 	used: false,
		// 	definitionPos: pos,
		// 	size: size
		// }
		return this.vars.set(name, variable);
	}

	public defineEnum(en: EnumStruct) {
		let name = en.head.getValue();
		if(this.enums.has(name)) 
			throw new SymbolAlredyDefined(name, en.head.getPos());
		return this.enums.set(name, en);
	}
	public defineDef(exp: PreprocessorScrut) {
		let text = exp.code.getWhat();
		if(this.defines.has(text)) 
			throw new SymbolAlredyDefined(text, exp.code.getPos());
		
		return this.defines.set(text, exp);;
	}
	public getDefine(text: string): PreprocessorScrut {
		if(!this.defines.has(text)) throw new UndefinedVariable(text);
		let res = this.defines.get(text);
		if(!res)throw new UndefinedVariable(text);
		return res;
	}
	public getEnum(text: string): EnumStruct {
		if(!this.enums.has(text)) throw new UndefinedVariable(text);
		let res = this.enums.get(text);
		if(!res)throw new UndefinedVariable(text);
		return res;
	}
	public defineFunc(funct: FunctionDeclaration | FunctionImplementation) {
		let name = funct.name;
		if(this.vars.has(name)) 
			throw new SymbolAlredyDefined(name, funct.getPos());
		if(this.enums.has(name)) 
			throw new SymbolAlredyDefined(name, funct.getPos());
		if(this.functions.has(name)) {
			let alredy = this.getFunction(name);
			if(alredy instanceof FunctionDeclaration && funct instanceof FunctionDeclaration)
				throw new SymbolAlredyDefined(name, funct.getPos());
			if(alredy instanceof FunctionImplementation && funct instanceof FunctionDeclaration)
				throw new FunctionImplementationBeforeDeclaration(funct);
			if(alredy instanceof FunctionImplementation && funct instanceof FunctionImplementation)
				throw new FunctionAlreadyHaveImplementation(funct);
			if(alredy.func.getTag() != funct.getTag()) {
				throw new FunctionHeadDifferentFromPrototype(funct);
			}
		}
			

		let argStr = "";
		let first = true;
		// funct.args.forEach(element => {
		// 	argStr += (first ? "" : ", ") + element.type + ":" + element.name + (element.defaultValue ? (" = " + element.defaultValue) : "");
		// 	first = false;
		// });
		
		return this.functions.set(name, new FunctionData(funct));
	}
	public getFunction(name: string): FunctionData {
		if(!this.functions.has(name)) throw new UndefinedVariable(name);
		let res = this.functions.get(name);
		if(!res)throw new UndefinedVariable(name);
		return res;
	}
}