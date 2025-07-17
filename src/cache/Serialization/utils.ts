import * as vscode from "vscode";

export namespace Serialization {
	export interface Position {
		character: number;
		line: number;
	}
	export interface Range {
		start: Position,
		end: Position
	}

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
}

