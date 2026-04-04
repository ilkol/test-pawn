import { InitializeParams, InitializeResult, TextDocumentSyncKind } from "vscode-languageserver";
import { FileManager } from "./FileManager";
import { Locale } from "../Locale";
import { SemanticTokensLegendManager } from "../SymbolSystem";

export class CapabilitiesManager {
	public hasConfigurationCapability = false;
    public hasWorkspaceFolderCapability = false;
    public hasDiagnosticRelatedInformationCapability = false;

	public getInitializeResult(params: InitializeParams, fileManager: FileManager): InitializeResult {
		const capabilities = params.capabilities;

		// fileManager.currentUri = params.workspaceFolders
		if(params.workspaceFolders) {
			const uri = params.workspaceFolders[0];
			if(uri) {
				fileManager.currentUri = uri.uri;
			}
		}
		if(params.locale) {
			Locale.locale = params.locale;
		}

		this.hasConfigurationCapability = !!(
			capabilities.workspace && !!capabilities.workspace.configuration
		);
		this.hasWorkspaceFolderCapability = !!(
			capabilities.workspace && !!capabilities.workspace.workspaceFolders
		);
		this.hasDiagnosticRelatedInformationCapability = !!(
			capabilities.textDocument &&
			capabilities.textDocument.publishDiagnostics &&
			capabilities.textDocument.publishDiagnostics.relatedInformation
		);

		const result: InitializeResult = {
			capabilities: {
				textDocumentSync: TextDocumentSyncKind.Incremental,
				completionProvider: {
					triggerCharacters: ['#'],
					resolveProvider: true
				},
				diagnosticProvider: {
					interFileDependencies: false,
					workspaceDiagnostics: false
				},
				documentLinkProvider: {
					workDoneProgress: true,
				},
				documentSymbolProvider: {
					workDoneProgress: true
				},
				semanticTokensProvider: {
					full: true,
					legend: SemanticTokensLegendManager.getLegend(),
					workDoneProgress: true
				},
				referencesProvider: {
					workDoneProgress: true
				},
				definitionProvider: {
					workDoneProgress: true
				},
				renameProvider: {
					prepareProvider: true,
					workDoneProgress: true
				}
			}
		};
		if (this.hasWorkspaceFolderCapability) {
			result.capabilities.workspace = {
				workspaceFolders: {
					supported: true
				}
			};
		}
		return result;
	}
}