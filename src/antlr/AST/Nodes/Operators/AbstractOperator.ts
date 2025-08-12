import { Serialization } from "../../../../cache/Serialization";
import { Expression } from "../Expresion";
import { Tag } from "../Tag";

export class AbstractOperator extends Expression
{
	name = "оператор";
	
	public get operator(): string {
		return this._operator;
	}
	public set operator(value: string) {
		this._operator = value;
	}

	constructor(private _operator: string = "") {
		super();
		switch(_operator) {
			case "!": {
				// this.tag = new Tag();
				this.tag.tags = ["bool"];
			}
		}
	}

	toJSON(): Serialization.Nodes.Operators.Operator {
		return {
			...super.toJSON(),
			operator: this.operator, 
		};
	}

	protected prepareFromJSON(json: Serialization.Nodes.Operators.Operator): void {
		super.prepareFromJSON(json);
		this.operator = this.operator;
	}
	
}