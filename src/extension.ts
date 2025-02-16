import * as vscode from 'vscode';
import { DiagnosticManager } from './Managers/diagnostic';
import { FileManager } from './Managers/FileManager';
import { DocumentLinkProvider } from './Providers/DocumentLinkProvider';
import { SignatureProvider } from './Providers/SignatureProvider';
import { DocumentSemanticTokensProvider } from './Providers/DocumentSemanticTokensProvider';
import { SymbolProvider } from './Providers/SymbolProvider';
import { PawnColorProvider } from './Providers/ColorProvider';
import { AbstractOpenFile } from './AbstractOpenFile';
import { SemanticTokens, SemanticTokensModifires } from './SemanticTokens';
import { DefinitionProvider } from './Providers/DefinitionProvider';
import { ReferenceProvider } from './Providers/ReferenceProvider';
import { getDefaultComplitions } from './DefaultComplitions/DefaultComplitions';

let diagnosticManager: DiagnosticManager;
let fileManage: FileManager;

export async function activate(context: vscode.ExtensionContext) {
	console.debug('Активация TEST расширения!');


	diagnosticManager = new DiagnosticManager(vscode.languages.createDiagnosticCollection("pawn"));
	const definitionProvider = new DefinitionProvider();
	const referenceProvider = new ReferenceProvider();
	fileManage = new FileManager(diagnosticManager, definitionProvider, referenceProvider);

	await fileManage.findPawnDir();
	const documentLinkProvider = new DocumentLinkProvider(fileManage);

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
		SemanticTokensModifires.declaration,
		SemanticTokensModifires.declaration,
		SemanticTokensModifires.const,
		SemanticTokensModifires.static,
		SemanticTokensModifires.deprecated,
		SemanticTokensModifires.doc,
		SemanticTokensModifires.modification,
		SemanticTokensModifires.default
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
			console.error(e.contentChanges);
			await fileManage.onDidChangeDocument(e.document);
		}
	});
	vscode.workspace.onDidOpenTextDocument(fileManage.onDidOpenTextDocument, fileManage);
	parseAllOpenedFiles();


	vscode.workspace.onDidSaveTextDocument((file) => {
		if (file.languageId !== "pawn") { return; }
		console.error("SAVE FILE");
		return fileManage.onDidChangeDocument(file);
	});


	//регистрируем таск
	registerTasks(context);

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
			const fullText = document.getText();

			// Регулярное выражение для поиска операторов
			let formatted = fullText.replace(
				/ *(=|\+|-|\*|\/) */g, ' $1 '
			);
			formatted = formatted.replace(
				/ *(,) */g, '$1 '
			);
			formatted = formatted.replace(
				/ {4}/g, '\t'
			);

			const fullRange = new vscode.Range(
				document.positionAt(0),
				document.positionAt(fullText.length)
			);

			edits.push(vscode.TextEdit.replace(fullRange, formatted));
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

			let complitions: vscode.CompletionItem[] = getDefaultComplitions();

			const file: AbstractOpenFile | undefined = fileManage.openedFiles.get(document.uri);
			if (file) { complitions = complitions.concat(file.getComplitions()); }

			// a simple completion item which inserts `Hello World!`
			// const simpleCompletion = new vscode.CompletionItem('Hello World!');

			// a completion item that inserts its text as snippet,
			// the `insertText`-property is a `SnippetString` which will be
			// honored by the editor.
			// const snippetCompletion = new vscode.CompletionItem('Good part of the day');
			// snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
			// const docs: any = new vscode.MarkdownString("Inserts a snippet that lets you select [link](x.ts).");
			// snippetCompletion.documentation = docs;
			// docs.baseUri = vscode.Uri.parse('http://example.com/a/b/c/');


			// defines.forEach(defineEl => {
			// 	const complition = new vscode.CompletionItem(defineEl.name);
			// 	complition.documentation = new vscode.MarkdownString('');
			// 	complition.documentation.appendCodeblock(`#define ${defineEl.name} ${defineEl.value}`, "pawn");
			// 	complition.kind = vscode.CompletionItemKind.Constant;
			// 	complition.detail = `define constant`;

			// 	complitions.push(complition);
			// });



			// const maxPlayerDefine = new vscode.CompletionItem('MAX_PLAYERS');
			// maxPlayerDefine.documentation = new vscode.MarkdownString('Максимальное число игроков на сервере');
			// maxPlayerDefine.documentation.isTrusted = true;
			// maxPlayerDefine.documentation.appendCodeblock("#define MAX_PLAYERS 200", "pawn");
			// maxPlayerDefine.kind = vscode.CompletionItemKind.Constant;
			// complitions.push(maxPlayerDefine);


			// a completion item that can be accepted by a commit character,
			// the `commitCharacters`-property is set which means that the completion will
			// be inserted and then the character will be typed.
			// const commitCharacterCompletion = new vscode.CompletionItem('console');
			// commitCharacterCompletion.commitCharacters = ['.'];
			// commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');

			// a completion item that retriggers IntelliSense when being accepted,
			// the `command`-property is set which the editor will execute after 
			// completion has been inserted. Also, the `insertText` is set so that 
			// a space is inserted after `new`
			// const commandCompletion = new vscode.CompletionItem('new');
			// commandCompletion.kind = vscode.CompletionItemKind.Keyword;
			// commandCompletion.insertText = 'new ';
			// commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };

			// return all completion items as array
			return complitions;
		}
	})
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
				new vscode.ShellExecution('Write-Host "[pawnlanguage] ' + vscode.l10n.t("Starting building") + '`n" -NoNewline; ${workspaceRoot}\\pawno\\pawncc.exe ${file}')
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