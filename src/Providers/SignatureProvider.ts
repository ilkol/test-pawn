import * as vscode from 'vscode';
import { FileManager } from '../Managers/FileManager';

export class SignatureProvider implements vscode.SignatureHelpProvider {
	constructor(private readonly fileManager: FileManager) {

	}
	provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.SignatureHelpContext): vscode.ProviderResult<vscode.SignatureHelp> {
		const file = this.fileManager.getFile(document.uri.path);
		if(!file) {return;}
		const signatures = file.signatures;
		const functionName = this.getFunctionName(document, position);
		if(!functionName)
			{return;}
		const signatur = signatures.get(functionName);

		if(signatur) {
			const parameters = signatur.signatures[0].parameters;
			let activeParameter = this.getActiveParameter(document, position);
			if(parameters[parameters.length - 1].label === "..." && activeParameter >= parameters.length - 1)
				{signatur.activeParameter = parameters.length - 1;}
	        else {signatur.activeParameter = activeParameter;}
		}

        return signatur;
	}

	private getActiveParameter(document: vscode.TextDocument, position: vscode.Position): number {
        const text = document.lineAt(position.line).text.substring(0, position.character);
        const commas = text.split(',').length - 1;
        return commas;
    }

	private getFunctionName(document: vscode.TextDocument, position: vscode.Position): string | undefined {
        const text = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
        const functionCallPattern = /(\w+)\s*\(.*$/;
        const matches = functionCallPattern.exec(text);

        if (matches && matches.length > 1) {
            return matches[1];
        }
        return undefined;
    }
}