/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../NodeList";
import { Node } from "./Node";
import { IStatement } from "./Statement";

export interface ICodeBlock extends Node {
	__type: NodeList.CodeBlock;
	statements: IStatement[];
}