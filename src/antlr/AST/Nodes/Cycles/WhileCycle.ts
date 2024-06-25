import { IVisitor } from "../../visitor/IVisitor";
import { Cycle } from "./Cycle";

export class WhileCycle extends Cycle
{
    name = "цикл while";
    
    public accept(visitor: IVisitor): void {
        visitor.visitWhile(this);
    }    
}