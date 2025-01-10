import { IHasTag } from "../IHasTag";
import { Tag } from "../Tag";
import { Literal } from "./Literal";

export abstract class NumberLiteral<T> extends Literal<T>
{
	name = "числовая константа";
	constructor(tag: Tag) {
		super();
		this.tag = tag;
	}

}