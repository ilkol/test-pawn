import { IVisitor } from "../../visitor/IVisitor";
import { Expression } from "../Expresion";
import { AbstractStatement } from "../AbstractStatement";
import { Cycle } from "./Cycle";
import { Abstract } from "../../../../cache/Serialization/Nodes/Cycles";
import { Serialization } from "../../../../cache/Serialization";

export class ForCycle extends Cycle
{
    name = "цикл for";
    private preCode: AbstractStatement|undefined;
    private postCode: Expression|undefined;
    
    public accept(visitor: IVisitor): void {
        visitor.visitWFor(this);
    }    

    public get initialization(): AbstractStatement|undefined {
        return this.preCode;
    }
    public set initialization(v: AbstractStatement) {
        this.preCode = v;
    }

    public get increment(): Expression|undefined {
        return this.postCode;
    }
    public set increment(v: Expression) {
        this.postCode = v;
    }

    public addExpresion(condition: Expression) {
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

	static fromJSON(json: Serialization.Nodes.Cycles.For): ForCycle {
		const instance = new ForCycle();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.Cycles.For): void {
		super.prepareFromJSON(json);
		this.preCode = Serialization.Deserialize.object(json.preCode);
		this.postCode = Serialization.Deserialize.object(json.postCode);
	}

	toJSON(): Serialization.Nodes.Cycles.For {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.For,
			preCode: this.initialization?.toJSON(),
			postCode: this.increment?.toJSON(),
		};
	}
}