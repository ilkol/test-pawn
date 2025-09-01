import { Serialization } from "../../cache/Serialization";
import { Range } from "../../types";
import { PreprocessorDirective } from "./PreprocessorDirective";

export class FileLineChange extends PreprocessorDirective {
	constructor(range: Range, public readonly hintMessage: string, startIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);
	}

	static fromJSON(cache: Serialization.Preprocessor.FileLineChangeCache): FileLineChange {
		return new FileLineChange(
			Serialization.Deserialize.range(cache.range),
			cache.hintMessage,
			cache.startIndex,
			cache.endIndex
		);
	}

	toJSON(): Serialization.Preprocessor.FileLineChangeCache {
		return {
			...super.toJSON(),
			__type: Serialization.Preprocessor.List.FileLine,
			hintMessage: this.hintMessage,
		}
	}
}