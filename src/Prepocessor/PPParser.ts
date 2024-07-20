import { CompletionItem, CompletionItemKind, DiagnosticSeverity, DiagnosticTag, DocumentSymbol, l10n, MarkdownString, Position, Range, SymbolKind, TextDocument } from "vscode";
import { PreprocessorDirective } from "./PreprocessorDirective";
import { ReplacedCode } from "./ReplacedCode";
import { Define } from "./Define";
import { Stack } from "../antlr/Stack/Stack";
import { Condition } from "./Condition";
import { Include } from "./Include";
import { Endinput } from "./Endinput";
import { Endif } from "./Endif";
import { Else } from "./Else";
import { SymbolsManager } from "../Managers/SymbolsManager";
import { SemanticTokensManager } from "../Managers/SemanticTokensManager";
import { DiagnosticManager } from "../Managers/diagnostic";
import { SemanticTokens } from "../SemanticTokens";
import { Pragma } from "./Pragma";
import { Undef } from "./Undef";

export class PPParser
{
	private readonly directives: PreprocessorDirective[] = [];
	private readonly defines: Map<string, Define> = new Map();
	private readonly replacedCode: ReplacedCode[] = [];
	readonly includes: Include[] = [];

	private readonly ppConditions: Stack<Condition> = new Stack<Condition>();

	private readonly complitions: CompletionItem[] = [];

	constructor(private file: TextDocument, 
		readonly symbolsManager: SymbolsManager,
		readonly tokensManager: SemanticTokensManager,
		readonly diagnosticManager: DiagnosticManager) {

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

		const reg = /^(\s*)#\s*(define|if|elseif|else|emit|endif|endinput|endscript|error|file|include|line|pragma|section|tryinclude|undef)(.*?)(?=\s*\/\/|(?=\r?\n|$))/gim;
				    
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
			case "emit":
			case "error":
				break;
			case "define":
				return new Define(this.file, rest, startIndex, restIndex, endIndex);
			case "tryinclude":
			case "include": {
				const directive = new Include(this.file, rest, startIndex, restIndex, endIndex)
				this.includes.push(directive);
				return directive;
			}
			case "if":
				return new Condition(this.file, rest, startIndex, restIndex, endIndex);
			case "pragma":
				return new Pragma(this.file, rest, startIndex, restIndex, endIndex);
			case "endif": {
				const direct = new Endif(this.file, startIndex,endIndex)
				const cond = this.ppConditions.pop();
				if(cond) {
					cond.endIf = direct;
				}
				return direct;	
			}
			case "undef": { 
				const direct = new Undef(this.file, rest, startIndex, restIndex, endIndex);
				const define = this.defines.get(direct.define);
				if(define) {
					define.undef = direct;
				}
				return direct;	
			}
			case "elseif": {
				const direct = new Condition(this.file, rest, startIndex, restIndex, endIndex);
				const cond = this.ppConditions.peek();
				if(cond && cond.elseBlock) {
					cond.elseBlock.elseif = direct;
				}
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
			case "endinput":
				return new Endinput(this.file, startIndex, endIndex);
			default:
				throw new Error(`Неизвестная команда препроцессора "${directive}"`);
		}
	}

	//Обрабатывает все директивы, удаляя лишний код и выполняя замены
	private	processDirectives(code: string): string
	{
		let skipFrom = code.length;
		let skipTo = 0;
		for(let element of this.directives) {

			if(skipFrom < element.startIndex) {
				if(skipTo > element.startIndex) {
					element.skiped = true;
					continue;
				}
				skipFrom = code.length;
				skipTo = 0;
			}
			if(element instanceof Define) {
				const preDirective = code.substring(0, element.curEndIndex);
				let lastindex = undefined;
				if(element.undef) {
					lastindex = element.undef.curStartIndex;
				}
				const postDirective = code.substring(element.curEndIndex, lastindex);

				const lastCount = this.replacedCode.length;
				const result = this.substringrReplacing(postDirective, element, element.curEndIndex);
				code = preDirective + result;
				if(lastCount < this.replacedCode.length) {
					element.used = true;
				}
				else {
					this.diagnosticManager.addDiagnostic(l10n.t("Unused #define"), DiagnosticSeverity.Hint, this.file.uri.path, element.range, [DiagnosticTag.Unnecessary]);
				}
				
				this.symbolsManager.addSymbol(new DocumentSymbol(element.pattern, "define", SymbolKind.Constant, element.range, element.range));
				
				const complition = new CompletionItem(element.pattern, CompletionItemKind.Constant); 
				complition.documentation = new MarkdownString("").appendCodeblock(`#define ${element.pattern} ${element.replacement}`, "pawn");;
				this.complitions.push(complition);
			}
			else if(element instanceof Endinput) {
				code = code.substring(0, element.curEndIndex);
				const range = new Range(
					element.range.end,
					this.file.positionAt(this.file.getText().length)
				);
				this.diagnosticManager.addDiagnostic(l10n.t("hintUnusedCode"), DiagnosticSeverity.Hint, this.file.uri.path, range, [DiagnosticTag.Unnecessary]);
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

					if(element.conditionResult) {
						if(element.elseBlock) {
							const range = new Range(
								element.elseBlock.range.end,
								element.endIf.range.start
							);
							this.diagnosticManager.addDiagnostic(l10n.t("hintUnusedCode"), DiagnosticSeverity.Hint, this.file.uri.path, range, [DiagnosticTag.Unnecessary]);
						}
					}
					else {
						let range: Range;
						if(element.elseBlock) {
							range = new Range(
								element.range.end,
								element.elseBlock.range.start
							);
						}
						else range = new Range(
							element.range.end,
							element.endIf.range.start
						);
						this.diagnosticManager.addDiagnostic(l10n.t("hintUnusedCode"), DiagnosticSeverity.Hint, this.file.uri.path, range, [DiagnosticTag.Unnecessary]);
					}
				}					
			}
		}
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

	preprocessorTokens(): CompletionItem[]
	{
		this.replacedCode.forEach(el => {
			const range = el.getRange(this.file);
			this.tokensManager.addToken(range, SemanticTokens.macro);
			this.symbolsManager.addSymbol(new DocumentSymbol(el.text, "define", SymbolKind.Constant, range, range));
		});

		return this.complitions;
	}
}