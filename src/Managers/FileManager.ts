import { CompletionItem, FileSystemError, Hover, l10n, Position, Range, TextDocument, Uri, window, workspace } from "vscode";
import { OpenedFile } from "../OpenedFile";
import { DiagnosticManager } from "./diagnostic";
import { AntrlOpenFile } from "../AntlrOpenFile";
import { AbstractOpenFile } from "../AbstractOpenFile";
import { Stack } from "../antlr/Stack/Stack";

export class FileManager {
	public readonly openedFiles: Map<string, AbstractOpenFile> = new Map<string, OpenedFile>;
	public root = workspace.workspaceFolders;
	public _includePath?: Uri = undefined;

	private parsingStack: Stack<AbstractOpenFile> = new Stack<AbstractOpenFile>();

	constructor(private diagnosticManager: DiagnosticManager) {
		this.openFile.bind(this);
		// this.onDidOpenTextDocument.bind(this);
		// if(this.includePath == "") {
		// 	// let notifAboutInclude = window.showInputBox({title: "test"});
		// 	window.showInformationMessage("Не выбрана папка с подгружаемыми библиотеками.\nНеобходимо выбрать папку, чтобы избежать ошибок", "Выбрать", "Нет").then(but => {
		// 		if(but == "Выбрать") {
		// 			if(this.root && this.root[0]) {
		// 				this.test();
						
		// 				console.log(workspace.getWorkspaceFolder(this.root[0].uri));
		// 			}
						
		// 			// window.showInputBox({title: "Папка со стандартными инклудами"});
		// 			window.showWorkspaceFolderPick();
		// 		}
		// 	})
		// }
		// let input = window.createInputBox();
		
		// input.title = "Введите путь ";
		// input.show();
	}
	public async findPawnDir() {
		if(!this.root || !this.root[0])
			return window.showErrorMessage(l10n.t("For the extension to work correctly, open the folder with the compiler directory"));
		let pawno = Uri.joinPath(this.root[0].uri, "/pawno");
		try {
			await workspace.fs.stat(pawno);
			pawno = Uri.joinPath(pawno, "/include");
			try {
				await workspace.fs.stat(pawno);
				this._includePath = pawno;
			} catch(e) {
				if(e instanceof FileSystemError) {
					return window.showErrorMessage(l10n.t("The include folder was not found"));
				}
				else console.error(e);
			}
		} catch(e) {
			if(e instanceof FileSystemError) {
				return window.showErrorMessage(l10n.t("The pawno folder was not found"));
			}
			else console.error(e);
		}
		
		
		// let files = await workspace.fs.readDirectory(this.root[0].uri);
		// files.forEach(element => {
		// 	if(element[1] == FileType.Directory) {
		// 		if(element[0] == "pawno")

		// 	}
		// 		// console.log(element[0]);
		// });
	}
	public async isFileExist(uri: Uri): Promise<boolean> {
		try {
			await workspace.fs.stat(uri);
			return true;
		}
		catch(e) {
			return false;
		}
	}
	get includePath() {
		return this._includePath;
	}
	public getDiagnostic() {
		return this.diagnosticManager;
	}
	public async openFile(path: string | Uri): Promise<boolean> {
		let uri: Uri;
		if(path instanceof Uri)
			uri = path;
		else uri = Uri.parse("file:" + path);
		let result = true;
		try {
			const doc = await workspace.openTextDocument(uri);
			// await this.onDidOpenTextDocument(doc);
			// Process document here if needed
		} catch (err) {
			console.log("НЕ УДАЛОСЬ ОТКРЫТЬ ФАЙЛ: " + err);
			result = false;
		}
		return result;
	}
	public registerHover(document: TextDocument, position: Position) {
		const range = document.getWordRangeAtPosition(position);
		const word = document.getText(range);

		const file: AbstractOpenFile | undefined = this.openedFiles.get(document.uri.path);

		if(!file) return;
		else {
			return new Hover(file.getHover(word), range);
		}
	}
	public getFileFunctionsIncludes(document: TextDocument): Map<Range, Uri> {

		const file: AbstractOpenFile | undefined = this.openedFiles.get(document.uri.path);
	
		if(!file) return new Map;
		
		return file.documentsLinks;
		// return file.Env.includes;
	}
	// public getFileFunctionsDefinitions(document: TextDocument): Map<string, FunctionData> {

	// 	const file: AbstractOpenFile | undefined = this.openedFiles.get(document.uri.path);
	
	// 	if(!file) return new Map;

	// 	return new Map<string, FunctionData>();
	// 	// return file.Env.functions;
	// }
	public async onDidOpenTextDocument(file: TextDocument): Promise<void> {
		if(file.languageId != "pawn") return;
	
		let path = file.uri.path;
		if(this.openedFiles.has(path)) {
			console.log(`File already opened: ${path}`);
			return;
		}
	
		this.diagnosticManager.clear();
		let doc: AntrlOpenFile = new AntrlOpenFile(file, this);
		this.openedFiles.set(path, doc);
		this.parsingStack.push(doc);
		await doc.tryParse()
		this.diagnosticManager.updateDiagnostic();
		return;
	}

	public async onDidChangeDocument(file: TextDocument) {
		if(file.languageId != "pawn") return;

		let path = file.uri.path;
		const newFile = !this.openedFiles.has(path);
		if(newFile)
			this.onDidOpenTextDocument(file);
			
		const doc: AbstractOpenFile | undefined = this.openedFiles.get(path);


		if(doc) {
				this.diagnosticManager.clear();
				await doc.tryParse();
				doc.parseCode();
				this.diagnosticManager.updateFileDiagnostic(path);
		}

		return;
	}
	
	getFile(path: string): AbstractOpenFile | undefined {
		return this.openedFiles.get(path);
	}
	getFileComplitions(path: string): CompletionItem[] {
		const file = this.getFile(path);
		if(file)
			return file.getComplitions();
		return [];	
	}


	public async parseAll() {
		let doc;
		while(doc = this.parsingStack.pop()) {
			await doc.parseCode();
		}
	}
}