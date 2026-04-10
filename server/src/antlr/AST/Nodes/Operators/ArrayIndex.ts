import { Serialization } from "../../../../cache/Serialization";
import { Symbols } from "../../../../SymbolSystem";
import { IVisitor } from "../../visitor/IVisitor";
import { BinarOperator } from "./BinarOperator";

export class ArrayIndex extends BinarOperator
{
	name = "операртор индекс массива";

	public depth: number = 0;
	
	public accept(visitor: IVisitor): void {
		visitor.visitOperatorArrayIndex(this);
	}
	
	public readonly isLValue: boolean = true;
	public symbol: Symbols.Enum | Symbols.EnumMember | Symbols.Function | Symbols.Parameter | Symbols.Variable | undefined

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