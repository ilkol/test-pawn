import { Range } from "../../types";
import { SemanticTokens, SemanticTokensModifiers } from "../SemanticTokens";
import { SemanticTokensLegendManager } from "../SemanticTokensLegendManager";
import { AbstractSymbol } from "./AbstractSymbol";

export class Macro extends AbstractSymbol {
	constructor(id: number, name: string, range: Range) {
		super(id, name, SemanticTokensLegendManager.getTokenTypeIndex(SemanticTokens.macro), range, [
			SemanticTokensLegendManager.getTokenModifierIndex(SemanticTokensModifiers.const)
		]);
	}
}