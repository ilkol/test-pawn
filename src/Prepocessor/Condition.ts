import { Position, Range } from "vscode";
import { PPCommand } from "./PPComand";

export class Condition extends PPCommand
{
	public elsePos: Range | undefined;
	public elseIndex: number | undefined;
	public startIndex: number | undefined;

	constructor(range: Range, pos: Position, readonly text: string, readonly condition: boolean)
	{
		super(range, pos);
	}

	
}