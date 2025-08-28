/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../NodeList";
import { IDeclaration } from "./Declaration";
import { Node } from "./Node";

export interface IDeclarations extends Node {
	__type: NodeList.Declarations,
	declarations: IDeclaration[],
}