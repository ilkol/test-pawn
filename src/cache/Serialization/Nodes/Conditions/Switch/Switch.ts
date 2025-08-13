import { IExpression } from "../../Expression";
import { IStatement } from "../../Statement";
import { ICase } from "./Case";
import { IDefault } from "./Default";

export interface ISwitch extends IStatement {
	condition?: IExpression;
	cases: ICase[];
	default?: IDefault;
}