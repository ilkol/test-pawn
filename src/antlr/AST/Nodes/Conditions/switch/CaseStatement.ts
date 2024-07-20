import { IVisitor } from "../../../visitor/IVisitor";
import { CodeBlock } from "../../CodeBlock";
import { Expresion } from "../../Expresion";
import { Statement } from "../../Statement";
import { IfStatement } from "../IfStatement";

export class CaseStatement extends Statement
{
	public condition?: Expresion;
	public code?: CodeBlock | Statement;

	public accept(visitor: IVisitor): void {
		visitor.visitCaseStatement(this);
	}
	
}