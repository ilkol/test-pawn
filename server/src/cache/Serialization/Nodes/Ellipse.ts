/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../NodeList";
import { Node } from "./Node";
import { ITag } from "./Tag";

export interface IEllipse extends Node {
	__type: NodeList.Ellipse;
	tags: ITag[] | ITag | undefined;
}