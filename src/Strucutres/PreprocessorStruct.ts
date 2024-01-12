import { Range, Uri } from "vscode";
import { AbstractStruct } from "./AbstractStruct";
import { TokenPreprocessor } from "../Tokens/TokenPreprocessor";

export class PreprocessorScrut extends AbstractStruct {
	private _included:boolean = false;
	private _file:Uri | undefined = undefined;
	
	constructor(public readonly code: TokenPreprocessor) {
		super(code.getPos());

	}
	set included(value: boolean) {
		this._included = value;
	}
	get included():boolean {
		return this._included;
	}
	set file(value: Uri) {
		this._file = value;
	}
	get file():Uri | undefined {
		return this._file;
	}
}