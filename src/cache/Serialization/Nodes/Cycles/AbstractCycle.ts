import { IExpression } from "../Expression";
import { IStatement } from "../Statement";

export interface IAbstractCycle extends IStatement {
	condition?: IExpression;
	code?: IStatement;
}