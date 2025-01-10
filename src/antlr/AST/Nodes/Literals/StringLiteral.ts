import { DefaultTag } from "../DefaultTag";
import { IVisitor } from "../../visitor/IVisitor";
import { Literal } from "./Literal";

export class StringLiteral extends Literal<string>
{
	name = "строка";
	constructor() {
		super();
		this._value = "";
	}

	public accept(visitor: IVisitor): void {
		visitor.visitStringLiteral(this);
	}
	
	
}