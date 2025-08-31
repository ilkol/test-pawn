import { PreprocessorDirective } from "./PreprocessorDirective";
import { Range } from "../../types";
import { Serialization } from "../../cache/Serialization";

export class Endinput extends PreprocessorDirective
{
	constructor(range: Range, startIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);
	}

	static fromJSON(cache: Serialization.Preprocessor.EndInputCache): Endinput {
		return new Endinput(
			Serialization.Deserialize.range(cache.range),
			cache.startIndex,
			cache.endIndex
		);
	}

	toJSON(): Serialization.Preprocessor.EndInputCache {
		return {
			...super.toJSON(),
		}
	}
}