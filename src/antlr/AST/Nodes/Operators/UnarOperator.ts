import { Expression } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";
import { Tag } from "../Tag";
import { DefaultTag } from "../DefaultTag";

export class UnarOperator extends AbstractOperator
{
	name = "унарный операртор";

	constructor() {
		super();
	}

	public accept(visitor: IVisitor): void {
		visitor.visitUnarOperator(this);
	}
	
	public get value() : Expression | undefined {
		return this.expresion;
	}
	
	public set value(v: Expression) {
		this.expresion = v;
	}
	public get tag(): Tag {
		return this.expresion?.tag ?? new DefaultTag();
	}
	public set tag(v: Tag) {
		if(this.expresion) {
			this.expresion.tag = v;
		}
	}

}