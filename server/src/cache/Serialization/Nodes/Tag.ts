/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../NodeList";
import { NodeHasID } from "./NodeHasID";

export interface ITag extends NodeHasID {
	__type: NodeList.Tag;
	tags: string[];
}