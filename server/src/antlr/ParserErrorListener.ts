import { ANTLRErrorListener, RecognitionException, Recognizer, Token } from "antlr4ts";
import { pawnParser } from "./generated/pawnParser";
import { DiagnosticMessage } from "./diagnostic/DiagnosticMessage";
import { DiagnosticError } from "./diagnostic/DiagnosticError";
import { Range } from "../types";

export class ParserErrorListener implements ANTLRErrorListener<Token>
{
	private _diagnostic: DiagnosticMessage[] = [];
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

		this.diagnostic.push(
			new DiagnosticError(
				`${msg} (${ruleName || "Неизвестное правило"})`,
				this.getPos(line - 1, charPositionInLine, charPositionInLine + 1)
			)
		);
		
	}

	private getPos(line: number, start: number, stop: number): Range {
		return  new Range(line, start, line, stop);
	}

	public get diagnostic(): DiagnosticMessage[] {
		return this._diagnostic;
	}
}