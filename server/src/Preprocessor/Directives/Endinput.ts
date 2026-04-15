import { PreprocessorDirective } from "./PreprocessorDirective";
import { Range } from "../../types";
import { Serialization } from "../../cache/Serialization";

export class Endinput extends PreprocessorDirective
{
	constructor(range: Range, startIndex: number, endIndex: number, text: string) {
		super(range, startIndex, endIndex, text);
	}

	static fromJSON(cache: Serialization.Preprocessor.EndInputCache): Endinput {
		return new Endinput(
			Serialization.Deserialize.range(cache.range),
			cache.startIndex,
			cache.endIndex,
			cache.text,
		);
	}

	toJSON(): Serialization.Preprocessor.EndInputCache {
		return {
			...super.toJSON(),
			__type: Serialization.Preprocessor.List.Endinput,
		}
	}
}