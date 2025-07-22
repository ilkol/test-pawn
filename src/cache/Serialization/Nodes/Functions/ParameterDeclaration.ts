/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../../NodeList";
import { IVarDeclaration } from "../VarDeclaration";

export interface IParameterDeclaration extends IVarDeclaration {
	__type: NodeList.FunctionDeclarationParameter;	
}