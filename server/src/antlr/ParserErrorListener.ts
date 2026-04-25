import { ANTLRErrorListener, FailedPredicateException, InputMismatchException, NoViableAltException, RecognitionException, Recognizer, Token } from "antlr4ts";
import { pawnParser } from "./generated/pawnParser";
import { Range } from "../types";
import { AbstractOpenFile } from "../AbstractOpenFile";
import { Locale } from "../Locale";
import { DiagnosticSeverity } from "vscode-languageserver";

export class ParserErrorListener implements ANTLRErrorListener<Token> {
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
		return new Range(line, start, line, stop);
	}

	syntaxError<T extends Token>(
		recognizer: Recognizer<T, any>,
		offendingSymbol: T | undefined,
		line: number,
		charPositionInLine: number,
		msg: string, // Здесь ANTLR пишет "missing ';' at '<EOF>'"
		e: RecognitionException | undefined
	): void {
		let messageKey = "errors.generic";
		let expected = "";

		// 1. Пытаемся достать ожидаемые токены из исключения
		if (e?.expectedTokens) {
			expected = e.expectedTokens.toStringVocabulary(recognizer.vocabulary);
		} else if (msg.includes("expecting {")) {
			const match = msg.match(/expecting \{(.*)\}/);
			expected = match ? match[1] : "";
		}

		// 2. Логика определения ключа (добавлен missing)
		if (msg.includes("missing")) {
			messageKey = "errors.missing_token";
		} else if (msg.startsWith("extraneous input")) {
			messageKey = "errors.extraneous_input";
		}

		// 2. Улучшенное определение типа ошибки
		if (msg.startsWith("missing")) {
			// Ошибка: пропущен токен (например, точка с запятой)
			messageKey = "errors.missing_token";
		} else if (msg.startsWith("extraneous input")) {
			messageKey = "errors.extraneous_input";
		} else if (msg.startsWith("mismatched input")) {
			messageKey = "errors.mismatched_input";
		} else if (msg.startsWith("no viable alternative")) {
			messageKey = "errors.no_viable_alt";
		}

		// Обработка текста для красоты
		const cleanExpected = expected
			.replace(/<EOF>/g, "конец файла")
			.replace(/'/g, "");

		const offendingText = offendingSymbol?.text === "<EOF>"
			? "конец файла"
			: (offendingSymbol?.text || "?");


		const cleanMsg = msg
			.replace(/'<EOF>'|<EOF>/g, "End of file")
			.replace(/'(.*?)'/g, "«$1»");
		// 3. Формируем аргументы
		const args = {
			offending: offendingText,
			expected: cleanExpected || "ожидался другой символ",
			// Передаем оригинальный msg, если в переводе захочется вывести "как есть"
			msg: cleanMsg
		};

		// Если в локализации для errors.missing_token написано: 
		// "Ошибка синтаксиса: {msg}" — вы получите ровно то, что просили.
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

