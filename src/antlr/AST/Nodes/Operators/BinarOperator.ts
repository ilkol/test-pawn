import { Expresion } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";
import { Variable } from "../Variable";

export class BinarOperator extends AbstractOperator
{
	name = "бинарный оператор";
	
	constructor() {
		super();	
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