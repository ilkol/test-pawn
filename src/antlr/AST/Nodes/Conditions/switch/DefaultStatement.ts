import { IVisitor } from "../../../visitor/IVisitor";
import { CodeBlock } from "../../CodeBlock";
import { Statement } from "../../Statement";

export class DefaultStatement extends Statement
{
	public code?: CodeBlock | Statement;

	public accept(visitor: IVisitor): void {
		visitor.visitDefaultSwitchStatement(this);
	}
	
}