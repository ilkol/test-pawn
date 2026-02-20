import { Symbols } from "../../SymbolSystem";
import { AbstractSymbol, Function, SymbolReferance } from "../../SymbolSystem/Symbols";
import { MayBeTag } from "../../SymbolSystem/Symbols/MayBeTag";
import { Position, Range } from "../../types";

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

	getAllVisibleSymbols(position: Position, result?: Map<string, AbstractSymbol>, tags?: Set<MayBeTag>): AbstractSymbol[];

	addTag(tag: MayBeTag): void;
	findTag(name: string): MayBeTag | undefined;
	replaceTag(tag: MayBeTag): void;
}