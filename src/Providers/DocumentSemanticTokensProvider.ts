import * as vscode from 'vscode';
import { FileManager } from '../Managers/FileManager';
import { OpenedFile } from '../OpenedFile';
import { AbstractOpenFile } from '../AbstractOpenFile';

export class DocumentSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
	constructor(private readonly fileManager: FileManager, private readonly legend: vscode.SemanticTokensLegend) {

	}
	
	// onDidChangeSemanticTokens?: vscode.Event<void> | undefined;
	provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SemanticTokens> {
		const tokensBuilder = new vscode.SemanticTokensBuilder(this.legend);
	
		const file: AbstractOpenFile | undefined = this.fileManager.openedFiles.get(document.uri.path);
		if(file) {
			file.tokens.forEach((value) => {
				tokensBuilder.push(value.pos, value.type, value.modifers);
			});
		}
		
		
		return tokensBuilder.build();
	}
	// provideDocumentSemanticTokensEdits?(document: vscode.TextDocument, previousResultId: string, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SemanticTokens | vscode.SemanticTokensEdits> {
	// 	throw new Error('Method not implemented.');
	// }


}