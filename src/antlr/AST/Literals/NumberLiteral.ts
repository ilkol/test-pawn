import { IHasTag } from "../Nodes/IHasTag";
import { Tag } from "../Nodes/Tag";
import { Literal } from "./Literal";

export abstract class NumberLiteral extends Literal implements IHasTag
{
	name = "числовая константа";
	constructor(private _tag: Tag) {
		super();
	}

	get tag(): Tag {
		return this._tag;
	}
	set tag(v: Tag) {
		this._tag = v;
	}
	get tagName(): string {
		return this._tag.id;
	}

}