import { Position, Range } from "vscode";
import { TokenPreprocessor } from "../TokenPreprocessor";

export class IncludeToken extends TokenPreprocessor {

	private _path: string;

	constructor(path: string, pos: Range, private startPath: Position) {
		super("include", pos);

		this._path = path;
	}

	get path(): string {
		return this._path;
	}
	get start(): Position {
		return this.startPath;
	}
}