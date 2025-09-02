import { SemanticTokenModifiers, SymbolKind } from "vscode-languageserver";
import { Range } from "../../types";
import { SemanticTokens, SemanticTokensModifiers } from "../SemanticTokens";
import { SemanticTokensLegendManager } from "../SemanticTokensLegendManager";
import { AbstractSymbol } from "./AbstractSymbol";
import { SymbolReferance } from "./SymbolReferance";

export class Parameter extends AbstractSymbol {
	constructor(id: number, name: string, definitionFilePath: string, range: Range, tokenRange: Range, modifiers: SemanticTokensModifiers[]) {
		super(
			id, 
			name, 
			SymbolKind.Variable, 
			SemanticTokensLegendManager.getTokenTypeIndex(SemanticTokens.parameter),
			new SymbolReferance(
				definitionFilePath, 
				range, 
				tokenRange, 
				modifiers.map(SemanticTokensLegendManager.getTokenModifierIndex)
			)
		);
	}
}