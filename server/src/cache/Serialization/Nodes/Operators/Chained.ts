import { IExpression } from "../Expression";
import { IBinarOperator } from "./BinarOperator";
import { IOperator } from "./Operator";

export interface IChainedOperator extends IOperator {
	operators: string[];
	operands: IExpression[];
}