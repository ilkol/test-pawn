import { ASTNode } from "./ASTNode";
import { IVisitor } from "./visitor/IVisitor";
import { Statement } from "./Statement";

export class Statements extends ASTNode {
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	public constructor(private statements: Statement[] = []) {
		super();
	}
}