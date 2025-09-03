import { FunctionDeclaration } from "../AST/Nodes/Functions/FunctionDeclaration";
import { Declaration } from "../AST/Nodes/Declaration";
import { VarDeclaration } from "../AST/Nodes/Variables/VarDeclaration";
import { IScope } from "./IScope";
import { Tag } from "../AST/Nodes/Tag";
import { AbstractOpenFile } from "../../AbstractOpenFile";
import { EnumDeclaration } from "../AST/Nodes/enum/EnumDeclaration";
import { EnumMember } from "../AST/Nodes/enum/EnumMember";
import { SymbolReferance } from "../../SymbolSystem/Symbols";

export class Scope implements IScope
{
	public static currentFunction: FunctionDeclaration;

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
	
	public constructor(protected _file: AbstractOpenFile, IScope: IScope|undefined = undefined)
	{
		this._parent = IScope;
	}
	currentSymbol: SymbolReferance | undefined;
	addEnum(variable: EnumDeclaration): void {
		this.addIdent(variable);
		this._enums.set(variable.id, variable);
	}

	get enums() {
		return this._enums;
	}

	addEnumMember(variable: EnumMember): void {
		this.addVar(variable);
	}
	public findVar(id: string): VarDeclaration | undefined {
		let currentScope: IScope | undefined = this;
        while (currentScope !== undefined) {
            if (currentScope.variables().has(id)) {
                return currentScope.variables().get(id)!;
            }
            currentScope = currentScope.parent;
        }
        return undefined;
	}
	public findFunction(id: string): FunctionDeclaration | undefined {
		let currentScope: IScope | undefined = this;
        while (currentScope !== undefined) {
            if (currentScope.functions().has(id)) {
                return currentScope.functions().get(id)!;
            }
            currentScope = currentScope.parent;
        }
        return undefined;
	}
	public identifires(): Map<string, Declaration> {
		return this._ids;
	}
	public functions(): Map<string, FunctionDeclaration> {
		return this._functions;
	}
	public variables(): Map<string, VarDeclaration> {
		return this._variables;
	}
	public find(id: string): Declaration | undefined {
		let currentScope: IScope | undefined = this;
        while (currentScope !== undefined) {
            if (currentScope.identifires().has(id)) {
                return currentScope.identifires().get(id)!;
            }
            currentScope = currentScope.parent;
        }
        return undefined;
	}

	public extend(newSymbol?: SymbolReferance | undefined): IScope {
		const scope =  new Scope(this._file, this);
		scope.currentSymbol = newSymbol ?? this.currentSymbol;
		return scope;
	}

	private addIdent(id: Declaration) {
		id.importFile = this._file;
		this._ids.set(id.id, id);
	}
	public addVar(variable: VarDeclaration) {
		this.addIdent(variable);
		this._variables.set(variable.id, variable);
	}
	public addFunction(func: FunctionDeclaration) {
		this.addIdent(func);
		this._functions.set(func.id, func);
	}

	public get parent(): IScope|undefined {
		return this._parent;
	}

	get currenFunction(): FunctionDeclaration {
		return Scope.currentFunction;
	}
	set currenFunction(value: FunctionDeclaration) {
		Scope.currentFunction = value;
	}
}