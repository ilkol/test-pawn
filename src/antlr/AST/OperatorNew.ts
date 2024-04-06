import { ASTNode } from "./ASTNode";
import { VarDeclaration } from "./VarDeclaration";
import { IVisitor } from "./visitor/IVisitor";

export class OperatorNew extends ASTNode
{
	private readonly _variables: VarDeclaration[] = [];

	public constructor() {
		super();
	}
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	
	public get vars() : VarDeclaration[] {
		return this._variables;
	}
}