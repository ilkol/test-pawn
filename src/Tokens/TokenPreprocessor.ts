import { Position, Range } from "vscode";
import { TokenTypes } from "../parser/Token";
import { IToken } from "./IToken";

export class TokenPreprocessor extends IToken<string> {
	public readonly type = TokenTypes.macro;
	
	// public skipStart: number = 0;
	// private what: string = "";
	// private to = "";


	constructor(word: string, pos: Range) {
		super(pos, word);
		// this.skipStart = start.character;
	}
	// private tryParseDefine() {
	// 	let sourceStr = this.macrValue;
		
	// 	if(this.value == "define") {
	// 		var temp = this.macrValue.split(/\s+/);
	// 		let ch = temp.at(0);
	// 		if(!ch)
	// 			return;
	// 		if(temp.length >= 1) {
	// 			this.what = ch;
	// 		}
	// 		if(temp.length > 1) {
	// 			var str: string = this.macrValue.substring(ch.length);
	// 			let p = 0;
	// 			while(str[p] && " \t\n\r".indexOf(str[p]) >= 0) {
	// 				p++;
	// 			}
	// 			this.to = str.substring(p);
	// 		}
	// 	}
	// 	else if(this.value == "include") {
	// 		// this.skipStart += sourceStr.search(this.macrValue);
	// 		this.what = this.macrValue;
	// 	}
	// }
	// public getWhat(): string {
	// 	return this.what;
	// }
	// public getTo(): string {
	// 	return this.to;
	// }

	// protected set macro(v: string) {
	// 	this.macrValue = v;
	// 	this.tryParseDefine();
	// }
}