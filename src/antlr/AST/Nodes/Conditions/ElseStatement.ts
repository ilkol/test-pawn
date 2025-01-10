import { IVisitor } from "../../visitor/IVisitor";
import { AbstractStatement } from "../AbstractStatement";
import { ASTNode } from "../ASTNode";

export class ElseStatement extends ASTNode
{
	public code?: AbstractStatement;

	public accept(visitor: IVisitor): void {
		throw new Error("Это не должно было случится");
	}
	
}