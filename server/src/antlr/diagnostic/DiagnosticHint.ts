import { DiagnosticSeverity } from "vscode-languageserver";
import { Range } from "../../types";
import { DiagnosticMessage } from "./DiagnosticMessage";

export class DiagnosticHint extends DiagnosticMessage
{
	constructor(message: string, pos: Range) {
		super(message, DiagnosticSeverity.Hint, pos);
	}
}