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
	private _prefix: string;
	private _postPrefix: string;

	get prefix(): string {
		return this._prefix;
	}
	get postPrefix(): string {
		return this._postPrefix;
	}
	get prefixLen(): number {
		return this._prefix.length;
	}

	readonly doc: MarkdownString;
	readonly patternReg: RegExp;
	readonly pattern: string;
	readonly patternRange: Range;

	parameters: number[] = [];

	replacement: string;
	undef?: Undef;
	used: boolean = false;
	
	constructor(file: TextDocument, private readonly rest: string, startIndex: number, private restIndex: number, endIndex: number) {
		super(file, startIndex, endIndex);

		const result = this.preparePattern(rest);
		this.pattern = result.pattern;
		this.replacement = result.replacement;
		this.patternReg = result.patternReg;

		this.patternRange = new Range(
			file.positionAt(restIndex + result.patternStart),
			file.positionAt(restIndex + result.patternStart + result.pattern.length)
		);

		this.doc = this.prepareDoc();

		this._prefix = this.getPrefixFromPattern();
		this._postPrefix = this.pattern.substring(this._prefix.length);
	}
	private getPrefixFromPattern(): string {
		let match = /([a-zA-Z_@])+/.exec(this.pattern);
		
		return match === null ? "" : match[0];
	}
	private preparePattern(rest: string): RestData
	{
		const reg = /(\s*)([^\s]+)(?:\s+([\s\S]+))?/;
		const match = reg.exec(rest);

		if (match) {
			const patterStart = match[1] ? match[1].length : 0;
			const pattern = match[2];

			const findParams = /%(\d+)/g;
			let patternRegStr = "";
			let lastindex = 0;
			let paramMatch: RegExpExecArray | null;

			const patternPrepared = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			const paramMatches = [...patternPrepared.matchAll(/%\d+/g)];
			const paramCount = paramMatches.length;

			let index = 1;
			while ((paramMatch = findParams.exec(patternPrepared)) !== null) {
				patternRegStr += patternPrepared.substring(lastindex, paramMatch.index);

				// Последний аргумент — захват до конца без запятых
				if (index++ === paramCount) {
					patternRegStr += "((?:[^\\r\\n\\\\()]+|\\([^)]*\\))+)"; 
				} else {
					// Универсальный вариант для аргументов
					patternRegStr += "(\"(?:[^\"\\\\]|\\\\.)*\"|\\([^()]*\\)|[^,()]+?)";
				}

				lastindex = paramMatch.index + paramMatch[0].length;
				this.parameters.push(+paramMatch[1]);
			}

			patternRegStr += patternPrepared.substring(lastindex);
			patternRegStr = "(?<!\\w)" + patternRegStr + "(?=[^\\w])";

			const replacement = match[3] ? match[3].trim() : "";
			console.log(patternRegStr);
			return {
				patternReg: RegExp(patternRegStr),
				pattern: pattern,
				replacement: replacement,
				patternStart: patterStart
			};
		}

		return {
			patternReg: RegExp(""),
			pattern: "",
			replacement: "",
			patternStart: 0
		};

	}

	prepareDoc(): MarkdownString
	{
		return new MarkdownString("").appendCodeblock(`#define ${this.pattern} ${this.replacement}`, "pawn");
	}
	
	copy(): Define
	{
		const define = new Define(this.file, this.rest, this.startIndex, this.restIndex, this.endIndex);
		define.curEndIndex = this.curEndIndex;
		define.curStartIndex = this.curStartIndex;
		define.replacement = this.replacement;
		return define;
	}
}