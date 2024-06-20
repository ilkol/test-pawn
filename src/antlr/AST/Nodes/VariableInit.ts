import { VarDeclaration } from "./VarDeclaration";

export class VariableInit extends VarDeclaration
{
	private _value: any;
	
	
	public get value() : any {
		return this._value;
	}
	
	public set value(v : any) {
		this._value = v;
	}
	
}