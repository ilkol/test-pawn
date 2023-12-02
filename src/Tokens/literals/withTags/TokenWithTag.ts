import { Range } from "vscode";
import { IToken } from "../../IToken";

export class TokenWithTag<T> extends IToken<T>{
	constructor(protected value: T, pos: Range, private tag: string = "int") {
		super(pos, value);
	}
	public getTag(): string {
		return this.tag;
	}
}