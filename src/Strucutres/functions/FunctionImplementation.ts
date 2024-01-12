import { Range } from "vscode";
import { AbstractStruct } from "../AbstractStruct";
import { CallFunctionStruct } from "./CallFunctionStruct";
import { FunctionDeclaration } from "./FunctionDeclaration";
import { SubProgrammStruct } from "../SubProgrammStruct";
import { isDefaultTag } from "../../utils";

type modifires = "" | "public" | "stock" | "publics:" | "forward"

export class FunctionImplementation extends CallFunctionStruct {
	protected _word = "";
	get word(): string {
		return this._word;
	}
	set word(value: string) {
		this._word = value;
	}

	constructor(funct: CallFunctionStruct, public readonly prog: SubProgrammStruct) {
		let newPos: Range = new Range(funct.pos.start, prog.getPos().end);

		super(funct.name, newPos, funct.args);
		if(isDefaultTag(funct.getTag()))
			this.tag = funct.getTag();
	}
}