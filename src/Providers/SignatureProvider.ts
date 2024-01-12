import * as vscode from 'vscode';
import { FileManager } from '../Managers/FileManager';
import { OpenedFile } from '../OpenedFile';

export class SignatureProvider implements vscode.SignatureHelpProvider {
	constructor(private readonly fileManager: FileManager) {

	}
	provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.SignatureHelpContext): vscode.ProviderResult<vscode.SignatureHelp> {
		let test =  new vscode.SignatureHelp();

		const range = document.getWordRangeAtPosition(new vscode.Position(position.line, position.character - 1));
		const word = document.getText(range);
		console.error(word);
		const functions = this.fileManager.getFileFunctionsDefinitions(document);
		let funct = functions.get(word);
		if(!funct) return test;
		
		let signa = new vscode.SignatureInformation(funct.hover, "");
		
		funct.args.forEach(element => {
			let param = new vscode.ParameterInformation(element.name);
			signa.parameters.push(param);
		});

		
		

		signa.activeParameter = 0;

		test.signatures.push(signa);
		new vscode.SignatureInformation("test",)
		return test;
	}
}