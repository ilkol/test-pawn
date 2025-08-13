/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../../../NodeList";
import { IBinarOperator } from "../BinarOperator";

export interface IArrayIndexOperator extends IBinarOperator {
	__type: NodeList.ArrayIndex;
}