import { Range } from "vscode";

export class AbstractStruct {
	constructor(public readonly pos: Range) {

	}
	public getPos(): Range {
		return this.pos;
	}
}