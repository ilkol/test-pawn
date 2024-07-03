import { IVisitor } from "../../visitor/IVisitor";
import { EnumDeclaration } from "../enum/EnumDeclaration";
import { Expresion } from "../Expresion";
import { VarDeclaration } from "./VarDeclaration";


export class ArrayDeclaration extends VarDeclaration
{
	private _indexes: (Expresion | EnumDeclaration)[] = [];
	private _size: number[] = [];
		
	name = "объявление массива";

	constructor(instance: ArrayDeclaration | undefined = undefined) {
		super(instance);
		if(instance) {
			this._indexes = instance._indexes;
		}
	}

	public set indexes(v: (Expresion | EnumDeclaration)[]) {
		this._indexes = v;
	}
	public get indexes(): (Expresion | EnumDeclaration)[] {
		return this._indexes;
	}

	public pushSize(index: number, v: number) {
		this._size[index] = v;
	}
	public get size(): number[] {
		return this._size;
	}
	
	public accept(visitor: IVisitor): void {
		visitor.visitArrayDeclaration(this);
	}
}