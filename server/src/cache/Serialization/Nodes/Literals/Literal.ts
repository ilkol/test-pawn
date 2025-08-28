import { IExpression } from "../Expression";

export interface ILiteral<T> extends IExpression {
	value: T
}