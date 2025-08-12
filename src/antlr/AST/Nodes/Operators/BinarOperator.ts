import { Expression } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";
import { Serialization } from "../../../../cache/Serialization";

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

	toJSON(): Serialization.Nodes.Operators.Binar {
		return {
			...super.toJSON(),
			left: this.left?.toJSON(),
			right: this.right?.toJSON(),
		};
	}
}