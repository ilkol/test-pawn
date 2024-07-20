import { IVisitor } from "../../visitor/IVisitor";
import { CodeBlock } from "../CodeBlock";
import { Expresion } from "../Expresion";
import { Statement } from "../Statement";

export class IfStatement extends Statement
{
	public condition?: Expresion;
	public else?: CodeBlock | Statement;

	public accept(visitor: IVisitor): void {
		visitor.visitItStatement(this);
	}
	
}