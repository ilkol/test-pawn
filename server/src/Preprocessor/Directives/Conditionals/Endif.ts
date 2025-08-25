import { PreprocessorDirective } from "../PreprocessorDirective";
import { Range } from "../../../types";

export class Endif extends PreprocessorDirective
{
	constructor(range: Range, startIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);
	}
}