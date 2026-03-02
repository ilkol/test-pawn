import { IVarOrFunctionDeclaration } from "./VarOrFunctionDeclaration";

export interface IVarDeclaration extends IVarOrFunctionDeclaration {
	modifires: number;	
}