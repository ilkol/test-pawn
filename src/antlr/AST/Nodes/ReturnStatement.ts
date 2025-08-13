import { Expression } from "./Expresion";
import { AbstractStatement } from "./AbstractStatement";
import { IVisitor } from "../visitor/IVisitor";
import { Serialization } from "../../../cache/Serialization";

export class ReturnStatement extends AbstractStatement
{
	name = "оператор возвращения";
	
	private _value: Expression | undefined;
	
	public accept(visitor: IVisitor): void {
		visitor.visitReturn(this);
	}
	
	
	public set value(v : Expression) {
		this._value = v;
	}
	public get value(): Expression | undefined {
		return this._value;
	}


	static fromJSON(json: Serialization.Nodes.Return): ReturnStatement {
		let instance: ReturnStatement = new ReturnStatement();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.Return): void {
		super.prepareFromJSON(json);
		this._value = Serialization.Deserialize.object(json.value);
	}

	public toJSON(): Serialization.Nodes.Return {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.ReturnStatement,
			value: this.value?.toJSON(),
		};
	}
}