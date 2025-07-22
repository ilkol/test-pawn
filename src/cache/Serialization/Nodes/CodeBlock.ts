/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../NodeList";
import { Node } from "./Node";

export interface ICodeBlock extends Node {
	__type: NodeList.CodeBlock;
}