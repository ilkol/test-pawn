import { SemanticTokenModifiers, SemanticTokenTypes } from "vscode-languageserver";
import { Range } from "../types";
import { Enum, EnumMember, Function, Macro, Parameter } from "./Symbols";

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
	): Parameter {
		return new Parameter(SymbolsFactory.symbolCount++, name, definitionFilePath, range, tokenRange, modifires);
	}


	static createEnum(
		name: string,
		definitionFilePath: string,
        range: Range,
		tokenRange: Range,
		definition: boolean
	): Enum {
		const modifiers = [];
		if(definition) {
			modifiers.push(SemanticTokenModifiers.definition);
		}
		return new Enum(SymbolsFactory.symbolCount++, name, definitionFilePath, range, tokenRange, modifiers);
	}

	static createEnumMember(
		name: string,
		definitionFilePath: string,
		range: Range,
		tokenRange: Range,
		definition: boolean
	): EnumMember {
		const modifiers = [SemanticTokenModifiers.readonly];
		if(definition) {
			modifiers.push(SemanticTokenModifiers.definition);
		}
		return new EnumMember(SymbolsFactory.symbolCount++, name, definitionFilePath, range, tokenRange, modifiers);
	}
}