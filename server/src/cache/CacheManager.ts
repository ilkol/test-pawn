import { join } from "path";
import { FileManager, FolderNotFound } from "../Managers/FileManager";
import { FileCache } from "./FileCache";
import { mkdir, readFile, unlink, writeFile } from "fs/promises";
import { createHash } from "crypto";

interface CacheConfig {
	version: number;
}

export class CacheManager {

	static readonly VERSION = 1;

	/**
	 * Хранит кэши файлов, ключом является путь к файлу.
	 * Используется для быстрого доступа к информации о файлах и их абстрактных синтаксических деревьях (AST).
	 */
	private static fileCaches: Map<string, FileCache> = new Map();
	private static fileManager: FileManager;
	private static cacheDir?: string;

	/**
	 * Инициализирует менеджер кэша с контекстом расширения.
	 * @param context - Контекст расширения, предоставляемый VSCode.
	 */
	static async init(fileManager: FileManager): Promise<void> {
		this.fileManager = fileManager;
		if(this.fileManager.currentPath) {
			await CacheManager.prepareCacheDir(this.fileManager.currentPath);
		}
		
	}

	private static async writeFileCache(data: FileCache) {
		const relPath = this.fileManager.getRelativePath(data.path);
		const fileName = relPath.replace(/[\/\\]/g, '_') + '.json';
		this.writeCacheFile(fileName, data);
	}
	private static async readFileCache(path: string): Promise<FileCache | undefined> {
		const relPath = this.fileManager.getRelativePath(path);
		const fileName = relPath.replace(/[\/\\]/g, '_') + '.json';
		return await this.readCacheFile(fileName);
	}

	private static async writeCacheFile(fileName: string, data: FileCache) {
		if(!this.cacheDir) {
			return;
		}
		const path = join(this.cacheDir, fileName); 
		await writeFile(path, JSON.stringify(data, null, 2), 'utf-8');
	}
	private static async deleteFileCache(path: string) {
		const relPath = this.fileManager.getRelativePath(path);
		const fileName = relPath.replace(/[\/\\]/g, '_') + '.json';
		return await this.deleteCacheFile(fileName);
	}
	private static async deleteCacheFile(fileName: string,) {
		if(!this.cacheDir) {
			return;
		}
		const path = join(this.cacheDir, fileName); 
		await unlink(path,);
	}

	private static async readCacheFile(path: string): Promise<FileCache | undefined> {
		if(!(await this.fileManager.isFileExist(path))) {
			return undefined;
		}
		const content = await readFile(path, 'utf-8');
		return JSON.parse(content);
	}

	private static async prepareCacheDir(rootPath: string) {
		const cachePath = join(rootPath, '.cache/ilkol-pawn-lsp');
		await this.checkOrCreateDir(cachePath);
		this.cacheDir = cachePath;
	}

	private static async checkOrCreateDir(path: string) {
		try {
			await this.fileManager.checkFolderExists(path);
		} catch(e) {
			if(e instanceof FolderNotFound) {
				await mkdir(path, { recursive: true });
			}else {
				throw new Error("Cache error");
			}
		}
	}
	

	/**
	 * Сохраняет кэш файлов.
	 * @param fileCache - Объект кэша файла, содержащий информацию о файле и его AST.
	 */
	static saveAllCache(): void {

	}

	/**
	 * Загружает кэш файла по его пути.
	 * @param path - Путь к файлу, для которого нужно загрузить кэш.
	 * @return Объект кэша файла, если он существует, иначе undefined.
	 * */
	static async getFileCache(path: string): Promise<FileCache | undefined> {
		let cache = this.fileCaches.get(path); // Заглушка, нужно заменить на реальную логику
		if(!cache) {
			cache = await this.readFileCache(path);
		}
		return cache;
	}

	/**
	 * Устанавливает кэш файла по его пути.
	 * @param path - Путь к файлу, для которого нужно установить кэш.
	 * @param fileCache - Объект кэша файла, который нужно установить.
	 * */
	static setFileCache(fileCache: FileCache): void {
		this.fileCaches.set(fileCache.path, fileCache);
		this.writeFileCache(fileCache);
	}

	static flushFileCache(path: string): void {
		this.fileCaches.delete(path);
		this.deleteFileCache(path);
	}

	static flushWorkspaceCache(): void {
		for(const [path] of this.fileCaches) {
			this.flushFileCache(path)
		}
	}

	static hashText(input: string): string {
		return createHash("md5").update(input).digest("hex");;
	}
}