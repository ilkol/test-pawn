import { CompletionItemKind, SemanticTokenModifiers, SemanticTokenTypes, SymbolKind } from "vscode-languageserver";
import { Range } from "../../types";
import { SemanticTokensLegendManager } from "../SemanticTokensLegendManager";
import { AbstractSymbol } from "./AbstractSymbol";
import { SymbolReferance } from "./SymbolReferance";
import { MayBeTag } from "./MayBeTag";
import { SymbolsFactory } from "../SymbolsFactory";
import { Parameter } from "./Parameter";
import { FunctionModifire } from "../../antlr/AST/Nodes/Functions/FunctionDeclaration";

interface EllipseInfo {
	readonly validTags: MayBeTag[];

}

export class Function extends AbstractSymbol {
	public readonly completionKind = CompletionItemKind.Function;
	public hasImplementation = false;
	public returnTag: MayBeTag = SymbolsFactory.boolTag;
	public parameters: Parameter[] = [];
	public emptyReturnsRanges: Range[] = [];
	public shuldReturnValue: boolean = false;
	private functionModifiers: number = FunctionModifire.None;
	public ellipse?: EllipseInfo;

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

	addModifier(modifire: FunctionModifire) {
		this.functionModifiers |= modifire;
	}

	hasModifier(modifire: FunctionModifire): boolean {
		return (this.functionModifiers & modifire) !== 0;
	}
}