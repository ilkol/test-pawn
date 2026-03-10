import { DefaultTag } from "../DefaultTag";
import { IVisitor } from "../../visitor/IVisitor";
import { Literal } from "./Literal";
import { Serialization } from "../../../../cache/Serialization";

export class StringLiteral extends Literal<string>
{
	name = "строка";
	constructor() {
		super();
		this._value = "";
	}

	public constExpr: number = 1;

	public get isConstExpr(): boolean {
		return false;
	}

	public accept(visitor: IVisitor): void {
		visitor.visitStringLiteral(this);
	}
	
	toJSON(): Serialization.Nodes.Literal<string> {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.StringLiteral,
		};
	}

	static fromJSON(json: Serialization.Nodes.Literal<string>): StringLiteral {
		const instance = new StringLiteral();
		instance.prepareFromJSON(json);
		return instance;
	}
	
}