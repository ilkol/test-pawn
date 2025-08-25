import { PreprocessorDirective } from "../PreprocessorDirective";
import { Condition } from "./Condition";
import { Range } from "../../../types";

export class Else extends PreprocessorDirective
{
	public elseif?: Condition;
	
	constructor(range: Range, startIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);
	}
}