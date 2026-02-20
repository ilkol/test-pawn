import { IScope } from "./IScope";
import { AbstractOpenFile } from "../../AbstractOpenFile";
import { AbstractSymbol, Function, SymbolReferance } from "../../SymbolSystem/Symbols";
import { Position, Range } from "../../types";
import { Symbols } from "../../SymbolSystem";

export class Scope implements IScope
{
	private _currentFunction: Function | undefined;

	/**
	 * Родительская область видимости
	 */
	protected _parent: IScope|undefined;

	
	public constructor(protected _file: AbstractOpenFile, private _range: Range, IScope: IScope|undefined = undefined)
	{
		this._parent = IScope;
	}
	includedScopes: IScope[] = [];
	currentSymbol: SymbolReferance | undefined;

	public extend(range: Range, newSymbol?: SymbolReferance): IScope {
		const scope =  new Scope(this._file, range, this);
		scope.currentSymbol = newSymbol ?? this.currentSymbol;
		return scope;
	}

	public get parent(): IScope|undefined {
		return this._parent;
	}

	get currentFunction(): Function | undefined {
		return this._currentFunction;
	}
	set currentFunction(value: Function | undefined) {
		this._currentFunction = value;
	}

	get range(): Range {
		return this._range;
	}
	set range(value: Range) {
		this._range = value;
	}


	protected _symbols: Map<string, AbstractSymbol> = new Map();
	add(symbol: AbstractSymbol) {
		this._symbols.set(symbol.name, symbol);
	}
	findSymbol(name: string): AbstractSymbol | undefined {
		const local = this._symbols.get(name) ?? this.parent?.findSymbol(name);
		if(local) return local;

		if (!this.parent) {
			for (const inc of this.includedScopes) {
				const found = inc.findSymbol(name);
				if (found) return found;
			}
		}
		return undefined;
	} 

	getAllVisibleSymbols(position: Position, result: Map<string, AbstractSymbol> = new Map(), tags: Set<Symbols.Tag> = new Set()) {
		for (const [name, symbol] of this._symbols) {
			if (result.has(name)) continue;
			// Функции видны в любом месте файла, а остальные символы только после объявления
			if(symbol instanceof Function || symbol.defenition.range.start.isBefore(position)) {
				result.set(name, symbol);
			}
		}
		
		this._tags.forEach(tags.add.bind(tags));

		if(this.parent) {
			this.parent.getAllVisibleSymbols(position, result, tags);
		} else {
			for (const [name, defineList] of this._file.defines) {
				if (result.has(name)) continue;
				for(const define of defineList) {
					if(define.symbol?.defenition.range.start.isBefore(position)) {
						result.set(name, define.symbol);
					}
				}
			}
			for (const inc of this.includedScopes) {
				inc.getAllVisibleSymbols(new Position(0,0), result, tags);
			}
		}
	
		return Array.from(result.values()).concat(Array.from(tags.values()));
	}

	private _tags: Map<string, Symbols.Tag> = new Map();
	addTag(tag: Symbols.Tag) {
		if(this._tags.has(tag.name)) {
			return;
		}
		this._tags.set(tag.name, tag);
	}
	findTag(name: string): Symbols.Tag | undefined {
		return this._tags.get(name) ?? this.parent?.findTag(name);;
	}
}