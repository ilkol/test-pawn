import { Range } from "../../types";

export abstract class PreprocessorDirective
{
	public curStartIndex: number;
	public curEndIndex: number;

	constructor(public readonly range: Range, readonly startIndex: number, readonly endIndex: number) {
		this.curStartIndex = startIndex;
		this.curEndIndex = endIndex;
	}

	move(shift: number) {
		this.curStartIndex += shift;
		this.curEndIndex += shift;
	}

}