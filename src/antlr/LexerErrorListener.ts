import { ANTLRErrorListener, RecognitionException, Recognizer } from "antlr4ts";

export class LexerErrorListener implements ANTLRErrorListener<number>
{
	syntaxError <T extends number>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
		console.log(recognizer);
		console.log(offendingSymbol);
		console.log(line);
		console.log(charPositionInLine);
		console.log(msg);
		console.log(e);
	}
}