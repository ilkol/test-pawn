import * as vscode from 'vscode';
import { DiagnosticManager } from './Managers/diagnostic';
import { FileManager } from './Managers/FileManager';
import { DocumentLinkProvider } from './Providers/DocumentLinkProvider';
import { SignatureProvider } from './Providers/SignatureProvider';
import { DocumentSemanticTokensProvider } from './Providers/DocumentSemanticTokensProvider';
import { SymbolProvider } from './Providers/SymbolProvider';
import { PawnColorProvider } from './Providers/ColorProvider';
import { AbstractOpenFile } from './AbstractOpenFile';
import { SemanticTokens, SemanticTokensModifires as SemanticTokensModifiers } from './SemanticTokens';
import { DefinitionProvider } from './Providers/DefinitionProvider';
import { ReferenceProvider } from './Providers/ReferenceProvider';
import { getDefaultCompletions } from './DefaultCompletions/DefaultCompletions';
import { serializeInit } from './cache/Serialization/serializeInit';
import { CacheManager } from './cache/CacheManager';

class Extension {

	/**
	 * Версия расширения
	 */
	public readonly version: string;
	
	/**
	 * Класс отвечающий за управление диагностическими сообщениями 
	 * (предупреждения, ошибки, советы)
	 */
	private _diagnosticManager: DiagnosticManager;
	/**
	 * Класс отвечающий за управление файлами
	 */
	private _fileManager: FileManager;

	/**
	 * Провайдер для ссылок
	 */
	public readonly referenceProvider: ReferenceProvider;
	/**
	 * Провайдер для определений
	 */
	public readonly definitionProvider: DefinitionProvider;

	constructor(context: vscode.ExtensionContext) {
		this.version = context.extension.packageJSON.version;
		
		this._diagnosticManager = new DiagnosticManager(vscode.languages.createDiagnosticCollection("pawn"));
		this.definitionProvider = new DefinitionProvider();
		this.referenceProvider = new ReferenceProvider();
		this._fileManager = new FileManager(this._diagnosticManager, this.definitionProvider, this.referenceProvider);
	}

	get diagnosticManager(): DiagnosticManager {
		return this._diagnosticManager;
	}
	get fileManager(): FileManager {
		return this._fileManager;
	}
}


export async function activate(context: vscode.ExtensionContext) {
	const extension = new Extension(context);
	console.debug(`Активация TEST расширения v${extension.version}!`);


	await extension.fileManager.findPawnDir();

	serializeInit();
	CacheManager.initialize(context);
	if(extension.version !== CacheManager.getExtensionVersion()) {
		CacheManager.flushWorkspaceCache();
		CacheManager.setExtensionVersion(extension.version);
		vscode.window.showInformationMessage('Кэш рабочей области был очищен из-за обновления расширения. Пожалуйста, перезапустите VSCode для полной работы.');
	}

	registerEventListeners(context, extension);
	registerProviders(context, extension);
	registerTasks(context);
	registerCommands(context, extension);

	parseAllOpenedFiles(extension);
}

export async function deactivate() {
	// TODO: сохранение кэша
}

function registerEventListeners(context: vscode.ExtensionContext, extension: Extension) {
	context.subscriptions.push(
		vscode.workspace.onDidChangeTextDocument(async (e) => {
			if (e.document.languageId !== "pawn") { return; }
			let connect = e.contentChanges;
			if (!connect.length) {
				return;
			}
			if (connect[0].text === ";") {
				await extension.fileManager.onDidChangeDocument(e.document);
			}
		}),
		vscode.workspace.onDidOpenTextDocument(
			(doc) => extension.fileManager.onDidOpenTextDocument(doc),
			extension.fileManager
		),
		vscode.workspace.onDidSaveTextDocument(async (file) => {
			if (file.languageId !== "pawn") { return; }
			console.error("SAVE FILE");
			return await extension.fileManager.onDidChangeDocument(file);
		}),
	);
}

function registerProviders(context: vscode.ExtensionContext, extension: Extension) {
	const tokenTypes = [
		SemanticTokens.type,
		SemanticTokens.enum,
		SemanticTokens.parameter,
		SemanticTokens.enumMember,
		SemanticTokens.macro,
		SemanticTokens.comment,
		SemanticTokens.string,
		SemanticTokens.keyword,
		SemanticTokens.number,
		SemanticTokens.operator,
		SemanticTokens.function,
		SemanticTokens.variable
	];
	const tokenModifiers = [
		SemanticTokensModifiers.declaration,
		SemanticTokensModifiers.const,
		SemanticTokensModifiers.static,
		SemanticTokensModifiers.deprecated,
		SemanticTokensModifiers.doc,
		SemanticTokensModifiers.modification,
		SemanticTokensModifiers.default
	];
	const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);

	context.subscriptions.push(
		vscode.languages.registerDocumentLinkProvider('pawn', new DocumentLinkProvider(extension.fileManager)),
		vscode.languages.registerReferenceProvider('pawn', extension.referenceProvider),
		vscode.languages.registerDefinitionProvider('pawn', extension.definitionProvider),
		vscode.languages.registerDocumentSymbolProvider('pawn', new SymbolProvider(extension.fileManager)),
		vscode.languages.registerColorProvider('pawn', new PawnColorProvider()),
		vscode.languages.registerDocumentSemanticTokensProvider('pawn', new DocumentSemanticTokensProvider(extension.fileManager, legend), legend),
		vscode.languages.registerSignatureHelpProvider('pawn', new SignatureProvider(extension.fileManager), { triggerCharacters: ['(', ','], retriggerCharacters: [")"] }),
		vscode.languages.registerHoverProvider('pawn', {
			async provideHover(document, position, token) {
				return extension.fileManager.registerHover(document, position);
			}
		}),
		vscode.languages.registerCompletionItemProvider('pawn', {
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

				let completions: vscode.CompletionItem[] = getDefaultCompletions();

				const file: AbstractOpenFile | undefined = extension.fileManager.openedFiles.get(document.uri);
				if (file) { completions = completions.concat(file.getCompletions()); }
				return completions;
			}
		}),
		vscode.languages.registerDocumentFormattingEditProvider('pawn', {
			provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
				const edits: vscode.TextEdit[] = [];
				return edits;
			}
		}),
	);
}

function registerTasks(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand("pawnlanguage.runBuildTask", () => {
			const task = new vscode.Task(
				{ type: 'shell' }, // Тип задачи
				vscode.TaskScope.Workspace, // Область выполнения - весь рабочий проект
				'build', // Имя задачи
				'pawnlanguage', // Источник задачи (может быть вашим расширением)
				new vscode.ShellExecution('Write-Host "[pawnlanguage] ' + vscode.l10n.t("Starting building") + '`n" -NoNewline; " & Set-Location \'${fileDirname}\'; & \'${workspaceRoot}\\pawno\\pawncc.exe\' \'${file}\'"')
			);

			task.presentationOptions = {
				echo: false,
				clear: vscode.workspace.getConfiguration().get("PawnLanguage.clearOnBuild")
			};
			// Выполнение задачи
			vscode.tasks.executeTask(task);
		})
	);
}

function parseAllOpenedFiles(extension: Extension) {
	vscode.workspace.textDocuments.forEach(async (document) => {
		if (document.languageId !== 'pawn') { 
			return; 
		}
		try {
			await extension.fileManager.onDidOpenTextDocument(document);
		} catch (error) {
			vscode.window.showErrorMessage(`Ошибка при парсинге файла ${document.fileName}`);
			console.error(error);
		}
	});
}
function registerCommands(context: vscode.ExtensionContext, extension: Extension) {
	context.subscriptions.push(
		vscode.commands.registerCommand("pawnlanguage.openParsed",() => {
			if(!vscode.window.activeTextEditor) {
				return;
			}
			const file = extension.fileManager.getFileByURI(vscode.window.activeTextEditor.document.uri);
			file?.openFileWithoutPreprocessor();
		}),
		vscode.commands.registerCommand("pawnlanguage.parseCurrnetFile",() => {
			if(!vscode.window.activeTextEditor) {
				return;
			}
			extension.fileManager.onDidOpenTextDocument(vscode.window.activeTextEditor.document);
			
		}),
		vscode.commands.registerCommand("pawnlanguage.flushFileCache",() => {
			if (!vscode.window.activeTextEditor) {
				return;
			}
			CacheManager.flushFileCache(vscode.window.activeTextEditor.document.uri.path);
			vscode.window.showInformationMessage('Кэш файла очищен');
		
		}),
		vscode.commands.registerCommand("pawnlanguage.flushWorkspaceCache",() => {
			CacheManager.flushWorkspaceCache();
			vscode.window.showInformationMessage('Кэш рабочей области очищен');
		})
	);
}