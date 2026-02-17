import { AbstractSymbol, Function, SymbolReferance } from "../../SymbolSystem/Symbols";
import { Range } from "../../types";

export interface IScope
{
	currentSymbol: SymbolReferance | undefined;
	currentFunction: Function | undefined;

	includedScopes: IScope[];

	extend(range: Range, newSymbol?: SymbolReferance | undefined): IScope;
	
	get parent(): IScope|undefined;

	get range(): Range;
	set range(value: Range);

	add(symbol: AbstractSymbol): void;
	findSymbol(name: string): AbstractSymbol | undefined;
}