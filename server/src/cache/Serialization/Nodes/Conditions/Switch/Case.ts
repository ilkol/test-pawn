import { ICodeBlock } from "../../CodeBlock";
import { IExpression } from "../../Expression";
import { IStatement } from "../../Statement";

export interface ICase extends IStatement {
	condition?: IExpression;
	code?: ICodeBlock | IStatement;
}