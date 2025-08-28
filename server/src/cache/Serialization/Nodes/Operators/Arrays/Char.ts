/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../../../NodeList";
import { IBinarOperator } from "../BinarOperator";

export interface IArrayCharOperator extends IBinarOperator {
	__type: NodeList.ArrayChar;
}