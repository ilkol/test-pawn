import { Serialization } from "../../../../cache/Serialization";
import { Expression } from "../Expresion";

export abstract class Literal<T> extends Expression
{
	name = "литерал";
	protected _value!: T;
	public get value() : T {
		return this._value;
	}
	public set value(v : T) {
		this._value = v;
	}	
	public get isConstExpr(): boolean {
		 return true;
	}

	toJSON(): Serialization.Nodes.Literal<T> {
		return {
			...super.toJSON(),
			value: this.value
		};
	}

	protected prepareFromJSON(json: Serialization.Nodes.Literal<T>): void {
		super.prepareFromJSON(json);
		this.value = json.value;
	}
}