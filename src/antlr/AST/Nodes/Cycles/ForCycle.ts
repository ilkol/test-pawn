import { IVisitor } from "../../visitor/IVisitor";
import { Expresion } from "../Expresion";
import { AbstractStatement } from "../AbstractStatement";
import { Cycle } from "./Cycle";

export class ForCycle extends Cycle
{
    name = "цикл for";
    
    public accept(visitor: IVisitor): void {
        visitor.visitWFor(this);
    }    

    private preCode: AbstractStatement|undefined;
    public get initialization(): AbstractStatement|undefined {
        return this.preCode;
    }
    public set initialization(v: AbstractStatement) {
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
        if(!this.initialization) {
            this.initialization = condition;
        }
        else if(!this.condition) {
            this.condition = condition;
        }
        else if(!this.increment) {
            this.increment = condition;
        }
        else if(!this.code) {
            this.code = condition;
        }
        else {
            throw new Error();
        }
    }

}