/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../../NodeList";
import { IExpression } from "../Expression";
import { IStatement } from "../Statement";
import { IAbstractCycle } from "./AbstractCycle";

export interface IForCycle extends IAbstractCycle {
	__type: NodeList.For;
	/**
	 * Код, выполняемый перед началом цикла.
	 */
	preCode?: IStatement;

	/**
	 * Код, выполняемый после каждой итерации цикла.
	 */
	postCode?: IExpression;
}