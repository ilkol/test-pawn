import { Serialization } from "../../../cache/Serialization";
import { Serializer } from "../../../cache/Serializer";
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


	
	public toJSON(): Serialization.Nodes.VarOrFunctionDeclaration {
		return {
			...super.toJSON(),
			tag: this.tag.toJSON(),
		};
	}

	protected prepareFromJSON(json: Serialization.Nodes.VarOrFunctionDeclaration): void {
		super.prepareFromJSON(json);
		this.tag = Serializer.deserialize<Tag>(json.tag);
	}
}