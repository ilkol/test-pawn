import { Serialization } from "../../../../cache/Serialization";
import { Variable as VariableSymbol } from "../../../../SymbolSystem/Symbols";
import { IVisitor } from "../../visitor/IVisitor";
import { ASTNode } from "../ASTNode";
import { VariableModifire } from "../Operators/OperatorNew";
import { Variable } from "../Variable";
import { VarOrFunctionDeclaration } from "../VarOrFunctionDeclaration";


export class VarDeclaration extends VarOrFunctionDeclaration
{
	name = "объявление переменной";
	protected _modifires: VariableModifire[] = [];

	public references: Variable[] = [];

	public symbol: VariableSymbol | undefined = undefined;

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

	public toJSON(): Serialization.Nodes.VarDeclaration {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.VariableDeclaration,
			modifires: this.modifires
		};
	}

	static fromJSON(json: Serialization.Nodes.VarDeclaration): VarDeclaration {
		const instance = new VarDeclaration();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.VarDeclaration): void {
		super.prepareFromJSON(json);
		this.modifires = json.modifires;
	}

	
}