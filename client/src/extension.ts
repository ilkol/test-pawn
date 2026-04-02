import path = require('path');
import { ExtensionContext, workspace } from 'vscode';
import * as vscode from 'vscode';
import * as fs from 'fs';
import {
	LanguageClient,
	LanguageClientOptions,
	RequestType,
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


	context.subscriptions.push(
		vscode.commands.registerCommand('pawnlanguage.showAST', async () => {
			const editor = vscode.window.activeTextEditor;
			if (!editor) return;

			const filePath = editor.document.uri.fsPath;
			const workspaceFolder = vscode.workspace.getWorkspaceFolder(editor.document.uri);

			if (workspaceFolder) {
				const rootPath = workspaceFolder.uri.fsPath;
				
				const relPath = path.relative(rootPath, filePath);
				
				const fileName = relPath.replace(/[\/\\]/g, '_') + '.json';
				
				const cacheDir = path.resolve(rootPath, '.cache', 'ilkol-pawn-lsp');
				const fullCachePath = path.join(cacheDir, fileName);

				if (fs.existsSync(fullCachePath)) {
					const rawData = fs.readFileSync(fullCachePath, 'utf8');
					const data = JSON.parse(rawData);
					
					const panel = vscode.window.createWebviewPanel(
						'pawnAST',
						`AST: ${path.basename(filePath)}`,
						vscode.ViewColumn.Two,
						{ enableScripts: true }
					);

					let astNode = data.rootAST;
					if (typeof astNode === 'string') {
						astNode = JSON.parse(astNode);
					}

					// Рекурсивная функция для генерации HTML-дерева
					function renderNode(node: any): string {
						if (!node || typeof node !== 'object') return `<span class="value">${node}</span>`;
						
						const type = node.__type || "Node";
						const keys = Object.keys(node).filter(k => k !== '__type' && k !== 'pos' && k !== 'parent');
						
						return `
							<details open>
								<summary><span class="type">${type}</span> ${node.operator || node.id || ''}</summary>
								<div class="content">
									${keys.map(k => `
										<div class="prop">
											<span class="key">${k}:</span> ${renderNode(node[k])}
										</div>
									`).join('')}
								</div>
							</details>
						`;
					}

					panel.webview.html = `
						<!DOCTYPE html>
						<html>
						<head>
							<style>
								body { font-family: sans-serif; background: #1e1e1e; color: #ccc; font-size: 13px; }
								details { margin-left: 15px; border-left: 1px solid #444; padding-left: 5px; }
								summary { cursor: pointer; color: #569cd6; font-weight: bold; padding: 2px; }
								summary:hover { background: #333; }
								.type { color: #4ec9b0; }
								.key { color: #9cdcfe; margin-right: 5px; }
								.value { color: #ce9178; }
								.prop { margin-bottom: 2px; display: flex; align-items: flex-start; }
								.content { padding-left: 10px; }
							</style>
						</head>
						<body>
							<h2>Pawn AST Preview</h2>
							${renderNode(astNode)}
						</body>
						</html>
					`;
				} else {
					vscode.window.showErrorMessage(`Файл не найден по пути: ${fullCachePath}`);
				}
			}
		})
	);

	client = new LanguageClient(
		'pawnLanguageServer',
		'Pawn Language Server',
		serverOptions,
		clientOptions
	);

	const GetPreprocessedRequest = new RequestType<string, string, void>('pawn/getPreprocessed');

	const myProvider = new class implements vscode.TextDocumentContentProvider {
        onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
        onDidChange = this.onDidChangeEmitter.event;

        async provideTextDocumentContent(uri: vscode.Uri): Promise<string> {
			// Извлекаем оригинальный URI файла (убираем нашу схему pawn-preprocessed)
			const originalUri = uri.query; // Или другой способ передачи, напр. через путь
			
			console.log(originalUri);
			try {
				// Отправляем кастомный запрос напрямую серверу
				return await client.sendRequest(GetPreprocessedRequest, originalUri);
			} catch (err) {
				return `// Ошибка запроса к серверу: ${err}`;
			}
		}

		public refresh(uri: vscode.Uri) {
			this.onDidChangeEmitter.fire(uri);
		}
    };

    context.subscriptions.push(
        vscode.workspace.registerTextDocumentContentProvider('pawn-preprocessed', myProvider)
    );

    // Команда для пользователя
    context.subscriptions.push(
        vscode.commands.registerCommand('pawnlanguage.openPreprocessed', async () => {
            const editor = vscode.window.activeTextEditor;
			if (!editor) return;

			const originalUri = editor.document.uri.fsPath;
			// Создаем URI для провайдера, передавая оригинальный URI в query или путь
			const virtualUri = vscode.Uri.parse(`pawn-preprocessed://view/file.pwn?${originalUri}`);

			myProvider.refresh(virtualUri);
			
			const doc = await vscode.workspace.openTextDocument(virtualUri);
			await vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside);
        })
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
