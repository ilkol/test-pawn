import { Tag } from "./Tag";

export class DefaultTag extends Tag
{
	name = "тэг целого числа";

	constructor() {
		super();
		this.id = "_";
		this._tags = ["_"];
	}
}