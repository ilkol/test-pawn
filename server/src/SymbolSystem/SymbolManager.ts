import { ScopeManager } from "../Managers/ScopeManager";
import { Position } from "../types";
import { AbstractSymbol } from "./Symbols";
import { SymbolReferance } from "./Symbols/SymbolReferance";

export class SymbolManager {
	private symbols: Map<number, AbstractSymbol> = new Map();
	private fileGlobalSymbols: Map<string, Map<number, AbstractSymbol>> = new Map();
	private fileSymbols: Map<string, Map<number, AbstractSymbol>> = new Map();

	add(filePath: string, symbol: AbstractSymbol, global: boolean = false) {
		this.symbols.set(symbol.id, symbol);
		
		if(global) {
			this.addGlobalSymbolToFile(filePath, symbol);
		}
		this.addSymbolToFile(filePath, symbol);
	}

	private addSymbolToMap(map: Map<string, Map<number, AbstractSymbol>>, filePath: string, symbol: AbstractSymbol) {
		const fileSymbols = map.get(filePath) || new Map();
		if(fileSymbols.has(symbol.id)) {
			return;
		}
        fileSymbols.set(symbol.id, symbol);
        map.set(filePath, fileSymbols);
	}

	public addGlobalSymbolToFile(filePath: string, symbol: AbstractSymbol) {
		this.addSymbolToMap(this.fileGlobalSymbols, filePath, symbol);
		this.addSymbolToFile(filePath, symbol);
	}
	public addSymbolToFile(filePath: string, symbol: AbstractSymbol) {
		this.addSymbolToMap(this.fileSymbols, filePath, symbol);
	}

	getByID(id: number): AbstractSymbol | undefined {
        return this.symbols.get(id);
    }

	findByName(name: string): AbstractSymbol[] {
        return Array.from(this.symbols.values()).filter(symbol => symbol.name === name);
    }

	getSymbolOnPosition(filePath: string, position: Position, scopeManager: ScopeManager): {symbol: AbstractSymbol, ref: SymbolReferance} | undefined {
		const currentScope = scopeManager.findInnermostAt(position);
		
		const visibleSymbols = currentScope.getAllVisibleSymbols(position);

		for (const symbol of visibleSymbols) {
			const references = symbol.getFileReferances(filePath);
			for (const ref of references) {
				if (ref.tokenRange.contains(position)) {
					return { symbol, ref };
				}
			}
		}
		return undefined;
	}

	getFileSymbols(filePath: string): AbstractSymbol[] {
        return Array.from(this.fileSymbols.get(filePath)?.values() || []);
    }
	getFileGlobalSymbols(filePath: string): AbstractSymbol[] {
		return Array.from(this.fileGlobalSymbols.get(filePath)?.values() || []);
	}

	resetFileGlobalSymbols(filePath: string): void {
		this.fileGlobalSymbols.delete(filePath);
	}
	resetFileSymbols(filePath: string): void {
		this.fileSymbols.delete(filePath);
	}
	resetAllFileSymbols(filePath: string): void {
		this.resetFileGlobalSymbols(filePath);
		this.resetFileSymbols(filePath);
	}


	addSymbolReferances(symbolDefinitionFilePath: string, name: string, referance: SymbolReferance[]) {
		// new SymbolReferance(filePath, range, tokenRange, modifiers)
		const fileSymbols = this.getFileSymbols(symbolDefinitionFilePath);
		const symbol = fileSymbols.find(symbol => symbol.name === name);
		if(!symbol) {
			return;
		}
		referance.forEach(ref => {
			this.addSymbolToFile(symbolDefinitionFilePath, symbol);
			symbol.addReferance(ref);
		});
	}
}