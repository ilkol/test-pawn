import { ASTNode } from "./ASTNode";
import { Declaration } from "./Declaration";
import { IVisitor } from "../visitor/IVisitor";

export class Declarations extends ASTNode 
{
	name = "объявления";

	public accept(visitor: IVisitor): void {
		visitor.visitDeclarations(this);
	}
	private readonly _declarations: Declaration[] = [];
	public constructor()
	{
		super();
	}
	public get declarations() : Declaration[] {
		return this._declarations;
	}
	
}