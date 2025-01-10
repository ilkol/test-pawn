import { IVisitor } from "../../visitor/IVisitor";
import { CodeBlock } from "../CodeBlock";
import { Expresion } from "../Expresion";
import { AbstractStatement } from "../AbstractStatement";

export class IfStatement extends AbstractStatement
{
	public code?: AbstractStatement;
	public condition?: Expresion;
	public else?: CodeBlock | AbstractStatement;

	public accept(visitor: IVisitor): void {
		visitor.visitItStatement(this);
	}
	
}