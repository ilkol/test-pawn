import { Range } from "vscode";
import { TokenWithTag } from "./TokenWithTag";

export class TokenInt extends TokenWithTag<number>{
	constructor(value: number, pos: Range) {
		super(value, pos, "int");
	}
	public negate() {
		this.value *= -1;
	}
}