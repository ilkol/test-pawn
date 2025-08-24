import { IVisitor } from "../../visitor/IVisitor";
import { AbstractStatement } from "../AbstractStatement";

export class Continue extends AbstractStatement {
	name = "Continue";

	public accept(visitor: IVisitor): void {
		
	}
}