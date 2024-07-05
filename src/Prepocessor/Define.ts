import { Position, Range } from "vscode";
import { PPCommand } from "./PPComand";

export class Define extends PPCommand
{
	constructor(readonly patterntext: string, readonly pattern: RegExp, readonly replace: string, range: Range, pos: Position) {
		super(range, pos);
	}
}