import { Expresion } from "./Expresion";
import { AbstractStatement } from "./AbstractStatement";
import { IVisitor } from "../visitor/IVisitor";

export class ReturnStatement extends AbstractStatement
{
	name = "оператор возвращения";
	
	private _value: Expresion | undefined;
	
	public accept(visitor: IVisitor): void {
		visitor.visitReturn(this);
	}
	
	
	public set value(v : Expresion) {
		this._value = v;
	}
	public get value(): Expresion | undefined {
		return this._value;
	}
}