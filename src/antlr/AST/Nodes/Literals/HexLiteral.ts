import { DefaultTag } from "../DefaultTag";
import { IVisitor } from "../../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";

export class HexLiteral extends NumberLiteral<string>
{
	name = "шеснадцетиричное число";
	constructor() {
		super(new DefaultTag());
	}

	public accept(visitor: IVisitor): void {
		// visitor.visitIntLiteral(this);
	}
	
	
}