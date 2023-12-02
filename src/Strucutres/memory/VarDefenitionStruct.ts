import { HasTagStruct } from "../../HasTagStruct";
import { AssignOperator } from "../operators/AssignOperator";
import { ArrayStruct } from "./ArrayStruct";
import { VarStruct } from "./VarStruct";

export class VarDefenitionStruct extends VarStruct {

	constructor(public readonly struct: VarStruct | ArrayStruct) {
		super(struct.name, struct.getPos(), struct.getTag());
	}

}