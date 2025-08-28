import { Range } from "../../types";
import { PreprocessorDirective } from "./PreprocessorDirective";

export class FileLineChange extends PreprocessorDirective {
	constructor(range: Range, public readonly hintMessage: string, startIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);
	}
}