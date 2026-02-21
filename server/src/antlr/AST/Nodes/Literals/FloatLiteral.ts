import { Tag } from "../Tag";
import { IVisitor } from "../../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";
import { Serialization } from "../../../../cache/Serialization";

export class FloatLiteral extends NumberLiteral<number>
{
	name = "вещественное число";
	constructor() {
		const tag = new Tag("Float");
		tag.id = "Float";

		super(tag);
	}

	public accept(visitor: IVisitor): void {
		visitor.visitLiteral(this);
	}

	toJSON(): Serialization.Nodes.Literal<number> {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.FloatLiteral,
		};
	}

	static fromJSON(json: Serialization.Nodes.Literal<number>): FloatLiteral {
		const instance = new FloatLiteral();
		instance.prepareFromJSON(json);
		return instance;
	}
	
}