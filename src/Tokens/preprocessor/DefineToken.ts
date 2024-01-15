import { Position, Range } from "vscode";
import { TokenPreprocessor } from "../TokenPreprocessor";

export class DefineToken extends TokenPreprocessor {

	private _what:string = "";
	private _to:string = "";
	private startReplace: Position;

	constructor(text: string, pos: Range, private startMacro: Position) {
		super("define", pos);

		let space = text.search(/\s/);
		let newLine = text.indexOf("\\");
		if(space == -1 && newLine == -1) {
			this.startReplace = startMacro;
			this._what = text;
		}
		else {
			let startPos
			if(space != -1 && newLine != -1)
				startPos = space > newLine ? newLine : space;
			else startPos = space != -1 ? space : newLine;
			
			this._what = text.substring(0, startPos);
			this._to = text.substring(startPos + 1);

			
			this.startReplace = new Position(startMacro.line + (space > newLine ? 1 : 0), startPos + 1);
		}

		
	}

	get what(): string {
		return this._what;
	}
	get to(): string {
		return this._to;
	}
	
}