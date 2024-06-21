import { ASTNode } from "./ASTNode";

export interface IContainsVars<T extends ASTNode>
{
	/**
	 * Добавление элемента
	 * @param el элемент
	 */
	push(el: T): void;
	/**
	 * Массив всех элементов
	 */
	get vars(): T[];
}