import { ExtensionContext } from "vscode";
import { FileCache } from "./FileCache";

export class CacheManager {

	/**
	 * Хранит кэши файлов, ключом является путь к файлу.
	 * Используется для быстрого доступа к информации о файлах и их абстрактных синтаксических деревьях (AST).
	 */
	private static fileCaches: Map<string, FileCache> = new Map();
	/**
	 * Контекст расширения, используется для хранения глобальных данных и управления жизненным циклом расширения.
	 */
	private static context: ExtensionContext;

	/**
	 * Инициализирует менеджер кэша с контекстом расширения.
	 * @param context - Контекст расширения, предоставляемый VSCode.
	 */
	static initialize(context: ExtensionContext): void {
		this.context = context;
		this.loadCache();
	}

	/**
	 * Сохраняет кэш файлов.
	 * @param fileCache - Объект кэша файла, содержащий информацию о файле и его AST.
	 */
	static saveAllCache(): void {
		this.context.workspaceState.update("fileCaches", Array.from(this.fileCaches.values()));
	}
	static getExtensionVersion(): string | undefined {
		return this.context.workspaceState.get<string>("extensionVersion");
	}
	static setExtensionVersion(version: string): void {
		this.context.workspaceState.update("extensionVersion", version);
	}

	static loadCache() {
		const tmp = this.context.workspaceState.get<FileCache[]>("fileCaches");
		this.fileCaches.clear();
		tmp?.forEach((fileCache) => {
			this.fileCaches.set(fileCache.path, fileCache);
		});
	}

	/**
	 * Загружает кэш файла по его пути.
	 * @param path - Путь к файлу, для которого нужно загрузить кэш.
	 * @return Объект кэша файла, если он существует, иначе undefined.
	 * */
	static getFileCache(path: string): FileCache | undefined {
		return this.fileCaches.get(path); // Заглушка, нужно заменить на реальную логику
	}

	/**
	 * Устанавливает кэш файла по его пути.
	 * @param path - Путь к файлу, для которого нужно установить кэш.
	 * @param fileCache - Объект кэша файла, который нужно установить.
	 * */
	static setFileCache(path: string, fileCache: FileCache): void {
		this.fileCaches.set(path, fileCache);
		this.saveAllCache();
	}

	static clearCache(): void {
		this.fileCaches.clear();
		this.saveAllCache();
	}

	static flushFileCache(path: string): void {
		this.fileCaches.delete(path);
		this.saveAllCache();
	}

	static flushWorspaceCache(): void {
		this.fileCaches.clear();
		this.saveAllCache();
	}
}