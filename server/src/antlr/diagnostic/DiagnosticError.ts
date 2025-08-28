import { DiagnosticSeverity } from "vscode-languageserver";
import { DiagnosticMessage } from "./DiagnosticMessage";
import { Range } from "../../types";

export class DiagnosticError extends DiagnosticMessage
{
	constructor(message: string, pos: Range) {
		super(message, DiagnosticSeverity.Error, pos);
	}
}