import { Range, TextDocument } from "vscode";
import { PreprocessorDirective } from "./PreprocessorDirective";

export class Pragma extends PreprocessorDirective
{
	
	constructor(file: TextDocument, readonly rest: string, startIndex: number, restIndex: number, endIndex: number) {
		super(file, startIndex, endIndex);

		
	}
}