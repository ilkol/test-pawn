import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import { Locale } from "../Locale";
import { Range } from "../types";

export namespace PawnErrors {

	export function report(code: number, range: Range, ...args: any[]): Diagnostic {
		return {
			code,
			message: Locale.t(`error.${code}`, ...args),
			range,
			severity: Math.floor(code / 200) === 0 ? DiagnosticSeverity.Error : DiagnosticSeverity.Warning,
			source: "pawn",
		}
	}
}