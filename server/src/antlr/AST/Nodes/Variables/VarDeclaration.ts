import { Serialization } from "../../../../cache/Serialization";
import { VariableModifire } from "../../../../SymbolSystem/Symbols";
import { IVisitor } from "../../visitor/IVisitor";
import { Expression } from "../Expresion";
import { RightValue } from "../RightValue";
import { Variable } from "../Variable";
import { VarOrFunctionDeclaration } from "../VarOrFunctionDeclaration";

export class VarDeclaration extends VarOrFunctionDeclaration
{
	name = "объявление переменной";
	protected _modifires: number = VariableModifire.None;
	private _value?: RightValue = undefined;
	public dimensions: Expression[] = [];

	public references: Variable[] = [];

	// public symbol: VariableSymbol | undefined = undefined;

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

	set initValue(v: RightValue) {
		this._value = v;
	}
	get initValue(): RightValue | undefined {
		return this._value;
	}

	public get modifires() : number {
		return this._modifires;
	}
	
	public set modifires(v : number) {
		this._modifires = v;
		if(v & VariableModifire.Stock) {
			this.stock = true;
		}
	}

	public get isConstant(): boolean {
		return this.hasModifier(VariableModifire.Const);
	}

	public toJSON(): Serialization.Nodes.VarDeclaration {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.VariableDeclaration,
			modifires: this.modifires,
			initValue: this._value?.toJSON(),
			dimensions: this.dimensions.map(dim => dim.toJSON()),
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
		this._value = Serialization.Deserialize.object(json.initValue);
	}

	addModifier(modifire: VariableModifire) {
		this._modifires |= modifire;
	}

	hasModifier(modifire: VariableModifire): boolean {
		return (this._modifires & modifire) !== 0;
	}

}