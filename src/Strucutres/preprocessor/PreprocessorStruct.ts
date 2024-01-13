import { AbstractStruct } from "../AbstractStruct";
import { TokenPreprocessor } from "../../Tokens/TokenPreprocessor";

export class PreprocessorStruct extends AbstractStruct {

	/**
	 * Комманда препроцессора
	 */
	public readonly word: string;

	constructor(code: TokenPreprocessor) {
		super(code.getPos());

		this.word = code.getValue();
	}
}