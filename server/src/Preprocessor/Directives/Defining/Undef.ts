import { Serialization } from "../../../cache/Serialization";
import { Range } from "../../../types";
import { PreprocessorDirective } from "../PreprocessorDirective";

interface UndefInfo {
	text: string;
	range: Range
}

export class Undef extends PreprocessorDirective
{
	readonly define: string;
	readonly defineRange: Range;
	

	constructor(range: Range, defineInfo: UndefInfo, startIndex: number, endIndex: number, text: string) {
		super(range, startIndex, endIndex, text);

		this.define = defineInfo.text;
		this.defineRange = defineInfo.range;
	}

	static fromJSON(json: Serialization.Preprocessor.UndefCache): Undef {
		return new Undef(
			Serialization.Deserialize.range(json.range),
			{
				text: json.definePattern,
				range: Serialization.Deserialize.range(json.definePatternRange),
			},
			json.startIndex,
			json.endIndex,
			json.text,
		);
	}

	toJSON(): Serialization.Preprocessor.UndefCache {
		return {
			...super.toJSON(),
			__type: Serialization.Preprocessor.List.Undef,
			definePattern: this.define,
			definePatternRange: Serialization.Serialize.range(this.defineRange),
		}
	}
}