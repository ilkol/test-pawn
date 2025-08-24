import { IVisitor } from "../../visitor/IVisitor";
import { AbstractStatement } from "../AbstractStatement";

export class Break extends AbstractStatement {
	name = "Break";

	public accept(visitor: IVisitor): void {
		
	}
}