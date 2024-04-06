import { Declaration } from "./Declaration";
import { IVisitor } from "./visitor/IVisitor";

export class FunctionDeclaration extends Declaration
{
	public accept(visitor: IVisitor): void {
		visitor.visitFunctionDeclaration(this);
	}
	public constructor() {
		super();
	}
}