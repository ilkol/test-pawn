import { Range } from "vscode";
import { TokenString } from "../../Tokens/literals/TokenString";
import { TokenInt } from "../../Tokens/literals/withTags/TokenInt";
import { InputStream } from "../../parser/InputStream";
import { Parser } from "../../parser/Parser";
import { TokenStream } from "../../parser/TokenStream";
import { TokenStruct } from "../TokensStruct";
import { IntStruct } from "../literals/IntStruct";
import { BinaryOperator } from "../operators/BinaryOperator";
import { PreprocessorStruct } from "./PreprocessorStruct";
import { FloatStruct } from "../literals/FloatStruct";
import { TokenFloat } from "../../Tokens/literals/withTags/TokenFloat";
import { DefineToken } from "../../Tokens/preprocessor/DefineToken";

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

	constructor(code: DefineToken) {
		super(code);
	
		this._what = code.what;
		this._to = code.to;

		let res = this._what.match(/(\w+)(?:\s+)?(?:\()([^\(]*)(?:\))/i);
		
		if(res) {
			let pattern = res[0];
			let funcName = res[1];
			let funcParams = res[2];

			pattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			pattern = pattern.replace(/%[0-9]/g, "\\s*(.+)\\s*");

			let regPattern = new RegExp(pattern);

		}
		else if(this.to != "")
			this.parse();

		// let test: RegExp = new RegExp();

		//ДЛЯ ПОИСКА АРГУМЕНТА
		//(?<=[(,])\s*((?:(?:[a-zA-Z_])(?:[a-zA-Z0-9_])*)|(?:%[0-9]+))\s*

	
	}

	private parse() {
		var stream: InputStream = new InputStream(this.to);
		var tokStream: TokenStream = new TokenStream(stream);
		var parser: Parser = new Parser(tokStream);
		let ast =  parser.parse().prg;
		let cur = ast[0]
		this.value = this.evaluate(cur);
		
	}

	private evaluate(exp: TokenStruct): TokenStruct | undefined {
		if(exp instanceof IntStruct || exp instanceof FloatStruct || exp instanceof TokenString) {
			return exp;
		}
		if(exp instanceof BinaryOperator) {
			let left = this.evaluate(exp.left);
			let right = this.evaluate(exp.right);

			if( (left instanceof IntStruct && right instanceof IntStruct) || 
				(left instanceof FloatStruct && right instanceof FloatStruct)) {
					let val = this.math(exp.op, left.getValue(), right.getValue());
					let pos = new Range(left.getPos().start, right.getPos().end);

					if(left instanceof IntStruct && right instanceof IntStruct)
						return new IntStruct(new TokenInt(val, pos));
					if(left instanceof FloatStruct && right instanceof FloatStruct) 
						return new FloatStruct(new TokenFloat(val, pos));
				}
			return undefined;
		}
		else {
			console.error("can't evaluate define: ", exp);
			return undefined;
		}
	}
	private math(op: string, left: number, right: number): number {
		switch(op) {
			case "+":
				return left + right;
			case "-":
				return left - right;
			case "/":
				return left / right;
			case "*":
				return left * right;
			default:
				throw new Error("Не могу ничего сделать. НЕизвестынй оператор");
		}
	}

}