import { IVisitor } from "../../visitor/IVisitor";
import { CodeBlock } from "../CodeBlock";
import { Expression } from "../Expresion";
import { AbstractStatement } from "../AbstractStatement";
import { Serialization } from "../../../../cache/Serialization";

export class IfStatement extends AbstractStatement
{
	name = "if"
	public code?: AbstractStatement;
	public condition?: Expression;
	public else?: CodeBlock | AbstractStatement;

	public accept(visitor: IVisitor): void {
		visitor.visitItStatement(this);
	}

	static fromJSON(json: Serialization.Nodes.Conditions.If): IfStatement {
		const instance = new IfStatement();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.Conditions.If): void {
		super.prepareFromJSON(json);
		this.code = Serialization.Deserialize.object(json.code);
		this.condition = Serialization.Deserialize.object(json.condition);
		
	}
	
	toJSON(): Serialization.Nodes.Conditions.If {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.If,
			code: this.code?.toJSON(),
			condition: this.condition?.toJSON(),
			else: this.else?.toJSON(),
		};
	}
	
}