import { IVisitor } from "../../visitor/IVisitor";
import { ASTNode } from "../ASTNode";
import { Expresion } from "../Expresion";

export class ArrayIndexes extends ASTNode
{
    public accept(visitor: IVisitor): void {
        throw new Error("AHTUNG");
    }

    private _indexes: Expresion[] = [];
    public push(index: Expresion) {
        this._indexes.push(index);
    }
    public get indexes(): Expresion[] {
        return this._indexes;
    }
}