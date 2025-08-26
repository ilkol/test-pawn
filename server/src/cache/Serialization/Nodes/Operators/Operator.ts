import { IExpression } from "../Expression";

export interface IOperator extends IExpression {
	operator: string;
}