import { IRightValue } from "../RightValue";
import { IVarDeclaration } from "../VarDeclaration";

export interface IVariableInit extends IVarDeclaration {
	value?: IRightValue;
	variable?: IVarDeclaration;
}