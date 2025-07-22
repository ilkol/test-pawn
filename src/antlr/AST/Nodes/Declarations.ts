import { ASTNode } from "./ASTNode";
import { Declaration } from "./Declaration";
import { IVisitor } from "../visitor/IVisitor";
import { Serializer } from "../../../cache/Serializer";
import { Serialization } from "../../../cache/Serialization";

export class Declarations extends ASTNode 
{
	name = "объявления";

	public accept(visitor: IVisitor): void {
		visitor.visitDeclarations(this);
	}
	private readonly _declarations: Declaration[] = [];
	public constructor()
	{
		super();
	}
	public get declarations() : Declaration[] {
		return this._declarations;
	}
	
	toJSON(): Serialization.Nodes.Declarations {
		return {
			...super.toJSON(),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__type: Serialization.NodeList.Declarations,
			declarations: this._declarations.map(el => el.toJSON()),
		};
	}
	static fromJSON(json: Serialization.Nodes.Declarations): Declarations {
		const node = new Declarations();
		node.range = Serialization.Deserialize.range(json.pos);
		if (json.declarations) {
			for (const decl of json.declarations) {
				const declNode = Serializer.deserialize<Declaration>(JSON.stringify(decl));
				node._declarations.push(declNode);
			}
		}

		return node;
	}

}