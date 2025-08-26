import { DiagnosticTag } from "vscode-languageserver";
import { Range } from "../../types";
import { DiagnosticHint } from "./DiagnosticHint";

export class DiagnosticUnused extends DiagnosticHint
{
	constructor(message: string, pos: Range) {
		super(message, pos);
		this.tags = [
			DiagnosticTag.Unnecessary
		]
	}
}