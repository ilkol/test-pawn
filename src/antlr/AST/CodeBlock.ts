import { ASTNode } from "./ASTNode";
import { Statements } from "./Statements";
import { IVisitor } from "./visitor/IVisitor";

export class CodeBlock extends ASTNode
{
	public accept(visitor: IVisitor): void {
		visitor.visitCodeBlock(this);
	}

	constructor(private _statements: Statements) {
		super();
	}

	
	public get statements() : Statements {
		return this._statements;
	}
	
}