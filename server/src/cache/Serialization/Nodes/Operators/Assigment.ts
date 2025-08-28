/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../../NodeList";
import { IVariable } from "../Variable/Variable";
import { IBinarOperator } from "./BinarOperator";

export interface IAssigmentOperator extends IBinarOperator {
	__type: NodeList.Assigment;
	left?: IVariable;
}