import { IExpression } from "../Expression";
import { IOperator } from "./Operator";

export interface IBinarOperator extends IOperator {
	left?: IExpression;
}