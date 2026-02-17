import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import { Locale } from "../Locale";
import { Range } from "../types";

export namespace PawnErrors {

	export function report(code: Code, range: Range, ...args: any[]): Diagnostic {
		return {
			code,
			message: Locale.t(`error.${code}`, ...args),
			range,
			severity: Math.floor(code / 200) === 0 ? DiagnosticSeverity.Error : DiagnosticSeverity.Warning,
			source: "pawn",
		}
	}

	export enum Code {
		MustBeConstantExpression = 8,
		InvalidArraySize = 9,
		UndefinedSymbol = 17,
		SymbolAlreadyDefined = 21,
		MustBeLValue = 22,
		NotMatchingPreprocessorCondition = 26,
		UnknownDirective = 31,

		CannotReadFromFile = 100,
		UserError = 111,

		SymbolIsNeverUsed = 203,
		TagMismatch = 213,
		UserWarning = 237,
	}
}