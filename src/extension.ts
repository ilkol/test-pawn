import * as vscode from 'vscode';
import { getDefaultComplitions } from './DefaultComplitions/DefaultComplitions';
import { DiagnosticManager } from './diagnostic';
import { FileManager } from './FileManager';
import { CodelensProvider } from './Providers/CodelensProvider';
import { OpenedFile } from './OpenedFile';
import { DocumentLinkProvider } from './Providers/DocumentLinkProvider';
import { SignatureProvider } from './Providers/SignatureProvider';

interface IDefine {
	name: string
	pos: vscode.Position,
	value?: string
}

let diagnosticManager: DiagnosticManager;
let fileManage: FileManager;

export async function activate(context: vscode.ExtensionContext) {
	diagnosticManager = new DiagnosticManager(vscode.languages.createDiagnosticCollection("pawn"));
	fileManage = new FileManager(diagnosticManager);

	await fileManage.findPawnDir();

	console.log('Активация расширения!');
	
	let defines: Map<string ,IDefine> = new Map<string, IDefine>;
	vscode.window.onDidChangeActiveTextEditor((e) => {
		if(!e) return;
		if(e.document.languageId != "pawn") return;
		findDefines(e.document.getText(), defines);
	});	
	const documentLinkProvider = new DocumentLinkProvider(fileManage);
	vscode.workspace.onDidChangeTextDocument((e) => {
		if(e.document.languageId != "pawn") return;
		let connect = e.contentChanges;
		if(!connect.length) {
			
			return;
		}
		if(connect[0].text == ";") {
			fileManage.onDidOpenTextDocument(e.document);
			// documentLinkProvider.provideDocumentLinks(e.document);
		}
	});
	vscode.workspace.onDidOpenTextDocument((file) => {
		if(file.languageId != "pawn") return;
		return fileManage.onDidOpenTextDocument(file);
	});
	vscode.workspace.onDidSaveTextDocument((file) => {
		if(file.languageId != "pawn") return;
		return fileManage.onDidOpenTextDocument(file);
	});

	const codelensProvider = new CodelensProvider(fileManage);
	const signatureProvider = new SignatureProvider(fileManage);
	context.subscriptions.push(vscode.languages.registerCodeLensProvider('pawn', codelensProvider));
	context.subscriptions.push(vscode.languages.registerDocumentLinkProvider('pawn', documentLinkProvider));
	context.subscriptions.push(vscode.languages.registerSignatureHelpProvider('pawn', signatureProvider, {triggerCharacters: ['(', ','], retriggerCharacters: [")"] }));
	

	context.subscriptions.push(vscode.languages.registerHoverProvider('pawn', {
		async provideHover(document, position, token) {
			return fileManage.registerHover(document, position);
		}
		}));

	const provider1 = vscode.languages.registerCompletionItemProvider('pawn', {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			
			const complitions: vscode.CompletionItem[] = getDefaultComplitions();
			
			const file: OpenedFile | undefined = fileManage.openedFiles.get(document.uri.path);
			if(file) file.getComplitions(complitions);

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

			
			defines.forEach(defineEl => {
				const complition = new vscode.CompletionItem(defineEl.name);
				complition.documentation = new vscode.MarkdownString('');
				complition.documentation.appendCodeblock(`#define ${defineEl.name} ${defineEl.value}`, "pawn");
				complition.kind = vscode.CompletionItemKind.Constant;
				complition.detail = `define constant`;
				
				complitions.push(complition);
			});


			
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
	});
	context.subscriptions.push(provider1);
}

function findDefines(text: string, defines: Map<string, IDefine>): void {
	defines.clear();
	const lines = text.split(/\r\n|\r|\n/);
	// console.log(text);
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		if(line[0] != "#") continue;
		if(!line.startsWith("#define")) continue;
		let pattern = /^\s*(?:#)\s*define\s*(\w+)(?:\s+([\w]+))*/;
		let m: RegExpExecArray | null;
		m = pattern.exec(line);
		if(m) {
			defines.set(m[1], 
			{
				name: m[1],
				pos: new vscode.Position(i, 0),
				value: m[2] == undefined ? "" : m[2]
			});
		}
		
	}
}