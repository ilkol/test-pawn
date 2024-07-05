import { ANTLRErrorListener, CommonToken, RecognitionException, Recognizer, Token } from "antlr4ts";
import * as antlr from "antlr4ts";
import { FunctionDeclContext, pawnParser } from "./generated/pawnParser";
import { DiagnosticMessage } from "./diagnostic/DiagnosticMessage";
import { DiagnosticError } from "./diagnostic/DiagnosticError";
import { Position, Range } from "vscode";

export class ParserErrorListener implements ANTLRErrorListener<Token>
{
	private _diagnostic: DiagnosticMessage[] = [];
	syntaxError <T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
		console.error("PARSER ERROR");
		console.error(offendingSymbol?.type)
		// if(msg.includes("missing ';")) {
		// 	recognizer
		this.diagnostic.push(new DiagnosticError(msg, this.getPos(line - 1, charPositionInLine, charPositionInLine+1)));
		// }
		// if(e) {
		// 	console.error(e.expectedTokens);
		// 	if(e.context instanceof FunctionDeclContext) {
		// 		if(offendingSymbol?.text == "<EOF>") {
		// 			this.diagnostic.push(new DiagnosticError(`Ожидается ";"`, this.getPos(line, charPositionInLine, charPositionInLine+1)));
		// 			// console.log("Ожидается ;");
		// 		}
		// 	}
		// }
		
	}

	private getPos(line: number, start: number, stop: number): Range {
		return  new Range(line, start, line, stop);
	}

	public get diagnostic(): DiagnosticMessage[] {
		return this._diagnostic;
	}
}