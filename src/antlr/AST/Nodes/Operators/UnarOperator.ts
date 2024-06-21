import { Expresion } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";

export class UnarOperator extends AbstractOperator
{
	name = "унарный операртор";

	public accept(visitor: IVisitor): void {
		visitor.visitUnarOperator(this);
	}

	private _value: Expresion | undefined;

	
	public get value() : Expresion | undefined {
		return this._value;
	}
	
	public set value(v: Expresion) {
		this._value = v;
	}
}