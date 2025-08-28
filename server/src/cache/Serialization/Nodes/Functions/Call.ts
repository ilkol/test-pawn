import { IExpression } from "../Expression";
import { NodeHasID } from "../NodeHasID";
import { IRightValue } from "../RightValue";

export interface IFunctionCall extends IExpression, NodeHasID {
	arguments: IRightValue[];
}