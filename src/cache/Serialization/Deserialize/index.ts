import * as vscode from "vscode";
import { Position, Range } from "../types";

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
}