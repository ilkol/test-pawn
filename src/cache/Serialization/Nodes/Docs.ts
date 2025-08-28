/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../NodeList";
import { Node } from "./Node";

export interface IDocs extends Node {
	__type: NodeList.Docs;
	text: string;
}