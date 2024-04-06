import { DiagnosticSeverity, FileSystemError, FileType, Hover, Position, Range, TextDocument, Uri, window, workspace } from "vscode";
import { OpenedFile } from "../OpenedFile";
import { DiagnosticManager } from "./diagnostic";
import { CannotOpenFile } from "../Errors";
import { FunctionDeclaration } from "../Strucutres/functions/FunctionDeclaration";
import { FunctionImplementation } from "../Strucutres/functions/FunctionImplementation";
import { FunctionData } from "../parser/Environment";
import { AntrlOpenFile } from "../AntlrOpenFile";

export class FileManager {
	public readonly openedFiles: Map<string, OpenedFile> = new Map<string, OpenedFile>;
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
			return window.showErrorMessage("Для корректной работы расширения следует открыть папку с директорией компилятора");
		let pawno = Uri.joinPath(this.root[0].uri, "/pawno");
		try {
			await workspace.fs.stat(pawno);
			pawno = Uri.joinPath(pawno, "/include");
			try {
				await workspace.fs.stat(pawno);
				this._includePath = pawno;
			} catch(e) {
				if(e instanceof FileSystemError) {
					return window.showErrorMessage("Не найдена папка include");
				}
				else console.error(e);
			}
		} catch(e) {
			if(e instanceof FileSystemError) {
				return window.showErrorMessage("Не найдена папка pawno");
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

		const file: OpenedFile | undefined = this.openedFiles.get(document.uri.path);

		if(!file) return;
		else {
			return new Hover(file.getHover(word, document), range);
		}
	}
	public getFileFunctionsIncludes(document: TextDocument): Map<Range, Uri> {

		const file: OpenedFile | undefined = this.openedFiles.get(document.uri.path);
	
		if(!file) return new Map;
		
		return file.Env.includes;
	}
	public getFileFunctionsDefinitions(document: TextDocument): Map<string, FunctionData> {

		const file: OpenedFile | undefined = this.openedFiles.get(document.uri.path);
	
		if(!file) return new Map;
		
		return file.Env.functions;
	}
	public onDidOpenTextDocument = (file: TextDocument) => {
		if(file.languageId != "pawn") return;
		this.tryParseFile(file);

		let doc: AntrlOpenFile = new AntrlOpenFile(file, this);
		doc.tryParse();
		return;
	}
	private tryParseFile(file: TextDocument) {
		if(file.languageId !== "pawn") return;
		let doc: OpenedFile;
		let path = file.uri.path;
		if(this.openedFiles.has(path)) {
			let tmp = this.openedFiles.get(path);
			if(tmp) {
				doc = tmp;
				doc.changeStatus();
			}
				
			else doc = new OpenedFile(file, this);
		}
		else {
			doc = new OpenedFile(file, this);
			this.openedFiles.set(path, doc);
		}
		doc.tryParse();
	}
}