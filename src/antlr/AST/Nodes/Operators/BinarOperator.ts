import { Expression } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";
import { Serialization } from "../../../../cache/Serialization";
import { OperatorPlus } from "./OperatorPlus";
import { OperatorMinus } from "./OperatorMinus";

export class BinarOperator extends AbstractOperator
{
	name = "бинарный оператор";
	protected _left: Expression | undefined;
	
	constructor() {
		super();	
	}

	public accept(visitor: IVisitor): void {
		visitor.visitBinarOperator(this);
	}

	
	public get left() : Expression | undefined {
		return this._left;
	}
	
	public get right() : Expression | undefined {
		return this.expresion;
	}

	public set left(v: Expression) {
		this._left = v;
	}
	
	public set right(v: Expression) {
		this.expresion = v;
	}

	static fromJSON(json: Serialization.Nodes.Operators.Binar): BinarOperator {
		let instance: BinarOperator = new BinarOperator();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.Operators.Binar): void {
		super.prepareFromJSON(json);
		this._left = Serialization.Deserialize.object(json.left);
	}

	toJSON(): Serialization.Nodes.Operators.Binar {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.BinarOperator,
			left: this.left?.toJSON(),
		};
	}
}