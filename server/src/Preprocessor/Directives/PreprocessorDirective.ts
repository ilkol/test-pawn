import { Serialization } from "../../cache/Serialization";
import { Range } from "../../types";
import { v4 as uuid } from "uuid";

export abstract class PreprocessorDirective
{
	public readonly id = uuid();
	public curStartIndex: number;
	public curEndIndex: number;

	constructor(public readonly range: Range, readonly startIndex: number, readonly endIndex: number) {
		this.curStartIndex = startIndex;
		this.curEndIndex = endIndex;
	}

	move(shift: number) {
		this.curStartIndex += shift;
		this.curEndIndex += shift;
	}

	toJSON(): Serialization.Preprocessor.DirectiveCache {
		return {
			id: this.id,
			startIndex: this.curStartIndex,
			endIndex: this.curEndIndex,
			range: Serialization.Serialize.range(this.range)
		}
	}

}