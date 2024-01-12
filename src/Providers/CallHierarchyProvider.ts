import * as vscode from 'vscode';

export class CallHierarchyProvider implements vscode.CallHierarchyProvider {
	prepareCallHierarchy(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CallHierarchyItem | vscode.CallHierarchyItem[]> {
		let items: vscode.CallHierarchyItem[] = []
		// items.push(new vscode.CallHierarchyItem(vscode.SymbolKind.Function, "kek", "aga", document.uri, new vscode.Range(new vscode.Position(1,1), new vscode.Position(1,4)), new vscode.Range(new vscode.Position(1,1), new vscode.Position(1,1))));
		// items.push(new vscode.CallHierarchyItem(vscode.SymbolKind.Function, "kek", "aga", document.uri, new vscode.Range(new vscode.Position(1,1), new vscode.Position(1,4)), new vscode.Range(new vscode.Position(1,1), new vscode.Position(1,1))));
		return items;
	}
	provideCallHierarchyIncomingCalls(item: vscode.CallHierarchyItem, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CallHierarchyIncomingCall[]> {
		return [];
	}
	provideCallHierarchyOutgoingCalls(item: vscode.CallHierarchyItem, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CallHierarchyOutgoingCall[]> {
		return [];
	}

}