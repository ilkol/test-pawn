import { IVisitor } from "../../visitor/IVisitor";
import { CodeBlock } from "../CodeBlock";
import { IContainsVars } from "../IContainsVars";
import { VarOrFunctionDeclaration } from "../VarOrFunctionDeclaration";
import { FunctionParameter } from "./FunctionParameter";


export class FunctionCall extends VarOrFunctionDeclaration implements IContainsVars<FunctionParameter>
{
	name = "вызов функции";

	private _parameters: FunctionParameter[] = [];
	private _code: CodeBlock | undefined;

	public accept(visitor: IVisitor): void {
		visitor.visitFunctionCall(this);
	}
	public constructor() {
		super();
	}
	push(el: FunctionParameter): void {
		this._parameters.push(el);
	}
	get vars(): FunctionParameter[] {
		return this._parameters;
	}

	
	public set code(v : CodeBlock) {
		this._code = v;
	}
	public get code() : CodeBlock | undefined {
		return this._code;
	}
	
	
}