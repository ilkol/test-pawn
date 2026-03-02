import { Range } from "../../../../types";
import { Expression } from "../Expresion";
import { AbstractOperator } from "./AbstractOperator";

export class ComaOperator extends AbstractOperator {
	constructor(public expressions: Expression[] = [], range: Range) {
		super(",")
		this.range = range;
	} 
}