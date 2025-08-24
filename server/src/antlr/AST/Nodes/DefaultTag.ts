import { Tag } from "./Tag";

export class DefaultTag extends Tag
{
	constructor() {
		super();
		this.id = "_";
		this._tags = ["_"];
	}
}