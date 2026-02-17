import { FunctionDeclaration } from "../AST/Nodes/Functions/FunctionDeclaration";
import { Declaration } from "../AST/Nodes/Declaration";
import { VarDeclaration } from "../AST/Nodes/Variables/VarDeclaration";
import { IScope } from "./IScope";
import { Tag } from "../AST/Nodes/Tag";
import { AbstractOpenFile } from "../../AbstractOpenFile";
import { EnumDeclaration } from "../AST/Nodes/enum/EnumDeclaration";
import { EnumMember } from "../AST/Nodes/enum/EnumMember";
import { AbstractSymbol, Function, SymbolReferance } from "../../SymbolSystem/Symbols";
import { Range } from "../../types";

export class Scope implements IScope
{
	private _currentFunction: Function | undefined;

	/**
	 * Родительская область видимости
	 */
	protected _parent: IScope|undefined;
	/**
	 * Список всех идентификатор в области видимости
	 */
	protected _ids: Map<string, Declaration> = new Map<string, Declaration>();
	/**
	 * Объявленные функции
	 */
	protected _functions: Map<string, FunctionDeclaration> = new Map();
	/**
	 * Объявленные переменные
	 */
	protected _variables: Map<string, VarDeclaration> = new Map();
	/**
	 * Объявленные перечисления
	 */
	protected _enums: Map<string, EnumDeclaration> = new Map();
	
	public constructor(protected _file: AbstractOpenFile, private _range: Range, IScope: IScope|undefined = undefined)
	{
		this._parent = IScope;
	}
	includedScopes: IScope[] = [];
	currentSymbol: SymbolReferance | undefined;

	public extend(range: Range, newSymbol?: SymbolReferance | undefined): IScope {
		const scope =  new Scope(this._file, range, this);
		scope.currentSymbol = newSymbol ?? this.currentSymbol;
		return scope;
	}

	public get parent(): IScope|undefined {
		return this._parent;
	}

	get currentFunction(): Function | undefined {
		return this._currentFunction;
	}
	set currentFunction(value: Function | undefined) {
		this._currentFunction = value;
	}

	get range(): Range {
		return this._range;
	}
	set range(value: Range) {
		this._range = value;
	}


	protected _symbols: Map<string, AbstractSymbol> = new Map();
	add(symbol: AbstractSymbol) {
		this._symbols.set(symbol.name, symbol);
	}
	findSymbol(name: string): AbstractSymbol | undefined {
		return this._symbols.get(name) ?? this.parent?.findSymbol(name); 
	}
}