import { Serialization } from "../../../../cache/Serialization";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractStatement } from "../AbstractStatement";

export class Continue extends AbstractStatement {
	name = "Continue";

	public accept(visitor: IVisitor): void {
		
	}

	toJSON(): Serialization.Nodes.Node {
			return {
				...super.toJSON(),
				// eslint-disable-next-line @typescript-eslint/naming-convention
				__type: Serialization.NodeList.Continue,
			};
	}
	static fromJSON(json: Serialization.Nodes.Cycles.Continue): Continue {
		const instance = new Continue();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.Cycles.Continue) {
		super.prepareFromJSON(json);
	}
}