import { Position, Range } from "vscode";
import { TokenEnd, TokenIdentificator, TokenKeyword, TokenOperator, TokenPunc } from "../Tokens/TokenLiteral";
import { TokenFloat } from "../Tokens/literals/withTags/TokenFloat";
import { TokenInt } from "../Tokens/literals/withTags/TokenInt";
import { TokenHex } from "../Tokens/literals/withTags/TokenHex";
import { TokenBoolean } from "../Tokens/literals/withTags/TokenBoolean";
import { TokenString } from "../Tokens/literals/TokenString";
import { RangeToken } from "../Tokens/literals/RangeToken";
import { TokenPreprocessor } from "../Tokens/TokenPreprocessor";

export const TokenTypes = {
	"str": "string",
	"number": "number",
	"float": "Float",
	"hex": "hex",
	"punc": "punc",
	"op": "operator",
	"keyword": "kw",
	"macro": "macro",
	"variable": "var" ,
	"endFile": "eof"
};

export type TokenLiteral =  TokenNumber | TokenBoolean | TokenString | TokenHex; 
export type TokenNumber = TokenFloat | TokenInt | TokenHex;
export type Token = TokenLiteral | TokenEnd | TokenKeyword | TokenIdentificator | TokenOperator | TokenPunc | TokenPreprocessor | RangeToken;


export interface AbstractToken {
	type: string;
	value: string;
	pos: Range;
	extra?: string
}

export type test = number;