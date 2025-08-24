import { Expression } from "../Expresion";
import { AbstractStatement } from "../AbstractStatement";
import { Serialization } from "../../../../cache/Serialization";

export abstract class Cycle extends AbstractStatement {
    name = "Цикл";

    /**
     * Условие выполнения цикла
     */
    private _condition?: Expression;
    /**
     * Тело цикла
     */
    private _code?: AbstractStatement;

    /**
     * Тело цикла
     */
    public get code(): AbstractStatement|undefined {
        return this._code;
    }
    /**
     * Тело цикла
     */
    public set code(v: AbstractStatement) {
        this._code = v;
    }

    /**
     * Условие выполнения цикла
     */
    public get condition(): Expression|undefined {
        return this._condition;
    }
    /**
     * Условие выполнения цикла
     */
   public set condition(v: Expression) {
        this._condition = v;
    }

	protected prepareFromJSON(json: Serialization.Nodes.Cycles.Abstract): void {
		super.prepareFromJSON(json);
		this._condition = Serialization.Deserialize.object(json.condition);
		this._code = Serialization.Deserialize.object(json.code);
	}
	
	toJSON(): Serialization.Nodes.Cycles.Abstract {
		return {
			...super.toJSON(),
			condition: this.condition?.toJSON(),
			code: this.code?.toJSON(),
		};
	}
}