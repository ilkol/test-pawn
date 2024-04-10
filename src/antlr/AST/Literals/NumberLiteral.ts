import { IHasTag } from "../IHasTag";
import { Tag } from "../Tag";
import { Literal } from "./Literal";

export abstract class NumberLiteral extends Literal implements IHasTag
{
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