import { VarDeclaration } from "../Variables/VarDeclaration";
import { IVisitor } from "../../visitor/IVisitor";
import { EnumDeclaration } from "./EnumDeclaration";
import { Serialization } from "../../../../cache/Serialization";
import * as SymbolSystem from "../../../../SymbolSystem";
import { VariableModifire } from "../../../../SymbolSystem/Symbols";

export class EnumMember extends VarDeclaration
{
	name = "член перечисления";

	public symbol: SymbolSystem.Symbols.EnumMember | undefined = undefined;

	private _value: number = 0;
	private _parent: EnumDeclaration | undefined;
	
	_modifires = VariableModifire.Const;

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

	public toJSON(): Serialization.Nodes.EnumMember {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.EnumMember,
			value: this.value,
		};
	}

	static fromJSON(json: Serialization.Nodes.EnumMember): EnumMember {
		const instance = new EnumMember();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.EnumMember): void {
		super.prepareFromJSON(json);
		this._value = json.value;
	}
}