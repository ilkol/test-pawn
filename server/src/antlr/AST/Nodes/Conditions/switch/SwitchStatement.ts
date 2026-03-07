import { IVisitor } from "../../../visitor/IVisitor";
import { Expression } from "../../Expresion";
import { AbstractStatement } from "../../AbstractStatement";
import { CaseStatement } from "./CaseStatement";
import { DefaultStatement } from "./DefaultStatement";
import { Serialization } from "../../../../../cache/Serialization";

export class SwitchStatement extends AbstractStatement
{
	name = "switch"
	public condition?: Expression;
	public cases: CaseStatement[] = [];
    public default?: DefaultStatement;

	public accept(visitor: IVisitor): void {
		visitor.visitSwitchStatement(this);
	}
	


	static fromJSON(json: Serialization.Nodes.Conditions.Switch): SwitchStatement {
		const instance = new SwitchStatement();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.Conditions.Switch): void {
		super.prepareFromJSON(json);
		this.condition = Serialization.Deserialize.object(json.condition);
		this.default = Serialization.Deserialize.object(json.default);
		this.cases = json.cases.map((caseJson) => Serialization.Deserialize.object(caseJson));
	}

	toJSON(): Serialization.Nodes.Conditions.Switch {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.Switch,
			condition: this.condition?.toJSON(),
			default: this.default?.toJSON(),
			cases: this.cases.map((caseStatement) => caseStatement.toJSON()),
		};
	}
    
}