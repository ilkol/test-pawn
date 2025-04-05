import { Range } from "vscode";
import { IVisitor } from "../visitor/IVisitor";
import { IHasID } from "./IHasID";
import { Expresion } from "./Expresion";
import { VarDeclaration } from "./Variables/VarDeclaration";

export class Variable extends Expresion implements IHasID
{

	public declaration?: VarDeclaration;

    constructor(instance: Variable|undefined = undefined) {
        super();
        if(instance) {
            this._idPos = instance._idPos;
            this._identifire = instance._identifire;
            this._pos = instance._pos;
            this.tag = instance.tag;
        }
    }
    public accept(visitor: IVisitor): void {
        visitor.visitVariable(this);
    }
 
    private _identifire: string = "";
	private _idPos: Range = new Range(0,0,0,0);
	
	public get id() : string {
		return this._identifire;
	}
	
	public set id(v : string) {
		this._identifire = v;
	}

	public get idPos() : Range {
		return this._idPos;
	}
	public set idPos(v : Range) {
		this._idPos = v;
	}
	

	public setIDPos(line: number, start: number, end: number): void {
		this._idPos = new Range(line - 1, <number>start, line - 1, <number>end);
	}
}