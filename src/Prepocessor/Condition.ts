import { Position, Range } from "vscode";
import { PPCommand } from "./PPComand";

export class Condition extends PPCommand
{
	public elsePos: Range | undefined;

	constructor(range: Range, pos: Position, readonly text: string, readonly condition: boolean)
	{
		super(range, pos);
	}

	
}