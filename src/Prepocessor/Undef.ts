import { Range, TextDocument } from "vscode";
import { PreprocessorDirective } from "./PreprocessorDirective";

export class Undef extends PreprocessorDirective
{
	readonly define: string;
	readonly defineRange: Range;
	

	constructor(file: TextDocument, private readonly rest: string, startIndex: number, restIndex: number, endIndex: number) {
		super(file, startIndex, endIndex);

		this.define = this.prepareDef();

		const end = restIndex + this.define.length;
		this.defineRange = new Range(
			file.positionAt(end - this.define.length),
			file.positionAt(end)
		);
	}

	private prepareDef(): string
	{
		const reg = /\w+/;
		const match = reg.exec(this.rest);

		if (match) {
			return match[0];
		} 
		return "";
	}
}