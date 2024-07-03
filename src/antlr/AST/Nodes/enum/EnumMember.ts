import { VarDeclaration } from "../Variables/VarDeclaration";
import { VarOrFunctionDeclaration } from "../VarOrFunctionDeclaration";
import { IVisitor } from "../../visitor/IVisitor";
import { EnumDeclaration } from "./EnumDeclaration";

export class EnumMember extends VarOrFunctionDeclaration
{
	name = "член перечисления";

	private _value: number = 0;
	private _parent: EnumDeclaration | undefined;
	
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

	public get parent(): EnumDeclaration | undefined {
		return 	this._parent;
	}
	public set parent(v: EnumDeclaration) {
		this._parent = v;
	}
}