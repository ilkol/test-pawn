import { TextDocument } from "vscode";
import { PreprocessorDirective } from "./PreprocessorDirective";

export class Endinput extends PreprocessorDirective
{
	constructor(file: TextDocument, startIndex: number, endIndex: number) {
		super(file, startIndex, endIndex);
	}
}