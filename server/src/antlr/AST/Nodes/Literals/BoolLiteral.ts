import { DefaultTag } from "../DefaultTag";
import { Tag } from "../Tag";
import { IVisitor } from "../../visitor/IVisitor";
import { Literal } from "./Literal";
import { Serialization } from "../../../../cache/Serialization";

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
	
	toJSON(): Serialization.Nodes.Literal<boolean> {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.BoolLiteral,
		};
	}

	static fromJSON(json: Serialization.Nodes.Literal<boolean>): BoolLiteral {
		const instance = new BoolLiteral();
		instance.prepareFromJSON(json);
		return instance;
	}
	
}