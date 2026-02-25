import { IExpression } from "../Expression";
import { NodeHasID } from "../NodeHasID";
import { IRightValue } from "../RightValue";
import { NamedArgument } from "./NamedArgument";

export interface IFunctionCall extends IExpression, NodeHasID {
	arguments: (IRightValue | NamedArgument)[];
}