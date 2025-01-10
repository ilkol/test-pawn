import { Expresion } from "../Expresion";

export abstract class Literal<T> extends Expresion
{
	name = "литерал";
	protected _value!: T;
	public get value() : T {
		return this._value;
	}
	public set value(v : T) {
		this._value = v;
	}	
}