import { NodeList } from "../../NodeList";
import { IExpression } from "../Expression";
import { IOperator } from "./Operator";

export interface ITernarOperator extends IOperator {
	__type: NodeList.TernarOperator;
	onTrue?: IExpression;
	onFalse?: IExpression;
}