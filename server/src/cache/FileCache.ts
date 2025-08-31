import { Diagnostic } from "vscode-languageserver";
import { Node } from "./Serialization/Nodes";
import { DirectiveCache } from "./Serialization/Preprocessor";
import { ParsingStep } from "../AbstractOpenFile";

/**
 * Интерфейс для кэширования файлов.
 * Содержит информацию о файле, его последнем редактировании и абстрактном синтаксическом дереве (AST).
 */
export interface FileCache {

	cacheVersion: number;

	/**
	 * Путь до файла, который кэшируется.
	 */
	path: string;
	
	/**
	 * Хэш содержимого файла.
	 * Используется для проверки целостности и идентификации изменений в файле.
	 */
	texttHash: string;

	/**
	 * Корень абстрактного синтаксического дерева (AST) для данного файла.
	 */
	rootAST?: string;


	

	/**
	 * Список инклудов, которые были найдены в файле.
	 */
	includes?: string[];
	defines?: {[key: string]: string[]};

	directives?: DirectiveCache[];


	/**
	 * Массив путей подключаемых файлов в порядке их анализа
	 */
	sortedIncludes?: string[]
	

	/**
	 * Код файла в процессе обработки
	 */
	processCode: string;

	diagnostics: Diagnostic[];

	// parseStep: ParsingStep;
}