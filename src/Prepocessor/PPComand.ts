import { Position, Range } from "vscode";

export abstract class PPCommand
{
	constructor(readonly range: Range, readonly pos: Position) {

	}
}