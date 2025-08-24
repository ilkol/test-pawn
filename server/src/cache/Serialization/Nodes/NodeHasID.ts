import { Range } from "../types";
import { Node } from "./Node";

export interface NodeHasID extends Node {
	identifire: {
		text: string,
		pos: Range
	}
}