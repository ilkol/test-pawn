import { ASTNode } from "./ASTNode";
import { IVisitor } from "../visitor/IVisitor";
import { AbstractStatement } from "./AbstractStatement";
import { Node } from "../../../cache/Serialization/Nodes";
import { Serialization } from "../../../cache/Serialization";

export class Statements extends ASTNode {
	name = "утверждения";
	
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	public constructor(private _statements: AbstractStatement[] = []) {
		super();
	}

	
	public get statements() : AbstractStatement[] {
		return this._statements;
	}
	public push(el: AbstractStatement) {
		this._statements.push(el);
	}
}