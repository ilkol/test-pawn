import { Expresion } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";

export class UnarOperator extends AbstractOperator
{
	name = "унарный операртор";

	constructor() {
		super();
	}

	public accept(visitor: IVisitor): void {
		visitor.visitUnarOperator(this);
	}
	
	public get value() : Expresion | undefined {
		return this.expresion;
	}
	
	public set value(v: Expresion) {
		this.expresion = v;
	}
}