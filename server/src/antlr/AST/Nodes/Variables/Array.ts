import { Variable } from "../Variable";
import { Expression } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { Serialization } from "../../../../cache/Serialization";

export class ArrayNode extends Variable
{

    constructor(instance: Variable, private _indexes: Expression[]) {
        super(instance);
    }


	
    public accept(visitor: IVisitor): void {
        visitor.visitArray(this);
    } 
    public get indexes(): Expression[] {
        return this._indexes;
    }
    public set indexes(v: Expression[]) {
        this._indexes = v;
    }
    public pushIndexes(v: Expression[]) {
        this._indexes = this._indexes.concat(v);
    }

	toJSON(): Serialization.Nodes.Array {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.Array,
			indexes: this._indexes.map((index) => index.toJSON()),
		};
	}

	static fromJSON(json: Serialization.Nodes.Array): ArrayNode {
		const varInstance = Variable.fromJSON(json);
		const indexes = json.indexes.map((index) => Serialization.Deserialize.object<Expression>(index));
		const instance = new ArrayNode(varInstance, indexes);
		instance.prepareFromJSON(json);
		return instance;
	}
}