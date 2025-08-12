import { IVisitor } from "../../visitor/IVisitor";
import { Expression } from "../Expresion";
import { Variable } from "../Variable";
import { BinarOperator } from "./BinarOperator";

export class AssigmentOperator extends BinarOperator
{
	name = "операртор присваения";

    protected _left: Variable | undefined;

    public get left(): Variable | undefined {
        return this._left;   
    }
    public set left(v: Variable | undefined) {
        this._left = v;
    }
	
	public accept(visitor: IVisitor): void {
        visitor.visitAssigment(this);
    }
	
    constructor() {
        super();
    }

    public static copy(node: BinarOperator): AssigmentOperator {
        const tmp = new AssigmentOperator();
        tmp._left = <Variable|undefined>node.left;
        tmp.exp = node.right;
        tmp._pos = node.pos;
        if(node.isTaged) {
            tmp.isTaged = true;
        }
        tmp.tag = node.tag;
        return tmp;
    }
}