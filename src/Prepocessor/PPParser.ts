import { Position, Range, TextDocument } from "vscode";
import { SymbolsManager } from "../Managers/SymbolsManager";
import { PPCommand } from "./PPComand";
import { ReplacedCode } from "./ReplacedCode";
import { Define } from "./Define";
import { Stack } from "../antlr/Stack/Stack";
import { Condition } from "./Condition";
import { Include } from "./Include";

interface String {
	value: string;
}

export class PPParser
{
	private ppCmds: PPCommand[] = [];
	private defines: Map<string, Define> = new Map();
	private replacedCode: ReplacedCode[] = [];

	constructor(private file: TextDocument) {

	}

	parse(): string
	{
		let code = this.file.getText()
		code = this.preprocessor(code);
		return code;
	}
	private preprocessor(text: string): string {
		let code = text;
		const reg = /(?=^)(?:\s*)#\s*(define|if|elseif|else|emit|endif|endinput|endscript|error|file|include|line|pragma|section|tryinclude|undef)(.*)?(?=\r?\n|$)/gim;

		let match;
		while ((match = reg.exec(code)) !== null) {
			const command = match[0];
			const directive = match[1];
			const rest = match[2] ?  match[2] : "";

			const newlines = command.match(/\r?\n/g) || [];
			const preStr = code.substring(0, match.index);
			const replaceCommand = ' '.repeat(command.length - newlines.join('').length) + newlines.join('');
			const postStr = code.substring(match.index + command.length);
			
			const curIndex = match.index;
			let origIndex = match.index;
			this.replacedCode.forEach(element => {
				if(element.newIndex < curIndex)
				{
					origIndex += element.shift;
				}
			});
			const range = new Range(this.file.positionAt(origIndex), this.file.positionAt(origIndex + command.length));
			const pos = new Position(match.index + command.length, origIndex + command.length);

			let preStrObj =  {value: preStr};
			const postPPStr = this.evalPreproc(directive, rest, range, pos, postStr,  preStrObj);

			code = preStr + replaceCommand + postPPStr;

		}
		console.error(code);

		return code;
	}

	private evalPreproc(command: string, text: string, range: Range, pos: Position, str: string, precode: String): string {
		switch (command.toLowerCase()) {
			case "define":
				return this.evalDefine(text, range, pos, str);
			case "include":
				this.evalInclude(text, range, pos);
				return str;
			case "if":
				return this.evalIf(text, range, pos, str);
			case "endif":
				return this.evalEndIf(text, range, pos, str, precode);
			case "else":
				return this.evalElse(text, range, pos, str);
			case "enscript":
			case "endinput":
				return this.evaEndinput(text, range, pos, str);
			default:
				throw new Error("Неизвестная команда препроцессора");
		}
	}

	private ppConditions: Stack<Condition> = new Stack<Condition>();
	private evaEndinput(text: string, range: Range, pos: Position, str: string): string {
		range = new Range(range.start, this.file.positionAt(this.file.getText().length));
		// this.diagnositcManager.addDiagnostic("Неисполняемый код", vscode.DiagnosticSeverity.Hint,this.file.uri.path, range, [vscode.DiagnosticTag.Unnecessary]);
		
		return "";
	}
	private evalElse(text: string, range: Range, pos: Position, str: string): string {
		const cond = this.ppConditions.peek();
		if(cond) {
			cond.elsePos = range;
			cond.elseIndex = pos.line;
		}
		else {
			// this.diagnositcManager.addDiagnostic("Не найдена директива #if", vscode.DiagnosticSeverity.Error, this.file.uri.path, range);
		}
		
		return str;
	}
	private evalEndIf(text: string, range: Range, pos: Position, str: string, precode: String): string {
		const cond = this.ppConditions.pop();
		if(cond) {
			const elsePos = cond.elsePos;
			if(!cond.condition) {
				range = new Range(cond.range.end, elsePos ? elsePos.start : range.start);

				
				const preStr = precode.value.substring(0, cond.startIndex);
				let replacing = "";
				let postStr = "";
				if(cond.elseIndex) {
					replacing = precode.value.substring(cond.startIndex ? cond.startIndex : 0, cond.elseIndex);
					postStr = precode.value.substring(cond.elseIndex);
				}
				else {
					replacing = precode.value.substring(cond.startIndex ? cond.startIndex : 0, pos.line);
					postStr = precode.value.substring(pos.line);
				}
				precode.value = preStr + ' '.repeat(replacing.length) + postStr;
				// const postStr = precode.value.substring(cond.startIndex);


				// this.diagnositcManager.addDiagnostic("Неисполняемый код", vscode.DiagnosticSeverity.Hint,this.file.uri.path, range, [vscode.DiagnosticTag.Unnecessary]);
			}
			else if(elsePos){
				range = new Range(elsePos.end, range.start);

				if(cond.elseIndex) {

					const preStr = precode.value.substring(0, cond.elseIndex);
					let replacing = "";
					let postStr = "";
					replacing = precode.value.substring(cond.elseIndex, pos.line);
					postStr = precode.value.substring(pos.line);
					precode.value = preStr + ' '.repeat(replacing.length) + postStr;
				}

				// this.diagnositcManager.addDiagnostic("Неисполняемый код", vscode.DiagnosticSeverity.Hint,this.file.uri.path, range, [vscode.DiagnosticTag.Unnecessary]);
			}
		}
		else {
			// this.diagnositcManager.addDiagnostic("Не найдена директива #if", vscode.DiagnosticSeverity.Error, this.file.uri.path, range);
		}
		
		return str;
	}
	private evalIf(text: string, range: Range, pos: Position, str: string): string {

		let flag: boolean = false;
		let match;
		if(match = /(?=\s*)defined\s+(\w+)?/.exec(text)) {
			range = new Range(this.file.positionAt(pos.character + match.index), range.end);
			for(let element of this.replacedCode) {
							
				const defStart = element.getRange(this.file).start;
				if(defStart.line == range.start.line && defStart.character == range.start.character) {
					flag = true;
					break;
				}
			}
			
		}
		const cmd = new Condition(range, pos, text, flag);
		cmd.startIndex = pos.line;
		this.ppConditions.push(cmd);
		this.ppCmds.push(cmd);

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

	// preprocessorTokens(symbolsManager: SymbolsManager, )
	// {
	// 	this.ppCmds.forEach(el => {
	// 		if(el instanceof Define) {
	// 			const range = el.range;
	// 			this.symbolsManager.addSymbol(new vscode.DocumentSymbol(el.patterntext, "define", vscode.SymbolKind.Constant, range, range));
				
	// 			const complition = new vscode.CompletionItem(el.patterntext);
	// 			complition.documentation = new vscode.MarkdownString('');
	// 			complition.documentation.appendCodeblock(`#define ${el.patterntext} ${el.replace}`, "pawn");
	// 			// if(value.file) complition.documentation.appendText(value.file.toString());
	// 			complition.kind = vscode.CompletionItemKind.Constant;
	// 			complition.detail = `define`;

	// 			this.addComplition(complition);
	// 		}
	// 	});
	// 	this.replacedCode.forEach(el => {
	// 		const range = el.getRange(this.file);
	// 		this.tokensManager.addToken(range, SemanticTokens.macro);
	// 		this.symbolsManager.addSymbol(new vscode.DocumentSymbol(el.text, "define", vscode.SymbolKind.Constant, range, range));
	// 	});
	// }
}