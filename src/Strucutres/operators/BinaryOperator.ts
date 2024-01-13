import { Range } from "vscode";
import { TokenStruct, TokensWithTags } from "../TokensStruct";
import { TokenNumber } from "../../parser/Token";
import { HasTagStruct } from "../../HasTagStruct";
import { TokenString } from "../../Tokens/literals/TokenString";

export class BinaryOperator extends HasTagStruct {

	private isConstant: boolean = false;
	public value: any;
	
	constructor(public readonly op: string, public left: TokenStruct | TokenNumber, public right: TokensWithTags | TokenString) {
		let pos = new Range(left.getPos().start, right.getPos().end);
		super(pos);
		if(right instanceof TokenString)
			this.setTag("int");
		else this.setTag(right.getTag());
	}
	get constant(): boolean {
		return this.isConstant;
	}
	set constant(value: boolean) {
		this.isConstant = value;
	}
}