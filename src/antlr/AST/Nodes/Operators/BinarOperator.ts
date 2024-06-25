import { Expresion } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";

export class BinarOperator extends AbstractOperator
{
	name = "бинарный оператор";
	
	constructor(oper: AbstractOperator) {
		super(oper.operator);
		if(oper.expresion)
			this.expresion = oper.expresion;
	}

	public accept(visitor: IVisitor): void {
		visitor.visitBinarOperator(this);
	}
	private _left: Expresion | undefined;

	
	public get left() : Expresion | undefined {
		return this._left;
	}
	
	public get right() : Expresion | undefined {
		return this.expresion;
	}

	public set left(v: Expresion) {
		this._left = v;
	}
	
	public set right(v: Expresion) {
		this.expresion = v;
	}
}