import { PreprocessorDirective } from "./PreprocessorDirective";
import { Range } from "../../types";

export class Endinput extends PreprocessorDirective
{
	constructor(range: Range, startIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);
	}
}