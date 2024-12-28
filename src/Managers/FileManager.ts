import vscode, { commands, CompletionItem, FileSystemError, Hover, l10n, Position, Range, TextDocument, Uri, window, workspace } from "vscode";
import { OpenedFile } from "../OpenedFile";
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
			{uri = path;}
		else {uri = Uri.parse("file:" + path);}
		let result = true;
		try {
			const doc = await workspace.openTextDocument(uri);
			// return doc;
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

		const file: AbstractOpenFile | undefined = this.openedFiles.get(document.uri);

		if(!file) {return;}
		else {
			return new Hover(file.getHover(word), range);
		}
	}
	public getFileFunctionsIncludes(document: TextDocument): Map<Range, Uri> {

		const file: AbstractOpenFile | undefined = this.openedFiles.get(document.uri);
	
		if(!file) {return new Map;}
		
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
		if(file.languageId !== "pawn") {return;}

		// await this.checkAndReopenFileIfNeeded(file);
	
		const uri = file.uri;
		const path = uri.path;
		if(this.openedFiles.has(uri)) {
			console.log(`File already opened: ${path}`);
			return;
		}
	
		this.parsingQueue.add(file.uri);
        await this.parseFiles();

		// this.diagnosticManager.clear();
		// try {
		// 	let doc: AntrlOpenFile = new AntrlOpenFile(file, this);
		// 	this.openedFiles.set(uri, doc);
		// 	this.parsingStack.push(doc);
		// } catch(e) {
		// 	console.error(`Failed to open file ${file.uri}: ${e}`);
		// }
		// if(!this.activeFile)
		// {	
		// 	this.activeFile = doc;
		// 	await doc.findAndOpenAllDirectives();
		// 	await this.parseAll();
			
		// }
		// this.diagnosticManager.updateDiagnostic();
		return;
	}

	public async onDidChangeDocument(file: TextDocument) {
		if(file.languageId !== "pawn") {return;}

		let path = file.uri.path;
		const newFile = !this.openedFiles.has(file.uri);
		if(newFile)
			{this.onDidOpenTextDocument(file);}
			
		const doc: AbstractOpenFile | undefined = this.openedFiles.get(file.uri);


		if(doc instanceof AntrlOpenFile) {
				this.diagnosticManager.clear();
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
	getFileComplitions(path: string): CompletionItem[] {
		const file = this.getFile(path);
		if(file)
			{return file.getComplitions();}
		return [];	
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

	// public async checkAndReopenFileIfNeeded(document: TextDocument) {
	// 	// Читаем содержимое файла
	// 	const filePath = document.fileName;
	// 	const buffer = fs.readFileSync(filePath);
	
	// 	// Определяем кодировку
	// 	const detectedEncoding = chardet.detect(buffer);
	
	// 	// Если кодировка не совпадает с ожидаемой, переоткрываем файл
	// 	if (detectedEncoding !== "windows1251") {
	// 		window.showErrorMessage(`Важно! Файл открыт в кодировк UTF-8, что можно плохо сказаться на тексте в ваших сообщениях в моде. Советуем переоткрыть файл с кодировкой windows1251`);
	
	// 		// Закрываем текущий документ
	// 		// await commands.executeCommand('workbench.action.closeActiveEditor');
	
	// 		// // Переоткрываем файл с нужной кодировкой
	// 		// await commands.executeCommand('vscode.openWith', Uri.file(filePath), {
	// 		// 	"encoding": "windows1251"
	// 		// });
	// 	}
	// }


	private resolveIncludePath(currentFileUri: vscode.Uri, includePath: string): undefined {

		// const currentFileDir = path.dirname(currentFileUri.fsPath);
		// const resolvedPath = path.resolve(currentFileDir, includePath);
		// try
		// {
		// 	return vscode.Uri.file(resolvedPath);
		// } catch {
		// 	return undefined;
		// }
	}

	private async buildDependencyGraph(): Promise<void> {
		this.dependencyGraph.clear(); // Очищаем граф перед перестроением

        for (const [fileUri, openedFile] of this.openedFiles) {
            this.dependencyGraph.set(fileUri, new Set());
			openedFile.findDirectives();
			openedFile.processDirectives();
            const includes = openedFile.includes; // Получаем инклуды из AntrlOpenFile
			openedFile.parseCode();
			console.log(includes);
            // for (const includePath of includes) {
            //     const includeUri = this.resolveIncludePath(fileUri, includePath);
            //     if (includeUri)
            //     {
            //         this.dependencyGraph.get(fileUri)?.add(includeUri.toString());
            //     }
            // }
        }

        // this.dependencyGraph.set(file.uri.toString(), new Set());
        // const includes = await this.findIncludes(file); 
        // for (const includePath of includes) {
        //     const includeUri = this.resolveIncludePath(file.uri, includePath);
        //     if (includeUri)
        //     {
        //         this.dependencyGraph.get(file.uri.toString())?.add(includeUri.toString());
        //     }
        // }
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
    }

	public async parseFiles(): Promise<void>
    {
        if (this.parsingQueue.size === 0)
        {
            return;
        }

        const filesForParsing = Array.from(this.parsingQueue);
        this.parsingQueue.clear();

        try
        {
            for(const fileUri of filesForParsing)
            {
                const textDocument = vscode.workspace.textDocuments.find(doc => doc.uri === fileUri);
                if(textDocument && !this.openedFiles.has(textDocument.uri))
                {
                    try {
                        let doc = await new AntrlOpenFile(textDocument, this);
                        this.openedFiles.set(textDocument.uri, doc);
                    } catch (error) {
                        console.error(`Failed to open file ${textDocument.uri}: ${error}`);
                    }
                }
            }
        }
        catch(e)
        {
            console.error(e);
        }
        
		await this.buildDependencyGraph();

		try {
            const sortedFiles = await this.topologicalSort();
			console.log(sortedFiles);
        } catch (e) {
            console.error(e);
        }

    }
}