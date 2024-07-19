import { TextDocument } from "vscode";
import { PreprocessorDirective } from "./PreprocessorDirective";
import { Condition } from "./Condition";

export class Else extends PreprocessorDirective
{
	public elseif?: Condition;
	
	constructor(file: TextDocument, startIndex: number, endIndex: number) {
		super(file, startIndex, endIndex);
	}
}