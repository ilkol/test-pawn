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
import * as vscode from 'vscode';
import { testPreprocess } from "./DefineReplacing";

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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

	public async processAllDirectives(code: string)
	{
		return await this.processDirectives(code, this.directives);
	}

	get exportDirectives(): Define[] {
		const dirs: Define[] = [];
		this.defines.forEach((dir, name) => {
			if(dir.length !== 0) {
				let define = dir[dir.length - 1];
				if(define.undef === undefined) {
					dirs.push(define);
				}
			}
		});
		return dirs;
	}

	async processIncludedDirectives(code: string, array: PreprocessorDirective[]) {
		return await this.processDirectives(code, array);
	}

	private findFullMultyLineDerictive(rest: string, endIndex: number, strartStr: string)
	{
		let endlCount = 0;
		let postDir = strartStr;
		while(rest[rest.length -1] === "\\") {
			endlCount++;
			rest = rest.substring(0, rest.length -1);
			rest += "\\" + postDir.substring(0,2);
			//Обрезаем все, что спереди и нам не нужно
			postDir = postDir.substring(2);
			//Ищем конец текущей строки
			const findEndreg = /(?<!\\)(?:(?=\n)|(?<=^\n|[^\\]\n)|(?=$))/;
			const postMatch = findEndreg.exec(postDir);
			if(postMatch === null) {
				throw new Error("Не найдено продолжение макроса");
			}
			// Обрезаем по конец добавляемой строки, не включая символ '\'
			const newLine = postDir.substring(0, postMatch.index - 1);
			
			
			postDir = postDir.substring(postMatch.index - 1);
			rest += newLine;
			
			endIndex += newLine.length + 2;			
		}
		// rest = rest.replace(/\\([^ntdifr%\\])/g, " $1");
		return {rest, endIndex, endlCount};
	}

	/**
	 * Собирает все команды препроцессора и удаляет их из текста
	 * @param code исходный код
	 * @returns код с удаленными командами препроцессора
	 */
	public collectDirectives(code: string): string {



		const reg = /^([\t ]*)#\s*(define|if|elseif|else|emit|endif|endinput|endscript|error|file|include|line|pragma|section|tryinclude|undef)(.*?)[\t ]*(?=\/\/|\r?\n|$)/gim;
		const changes: { start: number; end: number; replacement: string }[] = [];

		let match;
		while ((match = reg.exec(code)) !== null) {
			let [fullMatch, leadingWhitespace, directive, rest] = match;
			// Координата начала директивы (#)
  			const directiveIndex = match.index + leadingWhitespace.length;
			// Окончания директивы
			// Координата начала оставшейся части
			let endIndex = match.index + fullMatch.length;
			const restIndex = rest ? match.index + fullMatch.indexOf(rest) : endIndex;


			// КРАЙНЕ ТУПОЕ РЕШЕНИЕ, но работает. Пока я не вижу как можно написать лучше, к сожалению :(
			let res = this.findFullMultyLineDerictive(rest, endIndex, code.substring(match.index + fullMatch.length));
			rest = res.rest;
			endIndex = res.endIndex;
			
			
			this.addNewDirective(directive, rest, directiveIndex, restIndex, endIndex);


			changes.push({
				start: directiveIndex,
				end: endIndex,
				replacement: ' '.repeat(endIndex - directiveIndex - res.endlCount * 2) + (res.endlCount > 0 ? '\r\n'.repeat(res.endlCount) : ""),
			});

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
				const directive = new Include(this.file, rest, startIndex, restIndex, endIndex);
				return directive;
			}
			case "if":
				return new Condition(this.file, rest, startIndex, restIndex, endIndex);
			case "pragma":
				return new Pragma(this.file, rest, startIndex, restIndex, endIndex);
			case "endif": {
				return new Endif(this.file, startIndex,endIndex);
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
				return new Else(this.file, startIndex,endIndex);
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

	private processCondtionsDirectives(code: string, array: PreprocessorDirective[]): string
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
			}
			else if(element instanceof Include) {
				if(cur && cur.skip) {
					continue;
				}
				this.handleInclude(element);
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
		return code;
	}

	public async processDefines(code: string)
	{
		for(let definesArray of this.defines.values()) {
			for(let findinglocalDefine of definesArray) {
				const start = findinglocalDefine.endIndex;
				const stop = findinglocalDefine.undef ?  findinglocalDefine.undef.startIndex : -1;
				for(let definesArray of this.defines.values()) {
					for(let localDefine of definesArray) {
						let inRange = false;
						if(localDefine.startIndex > start) {
							if(stop !== -1) {
								if(localDefine.startIndex < stop) {
									inRange = true;
								}
							}
							else {
								inRange = true;
							}
						}
						if(inRange) {
							localDefine.replacement = await this.substringrReplacingOnChank(localDefine.replacement, findinglocalDefine, localDefine.startIndex, `${findinglocalDefine.prefix} in ${localDefine.prefix}`);
						}
					}
				}
			}
		}

		for(let definesArray of this.defines.values()) {
			for(let localDefine of definesArray) {
				const count = this.replacedCode.length;
				code = await this.processDefine(code, localDefine);
				localDefine.used = count  < this.replacedCode.length;
			}
		}

		return code;
	}

	private async processDefine(code: string, define: Define)
	{

		let lastindex = undefined;
		if(define.undef) {
			lastindex = define.undef.curStartIndex;
		}
		const startPos = define.curEndIndex;
		let stoptPos: number;
		if(lastindex) {
			stoptPos = lastindex;
		}
		else {
			stoptPos =  code.length - 1;
		}
		let offset = 0;
	
		let preCode = code.substring(0, startPos);
		let postCode = code.substring(stoptPos);
		return preCode + await this.substringrReplacingOnChank(code.substring(startPos, stoptPos), define, offset + startPos, `Process ${define.prefix} in ${this.file.uri.fsPath}`) + postCode;
		
	}
	// private async processDefineOnChunks(codeChunks: string[], define: Define)
	// {

	// 	let lastindex = undefined;
	// 	if(define.undef) {
	// 		lastindex = define.undef.curStartIndex;
	// 	}
	// 	const startPos = this.findChunkAndPosition(define.curEndIndex, codeChunks);
	// 	let stoptPos: {
	// 		chunkIndex: number;
	// 		positionInChunk: number;
	// 	};
	// 	if(lastindex) {
	// 		stoptPos = this.findChunkAndPosition(lastindex, codeChunks);
	// 	}
	// 	else {
	// 		stoptPos = {
	// 			chunkIndex: codeChunks.length - 1,
	// 			positionInChunk: codeChunks[codeChunks.length - 1].length - 1
	// 		};
	// 	}
	// 	let offset = 0;
	// 	for(let i = 0; i < startPos.chunkIndex; i++) {
	// 		offset += codeChunks[i].length;
	// 	}
	
	// 	if(startPos.chunkIndex === stoptPos.chunkIndex) {
	// 		let code = codeChunks[startPos.chunkIndex];
	// 		let preCode = code.substring(0, startPos.positionInChunk);
	// 		let postCode = code.substring(stoptPos.positionInChunk);
	// 		codeChunks[startPos.chunkIndex] = preCode + await this.substringrReplacingOnChank(code.substring(startPos.positionInChunk, stoptPos.positionInChunk), define, offset + startPos.positionInChunk, `Process ${define.prefix} in ${this.file.uri.fsPath}`) + postCode;
	// 	}
	// 	else {
	// 		let code = codeChunks[startPos.chunkIndex];
	// 		let preCode = code.substring(0, startPos.positionInChunk);
	
	// 		codeChunks[startPos.chunkIndex] = preCode + await this.substringrReplacingOnChank(code.substring(startPos.positionInChunk), define, offset, `Process ${define.prefix} in ${this.file.uri.fsPath}`);
			
	
	// 		offset += codeChunks[startPos.chunkIndex].length;
	
	// 		for(let i = startPos.chunkIndex; i < stoptPos.chunkIndex; i++) {
	// 			codeChunks[i] = await this.substringrReplacingOnChank(codeChunks[i], define, offset, `Process ${define.prefix} in ${this.file.uri.fsPath}`);
	// 		} 
	
	// 		code = codeChunks[stoptPos.chunkIndex];
	// 		let postCode = code.substring(stoptPos.positionInChunk);
	
	// 		codeChunks[stoptPos.chunkIndex] = await this.substringrReplacingOnChank(code.substring(0, stoptPos.positionInChunk), define, offset, `Process ${define.prefix} in ${this.file.uri.fsPath}`) + postCode;
	// 	}
		
	// 	return codeChunks;
	// }

	private findChunkAndPosition(index: number, chunks: string[])
	{
		let remaining = index;
		let chunkIndex = 0;
		let positionInChunk = 0;

		while (chunkIndex < chunks.length) {
            const chunk = chunks[chunkIndex];
            if (remaining < chunk.length) {
                positionInChunk = remaining;
                break;
            } 
			remaining -= chunk.length;
			chunkIndex++;
        }
		return {
			chunkIndex,
			positionInChunk
		};
	}

	//Обрабатывает все директивы, удаляя лишний код и выполняя замены
	public async processDirectives(code: string, array: PreprocessorDirective[])
	{
		code = this.processCondtionsDirectives(code, array);	
		// let codeChunks = this.sliceCodeForChunks(code);
		// codeChunks = await this.processDefines(codeChunks);
		
		return code;
	}

	private sliceCodeForChunks(code: string): string[]
	{
		const chunkSize = 1000000;
		const chunks: string[] = [];
		for (let i = 0; i < code.length; i += chunkSize) {
			chunks.push(code.substring(i, i + chunkSize));
		}
		return chunks;
	}

	private handleUndef(directive: Undef)
	{
		const define = this.defines.get(directive.define);
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
	private handleInclude(directive: Include)
	{
		this.includes.push(directive);

		// if (!this.includes.has(directive.pattern)) {
        //     this.includes.set(directive.pattern, []);
        // }
        // this.includes.get(directive.pattern)!.push(directive);	
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


	private async substringrReplacingOnChank(str: string, define: Define, preShift: number, title: string = "Processing replacements..."): Promise<string>
	{
		return await vscode.window.withProgress(
			{
				location: vscode.ProgressLocation.Window,
				title: title,
				cancellable: true,
			},
			async (progress, token) => {
				return testPreprocess(str, define);
			}
		);
	}

	private removeBackslashesOutsideStrings(code: string): string {
		// Регулярное выражение для нахождения строк в кавычках
		const stringRegex = /"(([^"\\\r\n]|\\['"?\\abfnrtv]|\\(\r\n?|\n))*?)"/g;
		const stringMatches: [number, number][] = [];
	
		// Находим диапазоны строк
		let match: RegExpExecArray | null;
		while ((match = stringRegex.exec(code)) !== null) {
			stringMatches.push([match.index, match.index + match[0].length]);
		}
	
		// Проверяем, находится ли индекс внутри строки
		const isInString = (index: number): boolean => {
			return stringMatches.some(([start, end]) => index >= start && index < end);
		};
	
		// Удаляем обратные слэши вне строк
		let result = '';
		for (let i = 0; i < code.length; i++) {
			if (code[i] === '\\' && !isInString(i)) {
				continue; // Пропускаем слэш
			}
			result += code[i];
		}
	
		return result;
	}

	private replaceMacroParameters(toReplace: string, match: RegExpExecArray, define: Define): string
	{
		let replace = toReplace;
		if (match[1]) {
			let index = 1;
			const matches = match;
			define.parameters.forEach(element => {
				const regex = new RegExp(`%${element}`, 'g');
				replace = replace.replace(regex, matches[index]);
				index++;
			});
		}
		return replace;
	}

	getDefinedRanges(): Range[]
	{

		// const mergedRanges = this.replacedCode
		// .sort((a, b) => a.start - b.start)
		// .reduce<Array<ReplacedCode>>((acc, range) => {
		// 	if (acc.length === 0 || acc[acc.length - 1].end < range.start) {
		// 		// Если диапазоны не пересекаются, добавляем новый
		// 		acc.push(range);
		// 	} else {
		// 		// Если пересекаются, объединяем их
		// 		acc[acc.length - 1].end = Math.max(acc[acc.length - 1].end, range.end);
		// 	}
		// 	return acc;
		// }, []); 

		const ranges: Range[] = [];
		// mergedRanges.forEach(el => {
		// 	ranges.push(el.getRange(this.file));
		// });
		return ranges;
	}
	

	preprocessorTokens(): CompletionItem[]
	{
		this.replacedCode.forEach(el => {
			const range = el.getRange(this.file);
			// this.tokensManager.addToken(range, SemanticTokens.macro);
			this.symbolsManager.addSymbol(new DocumentSymbol(el.text, "define", SymbolKind.Constant, range, range));
		});

		return this.complitions;
	}
}