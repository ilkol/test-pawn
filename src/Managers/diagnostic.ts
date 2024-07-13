import * as vscode from 'vscode';

export class DiagnosticManager {
	private diagnosticMap: Map<string, vscode.Diagnostic[]> = new Map<string, vscode.Diagnostic[]>;
	
	constructor(private diagnosticCollection: vscode.DiagnosticCollection) {

	}
	public addDiagnostic(msg: string, type: vscode.DiagnosticSeverity, filePath: string, range: vscode.Range, tags?: vscode.DiagnosticTag[]) {
		let diagnostics = this.diagnosticMap.get(filePath);
		if (!diagnostics) { diagnostics = []; }
		let diagnostic = new vscode.Diagnostic(range, msg, type);
		diagnostic.tags = tags;
		
		diagnostics.push(diagnostic);
		this.diagnosticMap.set(filePath, diagnostics);
	}
	public updateDiagnostic() {
		this.diagnosticMap.forEach((diags, filePath) => {
			this.diagnosticCollection.set(vscode.Uri.parse(filePath), diags);
		});
	}
	public updateFileDiagnostic(filePath: string) {
		const diags = this.diagnosticMap.get(filePath);
		this.diagnosticCollection.set(vscode.Uri.parse(filePath), diags);
	}
	public clear() {
		console.log("Clear diagnostic!");
		// this.diagnosticCollection.clear();
		this.diagnosticMap.clear();
	}
}