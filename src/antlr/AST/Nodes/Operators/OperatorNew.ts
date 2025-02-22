import { IContainsVars } from "../IContainsVars";
import { AbstractStatement } from "../AbstractStatement";
import { IVisitor } from "../../visitor/IVisitor";
import { VarDeclaration } from "../Variables/VarDeclaration";

export enum VariableModifire {
	const,
	stock,
	static,
	public
}

export class OperatorNew extends AbstractStatement implements IContainsVars<VarDeclaration>
{
	name = "операртор декларации";

	private readonly _variables: VarDeclaration[] = [];
	private _modifires: VariableModifire[] = [];

	public constructor() {
		super();
	}
	push(el: VarDeclaration): void {
		this._variables.push(el);
		el.modifires = this.modifires;
	}
	public accept(visitor: IVisitor): void {
		visitor.visitOperatorNew(this);
	}
	
	public get vars() : VarDeclaration[] {
		return this._variables;
	}

	public addModifire(modifire: VariableModifire): void {
		this._modifires.push(modifire);
	}

	public get modifires() : VariableModifire[] {
		return this._modifires;
	}
}