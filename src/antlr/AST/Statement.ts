import { ASTNode } from "./ASTNode";
import { IVisitor } from "./visitor/IVisitor";

export class Statement extends ASTNode
{
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	
}