import { Diagnostic, DiagnosticSeverity, DiagnosticTag } from "vscode-languageserver";
import { Locale } from "../Locale";
import { Range } from "../types";

export namespace LSPPawnErrors {

	export var onlyPawnErrorMode: boolean = false;

	export function reportCustom(text: string, severity: DiagnosticSeverity, range: Range, tags: DiagnosticTag[] = []): Diagnostic {
		return {
			message: text,
			range,
			severity,
			source: "pawn-lsp",
			tags
		};
	}

	export function extraReport(code: string|number, severity: DiagnosticSeverity, range: Range, ...args: any[]): Diagnostic {
		return {
			code,
			message: Locale.t(`error.custom.${code}`, ...args),
			range,
			severity,
			source: "pawn-lsp",
		}	
	} 
	export function reportInfo(code: string|number, pawnCode: number, range: Range, ...args: any[]): Diagnostic {
		return report(code, DiagnosticSeverity.Information, pawnCode, range, ...args);
	} 
	export function reportHint(code: string|number, pawnCode: number, range: Range, ...args: any[]): Diagnostic {
		return report(code, DiagnosticSeverity.Hint, pawnCode, range, ...args);
	} 
	export function reportWarn(code: string|number, pawnCode: number, range: Range, ...args: any[]): Diagnostic {
		return report(code, DiagnosticSeverity.Warning, pawnCode, range, ...args);
	} 

	export function reportError(code: string|number, pawnCode: number, range: Range, ...args: any[]): Diagnostic {
		return report(code, DiagnosticSeverity.Error, pawnCode, range, ...args);
	} 

	export function report(code: string|number, severity: DiagnosticSeverity, pawnCode: number, range: Range, ...args: any[]): Diagnostic {
		if(onlyPawnErrorMode) {
			return {
				code: pawnCode,
				message: Locale.t(`error.${pawnCode}`, ...args),
				range,
				severity: Math.floor(pawnCode / 200) === 0 ? DiagnosticSeverity.Error : DiagnosticSeverity.Warning,
				source: "pawn",
			}	
		} else {
			return extraReport(code, severity, range, ...args);
		}
	}
}