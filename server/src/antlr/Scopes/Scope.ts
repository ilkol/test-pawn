import { IScope } from "./IScope";
import { AbstractOpenFile } from "../../AbstractOpenFile";
import { AbstractSymbol, Function, SymbolReferance } from "../../SymbolSystem/Symbols";
import { Range } from "../../types";

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
}