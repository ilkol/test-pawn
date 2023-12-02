import { SubProgrammStruct } from "../SubProgrammStruct";
import { TokenStruct } from "../TokensStruct";
import { AbstractCycle } from "./AbstractCycle";

export class WhileCycle extends AbstractCycle {
	constructor(cond: TokenStruct, prog: SubProgrammStruct) {
		super(cond, prog);
	}
}