import { Range } from "vscode";
import { IVisitor } from "./visitor/IVisitor";
import { Token } from "antlr4ts";

export abstract class ASTNode {
	protected _pos: Range = new Range(0,0,0,0);
	
	public constructor() {

	}
	
	public get pos() : Range {
		return this._pos;
	}
	
	
	public setPos(start: Token, end: Token) {
		this._pos = new Range(start.line - 1, start.charPositionInLine, end.line - 1, end.charPositionInLine);
	}
	
	public abstract accept(visitor: IVisitor): void;
}