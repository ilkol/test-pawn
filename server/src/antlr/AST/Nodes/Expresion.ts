import { IVisitor } from "../visitor/IVisitor";
import { DefaultTag } from "./DefaultTag";
import { AbstractStatement } from "./AbstractStatement";
import { Tag } from "./Tag";
import { Serialization } from "../../../cache/Serialization";
import { IHasTag } from "./IHasTag";
import { MayBeTag } from "../../../SymbolSystem/Symbols/MayBeTag";

export class Expression extends AbstractStatement implements IHasTag {
	name = "вырожение";

	private translateTag: boolean = false;
	private _tag: Tag = new DefaultTag();
	protected exp: Expression | undefined = undefined;
	public inferredTag: MayBeTag | null = null;

	public constExpr: number = 0;
	private _isConstExpr: boolean = false;

	public set isConstExpr(v: boolean) {
		this._isConstExpr = v;
	}

	public get isConstExpr(): boolean {
		return this._isConstExpr;
	}
	public isLValue: boolean = false;

	public get tag(): Tag {
		return this._tag;
	}

	public set tag(v: Tag) {
		this._tag = v;
	}

	public get isTaged(): boolean {
		return this.translateTag;
	}
	public set isTaged(v: true) {
		this.translateTag = v;
	}


	public accept(visitor: IVisitor): void {
		if (this.exp) {
			this.exp?.accept(visitor);
			this.range = this.exp.pos;
		}
	}

	public get expresion(): Expression | undefined {
		return this.exp;
	}
	public set expresion(v: Expression) {
		this.exp = v;
	}

	toJSON(): Serialization.Nodes.Expression {
		return {
			...super.toJSON(),
			tag: this._tag.toJSON(),
			translateTag: this.translateTag,
			expression: this.exp?.toJSON(),
		};
	}

	static fromJSON(json: Serialization.Nodes.Expression): Expression {
		const instance = new Expression();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.Expression): void {
		super.prepareFromJSON(json);
		this._tag = Serialization.Deserialize.object(json.tag);
		this.exp = Serialization.Deserialize.object(json.expression);
		this.translateTag = json.translateTag;
	}
}