import { HasID } from "./HasID";

export abstract class Declaration extends HasID
{
	name = "декларация";
	public used: boolean = false;

	constructor(instance: Declaration|undefined = undefined) {
		super(instance);
		if(instance) {
			this.idPos = instance.idPos;
		}
	}
}