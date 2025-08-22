import { Serialization } from "../../../../cache/Serialization";
import { IVisitor } from "../../visitor/IVisitor";
import { Expression } from "../Expresion";
import { Variable } from "../Variable";
import { BinarOperator } from "./BinarOperator";

export class AssigmentOperator extends BinarOperator
{
	name = "операртор присваения";

    protected declare _left: Variable | undefined;

    public override get left(): Variable | undefined {
        return this._left;   
    }
    public override set left(v: Variable | undefined) {
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

	static fromJSON(json: Serialization.Nodes.Operators.Assigment): AssigmentOperator {
		let instance: AssigmentOperator = new AssigmentOperator();
		instance.prepareFromJSON(json);
		return instance;
	}

	toJSON(): Serialization.Nodes.Operators.Assigment {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.Assigment,
			left: this.left?.toJSON(),
		};
	}
}