import * as Serialized from "../types";
import { Serializable } from "../Serializable";
import { Position, Range } from "../../../types";

export namespace Serialize {
	export function toObject(obj: undefined): undefined;
	export function toObject(obj: Serializable): object;
	export function toObject(obj: Serializable | undefined): object | undefined {
		return obj ? obj.toJSON() : undefined;
	}

	export function toString(obj: undefined): undefined;
	export function toString(obj: Serializable): string;	
	export function toString(obj: Serializable | undefined): string | undefined {
		return obj ? JSON.stringify(toObject(obj)) : undefined;
	}

	export function position(pos: Position): Serialized.Position {
		return {
			character: pos.character,
			line: pos.line
		};
	}
	export function range(pos: Range): Serialized.Range {
		return {
			start: position(pos.start),
			end: position(pos.end),
		};
	}
}