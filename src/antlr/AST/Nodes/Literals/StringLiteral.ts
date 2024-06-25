import { DefaultTag } from "../DefaultTag";
import { IVisitor } from "../../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";

export class StringLiteral extends NumberLiteral
{
	name = "строка";
	private _value: string = "";
	constructor() {
		super(new DefaultTag());
	}

	public accept(visitor: IVisitor): void {
		visitor.visitStringLiteral(this);
	}

	
	public get value() : string {
		return this._value;
	}
	public set value(v : string) {
		this._value = v;
	}
	
	
}