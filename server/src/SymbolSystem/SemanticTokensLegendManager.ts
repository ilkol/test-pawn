import { SemanticTokenModifiers, SemanticTokenTypes } from "vscode-languageserver";

export abstract class SemanticTokensLegendManager {
	private static tokenTypes: string[] = [];
	private static tokenModifiers: string[] = [];
	private static tokenTypeMap: Map<string, number> = new Map();
	private static tokenModifierMap: Map<string, number> = new Map();

	public static init() {
			this.tokenTypes = [];
			this.tokenModifiers = [];
			
			[
				SemanticTokenTypes.type,
				SemanticTokenTypes.enum,
				SemanticTokenTypes.parameter,
				SemanticTokenTypes.enumMember,
				SemanticTokenTypes.macro,
				SemanticTokenTypes.comment,
				SemanticTokenTypes.string,
				SemanticTokenTypes.keyword,
				SemanticTokenTypes.number,
				SemanticTokenTypes.operator,
				SemanticTokenTypes.function,
				SemanticTokenTypes.variable
			].forEach(SemanticTokensLegendManager.registerTokenType);
			[
				SemanticTokenModifiers.declaration,
				SemanticTokenModifiers.definition,
				SemanticTokenModifiers.readonly,
				SemanticTokenModifiers.static,
				SemanticTokenModifiers.deprecated,
				SemanticTokenModifiers.documentation,
				SemanticTokenModifiers.modification,
				SemanticTokenModifiers.defaultLibrary,
			].forEach(SemanticTokensLegendManager.registerTokenModifier);
		}

	static registerTokenType(type: string): number {
		if (!SemanticTokensLegendManager.tokenTypeMap.has(type)) {
			const index = SemanticTokensLegendManager.tokenTypes.length;
			SemanticTokensLegendManager.tokenTypes.push(type);
			SemanticTokensLegendManager.tokenTypeMap.set(type, index);
			return index;
		}
		return SemanticTokensLegendManager.tokenTypeMap.get(type)!;
	}

	static registerTokenModifier(modifier: string): number {
		if (!SemanticTokensLegendManager.tokenModifierMap.has(modifier)) {
			const index = SemanticTokensLegendManager.tokenModifiers.length;
			SemanticTokensLegendManager.tokenModifiers.push(modifier);
			SemanticTokensLegendManager.tokenModifierMap.set(modifier, index);
			return index;
		}
		return SemanticTokensLegendManager.tokenModifierMap.get(modifier)!;
	}

	static getTokenTypeIndex(type: string): number {
		return SemanticTokensLegendManager.tokenTypeMap.get(type) ?? -1;
	}

	static getTokenModifierIndex(modifier: string): number {
		return SemanticTokensLegendManager.tokenModifierMap.get(modifier) ?? -1;
	}

	static getLegend() {
		return {
			tokenTypes: SemanticTokensLegendManager.tokenTypes,
			tokenModifiers: SemanticTokensLegendManager.tokenModifiers
		};
	}
}