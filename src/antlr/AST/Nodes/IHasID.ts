import { Range } from "vscode";

export interface IHasID
{
	get id() : string;
	
	set id(v : string);

	get idPos() : Range;
	
	setIDPos(pos: Range): void
	setIDPos(line: number, start: number, end: number): void
	setIDPos(line: Range | number, start?: number, end?: number): void;
}