import { ASTNode } from "./ASTNode";
import { IVisitor } from "../visitor/IVisitor";
import { Statements } from "./Statements";
import { Serialization } from "../../../cache/Serialization";

export class CodeBlock extends ASTNode
{
	public accept(visitor: IVisitor): void {
		visitor.visitCodeBlock(this);
	}

	name = "блок кода";

	constructor(private _statements: Statements) {
		super();
	}

	
	public get statements() : Statements {
		return this._statements;
	}
	
	public toJSON(): Serialization.Nodes.CodeBlock {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.CodeBlock,
			statements: this._statements.statements.map((statement) => {
				return statement.toJSON();
			}),
		};
	}
	static fromJSON(json: Serialization.Nodes.CodeBlock): CodeBlock {
		const instance = new CodeBlock(new Statements());
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.CodeBlock): void {
		super.prepareFromJSON(json);
		this._statements = new Statements(json.statements.map((statement) => {
			return Serialization.Deserialize.object(statement);
		 }));
	}

}