import { ASTNode } from "./AST";

export abstract class Declaration extends ASTNode
{
	private _identifire: string = "";
	public constructor()
	{
		super();
	}
	
	public get id() : string {
		return this._identifire;
	}
	
	public set id(v : string) {
		this._identifire = v;
	}
	
}