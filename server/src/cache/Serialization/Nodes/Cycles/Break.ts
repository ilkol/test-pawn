/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../../NodeList";
import { IStatement } from "../Statement";

export interface IBreak extends IStatement {
	__type: NodeList.Break;
}