import { Expression } from "../Expresion";
import { AbstractStatement } from "../AbstractStatement";

export abstract class Cycle extends AbstractStatement {
    name = "Цикл";

    /**
     * Условие выполнения цикла
     */
    private _condition: Expression|undefined;
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
}