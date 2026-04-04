import { TextDocumentPositionParams, CompletionItem, CompletionItemKind } from "vscode-languageserver";
import { ICompletionProvider } from "./ICompletionProvider";
import { Locale } from "../Locale";
import { AbstractOpenFile } from "../AbstractOpenFile";

export class PreprocessorDirectivesCompletionsProvider implements ICompletionProvider {
	checkContext(lineTillCursor: string, params: TextDocumentPositionParams): boolean {
		return /^\s*#$/.test(lineTillCursor);
	}
	async getCompletions(params: TextDocumentPositionParams, document: AbstractOpenFile): Promise<CompletionItem[]> {
		return [
			{ label: 'include', kind: CompletionItemKind.Keyword, detail: Locale.t("Includes file.") },
			{ label: 'define', kind: CompletionItemKind.Keyword, detail: Locale.t("Define some pattern to replace in code") },
			{ label: 'pragma', kind: CompletionItemKind.Keyword, detail: Locale.t("Setting compiler.") },
			{ label: 'if', kind: CompletionItemKind.Keyword, detail: Locale.t("Preprocessing condition.") },
			{ label: 'else', kind: CompletionItemKind.Keyword },
			{ label: 'endif', kind: CompletionItemKind.Keyword },
		];
	}

}