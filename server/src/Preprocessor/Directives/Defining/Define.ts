import { Serialization } from "../../../cache/Serialization";
import { Macro } from "../../../SymbolSystem/Symbols";
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

	symbol?: Macro;

	private _references: Map<string, Range[]> = new Map();
	getFileReferences(filePath: string): Range[] {
		return this._references.get(filePath) ?? [];
	}
	setFileReferences(filePath: string, referenaces: Range[]) {
		this._references.set(filePath, referenaces);
	}


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

	private includingPos: Map<string, number> = new Map();

	getFilePos(filePath: string): number | undefined {
		return this.includingPos.get(filePath);
	}
	
	includeToFile(filePath: string, includePos: number)
	{
		this.includingPos.set(filePath, includePos);
	}

	static fromJSON(json: Serialization.Preprocessor.DefineCache): Define {
		const instance =  new Define(
			Serialization.Deserialize.range(json.range),
			{
				text: json.pattern,
				replacement: json.replacement,
				range: Serialization.Deserialize.range(json.patternRange),
			},
			json.startIndex,
			json.endIndex,
		);	
		instance.used = json.used;
		if(json.references) {
			for(const key of Object.keys(json.references)) {
				instance._references.set(key, json.references[key].map(r => Serialization.Deserialize.range(r)));
			}
		}
		if(json.includingPos) {
			for(const key of Object.keys(json.includingPos)) {
				instance.includingPos.set(key, json.includingPos[key]);
			}
		}
		return instance;
	}

	toJSON(): Serialization.Preprocessor.DefineCache {
		return {
			...super.toJSON(),
			__type: Serialization.Preprocessor.List.Define,
			prefix: this.prefix,
			postPrefix: this.postPrefix,
			pattern: this.pattern,
			patternRange: Serialization.Serialize.range(this.patternRange),
			replacement: this.replacement,
			undef: this.undef?.id,
			used: this.used,

			references: Object.fromEntries([...this._references.entries()].map(([key, value]) => [key, value.map(v => Serialization.Serialize.range(v))])),
			includingPos: Object.fromEntries(this.includingPos.entries()),
		}
	}
}