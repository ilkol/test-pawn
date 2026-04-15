import { PreprocessorDirective } from "../PreprocessorDirective";
import { Range } from "../../../types";
import { Serialization } from "../../../cache/Serialization";

export class Endif extends PreprocessorDirective
{
	constructor(range: Range, startIndex: number, endIndex: number, text: string) {
		super(range, startIndex, endIndex, text);
	}

	static fromJSON(json: Serialization.Preprocessor.EndifCache): Endif {
		return new Endif(
			Serialization.Deserialize.range(json.range),
			json.startIndex,
			json.endIndex,
			json.text,
		);
	}
	toJSON(): Serialization.Preprocessor.EndifCache {
		return {
			...super.toJSON(),
			__type: Serialization.Preprocessor.List.Endif,
		}
	}
}