import { join } from "path";
import { AbstractOpenFile } from "../AbstractOpenFile"
import { FileManager } from "../Managers/FileManager";
import { Range } from "../types";
import * as Directives from "./Directives"
import { Condition } from "./Directives/Conditionals";
import { PreprocessorDirective } from "./Directives/PreprocessorDirective";
import { DependencyManager } from "../DependencyManager";
import { LogLevel } from "vscode";
import { Logger } from "../Logger/Logger";


type ConditionStack = ConditionStackElement[];
interface ConditionStackElement {
	directive: Condition;
	skip: boolean;
}

export type OnFileProcessedListener = (file: AbstractOpenFile) => (Promise<void> | void);

export class Preprocessor
{

	/**
	 * Фукнция, которая вызывается после окончания обработки препроцессором файла
	 */
	private _onFileProcessedListener?: OnFileProcessedListener;

	set onFileProcessedListener(value: OnFileProcessedListener) {
		this._onFileProcessedListener = value;
	}
	
	constructor(private readonly fileManager: FileManager) {

	}

	private currentDocument?: AbstractOpenFile; 

	public async processFile(document: AbstractOpenFile) {
		this.currentDocument = document;
		
		document.processedCode = document.text;
		document.directives = [];

		const {code, directives } = await this.findDirectives(document);
		document.processedCode = code;
		document.directives = directives;

		const {code: codeAfterProcessingDirectives, includes} = await this.processFileDirectives(document);
		document.processedCode = codeAfterProcessingDirectives;
		document.includes = includes;

		await this.buildDependencyGraph(document);

		const depManager = new DependencyManager();
		const sortIncludes = await depManager.topologicalSort(this.dependencyGraph, document.path);

		for(const include of sortIncludes ) {
			if(include === document.path) {
				continue;
			}
			await this.fileManager.openFile(include);
		}

		await this._onFileProcessedListener?.(document);
	}


	/**
	 * Граф зависимостей
	 * Содержит список инклудов для каждого файла
	 */
	private dependencyGraph: Map<string, Set<string>> = new Map();

	/**
	 * Построение графа зависимостей для файла.
	 * @param openedFile Файл, для которого нужно построить граф зависимостей
	 */
	private async buildDependencyGraph(openedFile: AbstractOpenFile): Promise<void> {
		if(!this.fileManager.currentPath) {
			return;
		}
		const path = openedFile.path; // Получаем URI файла

		const dependencies: Set<string> = new Set();
		const includes = openedFile.includes; // Получаем инклуды
	
		for (const includePath of includes) {
			// Получаем URI инклуда
			includePath.absolutePath = await this.plungeInclude(includePath, this.fileManager.currentPath);
			if(!includePath.absolutePath) { // Если путь не найден, то пропускаем
				// openedFile.addDiagnostic(l10n.t("error 100: Cannot read from file: \"{0}\"", includePath.path), DiagnosticSeverity.Error, includePath.range);
				continue;
			} 
			includePath.exist = true;
			dependencies.add(includePath.absolutePath);
		}

		this.dependencyGraph.set(path, dependencies);

    }

	/**
	 * Погружение в инклуд для получения его URI.
	 * @param include Инклуд, для которого нужно получить URI
	 * @param currentPath Текущий путь файла, в котором находится инклуд
	 * @returns URI инклуда, если он найден, иначе undefined
	 */
	private async plungeInclude(include: Directives.Include, currentPath: string): Promise<string | undefined> {
		const path = include.pathText;
		if(include.type === Directives.IncludeType.default) {
			let result = await this.plungeFile(path);
			if(!result) {
				result = await this.plungeFile(join(currentPath, path));
			}
			return result;
		} else if(this.fileManager.includePath){
			return await this.plungeFile(join(this.fileManager.includePath, path));
		}
		return undefined;
	}

	private async plungeFile(path: string) {
		const extenisions = ["", ".inc", ".p", ".pawn"];
		for (const ext of extenisions) {
			if(await this.fileManager.isFileExist(path)) {
				return path;
			}
		}
		return undefined;
	}

	private async processFileDirectives(document: AbstractOpenFile) {
		let code = document.processedCode;

		const defines: Map<string, Directives.Defining.Define[]> = new Map();
		const includes: Directives.Include[] = [];
	
		const ifStack: ConditionStack = [];
		for(let element of document.directives) {

			let cur;
			if(ifStack.length !== 0) {
				cur = ifStack[ifStack.length - 1];
			}

			if(element instanceof Directives.Defining.Define) {
				if(cur && cur.skip) {
					continue;
				}
				this.handleDefine(element, defines);
			}
			else if(element instanceof Directives.Include) {
				if(cur && cur.skip) {
					continue;
				}
				this.handleInclude(element, includes);
			}
			else if(element instanceof Directives.Defining.Undef)
			{
				this.handleUndef(element, defines);
			}
			else if(element instanceof Directives.Endinput) {
				if(cur && cur.skip) {
					continue;
				}
				code = code.substring(0, element.curEndIndex);
				// const range = new Range(
				// 	element.range.end,
				// 	document.positionAt(document.text.length)
				// );
				// this.diagnosticManager.addDiagnostic(l10n.t("Non-executable code"), DiagnosticSeverity.Hint, this.file.uri.path, range, [DiagnosticTag.Unnecessary]);
			}
			else if(element instanceof Directives.Conditionals.ElseIf) {
				if(cur && cur.directive.conditionResult) {
					cur.skip = true;
					continue;
				}
				this.handleElseIf(element, ifStack, defines);
			}
			else if(element instanceof Directives.Conditionals.Condition) {
				this.handleCondition(element, ifStack);					
			}
			else if(element instanceof Directives.Conditionals.Endif) {
				code = this.handleEndIf(code, element, ifStack);	
			}
			else if(element instanceof Directives.Conditionals.Else) {
				if(cur && cur.directive.conditionResult) {
					cur.skip = true;
					continue;
				}
				this.handleElse(element, ifStack);
			}
			else {
				// TODO pragma				
			}
			
		}
		return {code, includes};
	}

	private handleUndef(directive: Directives.Defining.Undef, defines:  Map<string, Directives.Defining.Define[]>)
	{
		const define = defines.get(directive.define);
		if(define) {
			const lastDef = define[define.length - 1];
			lastDef.undef = directive;
		}
	}
	private handleDefine(directive: Directives.Defining.Define, defines:  Map<string, Directives.Defining.Define[]>)
	{
		if (!defines.has(directive.pattern)) {
            defines.set(directive.pattern, []);
        }
        defines.get(directive.pattern)!.push(directive);	
	}
	private handleInclude(directive: Directives.Include, includes: Directives.Include[])
	{
		includes.push(directive);
	}
	private isDefined(pattern: string, pos: number, defines: Map<string, Directives.Defining.Define[]>)
	{
		const defineInfo = defines.get(pattern);
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

	private handleEndIf(code: string, directive: Directives.Conditionals.Endif, ifStack: ConditionStack)
	{
		if (ifStack.length === 0) {
			throw new Error("Unexpected #endif");
		}
		let ifBlock = ifStack[ifStack.length - 1];
		while(ifBlock.directive instanceof Directives.Conditionals.ElseIf) {
			ifStack.pop();
			if(ifStack.length !== 0) {
				ifBlock = ifStack[ifStack.length - 1];
			}
		}
		if(ifStack.length !== 0) {
			const currentIf = ifStack.pop()!;
			currentIf.directive.endIf = directive;
			code = 
				code.substring(0, currentIf.directive.endIndex) + 
				code.substring(currentIf.directive.endIndex, directive.startIndex).replace(/[^\s]/g, " ") + 
				code.substring(directive.startIndex)
			;
			if(currentIf.directive.range && directive.range) {
				const range = new Range(
					currentIf.directive.range.end,
					directive.range.start
				);
				// this.diagnosticManager.addDiagnostic(l10n.t("Non-executable code"), DiagnosticSeverity.Hint, this.file.uri.path, range, [DiagnosticTag.Unnecessary]);

			}
		}
		return code;
	}
	private handleElse(directive: Directives.Conditionals.Else, ifStack: ConditionStack)
	{
		if (ifStack.length === 0) {
			throw new Error("Unexpected #else");
		}
		const currentIf = ifStack[ifStack.length - 1];
	
		currentIf.directive.elseBlock = directive;

		currentIf.skip = currentIf.directive.conditionResult;
	}
	private handleElseIf(directive: Directives.Conditionals.ElseIf, ifStack: ConditionStack, defines: Map<string, Directives.Defining.Define[]>)
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
	}


	private async findDirectives(document: AbstractOpenFile) {
		const code = document.text;
		const directives: PreprocessorDirective[] = [];

		const reg = /^([\t ]*)#([\t ]*)(define|if|elseif|else|emit|endif|endinput|endscript|error|file|include|line|pragma|section|tryinclude|undef)(.*?)[\t ]*(?=\/\/|\r?\n|$)/gim;
		const changes: { start: number; end: number; replacement: string }[] = [];

		let match;
		while ((match = reg.exec(code)) !== null) {
			let [fullMatch, leadingWhitespace, leadingWhitespaceAfterSharp, directive, rest] = match;
			// Координата начала директивы (#)
  			const directiveIndex = match.index + leadingWhitespace.length;
			let endIndex = match.index + fullMatch.length;
			const restIndex = rest ? match.index + fullMatch.indexOf(rest) : endIndex;

			
			if(directive !== "include") {
				let res = this.findFullMultyLineDerictive(rest + code.substring(match.index + fullMatch.length));
				rest = res.rest;
				endIndex = restIndex + res.fullLength;
			}

			const directiveInstance = this.createDirective(directive, rest, directiveIndex, restIndex, endIndex);
			if(directiveInstance) {
				directives.push(directiveInstance);
			}

			changes.push({
				start: directiveIndex,
				end: endIndex,
				replacement: ' '.repeat(endIndex - directiveIndex),
			});
		}		
		

		let codeWithoutDirectives = code;
		changes.sort((a, b) => b.start - a.start);
		for (const change of changes) {
			codeWithoutDirectives = codeWithoutDirectives.substring(0, change.start) + change.replacement + codeWithoutDirectives.substring(change.end	);
		}

		return {
			directives,
			code
		}
	}

	private matchDefinePattern(rest: string, restIndex: number) {
		const reg = /(\s*)([^\s]+)(?:\s+([\s\S]+))?/;
		const match = reg.exec(rest);

		if (match) {
			const patternStart = match[1] ? match[1].length : 0;
			const pattern = match[2];

			const replacement = match[3] ? match[3].trim() : "";
			const file = this.currentDocument!;
			return {
				text: pattern,
				replacement: replacement,
				range: new Range(
					file.positionAt(restIndex + patternStart),
					file.positionAt(restIndex + patternStart + pattern.length)
				)
			};
		}

		
				

		return {
			text: "",
			replacement: "",
			range: new Range(0,0,0,0)
		};
	}

	private matchIncludePath(rest: string, restIndex: number) {
		const reg = /\s*(?:(["<])([^\s"<]+)[">]|([^\s">]+))/;
		const match = reg.exec(rest);
		let type = Directives.IncludeType.default;
		let delLength = 0;
		let path = "";

		if (match) {
			if(match[1] == "<") {
				type = Directives.IncludeType.system;
			}
			if(match[1])
				delLength = 1;
			path = match[2] ? match[2] : match[3];
		} 

		const end = restIndex + rest.length - delLength;
		const file = this.currentDocument!;
		const range = new Range(
			file.positionAt(end - path.length),
			file.positionAt(end)
		);
		
		return {
			type,
			path,
			range
		};
	}

	private prepareUndefInfo(rest: string, restIndex: number) {
		const file = this.currentDocument!;
		const reg = /\w+/;
		const match = reg.exec(rest);
		let define = "";

		if (match) {
			define = match[0];
		} 

		const end = restIndex + define.length;
		const defineRange = new Range(
			file.positionAt(end - define.length),
			file.positionAt(end)
		);
		return {
			text: define,
			range: defineRange
		};
	}

	private createDirective(directive: string, rest: string, startIndex: number, restIndex: number, endIndex: number): PreprocessorDirective | undefined {
		const file = this.currentDocument!;
		const directiveRange = new Range(
			file.positionAt(startIndex),
			file.positionAt(endIndex)
		);
		
		switch (directive.toLowerCase()) {
			case "emit":
			case "error":
				break;
			case "define": {
				return new Directives.Defining.Define(directiveRange, this.matchDefinePattern(rest, restIndex), startIndex, endIndex);
			}
			case "tryinclude":
			case "include": {
				const directive = new Directives.Include(directiveRange, this.matchIncludePath(rest, restIndex), startIndex, endIndex);
				return directive;
			}
			case "if":
				return new Directives.Conditionals.Condition(directiveRange, rest, startIndex, restIndex, endIndex);
			case "pragma":
				return new Directives.Pragma(directiveRange, rest, startIndex, restIndex, endIndex);
			case "endif": {
				return new Directives.Conditionals.Endif(directiveRange, startIndex,endIndex);
				// const cond = this.ppConditions.pop();
				// if(cond) {
				// 	cond.endIf = direct;
				// }
				// return direct;	
			}
			case "undef": { 
				return new Directives.Defining.Undef(directiveRange, this.prepareUndefInfo(rest, restIndex), startIndex, endIndex);
			}
			case "elseif": {
				return new Directives.Conditionals.ElseIf(directiveRange, rest, startIndex, restIndex, endIndex);
			}
			case "else": {
				return new Directives.Conditionals.Else(directiveRange, startIndex,endIndex);
			}
				
			case "enscript":
			case "endinput":
				return new Directives.Endinput(directiveRange, startIndex, endIndex);
			default:
				throw new Error(`Неизвестная команда препроцессора "${directive}"`);
		}
	}

	private isFileEnd(char: string): boolean {
		return char === LikeCCharStream.FILE_END_CHAR;
	}
	private isStringStrating(stream: LikeCCharStream): boolean
	{
		let c = stream.char;
		if (c === '\"' || c === '\'') {
			return true;                        /* "..." */
		}
		
		if (c === '!') {
			stream.curIndex++;
			if (stream.char === '\"' || stream.char === '\'') {
				return true;                      /* !"..." */
			}
			// if (stream.char === '\\') {
			// 	stream.curIndex++;
			// 	// Пришлось делать костыли ввиде getChar, потому что ебанный typescript
			// 	if (stream.getChar() === '\"' || stream.getChar() === '\'') {
			// 		return true;                    
			// 	}
			// }
		}
		// else if (stream.char === '\\') {
		// 	stream.curIndex++;
		// 	if (stream.getChar() === '\"' || stream.getChar() === '\'') {
		// 		return true;                      /* \"..." */
		// 	}
		// 	if (stream.getChar() === '!') {
		// 		stream.curIndex++;
		// 		if (stream.getChar() === '\"' || stream.getChar() === '\'') {
		// 			return true;                    /* \!"..." */
		// 		}
		// 	}
		// }
		
		return false;
	}
	private getString(stream: LikeCCharStream)
	{
		let 
			flags: number = 0,
			result = "";
		;

		while (stream.char === '!' || stream.char === '\\') {
			if (stream.char === '\\') {
				flags = 1;
			}
			result += stream.char;
			stream.curIndex++;
		}

		let endquote : string = stream.char;

		// Пропускаем открывающую ковычку
		result += stream.char;
		stream.curIndex++;
		while (stream.char !== endquote && !this.isFileEnd(stream.char)) {
			result += stream.char;
			this.litchar(stream, flags);

		}
		return result;
	}

	private litchar(lptr: LikeCCharStream, flags: number): number
	{
		let c = 0;
		let cptr: LikeCCharStream = new LikeCCharStream(lptr.source);
		cptr.curIndex = lptr.curIndex;

		if ((flags & 1) !== 0 || cptr.char !== '\\') {  /* no escape character */
				c = cptr.char.charCodeAt(0);
				cptr.curIndex += 1;
		}
		else {
			cptr.curIndex += 1;
			if (cptr.char === "\\") {
				c = cptr.char.charCodeAt(0);          /* \\ == \ (the escape character itself) */
				cptr.curIndex += 1;
			}
			else {
				switch (cptr.getChar()) {
				case 'a':         /* \a == audible alarm */
					c = 7;
					cptr.curIndex += 1;
					break;
				case 'b':         /* \b == backspace */
					c = 8;
					cptr.curIndex += 1;
					break;
				case 'e':         /* \e == escape */
					c = 27;
					cptr.curIndex += 1;
					break;
				case 'f':         /* \f == form feed */
					c = 12;
					cptr.curIndex += 1;
					break;
				case 'n':         /* \n == NewLine character */
					c = 10;
					cptr.curIndex += 1;
					break;
				case 'r':         /* \r == carriage return */
					c = 13;
					cptr.curIndex += 1;
					break;
				case 't':         /* \t == horizontal TAB */
					c = 9;
					cptr.curIndex += 1;
					break;
				case 'v':         /* \v == vertical TAB */
					c = 11;
					cptr.curIndex += 1;
					break;
				case 'x':
					cptr.curIndex += 1;
					c = 0;
					while (this.ishex(cptr.getChar())) {
						if (this.isdigit(cptr.getChar())) {
							c = (c << 4) + (cptr.getChar().charCodeAt(0) - '0'.charCodeAt(0));
						}
						else {
							c = (c << 4) + (cptr.getChar().toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 10);
						}
						cptr.curIndex++;
					}
					if (cptr.getChar() === ';') {
						cptr.curIndex++;       /* swallow a trailing ';' */
					}
					break;
				case '\'':        /* \' == ' (single quote) */
				case '"':         /* \" == " (single quote) */
				case '%':         /* \% == % (percent) */
					c = cptr.getChar().charCodeAt(0);
					cptr.curIndex += 1;
					break;
				case '#':
				case ',':
				case ';':
				case ')':
				case '}':
					if (flags & 4) {
						c = cptr.getChar().charCodeAt(0);
						cptr.curIndex += 1;
					}
					else {
						throw new Error("27"); /* invalid character constant - only valid in stringize */
					}
					break;
				case '\r':
					c = 13;
					break;
				case '\n':
					c = 10;
					break;
				default:
					if (this.isdigit(cptr.getChar())) {   /* \ddd */
						c = 0;
						while (cptr.getChar() >= '0' && cptr.getChar() <= '9') {  /* decimal! */
							c = c * 10 + cptr.getChar().charCodeAt(0) - '0'.charCodeAt(0);
							cptr.curIndex++;
						}
						if (cptr.getChar() === ';') {
							cptr.curIndex++; /* swallow a trailing ';' */
						}
					}
					else {
						throw new Error("27");    /* invalid character constant */
					}
				}
			}
		}
		lptr.curIndex = cptr.curIndex;
		if(!(c >= 0)) {
			throw new Error("");
		}
		return c;
	}

	private ishex(c: string): boolean
	{
		return /[0-9a-fA-F]/.test(c);
		// return (c >= '0' && c <= '9') || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F');
	}
	private isdigit(c: string): boolean
	{
		return /\d/.test(c);
	}

		
	private findFullMultyLineDerictive(input: string) {
		let stream = new LikeCCharStream(input);
			
		while(stream.char === ' ') {
			stream.curIndex++;
		}
		if(this.isFileEnd(stream.char)) {
			return {rest: "", fullLength: 0};
		}

		let result = "";
		let char;
			
		while(!this.isFileEnd(stream.getChar())) {
			char = stream.getChar();
			
			// Если строка, то полностью ее включаем в паттерн
			if (this.isStringStrating(stream)) {
				result += this.getString(stream);
				if (this.isFileEnd(stream.char)) {
					break;        
				}
			}
			// Если начало комментария
			if(char === '/') {
				if(stream.getShiftChar(1) === '/' || stream.getShiftChar(1) === '*') {
					break;
				}
			}
			// если перенос строки
			else if(char === "\n") {
				if(stream.getShiftChar(-1) !== '\\' && stream.getShiftChar(-1) !== '\r') {
					break;
				}
			}
			else if(char === "\r") {
				if(stream.getShiftChar(-1) !== '\\') {
					break;
				}
			}
			result += char;
			stream.curIndex++;
		}

		return {rest: result, fullLength: stream.curIndex};
	}
}