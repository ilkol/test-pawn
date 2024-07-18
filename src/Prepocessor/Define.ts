import { Range, TextDocument } from "vscode";
import { PreprocessorDirective } from "./PreprocessorDirective";
import { Undef } from "./Undef";

interface RestData
{
	patternReg: RegExp,
	pattern: string,
	replacement: string
}

export class Define extends PreprocessorDirective
{
	readonly patternReg: RegExp;
	readonly pattern: string;
	readonly patternRange: Range;
	readonly replacement: string;
	undef?: Undef;
	used: boolean = false;
	
	constructor(file: TextDocument, readonly rest: string, startIndex: number, restIndex: number, endIndex: number) {
		super(file, startIndex, endIndex);

		const result = this.preparePattern(rest);
		this.pattern = result.pattern;
		this.replacement = result.replacement;
		this.patternReg = result.patternReg;

		this.patternRange = new Range(
			file.positionAt(restIndex),
			file.positionAt(restIndex + rest.length)
		);
	}
	private preparePattern(rest: string): RestData
	{
		const reg = /(?:\s*)([^\s]+)(?:\s+(.+))?/;
		const match = reg.exec(rest);

		if (match) {
			const pattern = match[1];
			const findParams = /%(\d+)/g;
			let patternRegStr = "";
			let lastindex = 0;
			let paramMatch: RegExpExecArray | null;
			const patternPrepared = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

			const parameters: number[] = [];

			while ((paramMatch = findParams.exec(patternPrepared)) !== null) {
				patternRegStr += patternPrepared.substring(lastindex, paramMatch.index) + "(.*?)\\s*";
				lastindex = paramMatch.index + paramMatch[0].length;
				parameters.push(+paramMatch[1]);
			}
			patternRegStr += patternPrepared.substring(lastindex);

			patternRegStr = "(?<=[^\\w])" + patternRegStr + "(?=[^\\w])";

			const replacement = match[2] ? match[2].trim() : "";
			return {
				patternReg: RegExp(patternRegStr, "g"),
				pattern: pattern,
				replacement: replacement
			}
		}

		return {
			patternReg: RegExp(""),
			pattern: "",
			replacement: ""
		}
	}
	
}