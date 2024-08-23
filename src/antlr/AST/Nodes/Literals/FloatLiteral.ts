import { Tag } from "../Tag";
import { IVisitor } from "../../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";

export class FloatLiteral extends NumberLiteral
{
	name = "вещественное число";
	private _value: number = 0;
	constructor() {
		const tag = new Tag(["Float"]);
		tag.id = "Float";

		super(tag);
	}

	public accept(visitor: IVisitor): void {

	}

	
	public get value() : number {
		return this._value;
	}
	public set value(v : number) {
		this._value = v;
	}
	
	
}