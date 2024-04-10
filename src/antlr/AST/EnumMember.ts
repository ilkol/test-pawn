import { VarDeclaration } from "./VarDeclaration";
import { VarOrFunctionDeclaration } from "./VarOrFunctionDeclaration";
import { IVisitor } from "./visitor/IVisitor";

export class EnumMember extends VarOrFunctionDeclaration
{
	private _value: number = 0;
	
	public accept(visitor: IVisitor): void {
		visitor.visitEnumMember(this);
	}
	public setValue(data: VarDeclaration): void {
		this.id = data.id;
		this.setIDPos(data.idPos);
		this.tag = data.tag;
	}

	public set value(v: number) {
		this._value = v;
	}
	public get value(): number {
		return this._value;
	}

}