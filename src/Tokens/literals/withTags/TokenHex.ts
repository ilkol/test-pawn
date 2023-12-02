import { Range } from "vscode";
import { TokenWithTag } from "./TokenWithTag";

export class TokenHex extends TokenWithTag<string> {
	constructor(value: string, pos: Range) {
		super(value, pos, "hex");
	}
}