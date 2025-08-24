/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../../NodeList";
import { IAbstractCycle } from "./AbstractCycle";

export interface IDoWhileCycle extends IAbstractCycle {
	__type: NodeList.DoWhile;
}