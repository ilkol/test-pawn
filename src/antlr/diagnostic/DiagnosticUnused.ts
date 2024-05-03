import { DiagnosticTag, Range } from "vscode";
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