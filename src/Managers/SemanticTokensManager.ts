import { Range } from "vscode";

export interface Token {
	pos: Range;
	type: string;
	modifers: string[] | undefined;
}
export class SemanticTokensManager {
	private _tokens: Token[] = [];
	public addToken(pos: Range, type: string, modifers: string[] | undefined = undefined) {
		this._tokens.push({pos, type, modifers});
	}
	public refresh() {
		this._tokens = [];
	}
	get tokens(): Token[] {
		return this._tokens;
	}
}