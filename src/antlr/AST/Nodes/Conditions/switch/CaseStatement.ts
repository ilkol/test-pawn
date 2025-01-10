import { IVisitor } from "../../../visitor/IVisitor";
import { CodeBlock } from "../../CodeBlock";
import { Expresion } from "../../Expresion";
import { AbstractStatement } from "../../AbstractStatement";

export class CaseStatement extends AbstractStatement
{
	public condition?: Expresion;
	public code?: CodeBlock | AbstractStatement;

	public accept(visitor: IVisitor): void {
		visitor.visitCaseStatement(this);
	}
	
}