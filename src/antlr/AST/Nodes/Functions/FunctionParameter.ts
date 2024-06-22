import { VarDeclaration } from "../VarDeclaration";
import { IVisitor } from "../../visitor/IVisitor";
import { Variable } from "../Variable";
import { RightValue } from "../RightValue";

export class FunctionParameter extends RightValue
{
	name = "параметр функции";
	
	private _val: RightValue;

	constructor(instance: RightValue) {
		super();
		this._val = instance;
	}

	public accept(visitor: IVisitor): void {
		visitor.visitFunctionParameter(this);
	}

	get val(): RightValue {
		return this._val;
	}
}