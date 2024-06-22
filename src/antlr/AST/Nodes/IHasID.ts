import { Range } from "vscode";

export interface IHasID
{
	/**
	 * Текст идентификатора
	 */
	get id() : string;
	
	/**
	 * Текст идентификатора
	 */
	set id(v : string);

	/**
	 * Позиция идентификатора
	 */
	get idPos() : Range;
	/**
	 * Позиция идентификатора
	 */
	set idPos(v : Range);
	
	/**
	 * Установка позиции идентификатора
	 * @param line строка
	 * @param start начльнаый индекс в строке
	 * @param end конечный идекс в строке
	 */
	setIDPos(line: number, start: number, end: number): void;
}