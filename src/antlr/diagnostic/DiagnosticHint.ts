import { DiagnosticSeverity, Range } from "vscode";
import { DiagnosticMessage } from "./DiagnosticMessage";

export class DiagnosticHint extends DiagnosticMessage
{
	constructor(message: string, pos: Range) {
		super(message, DiagnosticSeverity.Hint, pos);
	}
}