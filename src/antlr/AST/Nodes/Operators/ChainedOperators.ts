import { Expression } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";
import { BinarOperator } from "./BinarOperator";
import { Tag } from "../Tag";

export class ChainedOperator extends AbstractOperator
{
	name = "сцепленные операторы сравнения";
	
	private operators: BinarOperator[] = [];
	private cur?: BinarOperator = undefined;
	constructor() {
		super();	
		this.tag = new Tag(["bool"]);
	}

	public accept(visitor: IVisitor): void {
		for(let operator of this.operators) {
			visitor.visitBinarOperator(operator);
		}
	}

	public push(operator: BinarOperator): void {
		const last = this.getLastLeft();
		if(last) {
			operator.left = last;
		}
		this.cur = operator;
		this.operators.push(operator);
	}
	
	private getLastLeft(): Expression|undefined {
		const length = this.operators.length;
		if(length < 1) {
			return undefined;
		}
		return this.operators[length - 1];
	}

	public set expresion(v: Expression) {
		if(!this.cur) {
			return;
		}
		this.cur.right = v;
	}
	public setFirstLeft(value: Expression): void {
		if(!this.operators.length) {
			return;
		}
		this.operators[0].left = value;
	}
}