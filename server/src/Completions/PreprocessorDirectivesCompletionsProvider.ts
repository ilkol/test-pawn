import { TextDocumentPositionParams, CompletionItem, CompletionItemKind } from "vscode-languageserver";
import { ICompletionProvider } from "./ICompletionProvider";
import { Locale } from "../Locale";
import { AbstractOpenFile } from "../AbstractOpenFile";


export class PreprocessorCompletionsProvider implements ICompletionProvider {
	checkContext(lineTillCursor: string, params: TextDocumentPositionParams): boolean {
		return /^\s*#/.test(lineTillCursor);
	}
	async getCompletions(lineTillCursor: string, params: TextDocumentPositionParams, document: AbstractOpenFile): Promise<CompletionItem[]> {
		if (/^\s*#\s*pragma\s+/i.test(lineTillCursor)) {
			return [
				{ label: 'amxlimit', kind: CompletionItemKind.Field, detail: Locale.t("AMX Memory limit for code + data or only code") },
				{ label: 'amxram', kind: CompletionItemKind.Field, detail: Locale.t("AMX data size limit") },
				{ label: 'codepage', kind: CompletionItemKind.Field, detail: Locale.t("Code page") },
				{ label: 'compress', kind: CompletionItemKind.Field, detail: Locale.t("Stack/heap size.") },
				{ label: 'ctrlchar', kind: CompletionItemKind.Field, detail: Locale.t("Stack/heap size.") },
				{ label: 'deprecated', kind: CompletionItemKind.Field, detail: Locale.t("Stack/heap size.") },
				{ label: 'dynamic', kind: CompletionItemKind.Field, detail: Locale.t("Stack/heap size.") },
				{ label: 'library', kind: CompletionItemKind.Field, detail: Locale.t("Tabulation size.\nDefault: 4") },
				{ label: 'pack', kind: CompletionItemKind.Field, detail: Locale.t("Tabulation size.\nDefault: 4") },
				{ label: 'rational', kind: CompletionItemKind.Field, detail: Locale.t("Tabulation size.\nDefault: 4") },
				{ label: 'semicolon', kind: CompletionItemKind.Field, detail: Locale.t("Tabulation size.\nDefault: 4") },
				{ label: 'tabsize', kind: CompletionItemKind.Field, detail: Locale.t("Tabulation size.\nDefault: 4") },
				{ label: 'unused', kind: CompletionItemKind.Field, detail: Locale.t("Tabulation size.\nDefault: 4") },
				{ label: 'unread', kind: CompletionItemKind.Field, detail: Locale.t("Tabulation size.\nDefault: 4") },
				{ label: 'unwritten', kind: CompletionItemKind.Field, detail: Locale.t("Tabulation size.\nDefault: 4") },
				{ label: 'warning', kind: CompletionItemKind.Field, detail: Locale.t("Tabulation size.\nDefault: 4") },
				{ label: 'option', kind: CompletionItemKind.Field, detail: Locale.t("Tabulation size.\nDefault: 4") },
			];
		}

		if (/^\s*#\s*\w*$/.test(lineTillCursor)) {
			return [
				{ label: 'assert', kind: CompletionItemKind.Keyword },
				{ label: 'define', kind: CompletionItemKind.Keyword, detail: Locale.t("Define some pattern to replace in code") },
				{ label: 'else', kind: CompletionItemKind.Keyword },
				{ label: 'elseif', kind: CompletionItemKind.Keyword },
				{ label: 'emit', kind: CompletionItemKind.Keyword },
				{ label: 'endif', kind: CompletionItemKind.Keyword },
				{ label: 'endinput', kind: CompletionItemKind.Keyword },
				{ label: 'endscript', kind: CompletionItemKind.Keyword },
				{ label: 'error', kind: CompletionItemKind.Keyword },
				{ label: 'file', kind: CompletionItemKind.Keyword },
				{ label: 'file', kind: CompletionItemKind.Keyword },
				{ label: 'if', kind: CompletionItemKind.Keyword, detail: Locale.t("Preprocessing condition.") },
				{ label: 'include', kind: CompletionItemKind.Keyword, detail: Locale.t("Includes file.") },
				{ label: 'line', kind: CompletionItemKind.Keyword},
				{ label: 'pragma', kind: CompletionItemKind.Keyword, detail: Locale.t("Setting compiler.") },
				{ label: 'tryinclude', kind: CompletionItemKind.Keyword},
				{ label: 'undef', kind: CompletionItemKind.Keyword},
				{ label: 'warning', kind: CompletionItemKind.Keyword},
			];
		}

		return []
	}

}