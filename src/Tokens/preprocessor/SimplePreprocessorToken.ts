import { Range } from "vscode";
import { TokenPreprocessor } from "../TokenPreprocessor";

export class SimplePreprocessorToken extends TokenPreprocessor {
	constructor(name: string, pos: Range) {
		super(name, pos);
	}
}