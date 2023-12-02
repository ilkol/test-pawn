import { Position, Range } from "vscode";
import { EndInput, UnhandleCharacter } from "../Errors";
import { InputStream } from "./InputStream";
import { Token, TokenTypes } from "./Token";
import { TokenEnd, TokenIdentificator, TokenKeyword, TokenOperator, TokenPunc } from "../Tokens/TokenLiteral";
import { TokenBoolean } from "../Tokens/literals/withTags/TokenBoolean";
import { TokenHex } from "../Tokens/literals/withTags/TokenHex";
import { TokenInt } from "../Tokens/literals/withTags/TokenInt";
import { TokenFloat } from "../Tokens/literals/withTags/TokenFloat";
import { TokenString } from "../Tokens/literals/TokenString";
import { RangeToken } from "../Tokens/literals/RangeToken";
import { TokenPreprocessor } from "../Tokens/TokenPreprocessor";

export class TokenStream {

	private current: Token = new TokenEnd(this.input.position());
	private keywords = " if else sizeof operator true false native const static enum stock forward public publics new char return for while foreach tforeach break continue switch case default ";
	private preproc = " define include pragma if endif undef else ";
	private stop: boolean = false;

	// hexadecimal
	private isaDigit(char: string): boolean {
		return /[0-9]/i.test(char);
	}
	private skipSpaces() {
		this.readWhile(this.isSpace);
	}
	private readNext(): Token {
		this.skipSpaces();
		if(this.input.end()) return new TokenEnd(this.input.position());
		let char = this.input.peek();
		if(char == '"') return this.readString();
		if(char == "'") return this.readCharString();
		if(char == '#') return this.readPreprocessor();
		if(char == '\\') return this.readNext();
		if(char == '/') {
			let pos = this.input.position();
			this.input.next();
			let tmp = this.input.peek();
			if(isMultyCommitStart(char + tmp)) {
				this.skipMultyComment();
				return this.readNext();
			}
				
			else if(isLineCommit(char + tmp)) {
				this.skipLineComment();
				return this.readNext();
			}
				
			else {
				let value = char + this.readWhile(this.isOperator);
				return new TokenOperator(value, new Range(pos.line, pos.character, pos.line, pos.character + value.length));
			}
			
		}
		if(this.isaDigit(char)) return this.readNumber();
		if(this.isPunc(char)) {
			let pos = this.input.position();
			let tmp = this.input.next();
			if(tmp == ".")
				while(this.input.peek() == ".") {
					tmp += this.input.next();
				}
			return new TokenPunc(tmp, new Range(pos.line, pos.character, pos.line, pos.character + tmp.length));
		}
		if(this.isOperator(char)) {
			let pos = this.input.position();
			let value = ""

			while(!this.input.end() && value.length < 2 && this.isOperator(this.input.peek())) 
				value += this.input.next();
			return new TokenOperator(value, new Range(pos.line, pos.character, pos.line, pos.character + value.length));
		}
		if(isIDStart(char)) return this.readID();
		let pos = this.input.position();
		throw new UnhandleCharacter(char, pos.line, pos.character);
	}
	private skipMultyComment(): void {
		this.readEscaped('*');
		let nextChar = this.input.next()
		if(nextChar != "/") {
			// this.input.next();
			this.skipMultyComment();
		}
	}
	private skipLineComment(): void {
		this.readEscaped('\n');
	}
	private readPreprocessor(): TokenPreprocessor {
		this.input.next();
		let start = this.input.position();
		let macr = this.readWhile(this.isID);
		let end = this.input.position();
		if(!this.isPreproc(macr)) {
			return new TokenPreprocessor(macr, new Range(start, end));
		}
		this.skipSpaces();
		let value = this.readWhile(this.isNotNewLine);
		end = this.input.position();
		return new TokenPreprocessor(macr, new Range(start, end), value);

	}

	private isID(char: string): boolean {
		return isIDStart(char) || "0123456789".indexOf(char) >= 0;
	}
	private isKeyword(char: string): boolean {
		return this.keywords.indexOf(" " + char + " ") >= 0;
	}
	private isPreproc(char: string): boolean {
		return this.preproc.indexOf(" " + char + " ") >= 0;
	}
	private readID(): TokenIdentificator | TokenKeyword | TokenBoolean {
		var id = this.readWhile(this.isID);
		let pos = this.input.position();
		let posA = new Range(pos.line, pos.character - id.length, pos.line, pos.character);
		if(id == "true" || id == "false")
			return new TokenBoolean(id == "true", posA);
		if(this.isKeyword(id))
			return new TokenKeyword(id, posA);
		else 
			return new TokenIdentificator(id, posA);
	} 
	private isOperator(char: string): boolean {
		return "+-=*/&<>!|%?^".indexOf(char) >= 0;
	}
	private readNumber(): TokenFloat | TokenInt | TokenHex | RangeToken {
		var inc = this;

		var number: string = "";
		if(this.input.peek() == "0") {
			number += inc.input.next();
			if(inc.input.peek() == "x" || inc.input.peek() == "X") {
				number += this.readHex();
				let pos = this.input.position();
				return new TokenHex(number, new Range(pos.line, pos.character - number.length, pos.line, pos.character));
			} 
			else {
				return this.readFloat(number);
			}
		}
		else {
			return this.readFloat();
		}
	}
	private readFloat(startStr: string = ""): TokenFloat | TokenInt | RangeToken {
		var inc = this;
		var isFloat: boolean = false;
		var isRange: boolean = false;
		var number: string = startStr + this.readWhile(function(char: string) {
			
			if(char == ".") {
				if (isFloat) {
					if(isRange)
						return false;
					isRange = true;
				}
				isFloat = true;
				return true;
			}
			return inc.isaDigit(char);
		});
		let start = this.input.position();
		let pos = new Range(start.line, start.character - number.length - startStr.length, start.line, start.character);
		
		if(isRange)
			return new RangeToken(number, pos);
		if(isFloat)
			return new TokenFloat(parseFloat(number), pos);
		else 
			return new TokenInt(parseFloat(number), pos);

	}
	private readHex(): string {
		var inc = this;
		var number = inc.input.next();
		number += this.readWhile(function(char: string) {
			if(( char >= "a" && char <= "f") || ( char >= "A" && char <= "F") ) return true;
			else return inc.isaDigit(char);
		});
		return number;
	}
	private isPunc(char: string): boolean {
		return ";,(){}[]:.".indexOf(char) >= 0;
	}
	
	private readString(): TokenString {
		let start = this.input.position();
		let val = this.readEscaped('"');
		let end = this.input.position();
		return new TokenString(val, new Range(start.line, start.character - 1, end.line, end.character + 1));
	}
	private readCharString(): TokenString {
		let start = this.input.position();
		let val = this.readEscaped("'");
		let end = this.input.position();
		return new TokenString(val, new Range(start.line, start.character - 1, end.line, end.character + 1));
	}
	private readEscaped(escapeChar: string): string {
		let escaped: boolean = false;
		let str: string = "";

		this.input.next();
		var char = "";
		while(!this.input.end()) {
			char = this.input.next();
			if(escaped) {
				str += char;
				escaped = false;
			}
			else if(char == "\\") {
				escaped = true;
			}
			else if (char == escapeChar) {
                break;
            } 
			else {
                str += char;
            }
		}
		return str;
	}
	private readWhile(checker: Function): string {
		var str: string = "";
		while(!this.input.end() && checker(this.input.peek())) 
			str += this.input.next();
		return str;
	}
	private isSpace(char: string): boolean {
		return " \t\n\r".indexOf(char) >= 0;
	}
	private isNotSpace(char: string): boolean {
		return " \t\n\r".indexOf(char) < 0;
	}
	
	private isNotNewLine(char: string): boolean {
		return "\n\r".indexOf(char) < 0;
	}
	constructor(public readonly input: InputStream) {
	}

	public next(): Token {
		var token = this.current;
		this.current = new TokenEnd(this.input.position());
		return  (token instanceof TokenEnd) ? this.readNext() : token;
	}
	public peek(): Token {
		return this.current instanceof TokenEnd ? (this.current = this.readNext()) : this.current;
	}
	public end(): boolean {
		return this.peek() instanceof TokenEnd || this.stop;
	}
	public except = this.input.except;
}

function isIDStart(char: string): boolean {
	return /[a-z@_]/i.test(char);
}
function isMultyCommitStart(char: string): boolean {
	return char == "/*";
}
function isLineCommit(char: string): boolean {
	return char == "//";
}