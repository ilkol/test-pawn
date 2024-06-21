import { VarDeclaration } from "../VarDeclaration";
import { VarOrFunctionDeclaration } from "../VarOrFunctionDeclaration";
import { IVisitor } from "../../visitor/IVisitor";

export class FunctionParameter extends VarDeclaration
{
	private _value: number = 0;
	private constant: boolean = false;
	name = "параметр функции";
	
	constructor(param: VarDeclaration) {
		super(param);
	}

	public accept(visitor: IVisitor): void {
		visitor.visitFunctionParameter(this);
	}
	public setValue(data: VarDeclaration): void {
		this.id = data.id;
		this.setIDPos(data.idPos);
		this.tag = data.tag;
		this.constant = data.isConstant;
	}

	public set value(v: number) {
		this._value = v;
	}
	public get value(): number {
		return this._value;
	}

}