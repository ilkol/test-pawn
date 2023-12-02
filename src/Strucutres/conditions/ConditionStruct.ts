import { Range } from "vscode";
import { AbstractStruct } from "../AbstractStruct";
import { TokenStruct } from "../TokensStruct";
import { SubProgrammStruct } from "../SubProgrammStruct";

export class ConditionStruct extends AbstractStruct {
	private elseCode: SubProgrammStruct | ConditionStruct | undefined;
	constructor(public readonly condition: TokenStruct, public readonly then: SubProgrammStruct, pos: Range) {
		super(pos);
	}
	public setElse(code: SubProgrammStruct | ConditionStruct) {
		this.elseCode = code;
	}
}