/* eslint-disable @typescript-eslint/naming-convention */
import { NodeList } from "../../NodeList";
import { ICodeBlock } from "../CodeBlock";
import { IExpression } from "../Expression";
import { IStatement } from "../Statement";

export interface IIfStatement extends IStatement {
	__type: NodeList.If;
	condition?: IExpression;
	code?: IStatement | ICodeBlock;
	else?: ICodeBlock | IStatement;
}