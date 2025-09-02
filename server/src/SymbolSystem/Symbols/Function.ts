import { SymbolKind } from "vscode-languageserver";
import { Range } from "../../types";
import { SemanticTokens, SemanticTokensModifiers } from "../SemanticTokens";
import { SemanticTokensLegendManager } from "../SemanticTokensLegendManager";
import { AbstractSymbol } from "./AbstractSymbol";
import { SymbolReferance } from "./SymbolReferance";

export class Function extends AbstractSymbol {
	constructor(id: number, name: string, definitionFilePath: string, range: Range, tokenRange: Range) {
		super(
			id, 
			name, 
			SymbolKind.Function, 
			SemanticTokensLegendManager.getTokenTypeIndex(SemanticTokens.function),
			new SymbolReferance(
				definitionFilePath, 
				range, 
				tokenRange, [
					SemanticTokensLegendManager.getTokenModifierIndex(SemanticTokensModifiers.declaration),
					SemanticTokensLegendManager.getTokenModifierIndex(SemanticTokensModifiers.definition)
				]
			)
		);
	}
}