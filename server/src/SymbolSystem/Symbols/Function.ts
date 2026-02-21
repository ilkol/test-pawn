import { CompletionItemKind, SemanticTokenModifiers, SemanticTokenTypes, SymbolKind } from "vscode-languageserver";
import { Range } from "../../types";
import { SemanticTokensLegendManager } from "../SemanticTokensLegendManager";
import { AbstractSymbol } from "./AbstractSymbol";
import { SymbolReferance } from "./SymbolReferance";
import { FunctionModifire } from "../../antlr/AST/Nodes/Functions/FunctionDeclaration";
import { MayBeTag } from "./MayBeTag";

export class Function extends AbstractSymbol {
	public readonly completionKind = CompletionItemKind.Function;
	public hasImplementation = false;
	public returnTag: MayBeTag | null = null;
	public parameters: AbstractSymbol[] = [];


	constructor(id: number, name: string, definitionFilePath: string, range: Range, tokenRange: Range) {
		super(
			id, 
			name, 
			SymbolKind.Function, 
			SemanticTokensLegendManager.getTokenTypeIndex(SemanticTokenTypes.function),
			[],
			new SymbolReferance(
				definitionFilePath, 
				range, 
				tokenRange, [
					SemanticTokensLegendManager.getTokenModifierIndex(SemanticTokenModifiers.declaration),
					SemanticTokensLegendManager.getTokenModifierIndex(SemanticTokenModifiers.definition)
				]
			)
		);
	}
}