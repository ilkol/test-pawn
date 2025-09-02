import { AbstractSymbol } from "./Symbols";

export class SymbolManager {
	private symbols: Map<number, AbstractSymbol> = new Map();
	private fileSymbols: Map<string, AbstractSymbol[]> = new Map();

	add(filePath: string, symbol: AbstractSymbol) {
		this.symbols.set(symbol.id, symbol);
		
		const fileSymbols = this.fileSymbols.get(filePath) || [];
        fileSymbols.push(symbol);
        this.fileSymbols.set(filePath, fileSymbols);
	}

	getByID(id: number): AbstractSymbol | undefined {
        return this.symbols.get(id);
    }

	findByName(name: string): AbstractSymbol[] {
        return Array.from(this.symbols.values()).filter(symbol => symbol.name === name);
    }

	getFileSymbols(filePath: string): AbstractSymbol[] {
        return this.fileSymbols.get(filePath) || [];
    }
}