import { DefaultTag } from "../DefaultTag";
import { IVisitor } from "../../visitor/IVisitor";
import { NumberLiteral } from "./NumberLiteral";
import { Serialization } from "../../../../cache/Serialization";
import { Expression } from "../Expresion";

export class IntLiteral extends NumberLiteral<number>
{
	name = "целое число";
	constructor() {
		super(new DefaultTag());
	}

	public accept(visitor: IVisitor): void {
		visitor.visitLiteral(this);
	}

	public set value(v : number) {
		super.value = v;
		this.constExpr = v;
	}	
	public get value(): number {
		return super.value;
	}	
	

	toJSON(): Serialization.Nodes.Literal<number> {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.IntLiteral
		};
	}

	static fromJSON(json: Serialization.Nodes.Literal<number>): IntLiteral {
		const instance = new IntLiteral();
		instance.prepareFromJSON(json);
		return instance;
	}
}