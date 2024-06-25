import { Expresion } from "../Expresion";
import { Statement } from "../Statement";
import { Statements } from "../Statements";

export abstract class Cycle extends Statement {
    name = "Цикл";

    /**
     * Условие выполнения цикла
     */
    private _condition: Expresion|undefined;
    /**
     * Тело цикла
     */
    private _code: Statements|undefined;

    /**
     * Тело цикла
     */
    public get code(): Statements|undefined {
        return this._code;
    }
    /**
     * Тело цикла
     */
    public set code(v: Statements) {
        this._code = v;
    }

    /**
     * Условие выполнения цикла
     */
    public get condition(): Expresion|undefined {
        return this._condition;
    }
    /**
     * Условие выполнения цикла
     */
   public set condition(v: Expresion) {
        this._condition = v;
    }
}