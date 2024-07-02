import { IVisitor } from "../../visitor/IVisitor";
import { Variable } from "../Variable";
import { BinarOperator } from "./BinarOperator";

export class AssigmentOperator extends BinarOperator
{
	name = "операртор присваения";
	
	public accept(visitor: IVisitor): void {
        visitor.visitAssigment(this);
    }
	
    constructor() {
        super("равно");
    }
}