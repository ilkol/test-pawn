import { ASTNode } from "./ASTNode";
import { IVisitor } from "../visitor/IVisitor";
import { Statements } from "./Statements";
import { Serializable } from "../../../cache/Serializable";
import { Serialization } from "../../../cache/Serialization";

export class CodeBlock extends ASTNode implements Serializable
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
		};
	}
	static fromJSON(json: Serialization.Nodes.CodeBlock): CodeBlock {
		const instance = new CodeBlock(new Statements());
		instance.prepareFromJSON(json);
		return instance;
	}

}