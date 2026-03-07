import { Serialization } from "../../../cache/Serialization";
import { IVisitor } from "../visitor/IVisitor";
import { Expression } from "./Expresion";

export class CompoundExpression extends Expression {
	name = "compound expression";
	
	private expressions: Expression[] = [];

	public accept(visitor: IVisitor): void {
		this.expressions.forEach(exp => exp.accept(visitor));
	}

	add(exp: Expression) {
		this,this.expressions.push(exp);
		this.exp = exp;
	}

	toJSON(): Serialization.Nodes.CompoundExpression {
		return {
			...super.toJSON(),
			__type: Serialization.NodeList.CompoundExpression,
			expressions: this.expressions.map(exp => exp.toJSON()),
		};
	}

	static fromJSON(json: Serialization.Nodes.CompoundExpression): CompoundExpression {
		const instance = new CompoundExpression();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.CompoundExpression): void {
		super.prepareFromJSON(json);
		this.expressions = <Expression[]>json.expressions.map(Serialization.Deserialize.object);
	}
}