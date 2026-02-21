import { Serialization } from "../../../../cache/Serialization";
import { IVisitor } from "../../visitor/IVisitor";
import { FunctionDeclaration } from "../Functions/FunctionDeclaration";

export class OperatorOverload extends FunctionDeclaration
{
	name = "перегрузка оператора";
	public operator: string = "";
	constructor() {
		super();
	}
	
	public accept(visitor: IVisitor): void {
		visitor.visitOperatorOverload(this);
	}

	static fromJSON(json: Serialization.Nodes.Operators.OperatorOverload): OperatorOverload {
		const instance = new OperatorOverload();
		instance.prepareFromJSON(json);
		return instance;
	}
	protected prepareFromJSON(json: Serialization.Nodes.Operators.OperatorOverload): void {
		super.prepareFromJSON(json);
		this.operator = json.operator;
	}

	toJSON(): Serialization.Nodes.Operators.OperatorOverload {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.OperatorOverload,
			operator: this.operator,
		};
	}
}