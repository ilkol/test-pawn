import * as vscode from "vscode";
import { Position, Range } from "../types";

export namespace Serialize {
	export function position(pos: vscode.Position): Position {
		return {
			character: pos.character,
			line: pos.line
		};
	}
	export function range(pos: vscode.Range): Range {
		return {
			start: position(pos.start),
			end: position(pos.end),
		};
	}
}