import { Range } from "vscode";
import { ASTNode } from "./ASTNode";
import { IHasID } from "./IHasID";

export abstract class HasID extends ASTNode implements IHasID
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
	
	public setIDPos(pos: Range): void
	public setIDPos(line: number, start: number, end: number): void
	public setIDPos(line: Range | number, start?: number, end?: number): void {
		if(typeof line == "number")
			this._idPos = new Range(line - 1, <number>start, line - 1, <number>end);
		else 
			this._idPos = line;
	}
}