import { DocumentSymbol, SymbolKind } from "vscode-languageserver";
import { Position, Range } from "../../types";

export abstract class AbstractSymbol {
	/**
	 * Уникальный идентификатор символа
	 */
	public readonly id: number;
	/**
	 * Имя символа
	 */
	public readonly name: string;
	/**
	 * Тип символа
	 */
	public readonly symbolKind: SymbolKind;
	/**
	 * Тип токена символа
	 */
	public readonly kind: number;
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


	constructor(id: number, name: string, symbolKind: SymbolKind, semanticKind: number, range: Range, tokenRange: Range, modifiers: number[] = []) {
		this.id = id;
		this.name = name;
		this.symbolKind = symbolKind;
		this.kind = semanticKind;
		this.range = range;
		this.tokenRange = tokenRange;
		this.modifiers = modifiers;
	}

	getSymbolInfo(): DocumentSymbol {
		return {
			name: this.name,
			kind: this.symbolKind,
			range: this.range,
			selectionRange: this.tokenRange,
		}
	}
}