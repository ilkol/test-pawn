import { Declaration } from "./Declaration";
import { DefaultTag } from "./DefaultTag";
import { IHasTag } from "./IHasTag";
import { Tag } from "./Tag";

export abstract class VarOrFunctionDeclaration extends Declaration implements IHasTag
{
	constructor(instance: VarOrFunctionDeclaration|undefined = undefined) {
		super(instance);
		if(instance) {
			this._tag = instance._tag;
		}
	}
	private _tag: Tag = new DefaultTag();

	public get tag() : Tag {
		return this._tag;
	}
	
	public get tagName() : string {
		return this._tag ? this._tag.id : "";
	}
	

	public set tag(v : Tag) {
		this._tag = v;
	}
}