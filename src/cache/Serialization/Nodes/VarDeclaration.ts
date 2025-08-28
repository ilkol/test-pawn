import { VariableModifire } from "../../../antlr/AST/Nodes/Operators/OperatorNew";
import { IVarOrFunctionDeclaration } from "./VarOrFunctionDeclaration";

export interface IVarDeclaration extends IVarOrFunctionDeclaration {
	modifires: VariableModifire[];	
}