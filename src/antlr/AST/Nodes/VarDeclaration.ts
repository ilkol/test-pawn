import { FunctionParameter } from "./Functions/FunctionParameter";
import { IContainsVars } from "./IContainsVars";
import { VariableModifire } from "./Operators/OperatorNew";
import { VarOrFunctionDeclaration } from "./VarOrFunctionDeclaration";
import { IVisitor } from "../visitor/IVisitor";

export class VarDeclaration extends VarOrFunctionDeclaration
{
	private _modifires: VariableModifire[] = [];


	public accept(visitor: IVisitor): void {
		visitor.visitVariableDeclaration(this);
	}
	public constructor() {
		super();
	}
	
	public get modifires() : VariableModifire[] {
		return this._modifires;
	}
	
	public set modifires(v : VariableModifire[]) {
		this._modifires = v;
	}

	public get isConstant(): boolean {
		return this._modifires.find(el => el == VariableModifire.const) ? true : false;
	}
	
}