import * as vscode from 'vscode';
import { FileManager } from '../FileManager';

export class CodelensProvider implements vscode.CodeLensProvider {
	private codeLenses: vscode.CodeLens[] = [];
	private _onDidChangeCodeLenses: vscode.EventEmitter<void> = new vscode.EventEmitter<void>();
	public readonly onDidChangeCodeLenses: vscode.Event<void> = this._onDidChangeCodeLenses.event;

	constructor(private readonly fileManager: FileManager) {
		
		vscode.workspace.onDidChangeConfiguration((_) => {
			this._onDidChangeCodeLenses.fire();
		});
	}

	public provideCodeLenses(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {

		let funcList = this.fileManager.getFileFunctionsDefinitions(document);
		this.codeLenses = [];
		
		funcList.forEach(element => {
			if(element.included) return;
			let tmp = new vscode.CodeLens(element.func.getPos());
			tmp.command = {
				title: `Ну крч тут определяется функция ${element.func.name}`,
				tooltip: "Ну крч навелся ты, да",
				command: "",
				arguments: []
			};
			this.codeLenses.push(tmp);
		});
		return this.codeLenses;
	}

	public resolveCodeLens(codeLens: vscode.CodeLens, token: vscode.CancellationToken) {
			// codeLens.command = {
			// 	title: "Ну крч ниже сток найден",
			// 	tooltip: "Ну крч навелся ты, да",
			// 	command: "",
			// 	arguments: ["Argument 1", false]
			// };
			return codeLens;
		return null;
	}
}