import { ANTLRErrorListener, RecognitionException, Recognizer } from "antlr4ts";
import { Range } from "../types";
import { AbstractOpenFile } from "../AbstractOpenFile";
import { Locale } from "../Locale";
import { DiagnosticSeverity } from "vscode-languageserver";

export class LexerErrorListener implements ANTLRErrorListener<number>
{
	constructor(private document: AbstractOpenFile) {

	}

	syntaxError <T extends number>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
		console.error("LEXER ERROR");
		
		this.document.diagnostics.push({
			message: Locale.t(msg),
			severity: DiagnosticSeverity.Error,
			range: this.getPos(line - 1, charPositionInLine, charPositionInLine+1)
		});		
	}
	private getPos(line: number, start: number, stop: number): Range {
		return  new Range(line, start, line, stop);
	}
}