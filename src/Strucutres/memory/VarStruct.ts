import { Range } from "vscode";
import { AbstractStruct } from "../AbstractStruct";
import { HasTagStruct } from "../../HasTagStruct";
import { EnumStruct } from "./EnumStruct";

export class VarStruct extends HasTagStruct {
	private enumerate: EnumStruct | undefined = undefined;
	constructor(public readonly name: string, pos: Range, type: string = "int") {
		super(pos);
		this.tag = type;
	}
	public setEnum(value: EnumStruct) {
		this.enumerate = value;
	}
	public getEnum(): EnumStruct | undefined {
		return this.enumerate;
	}
}