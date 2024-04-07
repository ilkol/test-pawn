import { Tag } from "./Tag";

export interface IHasTag
{
	get tag() : Tag | undefined;
	set tag(v : Tag | undefined);
	get tagName(): string;
}