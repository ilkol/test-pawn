import { Position, Range, TextDocument } from "vscode";

export abstract class PreprocessorDirective
{
	public skiped: boolean = false;
	readonly range: Range;
	public curStartIndex: number;
	public curEndIndex: number;

	constructor(protected file: TextDocument, readonly startIndex: number, readonly endIndex: number) {
		this.range = new Range(
			file.positionAt(startIndex),
			file.positionAt(endIndex)
		);
		this.curStartIndex = startIndex;
		this.curEndIndex = endIndex;
	}

	move(shift: number) {
		this.curStartIndex += shift;
		this.curEndIndex += shift;
	}

}