import { ANTLRErrorListener, RecognitionException, Recognizer } from "antlr4ts";
import { DiagnosticMessage } from "./diagnostic/DiagnosticMessage";
import { Range } from "vscode";
import { DiagnosticError } from "./diagnostic/DiagnosticError";

export class LexerErrorListener implements ANTLRErrorListener<number>
{
	private _diagnostic: DiagnosticMessage[] = [];
	syntaxError <T extends number>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
		console.error("LEXER ERROR");
		this.diagnostic.push(new DiagnosticError(msg, this.getPos(line - 1, charPositionInLine, charPositionInLine+1)));
		
	}
	private getPos(line: number, start: number, stop: number): Range {
		return  new Range(line, start, line, stop);
	}

	public get diagnostic(): DiagnosticMessage[] {
		return this._diagnostic;
	}
}