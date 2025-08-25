import { Range } from "../../../types";
import { PreprocessorDirective } from "../PreprocessorDirective";
import { Undef } from "./Undef";

interface PatternInfo
{
	text: string,
	replacement: string
	range: Range
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

	// readonly doc: MarkdownString;
	readonly pattern: string;
	readonly patternRange: Range;

	replacement: string;
	undef?: Undef;
	used: boolean = false;
	
	constructor(range: Range, patternInfo: PatternInfo, startIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);

		this.pattern = patternInfo.text;
		this.replacement = patternInfo.replacement;

		this.patternRange = patternInfo.range;

		// this.doc = this.prepareDoc();

		this._prefix = this.getPrefixFromPattern();
		this._postPrefix = this.pattern.substring(this._prefix.length);
	}
	private getPrefixFromPattern(): string {
		let match = /([a-zA-Z_@])+/.exec(this.pattern);
		
		return match === null ? "" : match[0];
	}

	// prepareDoc(): MarkdownString
	// {
	// 	return new MarkdownString("").appendCodeblock(`#define ${this.pattern} ${this.replacement}`, "pawn");
	// }
	
	// copy(): Define
	// {
	// 	const define = new Define(this.file, this.rest, this.startIndex, this.restIndex, this.endIndex);
	// 	define.curEndIndex = this.curEndIndex;
	// 	define.curStartIndex = this.curStartIndex;
	// 	define.replacement = this.replacement;
	// 	return define;
	// }
}