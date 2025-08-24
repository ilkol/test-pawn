import { ASTNode } from "./ASTNode";
import { HasID } from "./HasID";
import { IVisitor } from "../visitor/IVisitor";
import { Serialization } from "../../../cache/Serialization";

export class Tag extends HasID
{
	name = "тэг";
	
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	constructor(tags: string[] = []) {
		super();
		this._tags = tags;
	}

	protected _tags: string[] = [];

	public addTag(tagName: string) {
		this._tags.push(tagName);
	}
	public get tags(): string[]
	{
		return this._tags;
	}
	public set tags(tags: string[])
	{
		this._tags = tags;
	}
	public get tagString(): string
	{
		if(this._tags.length === 1) {
			return this._tags[0];
		}
		return "{" + this._tags.map(el => el).join(", ") + "}";
	}

	toJSON(): Serialization.Nodes.Tag {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.Tag,
			tags: this._tags,
		};
	}
	static fromJSON(json: Serialization.Nodes.Tag): Tag {
		const instance = new Tag(json.tags);
		instance.prepareFromJSON(json);
		return instance;
	}
}