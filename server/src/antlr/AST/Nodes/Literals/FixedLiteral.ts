import { Tag } from "../Tag";
import { IVisitor } from "../../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";
import { Serialization } from "../../../../cache/Serialization";

export class FixedLiteral extends NumberLiteral<string>
{
	name = "Fixed число";
	constructor() {
		const tag = new Tag("Real");

		super(tag);
	}

	public accept(visitor: IVisitor): void {

	}

	toJSON(): Serialization.Nodes.Literal<string> {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.FloatLiteral,
		};
	}

	static fromJSON(json: Serialization.Nodes.Literal<string>): FixedLiteral {
		const instance = new FixedLiteral();
		instance.prepareFromJSON(json);
		return instance;
	}
	
}