import { Range } from "../../../types";
import { PreprocessorDirective } from "../PreprocessorDirective";

interface UndefInfo {
	text: string;
	range: Range
}

export class Undef extends PreprocessorDirective
{
	readonly define: string;
	readonly defineRange: Range;
	

	constructor(range: Range, defineInfo: UndefInfo, startIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);

		this.define = defineInfo.text;
		this.defineRange = defineInfo.range;
	}
}