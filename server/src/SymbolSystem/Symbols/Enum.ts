import { SemanticTokenModifiers, SemanticTokenTypes, SymbolKind } from "vscode-languageserver";
import { Range } from "../../types";
import { SemanticTokensLegendManager } from "../SemanticTokensLegendManager";
import { AbstractSymbol } from "./AbstractSymbol";
import { SymbolReferance } from "./SymbolReferance";
import { EnumMember } from "./EnumMember";

export class Enum extends AbstractSymbol {
	public members: EnumMember[] = [];
	isConst: true = true;

	constructor(id: number, name: string, definitionFilePath: string, range: Range, tokenRange: Range, modifiers: SemanticTokenModifiers[]) {
		super(
			id, 
			name, 
			SymbolKind.Enum, 
			SemanticTokensLegendManager.getTokenTypeIndex(SemanticTokenTypes.enum),
			modifiers.map(SemanticTokensLegendManager.getTokenModifierIndex),
			new SymbolReferance(
				definitionFilePath, 
				range, 
				tokenRange, 
				[...modifiers, SemanticTokenModifiers.declaration].map(SemanticTokensLegendManager.getTokenModifierIndex)
			)
		);
	}
}