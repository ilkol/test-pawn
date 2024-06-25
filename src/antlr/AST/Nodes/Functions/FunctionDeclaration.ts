import { IVisitor } from "../../visitor/IVisitor";
import { CodeBlock } from "../CodeBlock";
import { IContainsVars } from "../IContainsVars";
import { VarOrFunctionDeclaration } from "../VarOrFunctionDeclaration";
import { FunctionDeclarationParameter } from "./FunctionDeclarationParameter";

export enum FunctionModifire {
	none = 0,
	native,
	forward,
	public,
	stock
}

export class FunctionDeclaration extends VarOrFunctionDeclaration implements IContainsVars<FunctionDeclarationParameter>
{
	name = "объявление функции";
	
	private _parameters: FunctionDeclarationParameter[] = [];
	private _code: CodeBlock | undefined;
	private _modifire: FunctionModifire = FunctionModifire.none;

	public accept(visitor: IVisitor): void {
		visitor.visitFunctionDeclaration(this);
	}
	public constructor() {
		super();
	}
	push(el: FunctionDeclarationParameter): void {
		this._parameters.push(el);
	}
	get vars(): FunctionDeclarationParameter[] {
		return this._parameters;
	}

	
	public set code(v : CodeBlock) {
		this._code = v;
	}
	public get code() : CodeBlock | undefined {
		return this._code;
	}
	
	public set modifire(v: FunctionModifire) {
		this._modifire = v;
	}
	
	public get modifire(): FunctionModifire {
		return this._modifire;
	}
}