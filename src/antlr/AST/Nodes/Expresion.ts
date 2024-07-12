import { IVisitor } from "../visitor/IVisitor";
import { ASTNode } from "./ASTNode";
import { RightValue } from "./RightValue";

export class Expresion extends RightValue {
	name = "вырожение";

	private exp: Expresion|undefined;

	public accept(visitor: IVisitor): void {
		if(this.exp) {
			this.exp?.accept(visitor);
			if(this.exp?.tag) {
				this.tag = this.exp.tag;
				
			}
			this.range = this.exp.pos;
		}
	}

	public get expresion(): Expresion|undefined {
		return this.exp;
	}
	public set expresion(v: Expresion) {
		this.exp = v;
	}

}