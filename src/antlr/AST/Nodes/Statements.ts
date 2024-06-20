import { ASTNode } from "./ASTNode";
import { IVisitor } from "../visitor/IVisitor";
import { Statement } from "./Statement";

export class Statements extends ASTNode {
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	public constructor(private _statements: Statement[] = []) {
		super();
	}

	
	public get statements() : Statement[] {
		return this._statements;
	}
	public push(el: Statement) {
		this._statements.push(el);
	}
}