import { IVisitor } from "../../visitor/IVisitor";
import { VariableModifire } from "../Operators/OperatorNew";
import { VarOrFunctionDeclaration } from "../VarOrFunctionDeclaration";


export class VarDeclaration extends VarOrFunctionDeclaration
{
	name = "объявление переменной";
	protected _modifires: VariableModifire[] = [];

	constructor(instance: VarDeclaration | undefined = undefined) {
		super(instance);
		if(instance) {
			this.modifires = instance._modifires;
			this.tag = instance.tag;
		}
	}

	public accept(visitor: IVisitor): void {
		visitor.visitVariableDeclaration(this);
	}

	
	public get modifires() : VariableModifire[] {
		return this._modifires;
	}
	
	public set modifires(v : VariableModifire[]) {
		this._modifires = v;
		// console.log(v);
		if(v.indexOf(VariableModifire.stock) !== -1) {
			this.stock = true;
		}
	}

	public get isConstant(): boolean {
		return this._modifires.find(el => el === VariableModifire.const) ? true : false;
	}
	
}