import { Range } from "vscode";
import { HasTagStruct } from "../../HasTagStruct";
import { AbstractStruct } from "../AbstractStruct";
import { AssignOperator } from "../operators/AssignOperator";
import { ArrayStruct } from "./ArrayStruct";
import { VarDefenitionStruct } from "./VarDefenitionStruct";
import { VarStruct } from "./VarStruct";

export class VarsDefenitionsStruct extends AbstractStruct {

	constructor(public readonly struct: Array<VarDefenitionStruct | AssignOperator>) {
		super(new Range(0,0,0,0));
	}

}