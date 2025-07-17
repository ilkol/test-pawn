import { ASTNode } from "./ASTNode";
import { IVisitor } from "../visitor/IVisitor";
import { Statements } from "./Statements";
import { Serializable } from "../../../cache/Serializable";
import { Statement } from "./Statement";
import { Position } from "vscode";
import { ASTNodes } from "./ASTNodes";
import { Serialization } from "../../../cache/Serialization/utils";

export class CodeBlock extends ASTNode implements Serializable
{
	public toJSON() {
		return {
			...super.toJSON(),
			__type: ASTNodes.CodeBlock,
		};
	}
	static fromJSON(json: any): CodeBlock {
		const instance = new CodeBlock(new Statements());
		instance.range = Serialization.Deserialize.range(json.pos);
		return instance;
	}

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
	
}