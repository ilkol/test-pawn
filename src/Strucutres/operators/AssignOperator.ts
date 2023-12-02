import { HasTagStruct } from "../../HasTagStruct";
import { TokenString } from "../../Tokens/literals/TokenString";
import { SubProgrammStruct } from "../SubProgrammStruct";
import { FunctionDeclaration } from "../functions/FunctionDeclaration";
import { VarDefenitionStruct } from "../memory/VarDefenitionStruct";
import { VarStruct } from "../memory/VarStruct";
import { BinaryOperator } from "./BinaryOperator";

export class AssignOperator extends BinaryOperator {
	constructor(public readonly left: VarStruct | VarDefenitionStruct | FunctionDeclaration, right: HasTagStruct | TokenString) {
		super("=", left, right);
	}
}