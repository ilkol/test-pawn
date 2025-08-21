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

let diagnosticManager: DiagnosticManager;
let fileManage: FileManager;

export async function activate(context: vscode.ExtensionContext) {
	const version = context.extension.packageJSON.version;
	console.debug(`Активация TEST расширения v${version}!`);

	diagnosticManager = new DiagnosticManager(vscode.languages.createDiagnosticCollection("pawn"));
	const definitionProvider = new DefinitionProvider();
	const referenceProvider = new ReferenceProvider();
	fileManage = new FileManager(diagnosticManager, definitionProvider, referenceProvider);

	await fileManage.findPawnDir();
	const documentLinkProvider = new DocumentLinkProvider(fileManage);

	serializeInit();
	CacheManager.initialize(context);
	if(version !== CacheManager.getExtensionVersion()) {
		CacheManager.flushWorkspaceCache();
		console.debug(`Сброс кэша расширения из-за обновления версии с ${CacheManager.getExtensionVersion()} на ${version}`);
		CacheManager.setExtensionVersion(version);
		vscode.window.showInformationMessage('Кэш рабочей области был очищен из-за обновления расширения. Пожалуйста, перезапустите VSCode для полной работы.');
	}


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

	const documentSemanticTokensProvider = new DocumentSemanticTokensProvider(fileManage, legend);


	vscode.workspace.onDidChangeTextDocument(async (e) => {
		if (e.document.languageId !== "pawn") { return; }
		let connect = e.contentChanges;
		if (!connect.length) {
			return;
		}
		if (connect[0].text === ";") {
			await fileManage.onDidChangeDocument(e.document);
		}
	});
	vscode.workspace.onDidOpenTextDocument(fileManage.onDidOpenTextDocument, fileManage);
	parseAllOpenedFiles();


	vscode.workspace.onDidSaveTextDocument(async (file) => {
		if (file.languageId !== "pawn") { return; }
		console.error("SAVE FILE");
		return await fileManage.onDidChangeDocument(file);
	});


	//регистрируем таск
	registerTasks(context);
	registerCommands(context);

	

	const signatureProvider = new SignatureProvider(fileManage);
	context.subscriptions.push(vscode.languages.registerDocumentLinkProvider('pawn', documentLinkProvider));

	context.subscriptions.push(vscode.languages.registerReferenceProvider('pawn', referenceProvider));
	context.subscriptions.push(vscode.languages.registerDefinitionProvider('pawn', definitionProvider));

	const symbolProvider = new SymbolProvider(fileManage);
	context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider('pawn', symbolProvider));

	//пока бесполезно
	// const callHierarchyProvider = new CallHierarchyProvider();
	// context.subscriptions.push(vscode.languages.registerCallHierarchyProvider('pawn', callHierarchyProvider));
	//пока бесполезно

	const colorProvider = new PawnColorProvider();
	context.subscriptions.push(vscode.languages.registerColorProvider('pawn', colorProvider));
	context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider('pawn', documentSemanticTokensProvider, legend));
	context.subscriptions.push(vscode.languages.registerSignatureHelpProvider('pawn', signatureProvider, { triggerCharacters: ['(', ','], retriggerCharacters: [")"] }));

	context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider('pawn', {
		provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
			const edits: vscode.TextEdit[] = [];
			return edits;
		}
	}));

	context.subscriptions.push(vscode.languages.registerHoverProvider('pawn', {
		async provideHover(document, position, token) {
			return fileManage.registerHover(document, position);
		}
	}));

	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('pawn', {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			let completions: vscode.CompletionItem[] = getDefaultCompletions();

			const file: AbstractOpenFile | undefined = fileManage.openedFiles.get(document.uri);
			if (file) { completions = completions.concat(file.getCompletions()); }
			return completions;
		}
	})
	);
}

export async function deactivate() {
	// TODO: сохранение кэша
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

function parseAllOpenedFiles() {
	vscode.workspace.textDocuments.forEach(document => {
		fileManage.onDidOpenTextDocument(document);
	});
}
function registerCommands(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand("pawnlanguage.openParsed",() => {
		if(!vscode.window.activeTextEditor) {
			return;
		}
		const file = fileManage.getFileByURI(vscode.window.activeTextEditor.document.uri);
		file?.openFileWithoutPreprocessor();
	}));
	context.subscriptions.push(vscode.commands.registerCommand("pawnlanguage.parseCurrnetFile",() => {
		if(!vscode.window.activeTextEditor) {
			return;
		}
		fileManage.onDidOpenTextDocument(vscode.window.activeTextEditor.document);
		
	}));
	context.subscriptions.push(vscode.commands.registerCommand("pawnlanguage.flushFileCache",() => {
		if (!vscode.window.activeTextEditor) {
			return;
		}
		CacheManager.flushFileCache(vscode.window.activeTextEditor.document.uri.path);
		vscode.window.showInformationMessage('Кэш файла очищен');
	
	}));
	context.subscriptions.push(vscode.commands.registerCommand("pawnlanguage.flushWorkspaceCache",() => {
		CacheManager.flushWorkspaceCache();
		vscode.window.showInformationMessage('Кэш рабочей области очищен');
	}));
}