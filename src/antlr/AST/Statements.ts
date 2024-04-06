import { ASTNode } from "./AST";
import { Statement } from "./Statement";

export class Statements extends ASTNode {
	public constructor(private statements: Statement[] = []) {
		super();
	}
}