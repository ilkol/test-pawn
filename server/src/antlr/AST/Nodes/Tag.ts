import { ASTNode } from "./ASTNode";
import { HasID } from "./HasID";
import { IVisitor } from "../visitor/IVisitor";
import { Serialization } from "../../../cache/Serialization";

export class Tag extends HasID
{
	name = "тэг";
	
	public accept(visitor: IVisitor): void {
		throw new Error("Method not implemented.");
	}
	constructor(tag: string = "_") {
		super();
		this.id = tag;
	}

	toJSON(): Serialization.Nodes.Tag {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.Tag,
		};
	}
	static fromJSON(json: Serialization.Nodes.Tag): Tag {
		const instance = new Tag(json.identifire.text);
		instance.prepareFromJSON(json);
		return instance;
	}
}