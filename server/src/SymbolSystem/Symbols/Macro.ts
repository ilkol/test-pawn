import { SymbolKind } from "vscode-languageserver";
import { Range } from "../../types";
import { SemanticTokens, SemanticTokensModifiers } from "../SemanticTokens";
import { SemanticTokensLegendManager } from "../SemanticTokensLegendManager";
import { AbstractSymbol } from "./AbstractSymbol";
import { SymbolReferance } from "./SymbolReferance";

export class Macro extends AbstractSymbol {
	constructor(id: number, name: string, definitionFilePath: string, range: Range, tokenRange: Range) {
		super(
			id, 
			name, 
			SymbolKind.Constant, 
			SemanticTokensLegendManager.getTokenTypeIndex(SemanticTokens.macro),
			new SymbolReferance(
				definitionFilePath, 
				range, 
				tokenRange, [
					SemanticTokensLegendManager.getTokenModifierIndex(SemanticTokensModifiers.const),
					SemanticTokensLegendManager.getTokenModifierIndex(SemanticTokensModifiers.definition)
				]
			)
		);
	}
}