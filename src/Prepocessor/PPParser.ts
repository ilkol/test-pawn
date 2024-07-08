import { Position, Range, TextDocument } from "vscode";
import { PreprocessorDirective } from "./PreprocessorDirective";
import { ReplacedCode } from "./ReplacedCode";
import { Define } from "./Define";
import { Stack } from "../antlr/Stack/Stack";
import { Condition } from "./Condition";
import { Include } from "./Include";
import { Endinput } from "./Endinput";
import { Endif } from "./Endif";
import { Else } from "./Else";

export class PPParser
{
	private directives: PreprocessorDirective[] = [];
	private defines: Map<string, Define> = new Map();
	private replacedCode: ReplacedCode[] = [];

	private ppConditions: Stack<Condition> = new Stack<Condition>();

	constructor(private file: TextDocument) {

	}

	parse(): string
	{
		let code = this.file.getText()
		code = this.collectDirectives(code);
		code = this.processDirectives(code);
		return code;
	}


	//Ищет и уадляет все директивы препроцессора
	private collectDirectives(code: string): string {

		const reg = /^(\s*)#\s*(define|if|elseif|else|emit|endif|endinput|endscript|error|file|include|line|pragma|section|tryinclude|undef)(.*)?(?=\r?\n|$)/gim;
		
		let match;
		while ((match = reg.exec(code)) !== null) {
			const [fullMatch, leadingWhitespace, directive, restA] = match;
			
			// Координата начала директивы (#)
  			const directiveIndex = match.index + leadingWhitespace.length;
			// Окончания директивы
			let rest = restA ? restA : "";
			// Координата начала оставшейся части
			const restIndex = restA ? match.index + fullMatch.indexOf(rest) : -1;
			const endIndex = match.index + fullMatch.length;


			const preStr = code.substring(0, directiveIndex);
			const replaceCommand = ' '.repeat(endIndex - directiveIndex);
			const postStr = code.substring(endIndex);
			
			this.addNewDirective(directive, rest, directiveIndex, restIndex, endIndex);

			// Итоговый код, после удаления директивы
			code = preStr + replaceCommand + postStr;
		}		
		return code;
	}

	//Добавляет новую директиву во все списки
	private addNewDirective(directiveText: string, rest: string, startIndex: number, restIndex: number, endIndex: number)
	{
		const directive = this.createDirective(directiveText, rest, startIndex, restIndex, endIndex);
		if(directive)
		{
			this.directives.push(directive);

			if(directive instanceof Define) {
				this.defines.set(directive.pattern, directive);
			}
			else if(directive instanceof Condition) {
				directive.checkCondition(this.file, this.defines);
				this.ppConditions.push(directive);
			}
		}
	}

	//Создает директиву
	private createDirective(directive: string, rest: string, startIndex: number, restIndex: number, endIndex: number): PreprocessorDirective | undefined {
		switch (directive.toLowerCase()) {
			case "define":
				return new Define(this.file, rest, startIndex, restIndex, endIndex);
			case "include":
				return new Include(this.file, rest, startIndex, restIndex, endIndex);
			case "if":
				return new Condition(this.file, rest, startIndex, restIndex, endIndex);
			case "endif": {
				const direct = new Endif(this.file, startIndex,endIndex)
				const cond = this.ppConditions.pop();
				if(cond) {
					cond.endIf = direct;
				}
				return direct;	
			}
			case "else": {
				const direct = new Else(this.file, startIndex,endIndex)
				const cond = this.ppConditions.peek();
				if(cond) {
					cond.elseBlock = direct;
				}
					
				return direct;
			}
				
			case "enscript":
			case "endinput":
				return new Endinput(this.file, startIndex, endIndex);
			default:
				throw new Error("Неизвестная команда препроцессора");
		}
	}

	//Обрабатывает все директивы, удаляя лишний код и выполняя замены
	private	processDirectives(code: string): string
	{
		let skipFrom = code.length;
		let skipTo = 0;
		this.directives.forEach(element => {
			if(element instanceof Define) {
				if(skipFrom < element.startIndex) {
					if(skipTo > element.startIndex) return;
					skipFrom = code.length;
					skipTo = 0;
				}
				const preDirective = code.substring(0, element.curEndIndex);
				const postDirective = code.substring(element.curEndIndex);

				const result = this.substringrReplacing(postDirective, element, element.curEndIndex);
				code = preDirective + result;
			}
			else if(element instanceof Condition) {
				if(element.endIf) {
					
					const preDirective = code.substring(0, element.curEndIndex);
					const postDirective = code.substring(element.endIf.curStartIndex);
					
					let mainBlock = "";
					let elseBlock = "";
					if(element.elseBlock) {
						mainBlock = code.substring(element.curEndIndex, element.elseBlock.curEndIndex);
						elseBlock = code.substring(element.elseBlock.curEndIndex, element.endIf.curStartIndex);
						
					}
					else {
						mainBlock = code.substring(element.curEndIndex, element.endIf.curStartIndex);
					}
					

					if(element.conditionResult) {
						if(element.elseBlock) {
							skipFrom = element.elseBlock.curStartIndex;
							skipTo = element.endIf.curStartIndex;
						}
						elseBlock = elseBlock.replace(/[^\r\n]/g, ' ');
					}
					else {
						mainBlock = mainBlock.replace(/[^\r\n]/g, ' ');
						skipFrom = element.curStartIndex;
						if(element.elseBlock) {
							skipTo = element.elseBlock.curStartIndex;
						}
						else skipTo = element.endIf.curStartIndex;
					}

					code = preDirective + mainBlock + elseBlock + postDirective;
				}
			}
		});
		return code;
	}

	private substringrReplacing(str: string, define: Define, preShift: number): string
	{
		const toReplace = define.replacement;

		let match: RegExpExecArray | null;
		while((match = define.patternReg.exec(str)) !== null) {
			const length = match[0].length;
			const curIndex = match.index;
			
			const preStr = str.substring(0, curIndex);
			const findedStr = str.substring(curIndex, curIndex + length);
			const postStr = str.substring(curIndex + length);

			let origIndex = curIndex + preShift;
			const curShift = findedStr.length - toReplace.length;
			
			this.replacedCode.forEach(element => {
				if(element.newIndex < curIndex + preShift)
				{
					origIndex += element.shift;
				}
				else {
					element.move(-curShift);
				}
			});
			for(let element of this.directives) {
				if(element.startIndex < origIndex) continue;
				element.move(-curShift);
			}

			this.replacedCode.push(new ReplacedCode(
				findedStr,
				toReplace,
				define,
				origIndex,
				curIndex + preShift
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