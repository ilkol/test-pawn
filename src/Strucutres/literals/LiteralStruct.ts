import { Range } from "vscode";
import { HasTagStruct } from "../../HasTagStruct";
import { TokenFloat } from "../../Tokens/literals/withTags/TokenFloat";
import { TokenInt } from "../../Tokens/literals/withTags/TokenInt";
import { TokenBoolean } from "../../Tokens/literals/withTags/TokenBoolean";
import { TokenHex } from "../../Tokens/literals/withTags/TokenHex";

export class LiteralStruct<T> extends HasTagStruct {
	constructor(token: TokenFloat | TokenInt | TokenBoolean | TokenHex, private value: T) {
		super(token.getPos());
		this.setTag(token.getTag());
	}
	public getValue(): T {
		return this.value;
	}
}