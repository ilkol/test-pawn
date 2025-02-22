import { IVisitor } from "../../visitor/IVisitor";
import { Statement } from "../Statement";

export class Break extends Statement {
	name = "Break";

	public accept(visitor: IVisitor): void {
		
	}
}