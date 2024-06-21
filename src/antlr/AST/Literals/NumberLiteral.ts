import { IHasTag } from "../Nodes/IHasTag";
import { Tag } from "../Nodes/Tag";
import { Literal } from "./Literal";

export abstract class NumberLiteral extends Literal
{
	name = "числовая константа";
	constructor(tag: Tag) {
		super();
		this.tag = tag;
	}

}