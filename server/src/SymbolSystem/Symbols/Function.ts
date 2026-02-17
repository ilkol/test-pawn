import { SemanticTokenModifiers, SemanticTokenTypes, SymbolKind } from "vscode-languageserver";
import { Range } from "../../types";
import { SemanticTokensLegendManager } from "../SemanticTokensLegendManager";
import { AbstractSymbol } from "./AbstractSymbol";
import { SymbolReferance } from "./SymbolReferance";
import { FunctionModifire } from "../../antlr/AST/Nodes/Functions/FunctionDeclaration";

export class Function extends AbstractSymbol {
	public hasImplementation = false;
	public isUsed = false;

	constructor(id: number, name: string, definitionFilePath: string, range: Range, tokenRange: Range) {
		super(
			id, 
			name, 
			SymbolKind.Function, 
			SemanticTokensLegendManager.getTokenTypeIndex(SemanticTokenTypes.function),
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