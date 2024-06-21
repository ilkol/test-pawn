import { Expresion } from "../Expresion";

export abstract class AbstractOperator extends Expresion
{
	name = "оператор";

	private _operator: string = "";
	
	public get operator(): string {
		return this._operator;
	}
	public set operator(value: string) {
		this._operator = value;
	}

	
}