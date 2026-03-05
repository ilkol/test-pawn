import { Declaration } from "../Declaration";
import { IContainsVars } from "../IContainsVars";
import { IVisitor } from "../../visitor/IVisitor";
import { EnumMember } from "./EnumMember";
import { Serialization } from "../../../../cache/Serialization";
import { ASTNode } from "../ASTNode";
import { SymbolReferance } from "../../../../SymbolSystem/Symbols/SymbolReferance";
import { Enum } from "../../../../SymbolSystem/Symbols";
import { Tag } from "../Tag";

export class EnumDeclaration extends Declaration implements IContainsVars<EnumMember>
{
	name = "декларация перечисления";

	public symbol?: Enum;

	private lastIndex: number = 0;
	private readonly _variables: EnumMember[] = [];
	public explicitTag?: Tag;
	
	public constructor(instance: EnumDeclaration|undefined = undefined) {
		super(instance);
	}
	public accept(visitor: IVisitor): void {
		visitor.visitEnumDeclaration(this);
	}
	
	pushParameter(el: EnumMember): void {
		if(el.value === 0) {
			el.value = this.lastIndex;
		}
		else {
			this.lastIndex = el.value;
		}
		this._variables.push(el);
		this.lastIndex++;
	}
	public get vars() : EnumMember[] {
		return this._variables;
	}

	public get last(): EnumMember {
		return this._variables[this._variables.length - 1];
	}
	

	toJSON(): Serialization.Nodes.EnumDeclaration {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.Enum,
			lastIndex: this.lastIndex,
			members: this._variables.map((member) => { return member.toJSON(); }),

		};
	}

	static fromJSON(json: Serialization.Nodes.EnumDeclaration): EnumDeclaration {
		const instance = new EnumDeclaration();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.EnumDeclaration): void {
		super.prepareFromJSON(json);
		this.lastIndex = json.lastIndex;
		json.members.forEach(member => {
			const instance = Serialization.Deserialize.object<EnumMember>(member);
			this._variables.push(instance);
			instance.parent = this;
		});
	}
}