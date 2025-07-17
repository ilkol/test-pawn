import { Position, Range } from "vscode";
// import { ASTNode } from "../antlr/AST/Nodes/ASTNode";
// import { ASTNodes } from "../antlr/AST/Nodes/ASTNodes";
// import { CodeBlock } from "../antlr/AST/Nodes/CodeBlock";
import { Serializable } from "./Serializable";

export type SerializableConstructor<T extends Serializable> = {
	// __type: string; // метка типа (например, "CodeBlock")
	fromJSON(json: any): T;
};



export class Serializer {
	constructor() {}

	private static registry: Record<string, SerializableConstructor<any>> = {};

	static registerSerializable<T extends Serializable>(type: string, ctor: SerializableConstructor<T>) {
		Serializer.registry[type] = ctor;
	}

	static getSerializableConstructor<T extends Serializable>(type: string): SerializableConstructor<T> | undefined {
		return Serializer.registry[type];
	}


	static init() {
		// 
	}

	static serialize(obj: Serializable) {
		return JSON.stringify(obj.toJSON());
	}

	static deserialize<T extends Serializable>(json: string|object): T {
		let obj;
		if(typeof json === "string") {
			obj = JSON.parse(json);
		}
		else {
			obj = json;
		}
		const type = obj.__type;

		if (!type) {
			throw new Error("Missing __type in serialized object");
		}

		const ctor = Serializer.getSerializableConstructor<T>(type);

		if (!ctor) {
			throw new Error(`No registered class for type "${type}"`);
		}

		const instance = ctor.fromJSON(obj);
		return instance;
	}
}

