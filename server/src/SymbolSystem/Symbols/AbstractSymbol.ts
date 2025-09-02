import { DocumentSymbol, SymbolKind } from "vscode-languageserver";
import { Position, Range } from "../../types";
import { SymbolReferance } from "./SymbolReferance";

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

	private referances: SymbolReferance[] = [];

	public readonly defenition: SymbolReferance;

	constructor(id: number, name: string, symbolKind: SymbolKind, semanticKind: number, defenition: SymbolReferance) {
		this.id = id;
		this.name = name;
		this.symbolKind = symbolKind;
		this.kind = semanticKind;
		this.defenition = defenition;
		this.addReferance(defenition);
	}


	addReferance(referance: SymbolReferance) {
		referance.parent = this;
		this.referances.push(referance);
	}

	getFileReferances(filePath: string) {
		return this.referances.filter((ref) => ref.filePath === filePath);
	}
	getReferences(): SymbolReferance[] {
		return this.referances;
	}

	getFileSymbolReferancesInfo(filePath: string): DocumentSymbol[] {
		const referances = this.getFileReferances(filePath);
		return referances.map(ref => {
			return ref.getSymbolInfo();
		})
	}

	getFileSemanticTokens(filePath: string): {line: number, char: number, length: number, tokenType: number, tokenModifiers: number}[] {
		const referances = this.getFileReferances(filePath);
		return referances.map(ref => {
			return {
				line: ref.tokenRange.start.line,
				char: ref.tokenRange.start.character,
				length: this.name.length,
				tokenType: this.kind,
				tokenModifiers: ref.modifiers[0],
			}
		})
	}
}