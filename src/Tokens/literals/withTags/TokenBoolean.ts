import { Range } from "vscode";
import { TokenWithTag } from "./TokenWithTag";

export class TokenBoolean extends TokenWithTag<boolean> {
	constructor(value: boolean, pos: Range) {
		super(value, pos, "bool");
	}
}