/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../../NodeList";
import { IStatement } from "../Statement";

export interface IContinue extends IStatement {
	__type: NodeList.Continue;
}