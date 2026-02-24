import { SemanticTokenModifiers, SemanticTokenTypes } from "vscode-languageserver";
import { Range } from "../types";
import { Enum, EnumMember, Function, Macro, Parameter, Tag, Variable } from "./Symbols";

export abstract class SymbolsFactory {
	private static symbolCount = 0;

	private static _defaultTag: Tag | undefined;
	private static _boolTag: Tag | undefined;
	public static get defaultTag(): Tag { 
		if(!this._defaultTag) {
			this._defaultTag = this.createTag("_", "system", new Range(0,0,0,0), new Range(0,0,0,0)); 
		}
		return this._defaultTag;
	}
	public static get boolTag(): Tag { 
		if(!this._boolTag) {
			this._boolTag = this.createTag("bool", "system", new Range(0,0,0,0), new Range(0,0,0,0)); 
		}
		return this._boolTag;
	 }

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
	static createVariable(
		name: string,
		definitionFilePath: string,
        range: Range,
		tokenRange: Range,
		modifires: SemanticTokenModifiers[]
	): Variable {
		return new Variable(SymbolsFactory.symbolCount++, name, definitionFilePath, range, tokenRange, modifires);
	}


	static createEnum(
		name: string,
		definitionFilePath: string,
        range: Range,
		tokenRange: Range,
		definition: boolean
	): Enum {
		return new Enum(SymbolsFactory.symbolCount++, name, definitionFilePath, range, tokenRange, [SemanticTokenModifiers.readonly]);
	}

	static createEnumMember(
		name: string,
		definitionFilePath: string,
		range: Range,
		tokenRange: Range,
		definition: boolean
	): EnumMember {
		
		return new EnumMember(SymbolsFactory.symbolCount++, name, definitionFilePath, range, tokenRange, [SemanticTokenModifiers.readonly]);
	}

	static createTag(
		name: string,
		definitionFilePath: string,
		range: Range,
		tokenRange: Range,
	) {
		return new Tag(SymbolsFactory.symbolCount++, name, definitionFilePath, range, tokenRange, []);
	}
}