/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../../NodeList";
import { IRightValue } from "../RightValue";
import { IVarDeclaration } from "../VarDeclaration";
import { IVariable } from "../Variable/Variable";

export interface IParameterDeclaration extends IVarDeclaration {
	__type: NodeList.FunctionDeclarationParameter;	
	defaultValue?: IRightValue,
	isReference: boolean;
	variable?: IVariable;
}