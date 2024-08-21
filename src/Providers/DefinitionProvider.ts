import * as vscode from 'vscode';
import { FileManager } from '../Managers/FileManager';

export class DefinitionProvider implements vscode.DefinitionProvider {
	constructor(private readonly fileManager: FileManager) {

	}
	provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Definition | vscode.DefinitionLink[]> {
		const doc = this.fileManager.getFile(document.uri.path);
		if(doc)
		{
			const wordRange = document.getWordRangeAtPosition(position);
			const word = document.getText(wordRange);
			const definition = doc.scope.functions().get(word);
			if(definition && definition.file)
			{
				return new vscode.Location(definition.file.uri, definition.idPos);
			}
		}
	}


}