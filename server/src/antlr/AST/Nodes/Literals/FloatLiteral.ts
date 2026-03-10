import { Tag } from "../Tag";
import { IVisitor } from "../../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";
import { Serialization } from "../../../../cache/Serialization";

export class FloatLiteral extends NumberLiteral<number>
{
	name = "вещественное число";
	constructor() {
		const tag = new Tag("Float");
		tag.id = "Float";

		super(tag);
	}
	public set value(v : number) {
		super.value = v;
		this.constExpr = this.getRowInt32();
	}

	getRowInt32(): number {
		const buffer = new ArrayBuffer(4); // 4 байта для float32
		const floatView = new Float32Array(buffer);
		const intView = new Int32Array(buffer);

		floatView[0] = this.value;
		return intView[0]; 
	}

	public accept(visitor: IVisitor): void {
		visitor.visitLiteral(this);
	}

	toJSON(): Serialization.Nodes.Literal<number> {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.FloatLiteral,
		};
	}

	static fromJSON(json: Serialization.Nodes.Literal<number>): FloatLiteral {
		const instance = new FloatLiteral();
		instance.prepareFromJSON(json);
		return instance;
	}
	
}