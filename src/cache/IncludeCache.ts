import { Serialization } from "./Serialization";

export interface IncludeCache {
	/**
	 * Путь к файлу, который кэшируется.
	 */
	path: string;

	/**
	 * Позиция подключения
	 */
	range: Serialization.Range;
}