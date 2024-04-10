import { ANTLRErrorListener, RecognitionException, Recognizer, Token } from "antlr4ts";

export class ParserErrorListener implements ANTLRErrorListener<Token>
{
	syntaxError <T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
		console.error("PARSER ERROR");
		// console.log(recognizer);
		// console.log(offendingSymbol);
		console.log(line);
		console.log(charPositionInLine);
		console.log(msg);
		// console.log(e?.);
		
	}
}