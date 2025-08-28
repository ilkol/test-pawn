import { ASTNode } from "./ASTNode";

export interface IContainsVars<T extends ASTNode>
{
	/**
	 * Добавление элемента
	 * @param el элемент
	 */
	pushParameter(el: T): void;
	/**
	 * Массив всех элементов
	 */
	get vars(): T[];
}