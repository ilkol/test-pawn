import { ASTNode } from "./ASTNode";
import { Declaration } from "./Declaration";
import { IVisitor } from "../visitor/IVisitor";
import { Serializer } from "../../../cache/Serializer";
import { Position } from "vscode";
import { ASTNodes } from "./ASTNodes";
import { Serialization } from "../../../cache/Serialization/utils";

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
	
	toJSON()  {
		return {
			...super.toJSON(),
			__type: ASTNodes.Declarations,
			declarations: this._declarations.map(el => el.toJSON()),
		};
	}
	static fromJSON(json: any): Declarations {
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