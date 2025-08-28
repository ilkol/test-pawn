import { FileCache } from "./FileCache";

/**
 * Интерфейс для кэширования файлов.
 */
export interface Cache {
	files: { [filePath: string]: FileCache };
}