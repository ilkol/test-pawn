import { IVisitor } from "../../visitor/IVisitor";
import { Variable } from "../Variable";
import { RightValue } from "../RightValue";
import { VariableModifire } from "../Operators/OperatorNew";
import { VarDeclaration } from "../Variables/VarDeclaration";
import { Serialization } from "../../../../cache/Serialization";
import { Parameter } from "../../../../SymbolSystem/Symbols/Parameter";
import { Tag } from "../Tag";

export class FunctionDeclarationParameter extends VarDeclaration
{
	name = "параметр объявляемой функции";

	public symbol: Parameter | undefined = undefined;
	private _var: Variable|undefined = undefined;
	/** Значение по умолчанию */
	private _value: RightValue|undefined = undefined;
	private isRef: boolean = false;

	/** Размерность массива */
	private numdim: number = 0;
	
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
		this.tags.push(this.tag);
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

	public toJSON(): Serialization.Nodes.ParameterDeclaration {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.FunctionDeclarationParameter,
			defaultValue: this._value?.toJSON(),
			isReference: this.isRef,
			variable: this._var ? this._var.toJSON() : undefined,
			tags: this.tags.map(tag => tag.toJSON()),
 		};
	}
	public static fromJSON(json: Serialization.Nodes.ParameterDeclaration): FunctionDeclarationParameter {
		const instance = new FunctionDeclarationParameter();
		instance.prepareFromJSON(json);
		return instance;
	}
	protected prepareFromJSON(json: Serialization.Nodes.ParameterDeclaration): void {
		super.prepareFromJSON(json);
		this._var = Serialization.Deserialize.object(json.variable);
		this._value = Serialization.Deserialize.object(json.defaultValue);
		this.isRef = json.isReference;
		this._tags = json.tags.map(tag => Serialization.Deserialize.object(tag));
	}

	private _tags: Tag[] = [];
	get tags() {
		return this._tags;
	}

	addTag(tag: Tag) {
		this.tags.push(tag);
	}

	/** Размерность массива */
	get dimensions(): number {
		return this.numdim;
	}
}