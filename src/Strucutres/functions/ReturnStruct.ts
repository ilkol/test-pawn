import { Range } from "vscode";
import { AbstractStruct } from "../AbstractStruct";
import { TokenStruct } from "../TokensStruct";
import { HasTagStruct } from "../../HasTagStruct";

export class ReturnStruct extends HasTagStruct {
	constructor(public readonly value: HasTagStruct, pos: Range) {
		super(pos);
		this.tag = value.getTag();
	}
}