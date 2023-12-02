import { Range } from "vscode";
import { AbstractStruct } from "./AbstractStruct";
import { TokenPreprocessor } from "../Tokens/TokenPreprocessor";

export class PreprocessorScrut extends AbstractStruct {
	constructor(public readonly code: TokenPreprocessor) {
		super(code.getPos());

	}
}