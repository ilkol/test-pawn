import { DiagnosticSeverity, Range } from "vscode";
import { DiagnosticMessage } from "./DiagnosticMessage";

export class DiagnosticError extends DiagnosticMessage
{
	constructor(message: string, pos: Range) {
		super(message, DiagnosticSeverity.Error, pos);
	}
}