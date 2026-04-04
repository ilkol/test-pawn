import { CompletionItem, TextDocumentPositionParams } from "vscode-languageserver";
import { AbstractOpenFile } from "../AbstractOpenFile";

export interface ICompletionProvider {
	checkContext(lineTillCursor: string, params: TextDocumentPositionParams): boolean;
	getCompletions(lineTillCursor: string, params: TextDocumentPositionParams, document: AbstractOpenFile): Promise<CompletionItem[]>;
}