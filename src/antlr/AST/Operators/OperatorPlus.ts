import { IVisitor } from "../visitor/IVisitor";
import { BinarOperator } from "./BinarOperator";

export class OperatorPlus extends BinarOperator
{
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	
}