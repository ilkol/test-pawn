import { Serialization } from "../../../../cache/Serialization";
import { IVisitor } from "../../visitor/IVisitor";
import { Expression } from "../Expresion";
import { Ellipse } from "../Operators/Ellipse";
import { Literal } from "./Literal";

export class ArrayInit extends Literal<any[]> {
	protected _value: (Ellipse | Expression)[] = [];	

	public constExpr: number = 1;

	public get isConstExpr(): boolean {
		return false;
	}

	public accept(visitor: IVisitor): void {
		visitor.visitArrayInit(this);
	}

	toJSON(): Serialization.Nodes.Literal<any[]> {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.ArrayInit,
			value: this.value.map(val => val.toJSON())
		};
	}

	static fromJSON(json: Serialization.Nodes.Literal<any[]>): ArrayInit {
		const instance = new ArrayInit();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.Literal<any[]>): void {
		super.prepareFromJSON(json);
		this.value = this.value.map(val => Serialization.Deserialize.object(val));
	}
}