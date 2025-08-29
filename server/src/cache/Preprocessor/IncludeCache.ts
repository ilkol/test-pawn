import { IncludeType } from "../../Preprocessor/Directives";
import { Serialization } from "../Serialization";

export interface IncludeCache {
	/**
	 * Путь к файлу, который был указан в коде.
	 */
	parsedPathText: string;
	/**
	 * Флаг был ли найден файл с указанынм в коде путём
	 */
	exist: boolean;

	/**
	 * Абсолютный путь до найдено подключаемого файла
	 */
	absolutePath?: string;

	/**
	 * Позиция начала текста инклуда в коде
	 */
	startIndex: number;
	/**
	 * Позиция конца текста инклуда в коде
	 */
	endIndex: number;

	/**
	 * Выбрасывает ли подключенеи файла ошибку (tryinclude или нет)
	 */
	silent: boolean;

	/**
	 * Тип инклуда, отражающий откуда должен браться файл
	 */
	type: IncludeType

	/**
	 * Позиция подключения
	 */
	range: Serialization.Range;

	/**
	 * Позиция пути подключаемого пути в коде
	 */
	pathRange: Serialization.Range
}