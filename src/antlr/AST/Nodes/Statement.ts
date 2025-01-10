import { IVisitor } from "../visitor/IVisitor";
import { AbstractStatement } from "./AbstractStatement";
import { ASTNode } from "./ASTNode";

export class Statement extends ASTNode
{
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	public statemnent?: AbstractStatement;
	name = "утверждение";	
}