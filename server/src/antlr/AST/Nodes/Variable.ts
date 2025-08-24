import { IVisitor } from "../visitor/IVisitor";
import { IHasID } from "./IHasID";
import { Expression } from "./Expresion";
import { VarDeclaration } from "./Variables/VarDeclaration";
import { Serialization } from "../../../cache/Serialization";
import { Range } from "../../../types";

export class Variable extends Expression implements IHasID
{

	public declaration?: VarDeclaration;
	private _identifire: string = "";
	private _idPos: Range = new Range(0,0,0,0);

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

	toJSON(): Serialization.Nodes.Variable {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.Variable,
			identifire: {
				text: this._identifire,
				pos: Serialization.Serialize.range(this._idPos)
			}
		};
	}

	static fromJSON(json: Serialization.Nodes.Variable): Variable {
		const instance = new Variable();
		instance.prepareFromJSON(json);
		return instance;
	}
	protected prepareFromJSON(json: Serialization.Nodes.Variable): void {
		super.prepareFromJSON(json);
		this._identifire = json.identifire.text;
		this.idPos = Serialization.Deserialize.range(json.identifire.pos);
	}
}