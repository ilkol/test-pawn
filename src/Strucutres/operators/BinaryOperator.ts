import { Range } from "vscode";
import { TokenStruct, TokensWithTags } from "../TokensStruct";
import { TokenNumber } from "../../parser/Token";
import { HasTagStruct } from "../../HasTagStruct";
import { TokenString } from "../../Tokens/literals/TokenString";

export class BinaryOperator extends HasTagStruct {
	constructor(public readonly op: string, public readonly left: TokenStruct | TokenNumber, public readonly right: TokensWithTags | TokenString) {
		let pos = new Range(left.getPos().start, right.getPos().end);
		super(pos);
		if(right instanceof TokenString)
			this.setTag("int");
		else this.setTag(right.getTag());
	}
}