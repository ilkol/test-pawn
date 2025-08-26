/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../../NodeList";
import { IFunctionDeclaration } from "../Functions/FunctionDeclaration";

export interface IOperatorOverload extends IFunctionDeclaration {
	/**
	 * Оператор, который перегружает функция.
	 */
	operator: string;
	__type: NodeList.OperatorOverload;
}