import { CodeBlock } from "./CodeBlock";
import { Declaration } from "./Declaration";
import { FunctionParameter } from "./FunctionParameter";
import { IContainsVars } from "./IContainsVars";
import { VarOrFunctionDeclaration } from "./VarOrFunctionDeclaration";
import { IVisitor } from "./visitor/IVisitor";

export class FunctionDeclaration extends VarOrFunctionDeclaration implements IContainsVars<FunctionParameter>
{
	private _parameters: FunctionParameter[] = [];
	private _code: CodeBlock | undefined;

	public accept(visitor: IVisitor): void {
		visitor.visitFunctionDeclaration(this);
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