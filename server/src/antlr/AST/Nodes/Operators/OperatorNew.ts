import { IContainsVars } from "../IContainsVars";
import { AbstractStatement } from "../AbstractStatement";
import { IVisitor } from "../../visitor/IVisitor";
import { VarDeclaration } from "../Variables/VarDeclaration";
import { Serialization } from "../../../../cache/Serialization";
import { ASTNode } from "../ASTNode";

export enum VariableModifire {
	const,
	stock,
	static,
	public
}

export class OperatorNew extends AbstractStatement implements IContainsVars<VarDeclaration>
{
	name = "операртор декларации";

	private readonly _variables: VarDeclaration[] = [];
	private _modifires: VariableModifire[] = [];

	public constructor() {
		super();
	}
	pushParameter(el: VarDeclaration): void {
		this._variables.push(el);
		el.modifires = this.modifires;
	}
	public accept(visitor: IVisitor): void {
		visitor.visitOperatorNew(this);
	}
	
	public get vars() : VarDeclaration[] {
		return this._variables;
	}

	public addModifire(modifire: VariableModifire): void {
		this._modifires.push(modifire);
	}

	public get modifires() : VariableModifire[] {
		return this._modifires;
	}

	toJSON(): Serialization.Nodes.Operators.New {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.OperatorNew,
			modifires: this._modifires,
			variables: this._variables.map((varialbe) => varialbe.toJSON()),
		};
	}

	static fromJSON(json: Serialization.Nodes.Operators.New): OperatorNew {
		const instance = new OperatorNew();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.Operators.New): void {
		super.prepareFromJSON(json);
		this._modifires = json.modifires;
		json.variables.forEach(variable => {
			this._variables.push(
				Serialization.Deserialize.object(variable)
			);
		});
	}
}