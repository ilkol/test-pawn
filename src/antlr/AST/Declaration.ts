import { Range } from "vscode";
import { ASTNode } from "./ASTNode";

export abstract class Declaration extends ASTNode
{
	private _identifire: string = "";
	private _idPos: Range = new Range(0,0,0,0);
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

	public get idPos() : Range {
		return this._idPos;
	}
	
	public setIDPos(line:number, start: number, end: number) {
		this._idPos = new Range(line - 1, start, line - 1, end);
	}	
}