import { Range } from "vscode";
import { TokenTypes } from "../parser/Token";
import { IToken } from "./IToken";

export class TokenPreprocessor extends IToken<string> {
	public readonly type = TokenTypes.macro;
	private what: string = "";
	private to = "";
	constructor(name: string, pos: Range, private macrValue: string = "") {
		super(pos, name);
		this.tryParseDefine();
	}
	private tryParseDefine() {
		if(this.value == "define") {
			var temp = this.macrValue.split(/\s+/);
			let ch = temp.at(0);
			if(!ch)
				return;
			if(temp.length >= 1) {
				this.what = ch;
			}
			if(temp.length > 1) {
				var str: string = this.macrValue.substring(ch.length);
				let p = 0;
				while(str[p] && " \t\n\r".indexOf(str[p]) >= 0) {
					p++;
				}
				this.to = str.substring(p);
			}
		}
		else if(this.value == "include") {
			this.what = this.macrValue;
		}
	}
	public getWhat(): string {
		return this.what;
	}
	public getTo(): string {
		return this.to;
	}
}