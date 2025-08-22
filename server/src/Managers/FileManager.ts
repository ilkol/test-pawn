import { TextDocuments, URI  } from "vscode-languageserver";
import { URI as Uri } from "vscode-uri";
import { AbstractOpenFile } from "../AbstractOpenFile";
import { l10n } from "vscode";
import { join } from "path";
import { access, stat } from "fs/promises";
import { Logger } from "../Logger/Logger";
import { TextDocument } from "vscode-languageserver-textdocument";

export class FileManager {
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
	 * URI корня текущей рабочей области
	 */
	private _currentWorkspacePath?: string;
	
	/**
	 * URI корня текущей рабочей области
	 */
	get currentPath(): string | undefined {
		return this._currentWorkspacePath;
	}

	private textDocuments: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

	constructor() {
	}

	/**
	 * Функционя занимается поиском в директории рабочей области директории компилятора,
	 * а также инклудов
	 */
	public async findPawnDir(): Promise<void> {
		if(!this._currentWorkspacePath) {
			throw new Error(l10n.t("Workspace path not found"));
		}

		const pawnoPath = join(this._currentWorkspacePath, 'pawno');
		this.checkFileExists(pawnoPath, "pawno");
		this._pawnPath = pawnoPath;

		const includePath = join(pawnoPath, 'include');
		this.checkFileExists(includePath, "pawn include");
		this._pawnIncludePath = includePath;
	}
	/**
	 * Проверяет наличие доступа к директории
	 * @param path путь до директории, который необходимо проверить
	 * @param errorFileName имя, которое будет отображться в исключениях
	 */
	private async checkFileExists(path: string, errorFileName: string = path) {
		try {
			await access(path);	
		} catch(e) {
			if (e instanceof Error && 'code' in e && e.code === 'ENOENT') {
				throw new Error(l10n.t("{0} folder was not found", errorFileName))
			}
			Logger.error(`Error accessing pawn include folder: ${e}`);
			throw new Error(l10n.t("Error accessing folder {0}", errorFileName))
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
		return Uri.parse(uri).path;
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
}