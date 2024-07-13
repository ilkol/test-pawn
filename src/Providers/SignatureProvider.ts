import * as vscode from 'vscode';
import { FileManager } from '../Managers/FileManager';
import { OpenedFile } from '../OpenedFile';

export class SignatureProvider implements vscode.SignatureHelpProvider {
	constructor(private readonly fileManager: FileManager) {

	}
	provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.SignatureHelpContext): vscode.ProviderResult<vscode.SignatureHelp> {
		const file = this.fileManager.getFile(document.uri.path);
		if(!file) return;
		const signatures = file.signatures;
		const functionName = this.getFunctionName(document, position);
		if(!functionName)
			return;
		const signatur = signatures.get(functionName);

		/*const signatureHelp  =  new vscode.SignatureHelp();
		const signature = new vscode.SignatureInformation('function(param1: string, param2: number)');
        signature.documentation = 'Это пример помощи с параметрами';

		const param1 = new vscode.ParameterInformation('param1', 'Первый параметр');
        const param2 = new vscode.ParameterInformation('param2', 'Второй параметр');
        signature.parameters = [param1, param2];

		signatureHelp.signatures = [signature];
        // signatureHelp.activeSignature = 0;
        signatureHelp.activeParameter = this.getActiveParameter(document, position);*/

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