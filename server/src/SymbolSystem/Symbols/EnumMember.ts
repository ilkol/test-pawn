import { SemanticTokenModifiers, SemanticTokenTypes, SymbolKind } from "vscode-languageserver";
import { Range } from "../../types";
import { SemanticTokensLegendManager } from "../SemanticTokensLegendManager";
import { AbstractSymbol } from "./AbstractSymbol";
import { SymbolReferance } from "./SymbolReferance";

export class EnumMember extends AbstractSymbol {
	constructor(id: number, name: string, definitionFilePath: string, range: Range, tokenRange: Range, modifiers: SemanticTokenModifiers[]) {
		super(
			id, 
			name, 
			SymbolKind.EnumMember, 
			SemanticTokensLegendManager.getTokenTypeIndex(SemanticTokenTypes.enumMember),
			new SymbolReferance(
				definitionFilePath, 
				range, 
				tokenRange, 
				modifiers.map(SemanticTokensLegendManager.getTokenModifierIndex)
			)
		);
	}
}