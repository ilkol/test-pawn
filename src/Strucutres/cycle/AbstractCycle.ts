import { Range } from "vscode";
import { AbstractStruct } from "../AbstractStruct";
import { SubProgrammStruct } from "../SubProgrammStruct";
import { TokenStruct } from "../TokensStruct";

export class AbstractCycle extends AbstractStruct {
	constructor(public readonly cond: TokenStruct, public readonly prog: SubProgrammStruct) {
		let pos = new Range(cond.getPos().start, prog.getPos().end);
		super(pos);
	}
}