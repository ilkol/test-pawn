import { TokenPreprocessor } from "../../Tokens/TokenPreprocessor";
import { TokenString } from "../../Tokens/literals/TokenString";
import { InputStream } from "../../parser/InputStream";
import { Parser } from "../../parser/Parser";
import { TokenStream } from "../../parser/TokenStream";
import { TokenStruct } from "../TokensStruct";
import { IntStruct } from "../literals/IntStruct";
import { PreprocessorStruct } from "./PreprocessorStruct";

export class DefineStruct extends PreprocessorStruct {
	/**
	 * Распаршенное значение, на что заменяет define
	 */
	public value: undefined | TokenStruct = undefined;

	/**
	 * Что заменяет define
	 */
	private _what: string;
	/**
	 * На что заменяет define
	 */
	private _to: string;

	/**
	 * Что заменяет define
	 */
	get what(): string {
		return this._what;
	}
	/**
	 * На что заменяет define
	 */
	get to(): string {
		return this._to;
	}

	constructor(code: TokenPreprocessor) {
		super(code);
	
		this._what = code.getWhat();
		this._to = code.getTo();

		this.parse();
	}

	private parse() {
		var stream: InputStream = new InputStream(this.to);
		var tokStream: TokenStream = new TokenStream(stream);
		var parser: Parser = new Parser(tokStream);
		let ast =  parser.parse().prg;
		let cur = ast[0]
		if(cur instanceof IntStruct || cur instanceof TokenString) {
			this.value = cur;
			return;
		}
		
	}
}