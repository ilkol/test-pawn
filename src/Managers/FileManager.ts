import vscode, { commands, CompletionItem, DiagnosticSeverity, DocumentLink, FileSystemError, Hover, l10n, Position, Range, TextDocument, Uri, window, workspace } from "vscode";
import { DiagnosticManager } from "./diagnostic";
import { AntrlOpenFile } from "../AntlrOpenFile";
import { AbstractOpenFile } from "../AbstractOpenFile";
import { Stack } from "../antlr/Stack/Stack";
import { DefinitionProvider } from "../Providers/DefinitionProvider";
import { ReferenceProvider } from "../Providers/ReferenceProvider";
import { Scope } from "../antlr/Scopes/Scope";
import { Include, IncludeType } from "../Prepocessor/Include";
import path from "path";
import { CacheManager } from "../cache/CacheManager";
import { Serialization } from "../cache/Serialization";
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
			const fileStat = await workspace.fs.stat(uri);
			return fileStat.type === vscode.FileType.File;
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
			console.error(`Analyzing error  ${file.uri}:`, err);
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
			this.flushFileInfo(doc);

			const fileCache = CacheManager.getFileCache(doc.uri.path);
			if(fileCache && doc.setCache(fileCache)) {
				console.debug("Кэш файла найден: " + fileCache.path);
				var includeFilesUri: Uri[] = [];
				try {
					if(fileCache.includes.length === 0) {
						await doc.findDirectives();
						// Выполнение всех директив препроцессора
						await doc.processDirectives();
						// Построение графа зависимостей по инклудам
						await this.buildDependencyGraph(doc);
						// Создание ссылок на инклуды в документе
						this.createIncludesLinks(doc);

						
						try {
							includeFilesUri = await this.topologicalSort();
						}
						catch (e) {
							console.error(e);
						}
					}
					else {
						includeFilesUri = fileCache.includes.map((include) => Uri.file(include.path));
						for (const includePath of fileCache.includes) {
							this.createIncludeLink(Serialization.Deserialize.range(includePath.range), Uri.file(includePath.path), doc, includePath.path);
						}
					}
				} catch (e) {
					console.error(e);
				}
			
				
				/**
				 * Список файлов, которые были включены в текущий файл.
				 * Используется для дальнейшего анализа и обработки инклудов.
				 */
				const includeFiles = await this.analyzeIncludes(doc.uri, includeFilesUri);
				doc.includeIncludesScopse(includeFiles);
				this.createProgressTask(`Выполняется обход AST (${doc.uri.fsPath})`, async () => {
					try {
						await doc.walkAST();
					} catch(e) {
						console.error(e);
					}
				});
			}
			// TODO: немножкол надо переделать, чтобы проверялось все ли закэшировано
			else {
				console.debug("Кэш файла НЕ найден: " + doc.uri.path);
				// Поиск всех директив препроцессора в файле
				await doc.findDirectives();
				// Выполнение всех директив препроцессора
				await doc.processDirectives();
				// Построение графа зависимостей по инклудам
				await this.buildDependencyGraph(doc);
				// Создание ссылок на инклуды в документе
				this.createIncludesLinks(doc);

				/**
				 * Список файлов, которые были включены в текущий файл.
				 * Используется для дальнейшего анализа и обработки инклудов.
				 */
				var includeFiles: AbstractOpenFile[] = [];

				try {
					const sortedFiles = await this.topologicalSort();
					includeFiles = await this.analyzeIncludes(doc.uri, sortedFiles);

				} catch (e) {	
					console.error(e);
				}
				doc.updateSemanticTokens(); // Обновляет подсветку для дефайнов. Такая себе идея
				doc.includeIncludesScopse(includeFiles); // Добавление областей видимости из инклудов в файл
				await doc.processDefines(); // выполнение директив препроцессора #define
				this.createProgressTask(`Выполняется построение AST (${doc.uri.fsPath})`, async () => {
					try {
						await doc.parseCode();
					} catch(e) {
						console.error(e);
					}
				});
				this.createProgressTask(`Выполняется обход AST (${doc.uri.fsPath})`, async () => {
					try {
						await doc.walkAST();
					} catch(e) {
						console.error(e);
					}
				});
				this.createProgressTask(`Кэширование файла (${doc.uri.fsPath})`, async () => {
					try {
						const fileCache = doc.getCash();
						CacheManager.setFileCache(fileCache.path, fileCache);
						CacheManager.saveAllCache();
					} catch(e) {
						console.error(e);
					}
				});
			}

			this.diagnosticManager.updateFileDiagnostic(doc.uri.path); // Обновление предупреждений для файла
		}
		return doc;
	}

	private async analyzeIncludes(docUri: Uri, incldues: Uri[]): Promise<AbstractOpenFile[]> {
		const includeFiles: AbstractOpenFile[] = [];
		for(let element of incldues ) {
			if(element === docUri) {
				continue;
			}
			const include = await this.analyzeFile(element);
			if(include) {
				includeFiles.push(include);
			}
		}
		return includeFiles;
	}
	
	private async createProgressTask(title: string, task: () => Promise<void>) {
		await vscode.window.withProgress(
			{
				location: vscode.ProgressLocation.Window,
				title,
				cancellable: false,
			},
			task
		);
	}

	private flushFileInfo(doc: AbstractOpenFile) {
		this.diagnosticManager.clearFile(doc.uri);
		doc.documentsLinksClear();
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

		// let path = file.uri.path;
		// const newFile = !this.openedFiles.has(file.uri);
		// if(newFile)
		// 	{this.onDidOpenTextDocument(file);}
			
		// const doc: AbstractOpenFile | undefined = this.openedFiles.get(file.uri);


		try {
			this.analyzeFile(file.uri);
		}
		catch(err) {
			console.error(`Analyzing error  ${file.uri}:`, err);
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
			{return file.getCompletions();}
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

	/**
	 * Построение графа зависимостей для файла.
	 * @param openedFile Файл, для которого нужно построить граф зависимостей
	 */
	private async buildDependencyGraph(openedFile: AbstractOpenFile): Promise<void> {
		this.dependencyGraph.clear(); // очищаем текущий граф зависимостей
		const fileUri = openedFile.uri; // Получаем URI файла

		this.dependencyGraph.set(fileUri, new Set()); // зануляем граф зависимостей для текущего файла
		const includes = openedFile.includes; // Получаем инклуды
		const currentPath = Uri.file(path.dirname(fileUri.fsPath)); // Получаем текущий путь файла
	
		for (const includePath of includes) {
			// Получаем URI инклуда
			includePath.uri = await this.plungeInclude(includePath, currentPath);
			if(!includePath.uri) { // Если URI инклуда не найден, пропускаем его
				openedFile.addDiagnostic(l10n.t("error 100: Cannot read from file: \"{0}\"", includePath.path), DiagnosticSeverity.Error, includePath.range);
				continue;
			}
			includePath.exist = true;

			this.dependencyGraph.get(fileUri)?.add(includePath.uri);
		}
    }

	private createIncludesLinks(doc: AbstractOpenFile) {
		const includes = doc.includes;
		for (const includePath of includes) {
			if(!includePath.exist) {
				continue;
			}
			this.createIncludeLink(includePath.pathRange, includePath.uri!, doc, includePath.path);
		}
	}

	private createIncludeLink(range: Range, uri: Uri, doc: AbstractOpenFile, tooltip: string) {
		const link = new vscode.DocumentLink(range, uri);
		link.tooltip = tooltip;
		doc.documentsLinks.push(link);
	}

	/**
	 * Погружение в инклуд для получения его URI.
	 * @param include Инклуд, для которого нужно получить URI
	 * @param currentPath Текущий путь файла, в котором находится инклуд
	 * @returns URI инклуда, если он найден, иначе undefined
	 */
	private async plungeInclude(include: Include, currentPath: Uri): Promise<Uri | undefined> {
		let result: Uri | undefined = undefined;
		const path = include.path;
		if(include.type === IncludeType.default) {
			// include.uri = Uri.joinPath(this.includePath!, include.path);
			result = await this.plungeFile(path);
			if(!result) {
				result = await this.plungeFile(Uri.joinPath(currentPath, path).path);
			}
		}
		else if(this.includePath){
			result = await this.plungeFile(Uri.joinPath(this.includePath, path).path);
		}
		return result;
	}

	private async plungeFile(file: string) {
		const extenisions = ["", ".inc", ".p", ".pawn"];
		for (const ext of extenisions) {
			const uri = Uri.file(file + ext);
			if(await this.isFileExist(uri)) {
				return uri;
			}
		}
		return undefined;
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