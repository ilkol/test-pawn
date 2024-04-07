import { Expresion } from "../Expresion";
import { IVisitor } from "../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";

export abstract class BinarOperator extends AbstractOperator
{
	public accept(visitor: IVisitor): void {
		visitor.visitBinarOperator(this);
	}

	private _left: Expresion | undefined;
	private _right: Expresion | undefined;

	
	public get left() : Expresion | undefined {
		return this.left;
	}
	
	public get right() : Expresion | undefined {
		return this._right;
	}
	
}