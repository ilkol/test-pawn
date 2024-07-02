import { IVisitor } from "../../visitor/IVisitor";
import { Expresion } from "../Expresion";
import { VarDeclaration } from "./VarDeclaration";


export class ArrayDeclaration extends VarDeclaration
{
	private _indexes: Expresion[] = [];
	private _size: number[] = [];
	private _lastSize = 0;
	
	name = "объявление массива";

	constructor(instance: ArrayDeclaration | undefined = undefined) {
		super(instance);
		if(instance) {
			this._indexes = instance._indexes;
		}
	}

	public set indexes(v: Expresion[]) {
		this._indexes = v;
	}
	public get indexes(): Expresion[] {
		return this._indexes;
	}

	public pushSize(v: number) {
		this._size[this._lastSize++] = v;
	}
	public get size(): number[] {
		return this._size;
	}
	
	public accept(visitor: IVisitor): void {
		visitor.visitArrayDeclaration(this);
	}
}