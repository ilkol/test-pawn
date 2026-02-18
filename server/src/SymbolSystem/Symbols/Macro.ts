import { SemanticTokenModifiers, SemanticTokenTypes, SymbolKind } from "vscode-languageserver";
import { Range } from "../../types";
import { SemanticTokensLegendManager } from "../SemanticTokensLegendManager";
import { AbstractSymbol } from "./AbstractSymbol";
import { SymbolReferance } from "./SymbolReferance";

export class Macro extends AbstractSymbol {
	constructor(id: number, name: string, definitionFilePath: string, range: Range, tokenRange: Range) {
		super(
			id, 
			name, 
			SymbolKind.Constant, 
			SemanticTokensLegendManager.getTokenTypeIndex(SemanticTokenTypes.macro),
			[SemanticTokensLegendManager.getTokenModifierIndex(SemanticTokenModifiers.readonly)],
			new SymbolReferance(
				definitionFilePath, 
				range, 
				tokenRange, [
					SemanticTokensLegendManager.getTokenModifierIndex(SemanticTokenModifiers.readonly),
					SemanticTokensLegendManager.getTokenModifierIndex(SemanticTokenModifiers.definition)
				]
			)
		);
	}
}