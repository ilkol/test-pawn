import { Range } from "../../types";
import { AbstractSymbol } from "./AbstractSymbol";

export class SymbolReferance {
	public readonly filePath: string;
	/**
	 * Полная область, где расположен символ
	 */
	public readonly range: Range;
	/**
	 * Область, где расположен токен символа (например имя функции), который должен выделяться
	 */
	public readonly tokenRange: Range;
	/**
	 * Семантические модификаторы токена символа
	 */
	public readonly modifiers: number[];

	public readonly childrens: SymbolReferance[] = [];

	public parent?: AbstractSymbol;

	constructor(filePath: string, range: Range, tokenRange: Range, modifiers: number[] = []) {
		this.filePath = filePath;
		this.range = range;
		this.tokenRange = tokenRange;
		this.modifiers = modifiers;
	}
}