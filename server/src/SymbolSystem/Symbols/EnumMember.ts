import { CompletionItemKind, SemanticTokenModifiers, SemanticTokenTypes, SymbolKind } from "vscode-languageserver";
import { Range } from "../../types";
import { SemanticTokensLegendManager } from "../SemanticTokensLegendManager";
import { AbstractSymbol } from "./AbstractSymbol";
import { SymbolReferance } from "./SymbolReferance";
import { Enum } from "./Enum";
import { VariableModifire } from "./Parameter";

export class EnumMember extends AbstractSymbol {
	public readonly completionKind = CompletionItemKind.EnumMember;
	isConst: true = true;
	value: number = 0;
	
	constructor(
		id: number, name: string, definitionFilePath: string, range: Range, tokenRange: Range, modifiers: SemanticTokenModifiers[],
		public readonly parentSymbol: Enum | undefined
	) {
		super(
			id, 
			name, 
			SymbolKind.EnumMember, 
			SemanticTokensLegendManager.getTokenTypeIndex(SemanticTokenTypes.enumMember),
			modifiers.map(SemanticTokensLegendManager.getTokenModifierIndex),
			new SymbolReferance(
				definitionFilePath, 
				range, 
				tokenRange, 
				[...modifiers, SemanticTokenModifiers.declaration].map(SemanticTokensLegendManager.getTokenModifierIndex)
			)
		);
	}

	private _modifire: number = VariableModifire.Const;
	
	addModifier(modifire: VariableModifire) {
		this._modifire |= modifire;
	}

	hasModifier(modifire: VariableModifire): boolean {
		return (this._modifire & modifire) !== 0;
	}
}