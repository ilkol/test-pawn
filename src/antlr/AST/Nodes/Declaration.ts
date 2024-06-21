import { HasID } from "./HasID";

export abstract class Declaration extends HasID
{
	name = "декларация";
	public used: boolean = false;
}