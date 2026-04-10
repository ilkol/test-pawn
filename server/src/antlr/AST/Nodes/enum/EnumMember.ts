import { VarDeclaration } from "../Variables/VarDeclaration";
import { IVisitor } from "../../visitor/IVisitor";
import { EnumDeclaration } from "./EnumDeclaration";
import { Serialization } from "../../../../cache/Serialization";
import * as SymbolSystem from "../../../../SymbolSystem";
import { VariableModifire } from "../../../../SymbolSystem/Symbols";
import { MayBeTag } from "../../../../SymbolSystem/Symbols/MayBeTag";
import { SymbolsFactory } from "../../../../SymbolSystem/SymbolsFactory";
import { Expression } from "../Expresion";

export class EnumMember extends VarDeclaration<SymbolSystem.Symbols.EnumMember>
{
	name = "член перечисления";

	private _parent: EnumDeclaration | undefined;
	public index: Expression | undefined;

	_modifires = VariableModifire.Const;

	public accept(visitor: IVisitor): void {
		visitor.visitEnumMember(this);
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
			index: this.index?.toJSON(),
		};
	}

	static fromJSON(json: Serialization.Nodes.EnumMember): EnumMember {
		const instance = new EnumMember();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.EnumMember): void {
		super.prepareFromJSON(json);
		this.index = Serialization.Deserialize.object(json.index);
	}
}