import { IVisitor } from "../../../visitor/IVisitor";
import { CodeBlock } from "../../CodeBlock";
import { AbstractStatement } from "../../AbstractStatement";
import { Serialization } from "../../../../../cache/Serialization";

export class DefaultStatement extends AbstractStatement
{
	public code?: CodeBlock | AbstractStatement;

	public accept(visitor: IVisitor): void {
		visitor.visitDefaultSwitchStatement(this);
	}
	

	static fromJSON(json: Serialization.Nodes.Conditions.Default): DefaultStatement {
		const instance = new DefaultStatement();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.Conditions.Default): void {
		super.prepareFromJSON(json);
		this.code = Serialization.Deserialize.object(json.code);
	}

	toJSON(): Serialization.Nodes.Conditions.Default {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.Default,
			code: this.code?.toJSON(),
		};
	}
}