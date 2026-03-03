import { Expression } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";
import { Tag } from "../Tag";
import { Serialization } from "../../../../cache/Serialization";

export class ChainedOperator extends AbstractOperator
{
	name = "сцепленные операторы сравнения";
	
	public operands: Expression[] = [];
	private operators: string[] = [];
	constructor() {
		super();	
		this.tag = new Tag("bool");
	}

	public accept(visitor: IVisitor): void {
		// for(let operator of this.operators) {
		// 	visitor.visitBinarOperator(operator);
		// }
	}

	public pushOperator(operator: string): void {
		// const last = this.getLastLeft();
		// if(last) {
			// operator.left = last;
		// }
		this.operators.push(operator);
	}
	
	// private getLastLeft(): Expression|undefined {
	// 	const length = this.operators.length;
	// 	if(length < 1) {
	// 		return undefined;
	// 	}
	// 	return this.operators[length - 1];
	// }

	public set expresion(v: Expression) {
		throw new Error("Chained operator hasn't expression");
	}
	// public setFirstLeft(value: Expression): void {
	// 	if(!this.operators.length) {
	// 		return;
	// 	}
	// 	this.operators[0].left = value;
	// }

	toJSON(): Serialization.Nodes.Operators.Chained {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.ChainedOperator,
			operators: this.operators,
			operands: this.operands.map(op => op.toJSON()),
		};
	}
	static fromJSON(json: Serialization.Nodes.Operators.Chained): ChainedOperator {
		const instance = new ChainedOperator();
		instance.prepareFromJSON(json);
		instance.operators = json.operators;
		instance.operands = json.operands.map(op => Serialization.Deserialize.object<Expression>(op) );

		return instance;
	}
}