import { Range } from "vscode";
import { TokenStruct } from "../TokensStruct";
import { AbstractStruct } from "../AbstractStruct";
import { HasTagStruct } from "../../HasTagStruct";

export class NegationStruct extends HasTagStruct {
	constructor(public readonly value: HasTagStruct, pos: Range) {
		super(pos);
		this.setTag(value.getTag());
	}
}