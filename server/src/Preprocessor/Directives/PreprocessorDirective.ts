import { Serialization } from "../../cache/Serialization";
import { Range } from "../../types";
import { v4 as uuid } from "uuid";

export abstract class PreprocessorDirective
{
	private _id?: string;
	public curStartIndex: number;
	public curEndIndex: number;

	constructor(public readonly range: Range, readonly startIndex: number, readonly endIndex: number, public readonly text: string) {
		this.curStartIndex = startIndex;
		this.curEndIndex = endIndex;
	}

	set id(value: string) {
		this._id = value;
	}

	get id(): string {
		if(!this._id) {
			this._id = uuid();
		}
		return this._id;
	}

	move(shift: number) {
		this.curStartIndex += shift;
		this.curEndIndex += shift;
	}

	toJSON(): Serialization.Preprocessor.DirectiveCache {
		return {
			__type: Serialization.Preprocessor.List.AnyDirective,
			id: this.id,
			startIndex: this.curStartIndex,
			endIndex: this.curEndIndex,
			range: Serialization.Serialize.range(this.range),
			text: this.text,
		}
	}

}