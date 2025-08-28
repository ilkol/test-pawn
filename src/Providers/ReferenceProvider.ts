import * as vscode from 'vscode';
import { Definition } from '../Linking/Definition';
import { Declaration } from '../antlr/AST/Nodes/Declaration';
import { Reference } from '../Linking/Reference';
import { IHasID } from '../antlr/AST/Nodes/IHasID';

export class ReferenceProvider implements vscode.ReferenceProvider {
	public readonly references: Map<string, Map<vscode.Uri, Reference<IHasID>[]>> = new Map<string, Map<vscode.Uri, Reference<IHasID>[]>>;
	provideReferences(document: vscode.TextDocument, position: vscode.Position, context: vscode.ReferenceContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Location[]> {
		const result: vscode.Location[] = [];
		
		const wordRange = document.getWordRangeAtPosition(position);
		const word = document.getText(wordRange);

		const references = this.references.get(word);
		if(references)
		{
			references.forEach((referenceArray, file)  => {
				referenceArray.forEach(reference => {
					result.push(new vscode.Location(file, reference.pos));
				});
			});
		}

		return result;
	}


}