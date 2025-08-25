import { Range } from "../../types";
import { PreprocessorDirective } from "./PreprocessorDirective";

export class Pragma extends PreprocessorDirective
{
	
	constructor(range: Range, readonly rest: string, startIndex: number, restIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);

		
	}
}