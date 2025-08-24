import { TextDocumentChangeEvent, TextDocuments, URI  } from "vscode-languageserver";
import { URI as Uri } from "vscode-uri";
import { AbstractOpenFile } from "../AbstractOpenFile";
import { join, relative } from "path";
import { access, stat } from "fs/promises";
import { Logger } from "../Logger/Logger";
import { TextDocument } from "vscode-languageserver-textdocument";
import { Locale } from "../Locale";
import { constants } from "fs";
import { AntlrOpenedFile } from "../AntrlOpenedFile";

export type OnFileManagerOpenFileListener = (document: AbstractOpenFile) => (Promise<void> | void);

export class FolderNotFound extends Error {
	constructor(message?: string) {
		super(message);
	}
}
export class FolderAccessDenied extends Error {
	constructor(message?: string) {
		super(message);
	}
}

export class FileManager {

	private documents = new TextDocuments(TextDocument);

	get documentsManager(): TextDocuments<TextDocument> {
		return this.documents;
	}

	private _onFileManagerOpenFileListener?: OnFileManagerOpenFileListener;
	set onFileManagerOpenFileListener(value: OnFileManagerOpenFileListener) {
		this._onFileManagerOpenFileListener = value;
	}

	/**
	 * Массив всех открытых файлов
	 */
	public readonly openedFiles: Map<string, AbstractOpenFile> = new Map();
	/**
	 * Граф зависимостей
	 * Содержит список инклудов для каждого файла
	 */
	private dependencyGraph: Map<string, Set<URI>> = new Map();

	/**
	 * URI директории с инклудами компилятора Pawn
	 */
	private _pawnIncludePath?: string = undefined;
	/**
	 * URI директории с инклудами компилятора Pawn
	 */
	get includePath(): string | undefined {
		return this._pawnIncludePath;
	}
	
	/**
	 * URI директории с компилятором Pawn
	 */
	private _pawnPath?: string = undefined;
	/**
	 * URI директории с компилятором Pawn
	 */
	get pawnPath(): string | undefined {
		return this._pawnPath;
	}
	
	/**
	 * Путь корня текущей рабочей области
	 */
	private _currentWorkspacePath?: string;
	
	/**
	 * Путь корня текущей рабочей области
	 */
	get currentPath(): string | undefined {
		return this._currentWorkspacePath;
	}
	/**
	 * URI корня текущей рабочей области
	 */
	set currentUri(value: URI) {
		this._currentWorkspacePath = FileManager.getPathByURI(value);
	}

	private textDocuments: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

	constructor() {
		this.documents.onDidOpen(e => this.onDidOpenDocument(e.document))
	}

	/**
	 * Функционя занимается поиском в директории рабочей области директории компилятора,
	 * а также инклудов
	 */
	public async findPawnDir(): Promise<void> {
		if(!this._currentWorkspacePath) {
			throw new Error(Locale.t("Workspace path not found"));
		}

		const pawnoPath = join(this._currentWorkspacePath, 'pawno');
		await this.checkFolderExists(pawnoPath, "pawno");
		this._pawnPath = pawnoPath;

		const includePath = join(pawnoPath, 'include');
		await this.checkFolderExists(includePath, "pawn include");
		this._pawnIncludePath = includePath;
	}
	/**
	 * Проверяет наличие доступа к директории
	 * @param path путь до директории, который необходимо проверить
	 * @param errorFileName имя, которое будет отображться в исключениях
	 */
	public async checkFolderExists(path: string, errorFileName: string = path) {
		try {
			await access(path, constants.R_OK);	
		} catch(e) {
			if (e instanceof Error && 'code' in e && e.code === 'ENOENT') {
				throw new FolderNotFound(Locale.t("%s folder was not found", errorFileName))
			}
			Logger.error(`Error accessing pawn include folder: ${e}`);
			throw new FolderAccessDenied(Locale.t("Error accessing folder %s", errorFileName))
		}	
	}

	/**
	 * Проверяет путь на то, является ли он путём к существующему файлу или нет
	 * @param path путь до файла (не URI из LSP!!!)
	 * @returns существует ли файл
	 */
	public async isFileExist(path: string): Promise<boolean> {
		try {
			const fileStat = await stat(path);
			return fileStat.isFile();
		} catch (e) {
			return false;
		}
	}

	public static getPathByURI(uri: URI): string {
		return Uri.parse(uri).path.slice(1);
	}

	public async openFile(path: string): Promise<boolean> {
		const isFileOpen = this.openedFiles.has(path);
		if(isFileOpen) {
			return true;
		}
		let uri = Uri.file(path).toString();
		const textDocument = this.textDocuments.get(uri);
		if(textDocument) {
			return true;
		}
		try {
			// this.isFileExist();
			// const doc = await workspace.openTextDocument(uri);
			return true;
		} catch (err) {
			return false;
		}
	}
	
	getOpenedFile(path: string): AbstractOpenFile | undefined {
		return this.openedFiles.get(path);
	}


	private onDidOpenDocument(document: TextDocument) {
		const path = FileManager.getPathByURI(document.uri);
		let openedFile = this.getOpenedFile(path);
		if(!openedFile) {
			openedFile = new AntlrOpenedFile(document);
			this.openedFiles.set(openedFile.path, openedFile);
		}
		this._onFileManagerOpenFileListener?.(openedFile);
	}

	public getRelativePath(path: string): string {
		if (!this._currentWorkspacePath) {
			return path;
		}

		const relPath = relative(this._currentWorkspacePath, path);

		// Если путь начинается с ".." или пустой, файл вне рабочей области
		if (relPath.startsWith('..') || relPath === '') {
			return path;
		}
		return relPath;
	}
}