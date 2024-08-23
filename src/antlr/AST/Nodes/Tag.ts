import { ASTNode } from "./ASTNode";
import { HasID } from "./HasID";
import { IVisitor } from "../visitor/IVisitor";

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
}