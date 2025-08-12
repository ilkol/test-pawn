import * as vscode from "vscode";
import { Position, Range } from "../types";
import { Serializable } from "../Serializable";

type SerializableConstructor<T extends Serializable> = {
	fromJSON(json: any): T;
};

const registry: Record<string, SerializableConstructor<any>> = {};



function getSerializableConstructor<T extends Serializable>(type: string): SerializableConstructor<T> | undefined {
	return registry[type];
}


export namespace Deserialize {
	export function position(pos: Position): vscode.Position {
		return new vscode.Position(pos.line, pos.character);
	}
	export function range(pos: Range): vscode.Range {
		return new vscode.Range(
			Deserialize.position(pos.start),
			Deserialize.position(pos.end)
		);
	}
	export function registerSerializable<T extends Serializable>(type: string, ctor: SerializableConstructor<T>) {
		registry[type] = ctor;
	};
	export function object<T extends Serializable>(json: string|object): T;
	export function object<T extends Serializable>(json: string|object|undefined): T | undefined;
	export function object<T extends Serializable>(json: string|object|undefined): T | undefined {
		if(!json) {
			return undefined;
		}
		let obj;
		if(typeof json === "string") {
			obj = JSON.parse(json);
		}
		else {
			obj = json;
		}
		if(!obj) {
			return obj;
		}
		const type = obj.__type;
		if (!type) {
			throw new Error("Missing __type in serialized object");
		}

		const ctor = getSerializableConstructor<T>(type);

		if (!ctor) {
			throw new Error(`No registered class for type "${type}"`);
		}

		const instance = ctor.fromJSON(obj);
		return instance;
	}
}