import { IVisitor } from "../visitor/IVisitor";
import { ASTNode } from "./ASTNode";
import { RightValue } from "./RightValue";

export class Expresion extends RightValue {
	name = "вырожение";

	private exp: Expresion|undefined;

	public accept(visitor: IVisitor): void {
		this.exp?.accept(visitor);
		if(this.exp?.tag)
			this.tag = this.exp?.tag;
	}

	public get expresion(): Expresion|undefined {
		return this.exp;
	}
	public set expresion(v: Expresion) {
		this.exp = v;
	}

}