import { Position, Range } from "vscode";
import { Token, TokenTypes } from "../parser/Token";
import { IToken } from "./IToken";

export class TokenPunc extends IToken<string> {
	public readonly type = TokenTypes.punc;
	constructor(value: string, pos: Range) {
		super(pos, value);
	}
}
export class TokenOperator extends IToken<string> {
	public readonly type = TokenTypes.op;
	constructor(value: string, pos: Range) {
		super(pos, value);
	}
}
export class TokenIdentificator extends IToken<string> {
	public readonly type = TokenTypes.variable;
	constructor(value: string, pos: Range) {
		super(pos, value);
	}
}
export class TokenKeyword extends IToken<string> {
	public readonly type = TokenTypes.keyword;
	constructor(value: string, pos: Range) {
		super(pos, value);
	}
}
export class TokenEnd extends IToken<string> {
	public readonly type = TokenTypes.endFile;
	constructor(private posEnd: Position = new Position(0,0)) {
		super(new Range(posEnd, posEnd), "");
	}
}