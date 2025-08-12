import { Expression } from "./Expresion";
import { AbstractStatement } from "./AbstractStatement";
import { IVisitor } from "../visitor/IVisitor";

export class ReturnStatement extends AbstractStatement
{
	name = "оператор возвращения";
	
	private _value: Expression | undefined;
	
	public accept(visitor: IVisitor): void {
		visitor.visitReturn(this);
	}
	
	
	public set value(v : Expression) {
		this._value = v;
	}
	public get value(): Expression | undefined {
		return this._value;
	}
}