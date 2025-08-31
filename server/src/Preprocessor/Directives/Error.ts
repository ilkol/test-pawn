import { Serialization } from "../../cache/Serialization";
import { Range } from "../../types";
import { PreprocessorDirective } from "./PreprocessorDirective";

export class Error extends PreprocessorDirective
{
	constructor(range: Range, public readonly message: string, public readonly type: Error.Type, startIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);
	}

	toJSON(): Serialization.Preprocessor.ErrorCache {
		return {
			...super.toJSON(),
			message: this.message,
			type: this.type,
		}
	}

	static fromJSON(cache: Serialization.Preprocessor.ErrorCache): Error {
		return new Error(
			Serialization.Deserialize.range(cache.range),
			cache.message,
			cache.type,
			cache.startIndex,
			cache.endIndex
		);
	}
}

export namespace Error {
	export enum Type {
		Error,
		Wawrning
	}
}