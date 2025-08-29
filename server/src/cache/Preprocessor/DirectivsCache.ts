import { Serialization } from "../Serialization";

export interface DirectiveCache {
	/**
	 * Позиция начала текста директивы в коде
	 */
	startIndex: number;
	/**
	 * Позиция конца текста директивы в коде
	 */
	endIndex: number;

	/**
	 * Позиция подключения
	 */
	range: Serialization.Range;
}