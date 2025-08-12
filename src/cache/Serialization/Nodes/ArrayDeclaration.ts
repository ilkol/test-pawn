import { IEnumDeclaration } from "./EnumDeclaration";
import { IExpression } from "./Expression";
import { IVarDeclaration } from "./VarDeclaration";

export interface IArrayDeclaration extends IVarDeclaration {
	indexes: (IExpression | IEnumDeclaration)[];
	size: number[];
}