/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../../NodeList";
import { IAbstractCycle } from "./AbstractCycle";

export interface IWhileCycle extends IAbstractCycle {
	__type: NodeList.While;
}