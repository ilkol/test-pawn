import { SimplePreprocessorToken } from "../../Tokens/preprocessor/SimplePreprocessorToken";
import { PreprocessorStruct } from "./PreprocessorStruct";

export class SimplePreprocessorStruct extends PreprocessorStruct {
	constructor(code: SimplePreprocessorToken) {
		super(code);
	}
}