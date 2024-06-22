import { HasID } from "./HasID";

export abstract class Declaration extends HasID
{
	name = "декларация";
	public used: boolean = false;

	constructor(instance: Declaration|undefined = undefined) {
		super();
		if(instance) {
			this.idPos = instance.idPos;
		}
	}
}