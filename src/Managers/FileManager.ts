import { CompletionItem, FileSystemError, Hover, l10n, Position, Range, TextDocument, Uri, window, workspace } from "vscode";
import { OpenedFile } from "../OpenedFile";
import { DiagnosticManager } from "./diagnostic";
import { AntrlOpenFile } from "../AntlrOpenFile";
import { AbstractOpenFile } from "../AbstractOpenFile";

export class FileManager {
	public readonly openedFiles: Map<string, AbstractOpenFile> = new Map<string, OpenedFile>;
	public root = workspace.workspaceFolders;
	public _includePath?: Uri = undefined;

	constructor(private diagnosticManager: DiagnosticManager) {
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
			return window.showErrorMessage(l10n.t("errorWorkspaceNotSelected"));
		let pawno = Uri.joinPath(this.root[0].uri, "/pawno");
		try {
			await workspace.fs.stat(pawno);
			pawno = Uri.joinPath(pawno, "/include");
			try {
				await workspace.fs.stat(pawno);
				this._includePath = pawno;
			} catch(e) {
				if(e instanceof FileSystemError) {
					return window.showErrorMessage(l10n.t("errorIncludeDirNotFound"));
				}
				else console.error(e);
			}
		} catch(e) {
			if(e instanceof FileSystemError) {
				return window.showErrorMessage(l10n.t("errorPawnoDirNotFound"));
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
		await workspace.openTextDocument(uri).then((doc) => {
			
		}).then(undefined, err => {
			result = false;
		});
		// this.diagnosticManager.addDiagnostic(""+result, DiagnosticSeverity.Warning, uri.path, new Range(0,0,1,1))
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
	public onDidOpenTextDocument = (file: TextDocument) => {
		if(file.languageId != "pawn") return;

		let path = file.uri.path;
		if(this.openedFiles.has(path))
			return;
			

		this.diagnosticManager.clear();
		let doc: AntrlOpenFile = new AntrlOpenFile(file, this);
		doc.tryParse();
		this.openedFiles.set(path, doc);
		this.diagnosticManager.updateDiagnostic();
		return;
	}

	public onDidChangeDocument(file: TextDocument) {
		if(file.languageId != "pawn") return;

		let path = file.uri.path;
		if(!this.openedFiles.has(path))
			this.onDidOpenTextDocument(file);
			
		const doc: AbstractOpenFile | undefined = this.openedFiles.get(path);


		if(doc) {
			this.diagnosticManager.clear();
			doc.tryParse();
			this.diagnosticManager.updateFileDiagnostic(path);
		}

		return;
	}
	
	getFile(path: string): AbstractOpenFile | undefined {
		return this.openedFiles.get(path);
	}
	getFileComplitions(path: string): CompletionItem[] {
		const file = this.getFile(path);
		// console.log(path);
		// console.log(this.openedFiles);
		if(file)
			return file.getComplitions();
		return [];	
	}
}