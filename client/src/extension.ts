import path = require('path');
import { ExtensionContext, workspace } from 'vscode';
import * as vscode from 'vscode';
import * as fs from 'fs';
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

	client.start();
}

export function deactivate() {
	console.log('Stoping LSP client...');
	if(!client) {
		return undefined;
	}
	return client.stop();
}

function getWebviewContent(ast: any) {
    // Сериализуем AST обратно в строку для вставки в скрипт, 
    // но удаляем 'parent', чтобы не было циклических ссылок
    const astString = JSON.stringify(ast, (key, value) => {
        if (key === 'parent' || key === 'context') return undefined;
        return value;
    });

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net">
            <style>
                body { background-color: var(--vscode-editor-background); color: var(--vscode-editor-foreground); padding: 10px; }
                #search { margin-bottom: 10px; width: 100%; padding: 5px; background: var(--vscode-input-background); color: var(--vscode-input-foreground); border: 1px solid var(--vscode-input-border); }
                .json-viewer { background-color: transparent !important; }
            </style>
        </head>
        <body>
            <input type="text" id="search" placeholder="Поиск по типу узла (например, BinarOperator)...">
            <div id="json-renderer"></div>

            <script src="https://cdn.jsdelivr.net"></script>
            <script>
                const data = ${astString};
                const container = document.getElementById('json-renderer');
                const viewer = new JsonViewer({ 
                    container: container, 
                    data: data,
                    theme: 'dark', // или подстраивай под VS Code тему
                    expand: 2      // Сразу раскрываем на 2 уровня вглубь
                });

                // Мини-поиск для отладки
                document.getElementById('search').addEventListener('input', (e) => {
                    const term = e.target.value.toLowerCase();
                    // Тут можно добавить логику фильтрации, если дерево будет слишком большим
                });
            </script>
        </body>
        </html>
    `;
}