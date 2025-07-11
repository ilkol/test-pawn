import { ASTNode } from "../antlr/AST/Nodes/ASTNode";
import { CodeBlock } from "../antlr/AST/Nodes/CodeBlock";
import { Serializable } from "./Serializable";

export type SerializableConstructor<T extends Serializable> = {
	// __type: string; // метка типа (например, "CodeBlock")
	fromJSON(json: any): T;
};

const registry: Record<string, SerializableConstructor<any>> = {};

export function registerSerializable<T extends Serializable>(type: string, ctor: SerializableConstructor<T>) {
	registry[type] = ctor;
}

export function getSerializableConstructor<T extends Serializable>(type: string): SerializableConstructor<T> | undefined {
	return registry[type];
}
export class Serializer {
	static init() {
		registerSerializable("CodeBlock", CodeBlock);
	}

	static serialize(obj: Serializable) {
		return JSON.stringify(obj.toJSON());
	}

	static deserialize<T extends Serializable>(json: string): T {
		const obj = JSON.parse(json);
		const type = obj.__type;

		if (!type) {
			throw new Error("Missing __type in serialized object");
		}

		const ctor = getSerializableConstructor<T>(type);

		if (!ctor) {
			throw new Error(`No registered class for type ${type}`);
		}

		const instance = ctor.fromJSON(obj);
		return instance;
	}
}