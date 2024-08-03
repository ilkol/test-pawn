import { MarkdownString, Range, TextDocument } from "vscode";
import { PreprocessorDirective } from "./PreprocessorDirective";
import { Undef } from "./Undef";

interface RestData
{
	patternReg: RegExp,
	pattern: string,
	replacement: string
	patternStart: number
}

export class Define extends PreprocessorDirective
{
	readonly doc: MarkdownString;
	readonly patternReg: RegExp;
	readonly pattern: string;
	readonly patternRange: Range;

	parameters: number[] = [];

	replacement: string;
	undef?: Undef;
	used: boolean = false;
	
	constructor(file: TextDocument, readonly rest: string, startIndex: number, restIndex: number, endIndex: number) {
		super(file, startIndex, endIndex);

		const result = this.preparePattern(rest);
		this.pattern = result.pattern;
		this.replacement = result.replacement;
		this.patternReg = result.patternReg;

		this.patternRange = new Range(
			file.positionAt(restIndex + result.patternStart),
			file.positionAt(restIndex + result.patternStart + result.pattern.length)
		);

		console.log(this.parameters);

		this.doc = this.prepareDoc();
	}
	private preparePattern(rest: string): RestData
	{
		const reg = /(\s*)([^\s]+)(?:\s+(.+))?/;
		const match = reg.exec(rest);

		if (match) {
			const patterStart = match[1] ? match[1].length : 0;
			const pattern = match[2];
			const findParams = /%(\d+)/g;
			let patternRegStr = "";
			let lastindex = 0;
			let paramMatch: RegExpExecArray | null;
			const patternPrepared = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

			// const parameters: number[] = [];

			while ((paramMatch = findParams.exec(patternPrepared)) !== null) {
				patternRegStr += patternPrepared.substring(lastindex, paramMatch.index) + "(.*?)\\s*";
				lastindex = paramMatch.index + paramMatch[0].length;
				this.parameters.push(+paramMatch[1]);
			}
			patternRegStr += patternPrepared.substring(lastindex);

			patternRegStr = "(?<=[^\\w]|)" + patternRegStr + "(?=[^\\w]|)";

			const replacement = match[3] ? match[3].trim() : "";
			return {
				patternReg: RegExp(patternRegStr, "g"),
				pattern: pattern,
				replacement: replacement,
				patternStart: patterStart
			}
		}

		return {
			patternReg: RegExp(""),
			pattern: "",
			replacement: "",
			patternStart: 0
		}
	}

	prepareDoc(): MarkdownString
	{
		return new MarkdownString("").appendCodeblock(`#define ${this.pattern} ${this.replacement}`, "pawn");
	}
	
}