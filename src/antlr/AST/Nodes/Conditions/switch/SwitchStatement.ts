import { IVisitor } from "../../../visitor/IVisitor";
import { Expresion } from "../../Expresion";
import { AbstractStatement } from "../../AbstractStatement";
import { CaseStatement } from "./CaseStatement";
import { DefaultStatement } from "./DefaultStatement";

export class SwitchStatement extends AbstractStatement
{
	public condition?: Expresion;
	public readonly cases: CaseStatement[] = [];
    public default?: DefaultStatement;

	public accept(visitor: IVisitor): void {
		visitor.visitSwitchStatement(this);
	}
	
    
}