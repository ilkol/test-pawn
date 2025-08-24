import { Serialization } from "../../../../cache/Serialization";
import { IVisitor } from "../../visitor/IVisitor";
import { Cycle } from "./Cycle";

export class WhileCycle extends Cycle
{
    name = "цикл while";
    
    public accept(visitor: IVisitor): void {
        visitor.visitWhile(this);
    }    


	static fromJSON(json: Serialization.Nodes.Cycles.While): WhileCycle {
		const instance = new WhileCycle();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.Cycles.While): void {
		super.prepareFromJSON(json);
	}

	toJSON(): Serialization.Nodes.Cycles.While {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.While,
		};
	}
		
}