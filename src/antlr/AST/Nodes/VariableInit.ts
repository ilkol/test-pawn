import { IVisitor } from "../visitor/IVisitor";
import { RightValue } from "./RightValue";
import { VarDeclaration } from "./VarDeclaration";

export class VariableInit extends VarDeclaration
{
	name = "инициализация переменной";

	private _value: any;
	
	public accept(visitor: IVisitor): void {
		visitor.visitVarInit(this);
	}
	
	public get rightValue() : RightValue {
		return this._value;
	}
	
	public set rightValue(v : RightValue) {
		this._value = v;
	}
	
	private _var: VarDeclaration|undefined;
	public get var() : VarDeclaration|undefined {
		return this._var;
	}
	
	public set var(v : VarDeclaration) {
		this._var = v;
		this.id = v.id;
		this.idPos = v.idPos;
	}
	
}