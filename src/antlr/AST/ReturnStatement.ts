import { Expresion } from "./Expresion";
import { Statement } from "./Statement";
import { IVisitor } from "./visitor/IVisitor";

export class ReturnStatement extends Statement
{
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