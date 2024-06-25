import { Range } from "vscode";
import { IVisitor } from "../../visitor/IVisitor";
import { CodeBlock } from "../CodeBlock";
import { IContainsVars } from "../IContainsVars";
import { FunctionParameter } from "./FunctionParameter";
import { IHasID } from "../IHasID";
import { Expresion } from "../Expresion";


export class FunctionCall extends Expresion implements IContainsVars<FunctionParameter>, IHasID
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

	private _identifire: string = "";
	private _idPos: Range = new Range(0,0,0,0);
	
	public get id() : string {
		return this._identifire;
	}
	
	public set id(v : string) {
		this._identifire = v;
	}

	public get idPos() : Range {
		return this._idPos;
	}
	
	public setIDPos(pos: Range): void
	public setIDPos(line: number, start: number, end: number): void
	public setIDPos(line: Range | number, start?: number, end?: number): void {
		if(typeof line == "number")
			this._idPos = new Range(line - 1, <number>start, line - 1, <number>end);
		else 
			this._idPos = line;
	}
}