import { IVisitor } from "../../visitor/IVisitor";
import { BinarOperator } from "./BinarOperator";

export class ArrayChar extends BinarOperator
{
	name = "операртор символ массива";
	
	public accept(visitor: IVisitor): void {
		visitor.visitOperatorArrayChar(this);
	}
	
	constructor() {
		super();
		this.operator = "{}";
	}
}