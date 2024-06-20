import { DefaultTag } from "../Nodes/DefaultTag";
import { Tag } from "../Nodes/Tag";
import { IVisitor } from "../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";

export class IntLiteral extends NumberLiteral
{
	private _value: number = 0;
	constructor() {
		super(new DefaultTag());
	}

	public accept(visitor: IVisitor): void {
		visitor.visitIntLiteral(this);
	}

	
	public get value() : number {
		return this._value;
	}
	public set value(v : number) {
		this._value = v;
	}
	
	
}