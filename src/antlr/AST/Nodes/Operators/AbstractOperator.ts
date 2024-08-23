import { Expresion } from "../Expresion";
import { Tag } from "../Tag";

export class AbstractOperator extends Expresion
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
	
}