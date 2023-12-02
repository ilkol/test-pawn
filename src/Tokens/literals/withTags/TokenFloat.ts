import { Range } from "vscode";
import { TokenWithTag } from "./TokenWithTag";

export class TokenFloat extends TokenWithTag<number> {
	constructor(value: number, pos: Range) {
		super(value, pos, "Float");
	}
	public negate() {
		this.value *= -1;
	}
}
