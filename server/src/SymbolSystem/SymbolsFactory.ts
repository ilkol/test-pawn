import { Range } from "../types";
import { Macro } from "./Symbols/Macro";

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
}