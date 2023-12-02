import { Range } from "vscode";
import { AbstractStruct } from "../AbstractStruct";
import { TokenStruct } from "../TokensStruct";
import { SubProgrammStruct } from "../SubProgrammStruct";
import { Token } from "../../parser/Token";

export class CaseStruct extends AbstractStruct {
	public isDefault = false;
	constructor(public readonly prog: SubProgrammStruct, pos: Range, public readonly caseVal?: Token) {
		super(pos);
		if(!caseVal)
			this.isDefault = true;
	}
	
}