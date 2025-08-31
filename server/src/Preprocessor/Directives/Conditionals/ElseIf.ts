import { Serialization } from "../../../cache/Serialization";
import { Condition } from "./Condition";

export class ElseIf extends Condition
{
    static fromJSON(json: Serialization.Preprocessor.ElseIfCache): ElseIf {
		return super.fromJSON(json) as ElseIf;
	}

	toJSON(): Serialization.Preprocessor.ElseIfCache {
		return {
			...super.toJSON(),
			__type: Serialization.Preprocessor.List.ElseIf,
		};
	}
}