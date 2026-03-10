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

	public set value(v : string) {
		super.value = v;
		this.constExpr = this.getRowInt32();
	}

	getRowInt32(): number {
		const buffer = new ArrayBuffer(4); // 4 байта для float32
		const floatView = new Float32Array(buffer);
		const intView = new Int32Array(buffer);

		floatView[0] = Number(this.value);
		return intView[0]; 
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