import { HasID } from "./HasID";

export abstract class Declaration extends HasID
{
	name = "декларация";
	public used: boolean = false;
	protected _stocked: boolean = false;

	constructor(instance: Declaration|undefined = undefined) {
		super(instance);
		if(instance) {
			this.idPos = instance.idPos;
		}
	}

	public get stock(): boolean {
		return this._stocked;
	}
	public set stock(v: true) {
		this._stocked = v;
	}
}