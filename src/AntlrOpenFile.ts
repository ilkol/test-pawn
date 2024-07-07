import { commands, Position, Range, TextDocument } from "vscode";
import { AbstractOpenFile } from "./AbstractOpenFile";
import { FileManager } from "./Managers/FileManager";
import * as vscode from 'vscode';

import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { pawnLexer } from "./antlr/generated/pawnLexer";
import { pawnParser } from "./antlr/generated/pawnParser";
import { pawnListener } from "./antlr/generated/pawnListener";
import { PawnListener } from "./antlr/PawnListener";
import { DiagnosticMessage } from "./antlr/diagnostic/DiagnosticMessage";
import { Analyzer } from "./antlr/AST/visitor/Analyzer";
import { Declarations } from "./antlr/AST/Nodes/Declarations";
import { LexerErrorListener } from "./antlr/LexerErrorListener";
import { ParserErrorListener } from "./antlr/ParserErrorListener";
import { ASTNode } from "./antlr/AST/Nodes/ASTNode";
import { match } from "assert";
import { Define } from "./Prepocessor/Define";
import { PPCommand } from "./Prepocessor/PPComand";
import { Include } from "./Prepocessor/Include";
import { ReplacedCode } from "./Prepocessor/ReplacedCode";
import { SemanticTokens, SemanticTokensModifires } from "./SemanticTokens";
import { Condition } from "./Prepocessor/Condition";
import { Stack } from "./antlr/Stack/Stack";

export class AntrlOpenFile extends AbstractOpenFile
{
	private AST: ASTNode | null = null;
	public constructor(file: TextDocument, fileManager: FileManager)
	{
		super(file, fileManager);
	}

	public tryParse(): void
	{

		let code = this.file.getText()
		code = this.preprocessor(code);
		this.preprocessorTokens();

		// console.error(this.replacedCode);
		// vscode.workspace.openTextDocument({ content: code, language: "txt" }).then(document => {
        //     // Открытие документа в редакторе
        //     vscode.window.showTextDocument(document);
        // });

		const lexer = this.tryLex(code);
		const lexerErrorListener = new LexerErrorListener();
		lexer.addErrorListener(lexerErrorListener);
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new pawnParser(tokenStream);
		const parserErrorListener = new ParserErrorListener();
		parser.addErrorListener(parserErrorListener);
		const ruleContext = parser.file();
		const listener: pawnListener = new PawnListener();
		
		ParseTreeWalker.DEFAULT.walk(listener, ruleContext);

		let listen = (<PawnListener>listener);
		this.AST = <Declarations>listen.Root;

		let analyzer = new Analyzer(
			listen.diagnostics.concat(parserErrorListener.diagnostic).concat(lexerErrorListener.diagnostic), 
			this.tokensManager,
			this.symbolsManager,
			this.complitions
		);
		try {
			this.AST.accept(analyzer);
		}
		catch(e) {
			console.error("Error on tree visit")
			console.error(e);
		}
		console.debug("Обход дерева окончен");

		this.diagnostic(analyzer.diagnostics);

		console.log(this.AST);
	}
	private preprocessorTokens()
	{
		
		this.ppCmds.forEach(el => {
			if(el instanceof Define) {
				const range = el.range;
				this.symbolsManager.addSymbol(new vscode.DocumentSymbol(el.patterntext, "define", vscode.SymbolKind.Constant, range, range));
				
				const complition = new vscode.CompletionItem(el.patterntext);
				complition.documentation = new vscode.MarkdownString('');
				complition.documentation.appendCodeblock(`#define ${el.patterntext} ${el.replace}`, "pawn");
				// if(value.file) complition.documentation.appendText(value.file.toString());
				complition.kind = vscode.CompletionItemKind.Constant;
				complition.detail = `define`;

				this.addComplition(complition);
			}
		});
		this.replacedCode.forEach(el => {
			const range = el.getRange(this.file);
			this.tokensManager.addToken(range, SemanticTokens.macro);
			this.symbolsManager.addSymbol(new vscode.DocumentSymbol(el.text, "define", vscode.SymbolKind.Constant, range, range));
		});

	}
	private ppCmds: PPCommand[] = [];
	private defines: Map<string, Define> = new Map();
	private replacedCode: ReplacedCode[] = [];

	private preprocessor(text: string): string {
		let code = text;
		const reg = /(?=^\s*)#\s*(define|if|elseif|emit|endif|endinput|endscript|error|file|include|line|pragma|section|tryinclude|undef)(.*)?(?=\r?\n|$)/gim;

		let match;
		while ((match = reg.exec(code)) !== null) {
			const command = match[0];
			const directive = match[1];
			const rest = match[2] ?  match[2] : "";

			const newlines = command.match(/\r?\n/g) || [];
			const preStr = code.substring(0, match.index);
			const replaceCommand = ' '.repeat(command.length - newlines.join('').length) + newlines.join('');
			const postStr = code.substring(match.index + command.length);
			
			const range = new Range(this.file.positionAt(match.index), this.file.positionAt(match.index + command.length));
			const pos = new Position(command.length - rest.length, match.index + command.length);

			console.error(directive, rest);
			const postPPStr = this.evalPreproc(directive, rest, range, pos, postStr);

			code = preStr + replaceCommand + postPPStr;

		}


		return code;
	}

	private evalPreproc(command: string, text: string, range: Range, pos: Position, str: string): string {
		switch (command.toLowerCase()) {
			case "define":
				return this.evalDefine(text, range, pos, str);
			case "include":
				this.evalInclude(text, range, pos);
				return str;
			case "if":
				return this.evalIf(text, range, pos, str);
			case "endif":
				return this.evalEndIf(text, range, pos, str);
			default:
				throw new Error("Неизвестная команда препроцессора");
		}
	}

	private ppConditions: Stack<Condition> = new Stack<Condition>();
	private evalEndIf(text: string, range: Range, pos: Position, str: string): string {
		const cond = this.ppConditions.pop();
		if(cond) {
			if(!cond.condition) {
				console.error(cond.condition);
				range = new Range(cond.range.end, range.start);
				this.diagnositcManager.addDiagnostic("Неисполняемый код", vscode.DiagnosticSeverity.Hint,this.file.uri.path, range, [vscode.DiagnosticTag.Unnecessary]);
			}
		}
		else {
			this.diagnositcManager.addDiagnostic("Не найдена директива #if", vscode.DiagnosticSeverity.Error, this.file.uri.path, range);
		}
		
		return str;
	}
	private evalIf(text: string, range: Range, pos: Position, str: string): string {

		let flag: boolean = false;
		let match;
		if(match = /(?=\s*)defined\s+(\w+)?/.exec(text)) {
			// const define = match[1];
			// console.error(this.defines);
			// console.error(define);
			for(let element of this.replacedCode) {
				
				
				range = new Range(this.file.positionAt(pos.character + match.index), range.end);
				// console.log(element.getRange(this.file).start, range.start);
				const defStart = element.getRange(this.file).start;
				if(defStart.line == range.start.line && defStart.character == range.start.character) {
					flag = true;
					break;
				}
			}
			
			// if(this.defines.has(define)) {
				// flag = true;
				// this.tokensManager.addToken(range, SemanticTokens.enum, [SemanticTokensModifires.])
			// }
			// console.log(define);
		}
		const cmd = new Condition(range, pos, text, flag);
		this.ppConditions.push(cmd);
		this.ppCmds.push(cmd);
		// console.log(text);

		return str;
	}
	private evalInclude(text: string, range: Range, pos: Position) {
		const reg = /(?:\s*)([^\s]+)(?:\s+(.+))?/;
		const match = reg.exec(text);

		if (match) {
			const path = match[1];
			this.ppCmds.push(new Include(path, range, pos));
		} else {
			throw new Error('Invalid #include syntax:' + text);
		}
	}

	private evalDefine(text: string, range: Range, pos: Position, str: string): string {
		const reg = /(?:\s*)([^\s]+)(?:\s+(.+))?/;
		const match = reg.exec(text);

		if (match) {
			const pattern = match[1];
			const findParams = /%(\d+)/g;
			let patternRegStr = "";
			let lastindex = 0;
			let paramMatch: RegExpExecArray | null;
			const patternPrepared = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

			const parameters: number[] = [];

			while ((paramMatch = findParams.exec(patternPrepared)) !== null) {
				patternRegStr += patternPrepared.substring(lastindex, paramMatch.index) + "(.*?)\\s*";
				lastindex = paramMatch.index + paramMatch[0].length;
				parameters.push(+paramMatch[1]);
			}
			patternRegStr += patternPrepared.substring(lastindex);

			patternRegStr = "(?<=[^\\w])" + patternRegStr + "(?=[^\\w])";

			const replacement = match[2] ? match[2].trim() : "";
			const patternReg = new RegExp(patternRegStr, "g");

			const define = new Define(pattern, patternReg, replacement, range, pos);
			this.defines.set(define.patterntext, define);
			this.ppCmds.push(define);

			const tmpstr = (' '.repeat(pos.character)) + str;
			const result = this.substringrRplaceing(tmpstr, define).substring(pos.character);
			return result;
		} else {
			throw new Error('Invalid #define syntax:' + text);
		}
	}

	private substringrRplaceing(str: string, define: Define): string
	{
		const toReplace = define.replace;
		const replacement = define.pattern;
		
		let match: RegExpExecArray | null;
		while((match = define.pattern.exec(str)) !== null) {
			const length = match[0].length;
			const curIndex = match.index;
			
			const preStr = str.substring(0, curIndex);
			const findedStr = str.substring(curIndex, curIndex + length);
			const postStr = str.substring(curIndex + length);

			let origIndex = curIndex;
			const curShift = findedStr.length - toReplace.length;
			this.replacedCode.forEach(element => {
				if(element.newIndex < curIndex)
				{
					origIndex += element.shift;
				}
				else {
					element.move(-curShift);
				}
			});


			this.replacedCode.push(new ReplacedCode(
				findedStr,
				toReplace,
				define,
				origIndex,
				curIndex
			));
			
			str = preStr + toReplace + postStr;
			
		}
		return str;
	}

	private tryLex(text: string): pawnLexer
	{
		const stream = CharStreams.fromString(text);
		return new pawnLexer(stream);
	}

	private diagnostic(diagnostics: DiagnosticMessage[])
	{
		diagnostics.forEach(element => {
			this.diagnositcManager.addDiagnostic(element.message, element.type, this.file.uri.path, element.pos, element.tags);
		});
	}

}