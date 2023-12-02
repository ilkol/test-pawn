import { Range } from "vscode";
import { TokenWithTag } from "./TokenWithTag";

export class TokenChar extends TokenWithTag<number>{
	constructor(value: number, pos: Range) {
		super(value, pos, "char");
	}
	public negate() {
		this.value *= -1;
	}
}