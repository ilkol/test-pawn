import { NodeHasTag } from "./NodeHasTag";
import { IStatement } from "./Statement";

export interface IExpression extends IStatement, NodeHasTag {
	translateTag: boolean;
	expression?: IExpression;
}