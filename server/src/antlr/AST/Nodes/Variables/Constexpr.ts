import { VariableModifire } from "../Operators/OperatorNew";
import { Tag } from "../Tag";
import { VarDeclaration } from "./VarDeclaration";

export class Constexpr extends VarDeclaration {
	constructor(name: string, public readonly value: any, tag: Tag) {
		super();
		this.tag = tag;
		this.id = name;
		this.modifires = [VariableModifire.const];
	}
}