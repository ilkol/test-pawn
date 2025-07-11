import { ASTNode } from "./ASTNode";
import { IVisitor } from "../visitor/IVisitor";
import { Statements } from "./Statements";
import { Serializable } from "../../../cache/Serializable";
import { Statement } from "./Statement";
import { Position } from "vscode";

export class CodeBlock extends ASTNode implements Serializable
{
	toJSON() {
		return {
			...super.toJSON(),
			__type: "CodeBlock",
		};
	}
	fromJSON(json: any): CodeBlock {
		const instance = new CodeBlock(new Statements());
		instance.setRange(
			new Position(json.start.line, json.start.character),
			new Position(json.end.line, json.end.character)
		);
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