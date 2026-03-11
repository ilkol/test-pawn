import { Serialization } from "../../../../cache/Serialization";
import { IVisitor } from "../../visitor/IVisitor";
import { BinarOperator } from "./BinarOperator";

export class ArrayIndex extends BinarOperator
{
	name = "операртор индекс массива";
	
	public accept(visitor: IVisitor): void {
		visitor.visitOperatorArrayIndex(this);
	}
	
	public readonly isLValue: boolean = true;

	constructor() {
		super();
		this.operator = "[]";
	}
	
	static fromJSON(json: Serialization.Nodes.Operators.Arrays.Index): ArrayIndex {
		let instance: ArrayIndex = new ArrayIndex();
		instance.prepareFromJSON(json);
		return instance;
	}

	toJSON(): Serialization.Nodes.Operators.Binar {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.ArrayIndex,
		};
	}
}