import { IVisitor } from "../../visitor/IVisitor";
import { VariableModifire } from "../Operators/OperatorNew";
import { Variable } from "../Variable";
import { VarOrFunctionDeclaration } from "../VarOrFunctionDeclaration";


export class VarDeclaration extends VarOrFunctionDeclaration
{
	name = "объявление переменной";
	protected _modifires: VariableModifire[] = [];

	public references: Variable[] = [];

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
		if(v.indexOf(VariableModifire.stock) !== -1) {
			this.stock = true;
		}
	}

	public get isConstant(): boolean {
		for(let el of this._modifires) {
			if(el === VariableModifire.const) {
				return true;
			}
		}
		return false;
		// return this._modifires.find(el => el === VariableModifire.const) ? true : false;
	}
	
}