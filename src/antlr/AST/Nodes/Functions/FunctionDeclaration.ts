import { Serialization } from "../../../../cache/Serialization/utils";
import { Serializer } from "../../../../cache/Serializer";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractStatement } from "../AbstractStatement";
import { ASTNodes } from "../ASTNodes";
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
	name = "объявление функции";
	
	private _parameters: FunctionDeclarationParameter[] = [];
	private _code: AbstractStatement | undefined;
	private _modifire: FunctionModifire = FunctionModifire.none;
	private _ellipse: Ellipse | undefined;

	public docs?: Docs;

	private _assigmentNative?: string;



	
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

	public toJSON() {
		return {
			...super.toJSON(),
			__type: ASTNodes.FunctionDeclaration,
			parameters: this._parameters.map(el => el.toJSON()),
			code: this._code ? this._code.toJSON() : undefined,
			modifire: this._modifire,
			ellipse: this._ellipse ? this._ellipse.toJSON() : undefined,
			// docs: this.docs ? this.docs.toJSON
		};
	}
	static fromJSON(json: any): FunctionDeclaration {
		const instance = new FunctionDeclaration();
		instance.range = Serialization.Deserialize.range(json.pos);
		instance.code = Serializer.deserialize<CodeBlock>(json.code);
		instance.id = json.identifire.text;
		instance.idPos = Serialization.Deserialize.range(json.identifire.pos);
		instance.used = json.used;
		if(json.stocked) {
			instance._modifire = FunctionModifire.stock;
		}
		instance.native = json.native;
		instance.tag = Serializer.deserialize(json.tag);
		instance._parameters = json.parameters.map((el: any) => Serializer.deserialize<FunctionDeclarationParameter>(el));
		if (json.ellipse) {
			instance._ellipse = Serializer.deserialize<Ellipse>(json.ellipse);
		}
		return instance;
	}
}