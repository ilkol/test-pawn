import { Expression } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";
import { Serialization } from "../../../../cache/Serialization";

export class TernarOperator extends AbstractOperator
{
	name = "тернарный оператор";
	protected _onTrue: Expression | undefined;
	protected _onFalse: Expression | undefined;
	
	constructor() {
		super();	
	}

	public accept(visitor: IVisitor): void {
		visitor.visitTernarOperator(this);
	}

	
	public get onTrue() : Expression | undefined {
		return this._onTrue;
	}
	
	public get onFalse() : Expression | undefined {
		return this._onFalse;
	}
	public get condition() : Expression | undefined {
		return this.expresion;
	}


	public set onTrue(v: Expression) {
		this._onTrue = v;
	}
	
	public set onFalse(v: Expression) {
		this._onFalse = v;
	}
	public set condition(v: Expression) {
		this.expresion = v;
	}

	static fromJSON(json: Serialization.Nodes.Operators.Binar): TernarOperator {
		let instance: TernarOperator = new TernarOperator();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.Operators.Ternar): void {
		super.prepareFromJSON(json);
		this._onTrue = Serialization.Deserialize.object(json.onTrue);
		this._onFalse = Serialization.Deserialize.object(json.onFalse);
	}

	toJSON(): Serialization.Nodes.Operators.Ternar {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.BinarOperator,
			onTrue: this.onTrue?.toJSON(),
			onFalse: this.onFalse?.toJSON(),
		};
	}

	pushValue(val: Expression) {
		if(!this.onTrue) {
			this.onTrue = val;
			return;
		} 
		if(!this.onFalse) {
			this.onFalse = val;
			return;
		} 
		throw  new Error("Expression has nowhere to go");		
	}
}