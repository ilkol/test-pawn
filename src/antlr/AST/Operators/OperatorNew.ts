import { IContainsVars } from "../Nodes/IContainsVars";
import { Statement } from "../Nodes/Statement";
import { VarDeclaration } from "../Nodes/VarDeclaration";
import { IVisitor } from "../visitor/IVisitor";

export enum VariableModifire {
	const,
	stock,
	static
}

export class OperatorNew extends Statement implements IContainsVars<VarDeclaration>
{
	private readonly _variables: VarDeclaration[] = [];
	private _modifires: VariableModifire[] = [];

	public constructor() {
		super();
	}
	push(el: VarDeclaration): void {
		this._variables.push(el);
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