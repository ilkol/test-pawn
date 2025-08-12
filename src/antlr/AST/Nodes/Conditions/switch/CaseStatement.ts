import { IVisitor } from "../../../visitor/IVisitor";
import { CodeBlock } from "../../CodeBlock";
import { Expression } from "../../Expresion";
import { AbstractStatement } from "../../AbstractStatement";

export class CaseStatement extends AbstractStatement
{
	public condition?: Expression;
	public code?: CodeBlock | AbstractStatement;

	public accept(visitor: IVisitor): void {
		visitor.visitCaseStatement(this);
	}
	
}