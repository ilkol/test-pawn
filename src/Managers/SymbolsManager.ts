import { DocumentSymbol, Range, SymbolKind } from "vscode";

export class SymbolsManager {
	private _symbols: DocumentSymbol[] = [];
	public addSymbol(symbl: DocumentSymbol) {
		this._symbols.push(symbl);
	}
	public insertSymbol(name: string, detail: string = "", kind: SymbolKind, range: Range, selectRange:Range) {
		this.addSymbol(this.createSymbol(name, detail, kind, range, selectRange));
	}
	public createSymbol(name: string, detail: string = "", kind: SymbolKind, range: Range, selectRange:Range) {
		return new DocumentSymbol(name, detail, kind, range, selectRange);
	}
	public refresh() {
		this._symbols = [];
	}
	get symbols(): DocumentSymbol[] {
		return this._symbols;
	}
}