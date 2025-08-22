import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	DocumentDiagnosticReportKind,
	type DocumentDiagnosticReport
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';
import { getDefaultCompletions } from './DefaultCompletions/DefaultCompletions';
import { Logger } from './Logger/Logger';

function main() {
	const connection = createConnection(ProposedFeatures.all);

	Logger.init(connection.console);

	const documents = new TextDocuments(TextDocument);

	let hasConfigurationCapability = false;
	let hasWorkspaceFolderCapability = false;
	let hasDiagnosticRelatedInformationCapability = false;

	connection.onInitialize((params: InitializeParams) => {
		const capabilities = params.capabilities;

		hasConfigurationCapability = !!(
			capabilities.workspace && !!capabilities.workspace.configuration
		);
		hasWorkspaceFolderCapability = !!(
			capabilities.workspace && !!capabilities.workspace.workspaceFolders
		);
		hasDiagnosticRelatedInformationCapability = !!(
			capabilities.textDocument &&
			capabilities.textDocument.publishDiagnostics &&
			capabilities.textDocument.publishDiagnostics.relatedInformation
		);

		const result: InitializeResult = {
			capabilities: {
				textDocumentSync: TextDocumentSyncKind.Incremental,
				completionProvider: {
					resolveProvider: true
				},
				diagnosticProvider: {
					interFileDependencies: false,
					workspaceDiagnostics: false
				}
			}
		};
		if (hasWorkspaceFolderCapability) {
			result.capabilities.workspace = {
				workspaceFolders: {
					supported: true
				}
			};
		}
		return result;
	});

	connection.onInitialized(() => {
		if (hasWorkspaceFolderCapability) {
			connection.workspace.onDidChangeWorkspaceFolders(_event => {
				Logger.log('Workspace folder change event received.');
			});
		}
		Logger.log('LSP server initialized.');
	});


	connection.languages.diagnostics.on(async (params) => {
		const document = documents.get(params.textDocument.uri);
		if (document !== undefined) {
			return {
				kind: DocumentDiagnosticReportKind.Full,
				items: []
			} satisfies DocumentDiagnosticReport;
		} else {
			return {
				kind: DocumentDiagnosticReportKind.Full,
				items: []
			} satisfies DocumentDiagnosticReport;
		}
	});

	documents.onDidChangeContent(change => {

	});

	
	connection.onDidChangeWatchedFiles(_change => {

	});

	connection.onCompletion(
		(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
			return getDefaultCompletions();
		}
	);

	const outputchanel = connection.console;

	connection.onCompletionResolve(
		(item: CompletionItem): CompletionItem => {
			return item;
		}
	);

	documents.listen(connection);
	connection.listen();
}


main();