import { IVisitor } from "../../visitor/IVisitor";
import { CodeBlock } from "../CodeBlock";
import { Expression } from "../Expresion";
import { AbstractStatement } from "../AbstractStatement";

export class IfStatement extends AbstractStatement
{
	public code?: AbstractStatement;
	public condition?: Expression;
	public else?: CodeBlock | AbstractStatement;

	public accept(visitor: IVisitor): void {
		visitor.visitItStatement(this);
	}
	
}