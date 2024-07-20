import { IVisitor } from "../../../visitor/IVisitor";
import { CodeBlock } from "../../CodeBlock";
import { Expresion } from "../../Expresion";
import { Statement } from "../../Statement";
import { CaseStatement } from "./CaseStatement";
import { DefaultStatement } from "./DefaultStatement";

export class SwitchStatement extends Statement
{
	public condition?: Expresion;
	public readonly cases: CaseStatement[] = [];
    public default?: DefaultStatement;

	public accept(visitor: IVisitor): void {
		visitor.visitSwitchStatement(this);
	}
	
    
}