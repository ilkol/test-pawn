import { ASTNode } from "./ASTNode";
import { HasID } from "./HasID";
import { IVisitor } from "../visitor/IVisitor";

export class Tag extends HasID
{
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
}