import { ANTLRErrorListener, RecognitionException, Recognizer, Token } from "antlr4ts";
import { pawnParser } from "./generated/pawnParser";
import { Range } from "../types";
import { AbstractOpenFile } from "../AbstractOpenFile";
import { Locale } from "../Locale";
import { DiagnosticSeverity } from "vscode-languageserver";

export class ParserErrorListener implements ANTLRErrorListener<Token>
{
	constructor(private document: AbstractOpenFile) {

	}

	syntaxError <T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
		let ruleName: string | undefined;

		if (e && e.context) {
			const ruleIndex = e.context.ruleIndex; // Индекс правила
			ruleName = recognizer.ruleNames[ruleIndex]; // Имя правила
		}

		if (offendingSymbol) {
			const tokenType = pawnParser.VOCABULARY.getDisplayName(offendingSymbol.type); // Получаем имя токена
			console.error(
				`Неожиданный символ: ${offendingSymbol.text} (${tokenType}) в правиле: ${ruleName || "Неизвестное правило"}`
			);
		}

		this.document.diagnostics.push({
			message: Locale.t(`${msg} (${ruleName || "unknown rule"})`),
			severity: DiagnosticSeverity.Error,
			range: this.getPos(line - 1, charPositionInLine, charPositionInLine + 1)
		});
		
	}

	private getPos(line: number, start: number, stop: number): Range {
		return  new Range(line, start, line, stop);
	}
}