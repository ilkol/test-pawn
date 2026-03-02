import { IExpression } from "../Expression";
import { IOperator } from "./Operator";

export interface ITernarOperator extends IOperator {
	onTrue?: IExpression;
	onFalse?: IExpression;
}