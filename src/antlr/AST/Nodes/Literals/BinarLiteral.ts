import { DefaultTag } from "../DefaultTag";
import { IVisitor } from "../../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";

export class BinarLiteral extends NumberLiteral<string>
{
	name = "довичное число";
	constructor() {
		super(new DefaultTag());
	}

	public accept(visitor: IVisitor): void {
		// visitor.visitIntLiteral(this);
	}
	
	
}