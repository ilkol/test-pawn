import { HasID } from "./HasID";

export abstract class Declaration extends HasID
{
	name = "декларация";
	public used: boolean = false;
	protected _stocked: boolean = false;
	protected _native: boolean = false;

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
	public get native(): boolean {
		return this._native;
	}
	public set native(v: true) {
		this._native = v;
	}
}