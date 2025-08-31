import { Serialization } from "..";

export interface DirectiveCache {
	id: string;
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