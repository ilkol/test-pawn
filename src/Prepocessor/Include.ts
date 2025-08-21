import { Range, TextDocument, Uri } from "vscode";
import { PreprocessorDirective } from "./PreprocessorDirective";

export enum IncludeType {
	system,
	default
}

export class Include extends PreprocessorDirective
{
	readonly path: string;
	readonly pathRange: Range;
	type: IncludeType = IncludeType.default;
	private delLength = 0;
	public uri?: Uri;
	public exist: boolean = false;

	constructor(file: TextDocument, private readonly rest: string, startIndex: number, restIndex: number, endIndex: number) {
		super(file, startIndex, endIndex);

		this.path = this.preparePath();

		const end = restIndex + rest.length - this.delLength;
		this.pathRange = new Range(
			file.positionAt(end - this.path.length),
			file.positionAt(end)
		);
	}

	private preparePath(): string
	{
		const reg = /\s*(?:(["<])([^\s"<]+)[">]|([^\s">]+))/;
		const match = reg.exec(this.rest);

		if (match) {
			if(match[1] == "<") {
				this.type = IncludeType.system;
			}
			if(match[1])
				this.delLength = 1;
			return match[2] ? match[2] : match[3];
		} 
		return "";
	}
}