import { SemanticTokenModifiers } from "vscode-languageserver";
import { Range } from "../types";
import { Function } from "./Symbols/Function";
import { Macro } from "./Symbols/Macro";
import { Parameter } from "./Symbols/Parameter";

export abstract class SymbolsFactory {
	private static symbolCount = 0;

    static createMacro(
        name: string,
		definitionFilePath: string,
        range: Range,
		tokenRange: Range
    ): Macro {
        return new Macro(SymbolsFactory.symbolCount++, name, definitionFilePath, range, tokenRange);
    }

	static createFunction(
		name: string,
		definitionFilePath: string,
        range: Range,
		tokenRange: Range
	): Function {
		return new Function(SymbolsFactory.symbolCount++, name, definitionFilePath, range, tokenRange);
	}
	static createParameter(
		name: string,
		definitionFilePath: string,
        range: Range,
		tokenRange: Range,
		modifires: SemanticTokenModifiers[]
	): Function {
		return new Parameter(SymbolsFactory.symbolCount++, name, definitionFilePath, range, tokenRange, modifires);
	}
}