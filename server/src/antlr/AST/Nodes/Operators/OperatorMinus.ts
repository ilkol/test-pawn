import { IVisitor } from "../../visitor/IVisitor";
import { BinarOperator } from "./BinarOperator";

export class OperatorMinus extends BinarOperator
{
	name = "операртор вычитания";
	
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	
}