import { Expresion } from "./Expresion";
import { Statement } from "./Statement";
import { IVisitor } from "./visitor/IVisitor";

export class ReturnStatement extends Statement
{
	private _value: Expresion | undefined;
	
	public accept(visitor: IVisitor): void {
		visitor.visitReturn(this);
	}
	
}