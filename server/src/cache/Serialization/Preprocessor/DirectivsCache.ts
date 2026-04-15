import { Serialization } from "..";
import { List } from "./List";

export interface DirectiveCache {
	__type: List;
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

	text: string;
}