import { IVisitor } from "../../visitor/IVisitor";
import { Expresion } from "../Expresion";
import { Statement } from "../Statement";
import { Cycle } from "./Cycle";

export class ForCycle extends Cycle
{
    name = "цикл for";
    
    public accept(visitor: IVisitor): void {
        visitor.visitWFor(this);
    }    

    private preCode: Statement|undefined;
    public get initialization(): Statement|undefined {
        return this.preCode;
    }
    public set initialization(v: Statement) {
        this.preCode = v;
    }

    private postCode: Expresion|undefined;
    public get increment(): Expresion|undefined {
        return this.postCode;
    }
    public set increment(v: Expresion) {
        this.postCode = v;
    }

    public addExpresion(condition: Expresion) {
        if(!this.condition) {
            this.condition = condition;
        }
        else if(!this.increment) {
            this.increment = condition;
        }
        else {
            throw new Error();
        }
    }

}