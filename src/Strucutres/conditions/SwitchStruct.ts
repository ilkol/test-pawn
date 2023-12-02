import { Range } from "vscode";
import { AbstractStruct } from "../AbstractStruct";
import { TokenStruct } from "../TokensStruct";
import { CaseStruct } from "./CaseStruct";

export class SwitchStruct extends AbstractStruct {
	constructor(public readonly cond: TokenStruct, public readonly cases: CaseStruct[], pos: Range) {
		super(pos);
	}
}