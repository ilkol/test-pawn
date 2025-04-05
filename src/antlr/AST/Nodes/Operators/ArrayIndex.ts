import { IVisitor } from "../../visitor/IVisitor";
import { BinarOperator } from "./BinarOperator";

export class ArrayIndex extends BinarOperator
{
	name = "операртор индекс массива";
	
	public accept(visitor: IVisitor): void {
		visitor.visitOperatorArrayIndex(this);
	}
	
	constructor() {
		super();
		this.operator = "[]";
	}
}