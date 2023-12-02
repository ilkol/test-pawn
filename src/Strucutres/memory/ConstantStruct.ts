import { Range } from "vscode";
import { VarStruct } from "./VarStruct";
import { TokenStruct } from "../TokensStruct";
import { HasTagStruct } from "../../HasTagStruct";
import { TokenString } from "../../Tokens/literals/TokenString";

export class ConstantStruct extends VarStruct {
	constructor(public readonly variable: VarStruct, public readonly value: HasTagStruct | TokenString, pos: Range) {
		super(variable.name, pos);
	}
}