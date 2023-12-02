import { Range } from "vscode";
import { AbstractStruct } from "../AbstractStruct";
import { TokenStruct } from "../TokensStruct";
import { HasTagStruct } from "../../HasTagStruct";

export class TernarOperator extends HasTagStruct {
	constructor(public readonly cond: TokenStruct, public readonly ifTrue: TokenStruct, public readonly ifFalse: TokenStruct) {
		let pos = new Range(cond.getPos().start, ifFalse.getPos().end);
		super(pos);
		this.tag = "int";
	}
}