import { Position, Range } from "vscode";
import { PPCommand } from "./PPComand";

export class Include extends PPCommand
{
	constructor(readonly path: string, range: Range, pos: Position) {
		super(range, pos);
	}
}