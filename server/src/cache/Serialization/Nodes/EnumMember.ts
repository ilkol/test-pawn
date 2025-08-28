import { IVarDeclaration } from "./VarDeclaration";

export interface IEnumMember extends IVarDeclaration {
	value: number;
}