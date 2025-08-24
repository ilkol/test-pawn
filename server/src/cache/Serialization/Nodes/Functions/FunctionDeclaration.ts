/* eslint-disable @typescript-eslint/naming-convention */
import { FunctionModifire } from "../../../../antlr/AST/Nodes/Functions/FunctionDeclaration";
import { NodeList } from "../../NodeList";
import { ICodeBlock } from "../CodeBlock";
import { IDocs } from "../Docs";
import { IEllipse } from "../Ellipse";
import { IVarOrFunctionDeclaration } from "../VarOrFunctionDeclaration";
import { IParameterDeclaration } from "./ParameterDeclaration";

export interface IFunctionDeclaration extends IVarOrFunctionDeclaration {
	__type: NodeList.FunctionDeclaration | NodeList.OperatorOverload;
	parameters: IParameterDeclaration[];
	code?: ICodeBlock;
	modifire: FunctionModifire;
	ellipse?: IEllipse;
	docs?: IDocs;
	assigmentFunctionID?: string;
}