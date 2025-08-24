import { ICodeBlock } from "../../CodeBlock";
import { IStatement } from "../../Statement";

export interface IDefault extends IStatement {
	code?: ICodeBlock | IStatement;
}