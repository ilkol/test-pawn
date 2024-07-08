import { Range, TextDocument } from "vscode";
import { PreprocessorDirective } from "./PreprocessorDirective";

export class Include extends PreprocessorDirective
{
	private readonly path: string;
	private readonly pathRange: Range;

	constructor(file: TextDocument, private readonly rest: string, startIndex: number, restIndex: number, endIndex: number) {
		super(file, startIndex, endIndex);

		this.path = this.preparePath();

		this.pathRange = new Range(
			file.positionAt(restIndex),
			file.positionAt(restIndex + rest.length)
		);
	}

	private preparePath(): string
	{
		const reg = /(?:\s*)([^\s]+)(?:\s+(.+))?/;
		const match = reg.exec(this.rest);

		if (match) {
			return match[1];
		} 
		return "";
	}
}