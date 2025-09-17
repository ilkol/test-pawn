import { Serialization } from "../../../../cache/Serialization";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractStatement } from "../AbstractStatement";

export class Break extends AbstractStatement {
	name = "Break";

	public accept(visitor: IVisitor): void {
		
	}

	toJSON(): Serialization.Nodes.Node {
			return {
				...super.toJSON(),
				// eslint-disable-next-line @typescript-eslint/naming-convention
				__type: Serialization.NodeList.Break,
			};
	}
	static fromJSON(json: Serialization.Nodes.Cycles.Break): Break {
		const instance = new Break();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.Cycles.Break) {
		super.prepareFromJSON(json);
	}
	
}