import { Range } from "../../types";
import { PreprocessorDirective } from "./PreprocessorDirective";

export class Error extends PreprocessorDirective
{
	constructor(range: Range, public readonly message: string, public readonly type: Error.Type, startIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);
	}
}

export namespace Error {
	export enum Type {
		Error,
		Wawrning
	}
}