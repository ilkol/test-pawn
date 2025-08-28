import { Expression } from "../Expresion";
import { IVisitor } from "../../visitor/IVisitor";
import { AbstractOperator } from "./AbstractOperator";
import { Tag } from "../Tag";
import { DefaultTag } from "../DefaultTag";
import { Serialization } from "../../../../cache/Serialization";

export class UnarOperator extends AbstractOperator
{
	name = "унарный операртор";

	constructor() {
		super();
	}

	public accept(visitor: IVisitor): void {
		visitor.visitUnarOperator(this);
	}
	
	public get value() : Expression | undefined {
		return this.expresion;
	}
	
	public set value(v: Expression) {
		this.expresion = v;
	}
	public get tag(): Tag {
		return this.expresion?.tag ?? new DefaultTag();
	}
	public set tag(v: Tag) {
		if(this.expresion) {
			this.expresion.tag = v;
		}
	}


	static fromJSON(json: Serialization.Nodes.Operators.Unar): UnarOperator {
		let instance: UnarOperator = new UnarOperator();
		instance.prepareFromJSON(json);
		return instance;
	}

	toJSON(): Serialization.Nodes.Operators.Unar {
		return {			
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.UnarOperator,
		};
	}

}