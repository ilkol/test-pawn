import { Range } from "vscode";
import { AbstractStruct } from "./AbstractStruct";
import { TokenStruct } from "./TokensStruct";

export class SubProgrammStruct extends AbstractStruct {
	constructor(public readonly value: TokenStruct[], pos: Range) {
		super(pos);
	}
}