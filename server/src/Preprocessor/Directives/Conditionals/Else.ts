import { PreprocessorDirective } from "../PreprocessorDirective";
import { Condition } from "./Condition";
import { Range } from "../../../types";
import { Serialization } from "../../../cache/Serialization";

export class Else extends PreprocessorDirective
{
	public elseif?: Condition;
	
	constructor(range: Range, startIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);
	}

	static fromJSON(json: Serialization.Preprocessor.ElseCache): Else {
		return new Else(
			Serialization.Deserialize.range(json.range),
			json.startIndex,
			json.endIndex
		);
	}

	toJSON(): Serialization.Preprocessor.ElseCache {
		return {
			...super.toJSON(),
			__type: Serialization.Preprocessor.List.Else,
		}
	}
}