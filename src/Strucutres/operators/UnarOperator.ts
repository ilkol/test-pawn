import { Position, Range } from "vscode";
import { TokenStruct } from "../TokensStruct";
import { HasTagStruct } from "../../HasTagStruct";

export class UnarOperator extends HasTagStruct {
	constructor(public readonly op: string, public readonly value: HasTagStruct) {
		let start = new Position(value.getPos().start.line, value.getPos().start.character + op.length);
		let pos = new Range(start, value.getPos().end);
		super(pos);
		this.setTag(value.getTag());
	}
}