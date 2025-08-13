import { Serialization } from "../../../../cache/Serialization";
import { Literal } from "./Literal";

export class ArrayInit extends Literal<any[]> {
	protected _value: any[] = [];	
	

	toJSON(): Serialization.Nodes.Literal<any[]> {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.ArrayInit
		};
	}

	static fromJSON(json: Serialization.Nodes.Literal<any[]>): ArrayInit {
		const instance = new ArrayInit();
		instance.prepareFromJSON(json);
		return instance;
	}
}