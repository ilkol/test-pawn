import { Tag } from "./Tag";

export interface IHasTag
{
	get tag() : Tag;
	set tag(v : Tag);
	get tagName(): string;
}