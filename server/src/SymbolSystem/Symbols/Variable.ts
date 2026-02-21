import { CompletionItemKind, SemanticTokenModifiers, SemanticTokenTypes, SymbolKind } from "vscode-languageserver";
import { Range } from "../../types";
import { SemanticTokensLegendManager } from "../SemanticTokensLegendManager";
import { AbstractSymbol } from "./AbstractSymbol";
import { SymbolReferance } from "./SymbolReferance";
import { MayBeTag } from "./MayBeTag";

export class Variable extends AbstractSymbol {
	public readonly completionKind = CompletionItemKind.Variable;
	
	public readonly isConst: boolean;
	public tag: MayBeTag | null = null;

	constructor(id: number, name: string, definitionFilePath: string, range: Range, tokenRange: Range, modifiers: SemanticTokenModifiers[]) {
		super(
			id, 
			name, 
			SymbolKind.Variable, 
			SemanticTokensLegendManager.getTokenTypeIndex(SemanticTokenTypes.variable),
			modifiers.map(SemanticTokensLegendManager.getTokenModifierIndex),
			new SymbolReferance(
				definitionFilePath, 
				range, 
				tokenRange, 
				[...modifiers, SemanticTokenModifiers.definition].map(SemanticTokensLegendManager.getTokenModifierIndex)
			)
		);

		this.isConst = modifiers.indexOf(SemanticTokenModifiers.readonly) !== -1;
	}
}