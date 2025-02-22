import { IVisitor } from "../../visitor/IVisitor";
import { Statement } from "../Statement";

export class Continue extends Statement {
	name = "Continue";

	public accept(visitor: IVisitor): void {
		
	}
}