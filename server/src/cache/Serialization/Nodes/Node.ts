/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../NodeList";
import { Range } from "../types";

export interface Node {
	__type: NodeList;
	pos: Range;
}