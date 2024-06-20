import { ASTNode } from "./ASTNode";
import { Declaration } from "./Declaration";
import { EnumMember } from "./EnumMember";
import { IContainsVars } from "./IContainsVars";
import { IVisitor } from "../visitor/IVisitor";

export class EnumDeclaration extends Declaration implements IContainsVars<EnumMember>
{
	private lastIndex: number = 0;
	private readonly _variables: EnumMember[] = [];
	
	public constructor() {
		super();
	}
	public accept(visitor: IVisitor): void {
		visitor.visitEnumDeclaration(this);
	}
	
	push(el: EnumMember): void {
		if(el.value == 0) {
			el.value = this.lastIndex;
		}
		else this.lastIndex = el.value;
		this._variables.push(el);
		this.lastIndex++;
	}
	public get vars() : EnumMember[] {
		return this._variables;
	}

	public get last(): EnumMember {
		return this._variables[this._variables.length - 1];
	}
	
}