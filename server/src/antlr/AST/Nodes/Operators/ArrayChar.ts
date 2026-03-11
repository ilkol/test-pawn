import { Serialization } from "../../../../cache/Serialization";
import { IVisitor } from "../../visitor/IVisitor";
import { BinarOperator } from "./BinarOperator";

export class ArrayChar extends BinarOperator
{
	name = "операртор символ массива";
	
	public accept(visitor: IVisitor): void {
		visitor.visitOperatorArrayChar(this);
	}
	
	public readonly isLValue: boolean = true;

	constructor() {
		super();
		this.operator = "{}";
	}

	static fromJSON(json: Serialization.Nodes.Operators.Arrays.Char): ArrayChar {
		const instance = new ArrayChar();
		instance.prepareFromJSON(json);
		return instance;
	}

	toJSON(): Serialization.Nodes.Operators.Arrays.Char {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.ArrayChar,
		};
	}
}