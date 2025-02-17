import { DefaultTag } from "../DefaultTag";
import { Tag } from "../Tag";
import { IVisitor } from "../../visitor/IVisitor";
import { Literal } from "./Literal";

export class BoolLiteral extends Literal<boolean>
{
	name = "булево";
	constructor() {
		super();
		this.tag = new Tag(["bool"]);
	}

	public accept(visitor: IVisitor): void {
		visitor.visitBoolLiteral(this);
	}
	
	
}