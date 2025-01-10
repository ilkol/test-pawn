import { IVisitor } from "../visitor/IVisitor";
import { DefaultTag } from "./DefaultTag";
import { AbstractStatement } from "./AbstractStatement";
import { Tag } from "./Tag";

export class Expresion extends AbstractStatement {
	name = "вырожение";

	private translateTag: boolean = false;
	private _tag: Tag = new DefaultTag();

	public get tag() : Tag {
		return this._tag;
	}

	

	public set tag(v : Tag) {
		this._tag = v;
	}

	public get isTaged(): boolean
	{
		return this.translateTag;
	}
	public set isTaged(v: true)
	{
		this.translateTag = v;
	}

	private exp: Expresion|undefined;

	public accept(visitor: IVisitor): void {
		if(this.exp) {
			this.exp?.accept(visitor);
			if(this.exp?.tag) {
				this.tag = this.exp.tag;
				
			}
			this.range = this.exp.pos;
		}
	}

	public get expresion(): Expresion|undefined {
		return this.exp;
	}
	public set expresion(v: Expresion) {
		this.exp = v;
	}

}