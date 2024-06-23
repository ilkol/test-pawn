import { VarDeclaration } from "../VarDeclaration";
import { IVisitor } from "../../visitor/IVisitor";
import { Variable } from "../Variable";
import { Range } from "vscode";
import { RightValue } from "../RightValue";
import { VariableModifire } from "../Operators/OperatorNew";

export class FunctionDeclarationParameter extends VarDeclaration
{
	name = "параметр объявляемой функции";

	private _var: Variable|undefined;
	private _value: RightValue|undefined;
	private isConst: boolean = false;
	private isRef: boolean = false;
	
	constructor(param: VarDeclaration|undefined = undefined) {
		super(param);
	}

	public accept(visitor: IVisitor): void {
		visitor.visitFunctionDeclarationParameter(this);
	}

	public set variable(v: Variable) {
		this._var = v;
		this.idPos = v.idPos;
		this.id = v.id;
		this.tag = v.tag;
	}
	public get variable(): Variable|undefined {
		return this._var;
	}

	public set defaultValue(v: RightValue) {
		this._value = v;
	}
	public get defaultValue(): RightValue|undefined {
		return this._value;
	}

	public set const(v: true) {
		this._modifires.push(VariableModifire.const);
	}

	public get const(): boolean {
		return this._modifires.indexOf(VariableModifire.const) !== -1;
	}

	public set reference(v: true) {
		this.isRef = v;
	}

	public get reference(): boolean {
		return this.isRef;
	}
}