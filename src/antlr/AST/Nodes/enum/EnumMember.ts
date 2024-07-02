import { VarDeclaration } from "../Variables/VarDeclaration";
import { VarOrFunctionDeclaration } from "../VarOrFunctionDeclaration";
import { IVisitor } from "../../visitor/IVisitor";

export class EnumMember extends VarOrFunctionDeclaration
{
	name = "член перечисления";

	private _value: number = 0;
	
	public accept(visitor: IVisitor): void {
		visitor.visitEnumMember(this);
	}
	public setValue(data: VarDeclaration): void {
		this.id = data.id;
		this.idPos = data.idPos;
		this.tag = data.tag;
	}

	public set value(v: number) {
		this._value = v;
	}
	public get value(): number {
		return this._value;
	}

}