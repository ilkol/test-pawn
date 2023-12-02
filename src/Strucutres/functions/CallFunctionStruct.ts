import { Range } from "vscode";
import { AbstractStruct } from "../AbstractStruct";
import { HasTagStruct } from "../../HasTagStruct";
import { TokenStruct } from "../TokensStruct";

export class CallFunctionStruct extends HasTagStruct {
	constructor(public readonly name: string, pos: Range, public readonly args: TokenStruct[]) {
		super(pos);
	}
}