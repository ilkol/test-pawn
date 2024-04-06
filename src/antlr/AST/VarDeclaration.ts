import { Declaration } from "./Declaration";
import { IVisitor } from "./visitor/IVisitor";

export class VarDeclaration extends Declaration
{
	public accept(visitor: IVisitor): void {
		visitor.visitVariableDeclaration(this);
	}
	public constructor() {
		super();
	}
}