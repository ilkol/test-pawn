import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import { Locale } from "../Locale";
import { Range } from "../types";

export namespace PawnErrors {

	export function report(code: Code, range: Range, ...args: any[]): Diagnostic {
		return {
			code,
			message: Locale.t(`error.${code}`, ...args),
			range,
			severity: Math.floor(code / 200) === 0 ? DiagnosticSeverity.Error : DiagnosticSeverity.Warning,
			source: "pawn",
		}
	}

	export enum Code {
		FunctionMaynotHaveArguments = 5,
		MustBeConstantExpression = 8,
		InvalidArraySize = 9,
		InvalidFunctioncall = 12,
		UndefinedSymbol = 17,
		InitDataExceededDeclareSize = 18,
		InvalidSymbolName = 20,
		SymbolAlreadyDefined = 21,
		MustBeLValue = 22,
		MismatchPrototype = 26,
		NotMatchingPreprocessorCondition = 26,
		ExpressionError = 29,
		UnknownDirective = 31,
		ArgumentHasntDefaultValue = 34,
		ConstSymbolHasnotSize = 39,
		InvalidModifiersCombination = 42,
		NamedargumentsMustBeAfterPositional = 44,
		MaxArguments = 45,
		ArrayNotFullyInit = 52,
		MaxArrayDimenssions = 53,
		ArgumentAlreadySet = 58,
		MayNotHaveDefaultValue = 59,
		InvalidArgumentsCountInOperatorOverloading = 62,
		InvalidOperatorOverloadResultTag = 63,
		CantChangePredefinedOperator = 64,
		FunctionArgumentMayOnlyHaveSingleArgument = 65,
		MustBeNonReference = 66,
		CanBeReferenceToArray = 67,
		FunctionSymbolHasnotSize = 72,
		MustBeArrayArgument = 73,
		InvalidFunctionCall = 76,
		MixEmptyReturnAndReturnValue = 78,

		CannotReadFromFile = 100,
		UserError = 111,

		ArgumentCountMismatch = 202,
		SymbolIsNeverUsed = 203,
		FunctionWithTagUsedBeforeDeclaration = 208,
		ShoutdReturnValue = 209,
		TagMismatch = 213,
		SymbolShadowing = 219,
		PublicBeforeForward = 235,
		UserWarning = 237,
	}
}