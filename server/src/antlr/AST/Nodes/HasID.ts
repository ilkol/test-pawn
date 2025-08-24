import { ASTNode } from "./ASTNode";
import { IHasID } from "./IHasID";
import { Serialization } from "../../../cache/Serialization";
import { Range } from "../../../types";

export abstract class HasID extends ASTNode implements IHasID
{
	/**
	 * Текст идентификатора
	 */
	private _identifire: string = "";
	/**
	 * Позиция идентификатора
	 */
	protected _idPos: Range = new Range(0,0,0,0);




	public constructor(instance: HasID|undefined = undefined)
	{
		super();
		if(instance) {
			this._identifire = instance._identifire;
			this._idPos = instance._idPos;
			this._pos = instance._pos;
		}
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



	
	toJSON(): Serialization.Nodes.HastId {
		return {
			...super.toJSON(),
			identifire: {
				text: this._identifire,
				pos: Serialization.Serialize.range(this._idPos)
			}
		};
	}
	
	protected prepareFromJSON(json: Serialization.Nodes.HastId) {
		super.prepareFromJSON(json);
		this._identifire = json.identifire.text;
		this._idPos = Serialization.Deserialize.range(json.identifire.pos);
	}
}