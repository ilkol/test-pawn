import { ANTLRErrorListener, FailedPredicateException, InputMismatchException, NoViableAltException, RecognitionException, Recognizer, Token } from "antlr4ts";
import { pawnParser } from "./generated/pawnParser";
import { Range } from "../types";
import { AbstractOpenFile } from "../AbstractOpenFile";
import { Locale } from "../Locale";
import { DiagnosticSeverity } from "vscode-languageserver";

export class ParserErrorListener implements ANTLRErrorListener<Token>
{
	constructor(private document: AbstractOpenFile) {

	}

	// syntaxError <T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
	// 	let ruleName: string | undefined;

	// 	if (e && e.context) {
	// 		const ruleIndex = e.context.ruleIndex; // Индекс правила
	// 		ruleName = recognizer.ruleNames[ruleIndex]; // Имя правила
	// 	}

	// 	if (offendingSymbol) {
	// 		const tokenType = pawnParser.VOCABULARY.getDisplayName(offendingSymbol.type); // Получаем имя токена
	// 		console.error(
	// 			`Неожиданный символ: ${offendingSymbol.text} (${tokenType}) в правиле: ${ruleName || "Неизвестное правило"}`
	// 		);
	// 	}

	// 	this.document.diagnostics.push({
	// 		message: Locale.t(`${msg} (${ruleName || "unknown rule"})`),
	// 		severity: DiagnosticSeverity.Error,
	// 		range: this.getPos(line - 1, charPositionInLine, charPositionInLine + 1)
	// 	});
		
	// }

	private getPos(line: number, start: number, stop: number): Range {
		return  new Range(line, start, line, stop);
	}
	
	syntaxError<T extends Token>(
		recognizer: Recognizer<T, any>,
		offendingSymbol: T | undefined,
		line: number,
		charPositionInLine: number,
		msg: string,
		e: RecognitionException | undefined
	): void {
		let messageKey = "errors.generic";
		let expected = "";

		// 1. Извлекаем ожидаемые токены
		if (e?.expectedTokens) {
			expected = e.expectedTokens.toStringVocabulary(recognizer.vocabulary);
		} else if (msg.includes("expecting {")) {
			// Вырезаем содержимое между { и }
			const match = msg.match(/expecting \{(.*)\}/);
			expected = match ? match[1] : "";
		}

		// Чистим <EOF> и кавычки для красоты (по желанию)
		expected = expected
			.replace(/<EOF>/g, "конец файла")
			.replace(/'/g, "");

		// 2. Определяем ключ перевода на основе текста ошибки
		if (msg.startsWith("extraneous input")) {
			messageKey = "errors.extraneous_input";
		} else if (msg.startsWith("mismatched input")) {
			messageKey = "errors.mismatched_input";
		} else if (msg.startsWith("no viable alternative")) {
			messageKey = "errors.no_viable_alt";
		}

		// 3. Формируем аргументы. Если expected пустой, можно поставить "что-то другое"
		const args = {
			offending: offendingSymbol?.text || "?",
			expected: expected || "конец выражения",
			msg: msg
		};

		const translatedMessage = Locale.t(messageKey, args);

		this.document.diagnostics.push({
			message: translatedMessage,
			severity: DiagnosticSeverity.Error,
			range: this.getPos(
				line - 1, 
				charPositionInLine, 
				charPositionInLine + (offendingSymbol?.text?.length || 1)
			)
		});
	}
}

