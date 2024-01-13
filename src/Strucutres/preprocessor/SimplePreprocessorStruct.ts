import { TokenPreprocessor } from "../../Tokens/TokenPreprocessor";
import { PreprocessorStruct } from "./PreprocessorStruct";

export class SimplePreprocessorStruct extends PreprocessorStruct {
	constructor(code: TokenPreprocessor) {
		super(code);
	}
}