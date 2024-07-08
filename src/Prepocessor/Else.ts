import { TextDocument } from "vscode";
import { PreprocessorDirective } from "./PreprocessorDirective";

export class Else extends PreprocessorDirective
{
	constructor(file: TextDocument, startIndex: number, endIndex: number) {
		super(file, startIndex, endIndex);
	}
}