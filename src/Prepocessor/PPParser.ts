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
import { ElseIf } from "./ElseIf";

type ConditionStack = ConditionStackElement[];
interface ConditionStackElement {
	directive: Condition;
	skip: boolean;
}

export class PPParser
{
	private readonly directives: PreprocessorDirective[] = [];
	public readonly defines: Map<string, Define[]> = new Map();
	private readonly replacedCode: ReplacedCode[] = [];
	readonly includes: Include[] = [];

	private readonly ppConditions: Stack<Condition> = new Stack<Condition>();

	private readonly complitions: CompletionItem[] = [];

	constructor(private file: TextDocument, 
		readonly symbolsManager: SymbolsManager,
		readonly tokensManager: SemanticTokensManager,
		readonly diagnosticManager: DiagnosticManager) {

	}



	// parse(): string
	// {
	// 	let code = this.file.getText()
	// 	code = this.collectDirectives(code);
	// 	code = this.processDirectives(code, this.directives);
	// 	return code;
	// }

	public processAllDirectives(code: string): string
	{
		return this.processDirectives(code, this.directives);
	}

	get exportDirectives(): Define[] {
		const dirs: Define[] = [];
		// this.defines.forEach(dir => {
		// 	if(!dir.skiped) {
		// 		dirs.push(dir);
		// 	}
		// });
		return dirs;
	}

	processIncludedDirectives(code: string, array: PreprocessorDirective[]) {
		return this.processDirectives(code, array);
	}


	/**
	 * Собирает все команды препроцессора и удаляет их из текста
	 * @param code исходный код
	 * @returns код с удаленными командами препроцессора
	 */
	public collectDirectives(code: string): string {

		// const reg = /^(\s*)#\s*(define|if|elseif|else|emit|endif|endinput|endscript|error|file|include|line|pragma|section|tryinclude|undef)(.*?)(?=\s*\/\/|(?=\r?\n|$))/gim;
		const reg = /^(\s*)#\s*(define|if|elseif|else|emit|endif|endinput|endscript|error|file|include|line|pragma|section|tryinclude|undef)(.*)(?=\s*\/\/|\r?\n|$)/gim;

		const changes: { start: number; end: number; replacement: string }[] = [];

		let match;
		let last = "";
		let counter = 0;
		console.error(this.file.fileName);
		while ((match = reg.exec(code)) !== null) {
			let [fullMatch, leadingWhitespace, directive, rest] = match;
			
			// Координата начала директивы (#)
  			const directiveIndex = match.index + leadingWhitespace.length;
			// Окончания директивы
			// Координата начала оставшейся части
			let endIndex = match.index + fullMatch.length;
			const restIndex = rest ? match.index + fullMatch.indexOf(rest) : endIndex;


			// КРАЙНЕ ТУПОЕ РЕШЕНИЕ, но работает. Пока я не вижу как можно написать лучше, к сожалению :(
			let shift = 2;
			while(rest[rest.length -1] === "\\") {
				const postDir = code.substring(match.index + fullMatch.length + shift);
				const findEndreg = /(?<!\\)(?:(?=\n)|(?<=^\n|[^\\]\n)|(?=$))/;
				const postMatch = findEndreg.exec(postDir);
				if(postMatch === null) {
					throw new Error("Не найдено продолжение макроса");
				}
				rest += postDir.substring(0, postMatch.index - 1);
				endIndex += postMatch.index - 1;
				shift += postMatch.index + 2;
				
			}
			rest = rest.replace(/\\/g, "\n\r");
			//

			// const preStr = code.substring(0, directiveIndex);
			// const replaceCommand = ' '.repeat(endIndex - directiveIndex);
			// const postStr = code.substring(endIndex);
			
			
			this.addNewDirective(directive, rest, directiveIndex, restIndex, endIndex);

			changes.push({
				start: directiveIndex,
				end: endIndex,
				replacement: ' '.repeat(endIndex - directiveIndex),
			});

			// Итоговый код, после удаления директивы
			// code = preStr + replaceCommand + postStr;
		}		

		let codeWithoutDirectives = code;
		changes.sort((a, b) => b.start - a.start);
		for (const change of changes) {
			codeWithoutDirectives = codeWithoutDirectives.substring(0, change.start) + change.replacement + codeWithoutDirectives.substring(change.end);
		}
		return codeWithoutDirectives;
	}

	//Добавляет новую директиву во все списки
	private addNewDirective(directiveText: string, rest: string, startIndex: number, restIndex: number, endIndex: number)
	{
		const directive = this.createDirective(directiveText, rest, startIndex, restIndex, endIndex);
		if(directive)
		{
			this.directives.push(directive);

			// if(directive instanceof Define) {
			// 	this.defines.set(directive.pattern, directive);
			// }
			// else if(directive instanceof Condition) {
			// 	directive.checkCondition(this.file, this.defines);
			// 	this.ppConditions.push(directive);
			// }
			
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
				return new Endif(this.file, startIndex,endIndex)
				// const cond = this.ppConditions.pop();
				// if(cond) {
				// 	cond.endIf = direct;
				// }
				// return direct;	
			}
			case "undef": { 
				return new Undef(this.file, rest, startIndex, restIndex, endIndex);
			}
			case "elseif": {
				return new ElseIf(this.file, rest, startIndex, restIndex, endIndex);
			}
			case "else": {
				return new Else(this.file, startIndex,endIndex)
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
	public	processDirectives(code: string, array: PreprocessorDirective[]): string
	{
		const ifStack: ConditionStack = [];
		for(let element of array) {

			let cur;
			if(ifStack.length !== 0) {
				cur = ifStack[ifStack.length - 1];
			}

			if(element instanceof Define) {
				if(cur && cur.skip) {
					continue;
				}
				this.handleDefine(element);
				// const preDirective = code.substring(0, element.curEndIndex);
				// let lastindex = undefined;
				// if(element.undef) {
				// 	lastindex = element.undef.curStartIndex;
				// }
				// const postDirective = code.substring(element.curEndIndex, lastindex);

				// const lastCount = this.replacedCode.length;
				// const result = this.substringrReplacing(postDirective, element, element.curEndIndex);

				// this.definesReplacing(element);

				// code = preDirective + result;
				// if(lastCount < this.replacedCode.length) {
				// 	element.used = true;
				// }
				// else {
				// 	this.diagnosticManager.addDiagnostic(l10n.t("Unused #define"), DiagnosticSeverity.Hint, element.file.uri.path, element.patternRange, [DiagnosticTag.Unnecessary]);
				// }
				
				// this.symbolsManager.addSymbol(new DocumentSymbol(element.pattern, "define", SymbolKind.Constant, element.range, element.range));
				
				// const complition = new CompletionItem(element.pattern, CompletionItemKind.Constant); 
				// complition.documentation = element.doc;
				// this.complitions.push(complition);
			}
			else if(element instanceof Undef)
			{
				this.handleUndef(element);
			}
			else if(element instanceof Endinput) {
				if(cur && cur.skip) {
					continue;
				}
				code = code.substring(0, element.curEndIndex);
				const range = new Range(
					element.range.end,
					this.file.positionAt(this.file.getText().length)
				);
				this.diagnosticManager.addDiagnostic(l10n.t("Non-executable code"), DiagnosticSeverity.Hint, this.file.uri.path, range, [DiagnosticTag.Unnecessary]);
			}
			else if(element instanceof ElseIf) {
				if(cur && cur.directive.conditionResult) {
					cur.skip = true;
					continue;
				}
				this.handleElseIf(element, ifStack);
			}
			else if(element instanceof Condition) {
				this.handleCondition(element, ifStack);					
			}
			else if(element instanceof Endif) {
				this.handleEndIf(element, ifStack);	
			}
			else if(element instanceof Else) {
				if(cur && cur.directive.conditionResult) {
					cur.skip = true;
					continue;
				}
				this.handleElse(element, ifStack);
			}
			
		}

		console.log(this.defines);
		return code;
	}

	private handleUndef(directive: Undef)
	{
		const define = this.defines.get(directive.define);
		console.error(define);
		if(define) {
			const lastDef = define[define.length - 1];
			lastDef.undef = directive;
		}
	}
	private handleDefine(directive: Define)
	{
		if (!this.defines.has(directive.pattern)) {
            this.defines.set(directive.pattern, []);
        }
        this.defines.get(directive.pattern)!.push(directive);	
	}
	private isDefined(pattern: string, pos: number)
	{
		const defineInfo = this.defines.get(pattern);
		if (!defineInfo) {
			return false; // Макрос не определен ни разу
		}

		for (const define of defineInfo) {
			if(define.endIndex <= pos) {
				if(define.undef) {
					if(define.undef.startIndex >= pos) {
						return true;
					}
				}
				else {
					return true;
				}
			}
		}
		return false;
	}

	private handleEndIf(directive: Else, ifStack: ConditionStack)
	{
		if (ifStack.length === 0) {
			throw new Error("Unexpected #endif");
		}
		let ifBlock = ifStack[ifStack.length - 1];
		while(ifBlock.directive instanceof ElseIf) {
			ifStack.pop();
			if(ifStack.length !== 0) {
				ifBlock = ifStack[ifStack.length - 1];
			}
		}
		if(ifStack.length !== 0) {
			const currentIf = ifStack.pop()!;
			currentIf.directive.endIf = directive;
		}
	}
	private handleElse(directive: Else, ifStack: ConditionStack)
	{
		if (ifStack.length === 0) {
			throw new Error("Unexpected #else");
		}
		const currentIf = ifStack[ifStack.length - 1];
	
		currentIf.directive.elseBlock = directive;

		currentIf.skip = currentIf.directive.conditionResult;
	}
	private handleElseIf(directive: ElseIf, ifStack: ConditionStack)
	{
		if (ifStack.length === 0) {
			throw new Error("Unexpected #elseif");
		}
	
		const currentIf = ifStack[ifStack.length - 1];
	
		currentIf.directive.elseBlock = directive;

		const conditionResult = directive.checkCondition(this.isDefined.bind(this));
		directive.conditionResult = conditionResult;
		currentIf.skip = !conditionResult; // Если условие истинно, то пропускаем остаток блока if
		
		ifStack.push({directive: directive, skip: !directive.conditionResult});
	}
	private handleCondition(directive: Condition, ifStack: ConditionStack)
	{
		const conditionResult = directive.checkCondition(this.isDefined.bind(this));
		ifStack.push({ directive: directive, skip: !conditionResult }); // Важно: сохраняем состояние пропуска
		directive.conditionResult = conditionResult;
		/*if(element.endIf) {
					
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
					this.diagnosticManager.addDiagnostic(l10n.t("Non-executable code"), DiagnosticSeverity.Hint, this.file.uri.path, range, [DiagnosticTag.Unnecessary]);
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
				this.diagnosticManager.addDiagnostic(l10n.t("Non-executable code"), DiagnosticSeverity.Hint, this.file.uri.path, range, [DiagnosticTag.Unnecessary]);
			}
		}*/
	}

	// private definesReplacing(def: Define) {
	// 	const toReplace = def.replacement;

	// 	let match: RegExpExecArray | null;
	// 	for(let defineStruct of this.defines) {
	// 		let define = defineStruct[1];
	// 		if(def == define) continue;
	// 		if(define.curStartIndex < def.curEndIndex) continue;
	// 		let str = define.replacement;
	// 		while((match = def.patternReg.exec(str)) !== null) {	
	// 			const length = match[0].length;
	// 			const curIndex = match.index;
			
	// 			const preStr = str.substring(0, curIndex);
	// 			const findedStr = str.substring(curIndex, curIndex + length);
	// 			const postStr = str.substring(curIndex + length);

	// 			let origIndex = curIndex;

	// 			let replace = toReplace;
	// 			let index = 1;
	// 			if(match !== null) {
	// 				const matches = match;
	// 				def.parameters.forEach(element => {
	// 					replace = replace.replace(`%${element}`, matches[index]);
	// 					index++;
	// 				});
	// 			}

	// 			const curShift = findedStr.length - replace.length;
			
	// 			this.replacedCode.forEach(element => {
	// 				if(element.newIndex < curIndex)
	// 				{
	// 					origIndex += element.shift;
	// 				}
	// 				else {
	// 					element.move(-curShift);
	// 				}
	// 			});
	// 			for(let element of this.directives) {
	// 				if(element.startIndex < origIndex) continue;
	// 				element.move(-curShift);
	// 			}

	// 			str = preStr + replace + postStr;
	// 			define.replacement = str;
	// 			this.defines.set(defineStruct[0], define);
				
	// 		}	
	// 	}
	// }

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

			let replace = toReplace;
			let index = 1;
			if(match !== null) {
				const matches = match;
				define.parameters.forEach(element => {
					replace = replace.replace(`%${element}`, matches[index]);
					index++;
				});
			}

			const curShift = findedStr.length - replace.length;
			
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
				replace,
				define,
				origIndex,
				curIndex + preShift
			));
			
			str = preStr + replace + postStr;
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