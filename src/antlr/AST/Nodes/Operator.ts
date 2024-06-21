import { ASTNode } from "./ASTNode";
import { IVisitor } from "../visitor/IVisitor";

export class Operator extends ASTNode{
	name = "операртор";

	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	public constructor() {
		super();
	}
}