/* eslint-disable @typescript-eslint/naming-convention */
import { VariableModifire } from "../../../../antlr/AST/Nodes/Operators/OperatorNew";
import { NodeList } from "../../NodeList";
import { IStatement } from "../Statement";
import { IVarDeclaration } from "../VarDeclaration";

export interface IOperatorNew extends IStatement {
	__type: NodeList.OperatorNew,
	modifires: VariableModifire[],
	variables: IVarDeclaration[],
}