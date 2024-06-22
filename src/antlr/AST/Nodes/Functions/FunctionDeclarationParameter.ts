import { VarDeclaration } from "../VarDeclaration";
import { IVisitor } from "../../visitor/IVisitor";

export class FunctionDeclarationParameter extends VarDeclaration
{
	private _value: number = 0;
	private constant: boolean = false;
	name = "параметр объявляемой функции";
	
	constructor(param: VarDeclaration) {
		super(param);
	}

	public accept(visitor: IVisitor): void {
		visitor.visitFunctionDeclarationParameter(this);
	}
	public setValue(data: VarDeclaration): void {
		this.id = data.id;
		this.idPos = data.idPos;
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