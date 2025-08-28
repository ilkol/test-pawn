import { IExpression } from "../../Expression";
import { IVariable } from "../Variable";

export interface IArray extends IVariable {
	indexes: IExpression[];
}