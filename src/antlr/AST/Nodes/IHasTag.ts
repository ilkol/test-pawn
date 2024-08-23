import { Tag } from "./Tag";

export interface IHasTag
{
	/**
	 * Тэг
	 */
	get tag() : Tag;
	/**
	 * Тэг
	 */
	set tag(v : Tag);
}