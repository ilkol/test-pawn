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
				{ label: 'amxlimit', kind: CompletionItemKind.Field, detail: Locale.t("AMX Memory limit") },
				{ label: 'codepage', kind: CompletionItemKind.Field, detail: Locale.t("Code page") },
				{ label: 'dynamic', kind: CompletionItemKind.Field, detail: Locale.t("Stack/heap size.") },
				{ label: 'tabsize', kind: CompletionItemKind.Field, detail: Locale.t("Tabulation size.\nDefault: 4") },
			];
		}

		if (/^\s*#\s*\w*$/.test(lineTillCursor)) {
			return [
				{ label: 'include', kind: CompletionItemKind.Keyword, detail: Locale.t("Includes file.") },
				{ label: 'define', kind: CompletionItemKind.Keyword, detail: Locale.t("Define some pattern to replace in code") },
				{ label: 'pragma', kind: CompletionItemKind.Keyword, detail: Locale.t("Setting compiler.") },
				{ label: 'if', kind: CompletionItemKind.Keyword, detail: Locale.t("Preprocessing condition.") },
				{ label: 'else', kind: CompletionItemKind.Keyword },
				{ label: 'endif', kind: CompletionItemKind.Keyword },
			];
		}

		return []
	}

}