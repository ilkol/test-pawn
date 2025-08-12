import { IVisitor } from "../../visitor/IVisitor";
import { ASTNode } from "../ASTNode";
import { Expression } from "../Expresion";

export class ArrayIndexes extends ASTNode
{
    public accept(visitor: IVisitor): void {
        throw new Error("AHTUNG");
    }

    private _indexes: Expression[] = [];
    public push(index: Expression) {
        this._indexes.push(index);
    }
    public get indexes(): Expression[] {
        return this._indexes;
    }
}