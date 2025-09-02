export abstract class SemanticTokensLegendManager {
	private static tokenTypes: string[] = [];
	private static tokenModifiers: string[] = [];
	private static tokenTypeMap: Map<string, number> = new Map();
	private static tokenModifierMap: Map<string, number> = new Map();

	static registerTokenType(type: string): number {
		if (!this.tokenTypeMap.has(type)) {
			const index = this.tokenTypes.length;
			this.tokenTypes.push(type);
			this.tokenTypeMap.set(type, index);
			return index;
		}
		return this.tokenTypeMap.get(type)!;
	}

	static registerTokenModifier(modifier: string): number {
		if (!this.tokenModifierMap.has(modifier)) {
			const index = this.tokenModifiers.length;
			this.tokenModifiers.push(modifier);
			this.tokenModifierMap.set(modifier, index);
			return index;
		}
		return this.tokenModifierMap.get(modifier)!;
	}

	static getTokenTypeIndex(type: string): number {
		return this.tokenTypeMap.get(type) ?? -1;
	}

	static getTokenModifierIndex(modifier: string): number {
		return this.tokenModifierMap.get(modifier) ?? -1;
	}

	static getLegend() {
		return {
			tokenTypes: this.tokenTypes,
			tokenModifiers: this.tokenModifiers
		};
	}
}