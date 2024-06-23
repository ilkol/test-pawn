import { VarDeclaration } from "../VarDeclaration";
import { IVisitor } from "../../visitor/IVisitor";
import { Variable } from "../Variable";
import { Range } from "vscode";
import { RightValue } from "../RightValue";

export class FunctionDeclarationParameter extends VarDeclaration
{
	private _var: Variable|undefined;
	private _value: RightValue|undefined;
	name = "параметр объявляемой функции";
	
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

}