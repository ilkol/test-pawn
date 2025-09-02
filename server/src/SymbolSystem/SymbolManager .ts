import { AbstractSymbol } from "./Symbols";

export class SymbolManager {
	private symbols: Map<number, AbstractSymbol> = new Map();

	add(symbol: AbstractSymbol) {
		this.symbols.set(symbol.id, symbol);
	}

	getByID(id: number): AbstractSymbol | undefined {
        return this.symbols.get(id);
    }

	findByName(name: string): AbstractSymbol[] {
        return Array.from(this.symbols.values()).filter(symbol => symbol.name === name);
    }
}