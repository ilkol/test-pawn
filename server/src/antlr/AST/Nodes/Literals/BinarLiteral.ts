import { DefaultTag } from "../DefaultTag";
import { IVisitor } from "../../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";
import { Serialization } from "../../../../cache/Serialization";

export class BinarLiteral extends NumberLiteral<string>
{
	name = "довичное число";
	constructor() {
		super(new DefaultTag());
	}

	public set value(v : string) {
		super.value = v;
		this.constExpr = parseInt(v, 2);
	}

	public accept(visitor: IVisitor): void {
		// visitor.visitIntLiteral(this);
	}
	
	toJSON(): Serialization.Nodes.Literal<string> {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.BinaryLiteral,
		};
	}

	static fromJSON(json: Serialization.Nodes.Literal<string>): BinarLiteral {
		const instance = new BinarLiteral();
		instance.prepareFromJSON(json);
		return instance;
	}
	
}