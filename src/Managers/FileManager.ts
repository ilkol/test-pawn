import vscode, { commands, CompletionItem, DocumentLink, FileSystemError, Hover, l10n, Position, Range, TextDocument, Uri, window, workspace } from "vscode";
import { DiagnosticManager } from "./diagnostic";
import { AntrlOpenFile } from "../AntlrOpenFile";
import { AbstractOpenFile } from "../AbstractOpenFile";
import { Stack } from "../antlr/Stack/Stack";
import { DefinitionProvider } from "../Providers/DefinitionProvider";
import { ReferenceProvider } from "../Providers/ReferenceProvider";
import { Scope } from "../antlr/Scopes/Scope";
// import * as fs from 'fs';

export class FileManager {
	/**
	 * Массив всех открытых файлов
	 */
	public readonly openedFiles: Map<Uri, AbstractOpenFile> = new Map<Uri, AbstractOpenFile>;
	/**
	 * Граф зависимостей
	 * Содержит список инклудов для каждого файла
	 */
	private dependencyGraph: Map<Uri, Set<Uri>> = new Map();
	/**
	 * Очередь для парсинга файлов
	 */
    private parsingQueue: Set<Uri> = new Set();

	private activeFile?: AntrlOpenFile = undefined; 


	public root = workspace.workspaceFolders;
	public _includePath?: Uri = undefined;

	public readonly parsingStack: Stack<AbstractOpenFile> = new Stack<AbstractOpenFile>();
	public readonly parsedFiles: string[] = [];

	constructor(private diagnosticManager: DiagnosticManager,
		public readonly definitionProvider: DefinitionProvider,
		public readonly referenceProvider: ReferenceProvider) {
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
		if(!this.root || !this.root[0]) {
			return window.showErrorMessage(l10n.t("For the extension to work correctly, open the folder with the compiler directory"));
		}
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
				else {
					console.error(e);
				}
			}
		} catch(e) {
			if(e instanceof FileSystemError) {
				return window.showErrorMessage(l10n.t("The pawno folder was not found"));
			}
			else {console.error(e);}
		}		
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
			{uri = path;}
		else {uri = Uri.parse("file:" + path);}
		let result = true;
		try {
			const doc = await workspace.openTextDocument(uri);
		} catch (err) {
			console.log("НЕ УДАЛОСЬ ОТКРЫТЬ ФАЙЛ: " + err);
			result = false;
		}
		return result;
	}
	public registerHover(document: TextDocument, position: Position) {
		const range = document.getWordRangeAtPosition(position);
		const word = document.getText(range);

		const file: AbstractOpenFile | undefined = this.openedFiles.get(document.uri);

		if(!file) {return;}
		else {
			return new Hover(file.getHover(word), range);
		}
	}
	public getFileFunctionsIncludes(document: TextDocument): DocumentLink[] {

		const file: AbstractOpenFile | undefined = this.openedFiles.get(document.uri);
	
		if(!file) {return [];}
		
		return file.documentsLinks;
	}
	public async onDidOpenTextDocument(file: TextDocument): Promise<void> {
		if(file.languageId !== "pawn") {return;}

		try {
			this.analyzeFile(file.uri);
		}
		catch(err) {
			console.error(`Error analyzing ${file.uri}:`, err);
		}
		return;
	}

	private parsingFiles = new Map<string, Promise<void|AbstractOpenFile>>();

	private async analyzeFilePromise(textDocument: vscode.TextDocument) {
		let doc: AbstractOpenFile|undefined = undefined;
		try
        {
			if(textDocument && !this.openedFiles.has(textDocument.uri))
			{
				try {
					doc = new AntrlOpenFile(textDocument, this);
					this.openedFiles.set(textDocument.uri, doc);
				} catch (error) {
					console.error(`Failed to open file model ${textDocument.uri}: ${error}`);
				}
			}
        }
        catch(e)
        {
            console.error(e);
        }
        if(doc) {
			await this.buildDependencyGraph(doc);
	
			const includeFiles: AbstractOpenFile[] = [];

			try {
				const sortedFiles = await this.topologicalSort();
				for(let element of sortedFiles ) {
					if(element === doc?.uri) {
						continue;
					}
					const include = await this.analyzeFile(element);
					if(include) {
						includeFiles.push(include);
					}
				}
			} catch (e) {
				console.error(e);
			}
			doc.updateSemanticTokens();
			this.diagnosticManager.clearFile(doc.uri);
			await vscode.window.withProgress(
				{
					location: vscode.ProgressLocation.Window,
					title: "Выполняетя обход AST",
					cancellable: false,
				},
				async () => {
					doc.includeIncludesScopse(includeFiles);
					doc.parseCode();
				}
			);
			this.diagnosticManager.updateFileDiagnostic(doc.uri.path);
		}
		return doc;
	}

	public async analyzeFile(uri: vscode.Uri) {
		const filePath = uri.fsPath;

		// Если файл уже анализируется – ждём его завершения
		if (this.parsingFiles.has(filePath)) {
			return this.parsingFiles.get(filePath)!;
		}

		const parsingPromise = (async () => {
			try {
				const document = await vscode.workspace.openTextDocument(uri);
				return await this.analyzeFilePromise(document);
			} finally {
				this.parsingFiles.delete(filePath); // Убираем файл из списка обрабатываемых
			}
		})();

		this.parsingFiles.set(filePath, parsingPromise); // Запоминаем, что файл анализируется

    	return parsingPromise;
		
	}

	public async onDidChangeDocument(file: TextDocument) {
		if(file.languageId !== "pawn") {return;}

		let path = file.uri.path;
		const newFile = !this.openedFiles.has(file.uri);
		if(newFile)
			{this.onDidOpenTextDocument(file);}
			
		const doc: AbstractOpenFile | undefined = this.openedFiles.get(file.uri);


		if(doc instanceof AntrlOpenFile) {
				this.diagnosticManager.clearFile(file.uri);
				doc.scope = new Scope(doc);
				this.activeFile = doc;
				// await doc.findAndOpenAllDirectives();
				await this.parseAll();

				await this.parseFile(doc);

				this.diagnosticManager.updateFileDiagnostic(path);
		}

		return;
	}
	
	getFile(path: string): AbstractOpenFile | undefined {
		const uri = Uri.file(path);
		return this.openedFiles.get(uri);
	}
	getFileByURI(uri: Uri): AbstractOpenFile | undefined {
		return this.openedFiles.get(uri);
	}
	getFileComplitions(path: string): CompletionItem[] {
		const file = this.getFile(path);
		if(file)
			{return file.getComplitions();}
		return [];	
	}
	updateFileSemanticTokens(path: string)
	{
		const file = this.getFile(path);
		if(file) {
			return file.updateSemanticTokens();
		}
	}

	public async parse(doc: AbstractOpenFile) {
		if(this.parsedFiles.indexOf(doc.uri.path) !== -1) {
			return;
		}
		this.parsedFiles.push(doc.uri.path);
		// await doc.findAndOpenAllDirectives();
	}

	public async parseAll() {
		let doc;
		while(doc = this.parsingStack.pop()) {
			await this.parseFile(doc);
		}
	}
	
	private async parseFile(doc: AbstractOpenFile)
	{
		await doc.processIncludes();
		await doc.processDirectives();
		await doc.parseCode();
	}

	private async buildDependencyGraph(openedFile: AbstractOpenFile): Promise<void> {
		this.dependencyGraph.clear();
		const fileUri = openedFile.uri;

		// Очистка списка ссылок на инклуды
		openedFile.documentsLinksClear();
		
		this.dependencyGraph.set(fileUri, new Set());
		openedFile.findDirectives();
		await openedFile.processDirectives();
		const includes = openedFile.includes; // Получаем инклуды из AntrlOpenFile
	

		if(this.includePath) {
			for (const includePath of includes) {
				let uri = Uri.joinPath(this.includePath, includePath.path);
				let startUri = uri;
				if(!await this.isFileExist(uri)) {
					uri = Uri.file(startUri.path + ".inc");
					if(!await this.isFileExist(uri)) {
						uri = Uri.file(startUri.path + ".pwn");
						if(!await this.isFileExist(uri)) {
							uri = Uri.file(startUri.path + ".pawn");
							throw new Error(`Файл не найден (${startUri})`);
						}
					}
				}
				includePath.uri = uri;
				// Добавление ссылки в документе для перехода к инклуду
				const link = new vscode.DocumentLink(includePath.pathRange, uri);
				link.tooltip = includePath.path;
				openedFile.documentsLinks.push(link);

				this.dependencyGraph.get(fileUri)?.add(includePath.uri);
			}
		}
    }
	private async topologicalSort(): Promise<Uri[]> {
        const visited = new Set<Uri>();
        const stack: Uri[] = [];
        const self = this;

        async function visit(node: Uri) {
            visited.add(node);
            if (self.dependencyGraph.has(node))
            {
                for (const neighbor of self.dependencyGraph.get(node)!) {
                    if (visited.has(neighbor)) {
                        throw new Error(`Циклическая зависимость обнаружена: ${node} -> ${neighbor}`);
                    }
                    if (!stack.includes(neighbor))
                    {
                        await visit(neighbor);
                    }
                }
            }
            stack.push(node);
        }

        for (const node of this.dependencyGraph.keys()) {
            if (!visited.has(node)) {
                await visit(node);
            }
        }

        return stack.reverse(); // Разворачиваем стек для получения топологического порядка
		// return stack;
    }
}