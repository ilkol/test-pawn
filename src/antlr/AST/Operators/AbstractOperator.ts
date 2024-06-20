import { Expresion } from "../Nodes/Expresion";

export abstract class AbstractOperator extends Expresion
{
	private _operator: string = "";
	
	public get operator(): string {
		return this._operator;
	}
	public set operator(value: string) {
		this._operator = value;
	}

	
}