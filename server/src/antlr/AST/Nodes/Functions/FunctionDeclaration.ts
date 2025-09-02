import { Serialization } from "../../../../cache/Serialization";
import { Function } from "../../../../SymbolSystem/Symbols";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractStatement } from "../AbstractStatement";
import { CodeBlock } from "../CodeBlock";
import { Docs } from "../Docs/Dosc";
import { IContainsVars } from "../IContainsVars";
import { Ellipse } from "../Operators/Ellipse";
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
	public symbol?: Function;

	name = "объявление функции";
	
	private _parameters: FunctionDeclarationParameter[] = [];
	private _code?: AbstractStatement = undefined;
	private _modifire: FunctionModifire = FunctionModifire.none;
	private _ellipse?: Ellipse = undefined;

	public docs?: Docs = undefined;

	private _assigmentNative?: string = undefined;



	
	public accept(visitor: IVisitor): void {
		visitor.visitFunctionDeclaration(this);
	}
	public constructor() {
		super();
	}
	pushParameter(el: FunctionDeclarationParameter): void {
		this._parameters.push(el);
	}
	get vars(): FunctionDeclarationParameter[] {
		return this._parameters;
	}
	get parameters(): FunctionDeclarationParameter[] {
		return this.vars;
	}
	
	public set code(v : AbstractStatement) {
		this._code = v;
	}
	public get code() : AbstractStatement | undefined {
		return this._code;
	}
	
	public set modifire(v: FunctionModifire) {
		this._modifire = v;
	}
	
	public get modifire(): FunctionModifire {
		return this._modifire;
	}
	public get stock(): boolean {
		return this._modifire === FunctionModifire.stock;
	}

	public get ellipse(): Ellipse | undefined
	{
		return this._ellipse;
	}
	public set ellipse(v: Ellipse)
	{
		this._ellipse = v;
	}

	get assigmentFunctionID(): string | undefined
	{
		return this._assigmentNative;
	}
	set assigmentFunctionID(v: string)
	{
		this._assigmentNative = v;
	}

	public toJSON(): Serialization.Nodes.FunctionDeclaration {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.FunctionDeclaration,
			parameters: this._parameters.map(el => el.toJSON()),
			code: this._code as CodeBlock ? (<CodeBlock>this._code).toJSON() : undefined,
			modifire: this._modifire,
			ellipse: this._ellipse ? this._ellipse.toJSON() : undefined,
			docs: this.docs ? this.docs.toJSON() : undefined,
			assigmentFunctionID: this._assigmentNative,
		};
	}
	static fromJSON(json: Serialization.Nodes.FunctionDeclaration): FunctionDeclaration {
		const instance = new FunctionDeclaration();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.FunctionDeclaration): void {
		super.prepareFromJSON(json);
		this._code = Serialization.Deserialize.object<CodeBlock>(json.code);
		this._modifire = json.modifire;
		this.docs = Serialization.Deserialize.object<Docs>(json.docs);
		if(json.native) {
			this.native = true;
		}
		this._parameters = json.parameters.map((el: any) => Serialization.Deserialize.object<FunctionDeclarationParameter>(el));
		this._ellipse = Serialization.Deserialize.object<Ellipse>(json.ellipse);
		this._assigmentNative = json.assigmentFunctionID;
	}
}