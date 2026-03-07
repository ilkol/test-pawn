import { IExpression } from "./Expression";

export interface CompoundExpression extends IExpression {
	expressions: IExpression[];
}