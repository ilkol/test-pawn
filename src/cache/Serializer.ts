import { ASTNode } from "../antlr/AST/Nodes/ASTNode";
import { CodeBlock } from "../antlr/AST/Nodes/CodeBlock";
import { Serializable } from "./Serializable";

interface SerializableContructor extends Serializable {
	new (...args: any[]): Serializable;
}

export class Serializer {
	private static typeRegistry: { [key: string]: SerializableContructor } = {
		CodeBlock
	};

	static serialize(obj: Serializable) {
		return JSON.stringify(obj);
	}

	static deserialize<T extends Serializable>(json: string): T {
		const parsed = JSON.parse(json);
		const type = parsed.__type;
		if (!type || !this.typeRegistry[type]) {
			throw new Error(`Unknown type: ${type}`);
		}
		const clazz = this.typeRegistry[type];

		return clazz.fromJSON(parsed);
	}
}