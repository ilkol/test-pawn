import { VarDeclaration } from "./VarDeclaration";

export class VariableInit extends VarDeclaration
{
	name = "инициализация переменной";

	private _value: any;
	
	
	public get value() : any {
		return this._value;
	}
	
	public set value(v : any) {
		this._value = v;
	}
	
	private _var: VarDeclaration|undefined;
	public get var() : VarDeclaration|undefined {
		return this._var;
	}
	
	public set var(v : VarDeclaration) {
		this._var = v;
	}
	
}