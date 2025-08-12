import { Serialization } from "../../../../cache/Serialization";
import { IVisitor } from "../../visitor/IVisitor";
import { EnumDeclaration } from "../enum/EnumDeclaration";
import { Expression } from "../Expresion";
import { VarDeclaration } from "./VarDeclaration";


export class ArrayDeclaration extends VarDeclaration
{
	private _indexes: (Expression | EnumDeclaration)[] = [];
	private _size: number[] = [];
		
	name = "объявление массива";

	constructor(instance: ArrayDeclaration | undefined = undefined) {
		super(instance);
		if(instance) {
			this._indexes = instance._indexes;
		}
	}

	public set indexes(v: (Expression | EnumDeclaration)[]) {
		this._indexes = v;
	}
	public get indexes(): (Expression | EnumDeclaration)[] {
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

	public toJSON(): Serialization.Nodes.ArrayDeclaration {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.ArrayDeclaration,
			indexes: this._indexes.map((value) => {return value.toJSON(); }),
			size: this._size,
		};
	}

	static fromJSON(json: Serialization.Nodes.ArrayDeclaration): ArrayDeclaration {
		const instance = new ArrayDeclaration();
		instance.prepareFromJSON(json);
		return instance;
	}

	protected prepareFromJSON(json: Serialization.Nodes.ArrayDeclaration): void {
		super.prepareFromJSON(json);
		this._indexes = json.indexes.map((index) => Serialization.Deserialize.object(index));
		this._size = json.size;
	}
}