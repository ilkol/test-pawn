import * as vscode from 'vscode';
import { FileManager } from '../Managers/FileManager';

export class DocumentLinkProvider implements vscode.DocumentLinkProvider {
	private links: vscode.DocumentLink[] = [];
	constructor(private readonly fileManager: FileManager) {

	}

	provideDocumentLinks(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.DocumentLink[]> {
		let funcList = this.fileManager.getFileFunctionsIncludes(document);
		this.links = [];
		funcList.forEach((el, key) => {
			let tmp = new vscode.DocumentLink(key, el);

			this.links.push(tmp);
		});
		// this.links.push(new vscode.DocumentLink(new vscode.Range(0,0,0,10), document.uri));
		return this.links;
	}
	resolveDocumentLink?(link: vscode.DocumentLink, token: vscode.CancellationToken): vscode.ProviderResult<vscode.DocumentLink> {
		return link;
	}

}