import { FunctionDeclaration } from "../AST/Nodes/Functions/FunctionDeclaration";
import { Declaration } from "../AST/Nodes/Declaration";
import { VarDeclaration } from "../AST/Nodes/Variables/VarDeclaration";
import { IScope } from "./IScope";
import { Tag } from "../AST/Nodes/Tag";

export class Scope implements IScope
{
	protected _parent: IScope|undefined;
	protected _ids: Map<string, Declaration> = new Map<string, Declaration>();
	protected _functions: Map<string, FunctionDeclaration> = new Map();
	protected _variables: Map<string, VarDeclaration> = new Map();
	protected _tag: Tag | undefined;
	
	public constructor(IScope: IScope|undefined = undefined)
	{
		this._parent = IScope;
		this._tag = IScope?.returnTag;
	}
	get returnTag(): Tag | undefined {
		return this._tag;
	}
	set returnTag(v: Tag) {
		this._tag = v;
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

	public extend(): IScope {
		return new Scope(this);
	}

	private addIdent(id: Declaration) {
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
}