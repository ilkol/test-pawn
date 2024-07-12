import { FunctionDeclaration } from "../Functions/FunctionDeclaration";

export class OperatorOverload extends FunctionDeclaration
{
	name = "перегрузка оператора"
	public operator: string = "";
	constructor() {
		super();
	}
}