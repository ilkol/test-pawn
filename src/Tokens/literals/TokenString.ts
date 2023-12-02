import { Range } from "vscode";
import { TokenTypes } from "../../parser/Token";
import { IToken } from "../IToken";

export class TokenString extends IToken<string> {
	public readonly type = TokenTypes.str;
	private packed = false;
	constructor(value: string, pos: Range) {
		super(pos, value);
	}
	public pack() {
		this.packed = true;
	}
	public getTag(): string {
		return "int";
	}
	public getValue(): string {
		return this.value;
	}
}