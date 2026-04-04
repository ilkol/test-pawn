import { TextDocumentPositionParams, CompletionItem } from "vscode-languageserver";
import { ICompletionProvider } from "./ICompletionProvider";
import { AbstractOpenFile } from "../AbstractOpenFile";
import { Position } from "../types";

export class SymbolCompletionsProvider implements ICompletionProvider {
	checkContext(lineTillCursor: string, params: TextDocumentPositionParams): boolean {
		return true;
	}
	async getCompletions(params: TextDocumentPositionParams, document: AbstractOpenFile): Promise<CompletionItem[]> {
		let result: CompletionItem[] = [];// getDefaultCompletions();
		await document.waitForAnalysis();


		const position = new Position(params.position.line, params.position.character)
		const currentScope = document.scopeManager.findInnermostAt(position);
		const symbols = currentScope.getAllVisibleSymbols(position);

		const items = symbols.map(symbol => {
			return {
				label: symbol.name,
				kind: symbol.completionKind,
				data: symbol.id
			} satisfies CompletionItem;
		});
		result = result.concat(items);

		return result;
	}

}