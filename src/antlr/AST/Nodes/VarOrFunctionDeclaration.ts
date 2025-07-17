import { Declaration } from "./Declaration";
import { DefaultTag } from "./DefaultTag";
import { IHasTag } from "./IHasTag";
import { Tag } from "./Tag";

export abstract class VarOrFunctionDeclaration extends Declaration implements IHasTag
{
	private _tag: Tag = new DefaultTag();


	constructor(instance: VarOrFunctionDeclaration|undefined = undefined) {
		super(instance);
		if(instance) {
			this._tag = instance._tag;
		}
	}

	public get tag() : Tag {
		return this._tag;
	}

	public set tag(v : Tag) {
		this._tag = v;
	}


	
	public toJSON() {
		return {
			...super.toJSON(),
			tag: this.tag.toJSON(),
		};
	}
}