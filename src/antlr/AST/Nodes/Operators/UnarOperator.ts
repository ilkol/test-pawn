import { Expresion } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";

export class UnarOperator extends AbstractOperator
{
	name = "унарный операртор";

	constructor(oper: AbstractOperator) {
		super(oper.operator);
		if(oper.expresion)
			this.expresion = oper.expresion;
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