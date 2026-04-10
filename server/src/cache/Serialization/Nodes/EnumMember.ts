import { IExpression } from "./Expression";
import { IVarDeclaration } from "./VarDeclaration";

export interface IEnumMember extends IVarDeclaration {
	index: IExpression | undefined;
}