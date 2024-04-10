import { DefaultTag } from "../DefaultTag";
import { Tag } from "../Tag";
import { IVisitor } from "../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";

export class IntLiteral extends NumberLiteral
{
	private _value: number = 0;
	constructor() {
		super(new DefaultTag());
	}

	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}

	
	public get value() : number {
		return this._value;
	}
	public set value(v : number) {
		this._value = v;
	}
	
	
}