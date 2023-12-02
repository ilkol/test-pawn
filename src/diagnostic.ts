import * as vscode from 'vscode';

export class DiagnosticManager {
	private diagnosticMap: Map<string, vscode.Diagnostic[]> = new Map<string, vscode.Diagnostic[]>;
	
	constructor(private diagnosticCollection: vscode.DiagnosticCollection) {

	}
	public addDiagnostic(msg: string, type: vscode.DiagnosticSeverity, filePath: string, range: vscode.Range) {
		let diagnostics = this.diagnosticMap.get(filePath);
		if (!diagnostics) { diagnostics = []; }
		diagnostics.push(new vscode.Diagnostic(range, msg, type));
		this.diagnosticMap.set(filePath, diagnostics);
	}
	public updateDiagnostic() {
		this.diagnosticMap.forEach((diags, filePath) => {
			this.diagnosticCollection.set(vscode.Uri.parse(filePath), diags);
		});
	}
	public clear() {
		console.log("Clear diagnostic!");
		this.diagnosticCollection.clear();
		this.diagnosticMap.clear();
	}
}