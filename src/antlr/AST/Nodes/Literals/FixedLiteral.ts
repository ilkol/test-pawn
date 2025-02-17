import { Tag } from "../Tag";
import { IVisitor } from "../../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";

export class FixedLiteral extends NumberLiteral<string>
{
	name = "Fixed число";
	constructor() {
		const tag = new Tag(["Real"]);

		super(tag);
	}

	public accept(visitor: IVisitor): void {

	}
	
}