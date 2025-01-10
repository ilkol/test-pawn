import { Tag } from "../Tag";
import { IVisitor } from "../../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";

export class FloatLiteral extends NumberLiteral<number>
{
	name = "вещественное число";
	constructor() {
		const tag = new Tag(["Float"]);
		tag.id = "Float";

		super(tag);
	}

	public accept(visitor: IVisitor): void {

	}
	
}