import { IVisitor } from "../../../visitor/IVisitor";
import { CodeBlock } from "../../CodeBlock";
import { AbstractStatement } from "../../AbstractStatement";

export class DefaultStatement extends AbstractStatement
{
	public code?: CodeBlock | AbstractStatement;

	public accept(visitor: IVisitor): void {
		visitor.visitDefaultSwitchStatement(this);
	}
	
}