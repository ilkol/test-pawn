import { IRightValue } from "./RightValue";
import { IStatement } from "./Statement";

export interface IReturn extends IStatement {
	value?: IRightValue;
}