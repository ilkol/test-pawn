import path = require('path');
import { ExtensionContext, workspace } from 'vscode';
import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	console.log('Start LSP client!');

	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);

	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
		}
	}

	const clientOptions: LanguageClientOptions = {
		documentSelector: [{ scheme: 'file', language: 'pawn' }],
		synchronize: {
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

	client = new LanguageClient(
		'pawnLanguageServer',
		'Pawn Language Server',
		serverOptions,
		clientOptions
	);

	client.start();
}

export function deactivate() {
	console.log('Stoping LSP client...');
	if(!client) {
		return undefined;
	}
	return client.stop();
}