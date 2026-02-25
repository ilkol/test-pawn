import { Serialization } from "../../../../cache/Serialization";
import { Range } from "../../../../types";
import { IVisitor } from "../../visitor/IVisitor";
import { ASTNode } from "../ASTNode";
import { IHasID } from "../IHasID";
import { RightValue } from "../RightValue";

export class NamedArgument extends ASTNode implements IHasID {
	public _id: string = "";
	private _idPos: Range = new Range(0,0,0,0);
	public value: RightValue | undefined;

	public accept(visitor: IVisitor): void {

	}


	get id(): string {
		return this._id;
	}
	set id(v: string) {
		this._id = v;
	}
	get idPos(): Range {
		return this._idPos;
	}
	set idPos(v: Range) {
		this._idPos = v;
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


	static fromJSON(json: Serialization.Nodes.Functions.NamedArgument): NamedArgument {
		const instance = new NamedArgument();
		instance.prepareFromJSON(json);
		return instance;
	}	

	protected prepareFromJSON(json: Serialization.Nodes.Functions.NamedArgument): void {
		super.prepareFromJSON(json);
		this.value = Serialization.Deserialize.object<RightValue>(json.value);
		this._id = json.identifire.text;
		this._idPos = Serialization.Deserialize.range(json.identifire.pos);
	}

	toJSON(): Serialization.Nodes.Functions.NamedArgument {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.NamedArgument,
			value: this.value!.toJSON(),
			identifire: {
				text: this.id,
				pos: Serialization.Serialize.range(this.idPos),
			}
		};
	}
}