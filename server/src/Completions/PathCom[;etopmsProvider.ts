import { TextDocumentPositionParams, CompletionItem } from "vscode-languageserver";
import { AbstractOpenFile } from "../AbstractOpenFile";
import { ICompletionProvider } from "./ICompletionProvider";

export class PathCompletionsProvider implements ICompletionProvider {
	checkContext(lineTillCursor: string, params: TextDocumentPositionParams): boolean {
		return /#include\s*(<|")[\w\/\\]*$/.test(lineTillCursor);
	}
	async getCompletions(lineTillCursor: string, params: TextDocumentPositionParams, document: AbstractOpenFile): Promise<CompletionItem[]> {
		// const isSystem = lineTillCursor.includes('<');
        // const searchPaths: string[] = [];

        // if (isSystem) {
        //     // Пути к стандартным библиотекам (из настроек вашего расширения)
        //     searchPaths.push(...this.getStandardIncludePaths());
        // } else {
        //     // Путь относительно текущего файла
        //     searchPaths.push(this.getCurrentFileDir(params.textDocument.uri));
        // }

        // const files = await this.scanFoldersForIncludes(searchPaths);

        // return files.map(file => ({
        //     label: file.name,
        //     // Используем File или Folder, чтобы VS Code подставил красивую иконку
        //     kind: file.isDirectory ? CompletionItemKind.Folder : CompletionItemKind.File,
        //     detail: file.path,
        //     // Если это файл, можно убрать расширение при вставке, если в Pawn так принято
        //     insertText: file.name 
        // }));
		
		return [];
	}

}