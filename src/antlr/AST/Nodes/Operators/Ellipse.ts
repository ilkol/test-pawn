import { IVisitor } from "../../visitor/IVisitor";
import { ASTNode } from "../ASTNode";
import { DefaultTag } from "../DefaultTag";
import { IHasTag } from "../IHasTag";
import { Tag } from "../Tag";

export class Ellipse extends ASTNode implements IHasTag
{
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	private _tag: Tag = new DefaultTag();

	get tag(): Tag {
		return this._tag;
	}
	set tag(v: Tag) {
		this._tag = v;
	}

}