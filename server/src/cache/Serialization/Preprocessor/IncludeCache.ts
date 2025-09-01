import { Serialization } from "..";
import { IncludeType } from "../../../Preprocessor/Directives";
import { DirectiveCache } from "./DirectivsCache";

export interface IncludeCache extends DirectiveCache {
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
	 * Выбрасывает ли подключенеи файла ошибку (tryinclude или нет)
	 */
	silent: boolean;

	/**
	 * Тип инклуда, отражающий откуда должен браться файл
	 */
	type: IncludeType

	/**
	 * Позиция пути подключаемого пути в коде
	 */
	pathRange: Serialization.Range
}