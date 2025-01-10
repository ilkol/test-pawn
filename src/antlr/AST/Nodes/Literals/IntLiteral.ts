import { DefaultTag } from "../DefaultTag";
import { Tag } from "../Tag";
import { IVisitor } from "../../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";

export class IntLiteral extends NumberLiteral<number>
{
	name = "целое число";
	constructor() {
		super(new DefaultTag());
	}

	public accept(visitor: IVisitor): void {
		visitor.visitIntLiteral(this);
	}
	
	
}