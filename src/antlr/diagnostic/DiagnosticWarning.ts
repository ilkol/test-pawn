import { DiagnosticSeverity, Range } from "vscode";
import { DiagnosticMessage } from "./DiagnosticMessage";

export class DiagnosticWarning extends DiagnosticMessage
{
	constructor(message: string, pos: Range) {
		super(message, DiagnosticSeverity.Warning, pos);
	}
}