import { Range } from "vscode";
import { IVisitor } from "../../visitor/IVisitor";
import { RightValue } from "../RightValue";
import { Tag } from "../Tag";

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

	get tag(): Tag
	{
		return this._val.tag;
	}
	get pos(): Range
	{
		return this._val.pos;
	}
}