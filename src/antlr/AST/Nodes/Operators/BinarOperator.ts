import { Expresion } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";

export class BinarOperator extends AbstractOperator
{
	public accept(visitor: IVisitor): void {
		visitor.visitBinarOperator(this);
	}

	private _left: Expresion | undefined;
	private _right: Expresion | undefined;

	
	public get left() : Expresion | undefined {
		return this._left;
	}
	
	public get right() : Expresion | undefined {
		return this._right;
	}

	public set left(v: Expresion) {
		this._left = v;
	}
	
	public set right(v: Expresion) {
		this._right = v;
	}
}