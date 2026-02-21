import { IVisitor } from "../../visitor/IVisitor";
import { IContainsVars } from "../IContainsVars";
import { IHasID } from "../IHasID";
import { Expression } from "../Expresion";
import { Serialization } from "../../../../cache/Serialization";
import { RightValue } from "../RightValue";
import { Range } from "../../../../types";
import { Function } from "../../../../SymbolSystem/Symbols";


export class FunctionCall extends Expression implements IContainsVars<RightValue>, IHasID
{
	name = "вызов функции";

	private _parameters: RightValue[] = [];
	private _identifire: string = "";
	private _idPos: Range = new Range(0,0,0,0);
	symbol?: Function;

	public accept(visitor: IVisitor): void {
		visitor.visitFunctionCall(this);
	}
	public constructor() {
		super();
	}
	
	get vars(): RightValue[] {
		return this._parameters;
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
	

	pushParameter(el: RightValue): void {
		this._parameters.push(el);
	}
	
	public setIDPos(pos: Range): void;
	public setIDPos(line: number, start: number, end: number): void;
	public setIDPos(line: Range | number, start?: number, end?: number): void {
		if(typeof line === "number") {
			this._idPos = new Range(line - 1, <number>start, line - 1, <number>end);
		}
		else {
			this._idPos = line;
		}
	}


	static fromJSON(json: Serialization.Nodes.Functions.Call): FunctionCall {
		const instance = new FunctionCall();
		instance.prepareFromJSON(json);
		return instance;
	}	

	protected prepareFromJSON(json: Serialization.Nodes.Functions.Call): void {
		super.prepareFromJSON(json);
		this._parameters = json.arguments.map((p) => Serialization.Deserialize.object(p));
		this._identifire = json.identifire.text;
		this._idPos = Serialization.Deserialize.range(json.identifire.pos);
	}

	toJSON(): Serialization.Nodes.Functions.Call {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.FunctionCall,
			arguments: this._parameters.map((p) => p.toJSON()),
			identifire: {
				text: this.id,
				pos: Serialization.Serialize.range(this.idPos),
			}
		};
	}
}