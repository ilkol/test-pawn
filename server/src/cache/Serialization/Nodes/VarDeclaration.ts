import { IExpression } from "./Expression";
import { IVarOrFunctionDeclaration } from "./VarOrFunctionDeclaration";

export interface IVarDeclaration extends IVarOrFunctionDeclaration {
	modifires: number;	
	initValue?: IExpression;
	dimensions: (IExpression | null)[];
}