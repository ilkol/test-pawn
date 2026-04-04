import { CompletionItem, TextDocumentPositionParams } from "vscode-languageserver";
import { AbstractOpenFile } from "../AbstractOpenFile";

export interface ICompletionProvider {
	checkContext(lineTillCursor: string, params: TextDocumentPositionParams): boolean;
	getCompletions(params: TextDocumentPositionParams, document: AbstractOpenFile): Promise<CompletionItem[]>;
}