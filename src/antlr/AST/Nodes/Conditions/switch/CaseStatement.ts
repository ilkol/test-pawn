import { IVisitor } from "../../../visitor/IVisitor";
import { CodeBlock } from "../../CodeBlock";
import { Expression } from "../../Expresion";
import { AbstractStatement } from "../../AbstractStatement";
import { Serialization } from "../../../../../cache/Serialization";

export class CaseStatement extends AbstractStatement
{
	public condition?: Expression;
	public code?: CodeBlock | AbstractStatement;

	public accept(visitor: IVisitor): void {
		visitor.visitCaseStatement(this);
	}

	static fromJSON(json: Serialization.Nodes.Conditions.Case): CaseStatement {
		const instance = new CaseStatement();
		instance.prepareFromJSON(json);
		return instance;
	}
	protected prepareFromJSON(json: Serialization.Nodes.Conditions.Case): void {
		super.prepareFromJSON(json);
		this.condition = Serialization.Deserialize.object(json.condition);
		this.code = Serialization.Deserialize.object(json.code);
	}

	toJSON(): Serialization.Nodes.Conditions.Case {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.Case,
			condition: this.condition?.toJSON(),
			code: this.code?.toJSON(),
		};
	}
	
}