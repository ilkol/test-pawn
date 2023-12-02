import { Range } from "vscode";
import { IToken } from "../IToken";

export class RangeToken extends IToken<string> {
	constructor(value: string, pos: Range) {
		super(pos, value);
	}
}
