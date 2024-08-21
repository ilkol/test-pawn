import * as vscode from 'vscode';
import { FileManager } from '../Managers/FileManager';
import { Definition } from '../Linking/Definition';
import { Declaration } from '../antlr/AST/Nodes/Declaration';

export class DefinitionProvider implements vscode.DefinitionProvider {
	public readonly definitions: Map<string, Map<vscode.Uri, Definition<Declaration>[]>> = new Map<string, Map<vscode.Uri, Definition<Declaration>[]>>;
	provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Definition | vscode.DefinitionLink[]> {
		const result: vscode.Location[] = [];
		
		const wordRange = document.getWordRangeAtPosition(position);
		const word = document.getText(wordRange);

		const definitions = this.definitions.get(word);
		if(definitions)
		{
			definitions.forEach((definitionArray, file)  => {
				definitionArray.forEach(definition => {
					result.push(new vscode.Location(file, definition.pos));
				});
			});
		}

		return result;
	}


}