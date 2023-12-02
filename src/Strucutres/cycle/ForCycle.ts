import { SubProgrammStruct } from "../SubProgrammStruct";
import { TokenStruct } from "../TokensStruct";
import { AbstractCycle } from "./AbstractCycle";

export class ForCycle extends AbstractCycle {
	constructor(cond: TokenStruct, public readonly preProg: SubProgrammStruct, public readonly postProg: SubProgrammStruct, prog: SubProgrammStruct) {
		super(cond, prog);
	}
}