import { DefaultTag } from "../DefaultTag";
import { IVisitor } from "../../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";
import { Serialization } from "../../../../cache/Serialization";

export class HexLiteral extends NumberLiteral<string>
{
	name = "шеснадцетиричное число";
	constructor() {
		super(new DefaultTag());
	}

	public accept(visitor: IVisitor): void {
		// visitor.visitIntLiteral(this);
	}
	
	toJSON(): Serialization.Nodes.Literal<string> {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.HexLiteral
		};
	}

	static fromJSON(json: Serialization.Nodes.Literal<string>): HexLiteral {
		const instance = new HexLiteral();
		instance.prepareFromJSON(json);
		return instance;
	}
	
}