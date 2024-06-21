import { ASTNode } from "./ASTNode";
import { IVisitor } from "../visitor/IVisitor";
import { Statements } from "./Statements";

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
	
}