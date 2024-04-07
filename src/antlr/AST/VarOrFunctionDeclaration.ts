import { Declaration } from "./Declaration";
import { IHasTag } from "./IHasTag";
import { Tag } from "./Tag";

export abstract class VarOrFunctionDeclaration extends Declaration implements IHasTag
{
	private _tag: Tag | undefined;

	public get tag() : Tag | undefined {
		return this._tag;
	}
	
	public get tagName() : string {
		return this._tag ? this._tag.id : "";
	}
	

	public set tag(v : Tag | undefined) {
		this._tag = v;
	}
}