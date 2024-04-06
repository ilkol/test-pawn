import { ASTNode } from "./AST";
import { Declaration } from "./Declaration";

export class Declarations extends ASTNode
{
	private readonly _declarations: Declaration[] = [];
	public constructor()
	{
		super();
	}

	
	
	public get declarations() : Declaration[] {
		return this._declarations;
	}
	
}