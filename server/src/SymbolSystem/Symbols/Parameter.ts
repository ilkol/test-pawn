import { CompletionItemKind, SemanticTokenModifiers, SemanticTokenTypes, SymbolKind } from "vscode-languageserver";
import { Range } from "../../types";
import { SemanticTokensLegendManager } from "../SemanticTokensLegendManager";
import { AbstractSymbol } from "./AbstractSymbol";
import { SymbolReferance } from "./SymbolReferance";
import { MayBeTag } from "./MayBeTag";

export enum VariableModifire {
	None = 0,
	Static = 1 << 0,
	Stock = 1 << 1,
	Public = 1 << 2,
	Const = 1 << 5,
}

type DimensionInfo = {
	tag: MayBeTag;
	value: number;
};


export class Parameter extends AbstractSymbol {
	public readonly completionKind = CompletionItemKind.Variable;
	public readonly validTags: MayBeTag[] = [];
	public hasDefaultValue: boolean = false;
	public isConst: boolean = false;
	public dimensions: DimensionInfo[] = [];
	
	constructor(id: number, name: string, definitionFilePath: string, range: Range, tokenRange: Range, modifiers: SemanticTokenModifiers[]) {
		super(
			id, 
			name, 
			SymbolKind.Variable, 
			SemanticTokensLegendManager.getTokenTypeIndex(SemanticTokenTypes.parameter),
			modifiers.map(SemanticTokensLegendManager.getTokenModifierIndex),
			new SymbolReferance(
				definitionFilePath, 
				range, 
				tokenRange, 
				[...modifiers, SemanticTokenModifiers.declaration].map(SemanticTokensLegendManager.getTokenModifierIndex)
			)
		);
	}

	private _modifire: number = VariableModifire.None;

	addModifier(modifire: VariableModifire) {
		this._modifire |= modifire;
	}

	hasModifier(modifire: VariableModifire): boolean {
		return (this._modifire & modifire) !== 0;
	}

}