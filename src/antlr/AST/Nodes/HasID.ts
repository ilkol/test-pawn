import { Range } from "vscode";
import { ASTNode } from "./ASTNode";
import { IHasID } from "./IHasID";

export abstract class HasID extends ASTNode implements IHasID
{
	/**
	 * Текст идентификатора
	 */
	private _identifire: string = "";
	/**
	 * Позиция идентификатора
	 */
	private _idPos: Range = new Range(0,0,0,0);
	public constructor(instance: HasID|undefined = undefined)
	{
		super();
		if(instance) {
			this._identifire = instance._identifire;
			this._idPos = instance._idPos;
			this._pos = instance._pos;
		}
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