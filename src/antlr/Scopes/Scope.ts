import { FunctionDeclaration } from "../AST/Nodes/Functions/FunctionDeclaration";
import { IHasID } from "../AST/Nodes/IHasID";
import { IHasTag } from "../AST/Nodes/IHasTag";
import { VarDeclaration } from "../AST/Nodes/VarDeclaration";
import { IScope } from "./IScope";

export class Scope implements IScope
{
	protected parent: Scope|undefined;
	protected _ids: Map<string, IHasID> = new Map<string, IHasID>();
	protected _functions: Map<string, FunctionDeclaration> = new Map();
	protected _variables: Map<string, VarDeclaration> = new Map();
	
	private constructor(scope: Scope)
	{
		this.parent = scope;
	}
	public findVar(id: string): VarDeclaration | undefined {
		let currentScope: Scope | undefined = this;
        while (currentScope !== undefined) {
            if (currentScope._variables.has(id)) {
                return currentScope._variables.get(id)!;
            }
            currentScope = currentScope.parent;
        }
        return undefined;
	}
	public findFunction(id: string): FunctionDeclaration | undefined {
		let currentScope: Scope | undefined = this;
        while (currentScope !== undefined) {
            if (currentScope._functions.has(id)) {
                return currentScope._functions.get(id)!;
            }
            currentScope = currentScope.parent;
        }
        return undefined;
	}
	public functions(): Map<string, FunctionDeclaration> {
		return this._functions;
	}
	public variables(): Map<string, VarDeclaration> {
		return this._variables;
	}
	public find(id: string): IHasID | undefined {
		let currentScope: Scope | undefined = this;
        while (currentScope !== undefined) {
            if (currentScope._ids.has(id)) {
                return currentScope._ids.get(id)!;
            }
            currentScope = currentScope.parent;
        }
        return undefined;
	}

	public extend(): IScope {
		return new Scope(this);
	}

	private addIdent(id: IHasID) {
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

	 
}