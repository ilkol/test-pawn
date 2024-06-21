import { Range } from "vscode";
import { AbstractStruct } from "../AbstractStruct";
import { CallFunctionStruct } from "./CallFunctionStruct";
import { isDefaultTag } from "../../utils";

// type modifires = "" | "public" | "stock" | "publics:" | "forward"

export class FunctionDeclaration extends CallFunctionStruct {
	protected _word = "";
	get word(): string {
		return this._word;
	}
	set word(value: string) {
		this._word = value;
	}

	constructor(funct: CallFunctionStruct | FunctionDeclaration) {
		super(funct.name, funct.getPos(), funct.args);
		if(isDefaultTag(funct.getTag()))
			this.tag = funct.getTag();
	}

}