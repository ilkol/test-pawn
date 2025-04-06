import { VarDeclaration } from "../Variables/VarDeclaration";
import { IVisitor } from "../../visitor/IVisitor";
import { EnumDeclaration } from "./EnumDeclaration";
import { VariableModifire } from "../Operators/OperatorNew";

export class EnumMember extends VarDeclaration
{
	name = "член перечисления";

	private _value: number = 0;
	private _parent: EnumDeclaration | undefined;
	
	_modifires = [VariableModifire.const];

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