import { Range } from "vscode";
import { Variable } from "../Variable";
import { Expresion } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";

export class Array extends Variable
{

    constructor(instance: Variable, private _indexes: Expresion[]) {
        super(instance);
    }
    public accept(visitor: IVisitor): void {
        visitor.visitArray(this);
    } 
    public get indexes(): Expresion[] {
        return this._indexes;
    }
    public pushIndexes(v: Expresion[]) {
        console.log(this._indexes);
        this._indexes = this._indexes.concat(v);
        console.log(this._indexes);
    }
}