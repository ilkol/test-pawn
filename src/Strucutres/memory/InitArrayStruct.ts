import { Range } from "vscode";
import { VarStruct } from "./VarStruct";
import { TokenStruct } from "../TokensStruct";
import { ArrayStruct } from "./ArrayStruct";
import { SubProgrammStruct } from "../SubProgrammStruct";

export class InitArrayStruct extends ArrayStruct {
	constructor(name: ArrayStruct, public readonly value: SubProgrammStruct) {
		super(name, name.pos, name.getSize()[0]);
		this.define = true;
		this.size = name.getSize();
		// this.extend(size);
	}
}