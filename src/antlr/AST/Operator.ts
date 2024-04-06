import { ASTNode } from "./ASTNode";
import { IVisitor } from "./visitor/IVisitor";

export class Operator extends ASTNode{
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	public constructor() {
		super();
	}
}