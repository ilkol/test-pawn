import { join } from "path";
import { AbstractOpenFile } from "../AbstractOpenFile"
import { FileManager } from "../Managers/FileManager";
import { Range } from "../types";
import * as Directives from "./Directives"
import { Condition } from "./Directives/Conditionals";
import { PreprocessorDirective } from "./Directives/PreprocessorDirective";
import { DependencyManager } from "../DependencyManager";
import { Locale } from "../Locale";
import { DiagnosticSeverity, DiagnosticTag } from "vscode-languageserver";
import { LikeCCharStream } from "./LikeCCharStream";
import { CodeMapper } from "./CodeMapper";
import { PawnErrors } from "../Errors/PawnErrors";
import { CacheManager } from "../cache/CacheManager";
import { Serialization } from "../cache/Serialization";


type ConditionStack = ConditionStackElement[];
interface ConditionStackElement {
	directive: Condition;
	skip: boolean;
}

class FindedDefine {
	constructor(public readonly start: number, public readonly length: number, public readonly shift: number) {

	}
}

interface ParsedFloatInfo {
	memoryView: number,
	simulatedFloat: number,
	parsedFloat: number
}

interface MappingInfo {
	/**
	 * Количество символов, найденных в строке
	 */
	findedLength: number;
	/**
	 * Количество символов, на которые нужно заменить
	 */
	replacingLength: number;
}

interface ReplaceInfo {
	shift: number;
}

export type OnFileProcessedListener = (file: AbstractOpenFile) => (Promise<void> | void);

export class Preprocessor
{
	private static readonly needSemicolon = true;

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

	private async nextStep(document: AbstractOpenFile, curentAction: Function) {
		await curentAction();
		document.parsinState++;
		CacheManager.setFileCache(document.cache);
	}

	public async processFile(document: AbstractOpenFile) {
		this.currentDocument = document;
		
		document.processedCode = document.text;

		for(const action of [
			async () => await this.findAndReplaceDirectives(document),
			async () => await this.processFileDirectives(document),
			async () => document.sortedIncludes = await this.sortIncludes(document),
			async () => await this.processIncludes(document),
			async () => document.processedCode = await this.processDefines(document.processedCode, document.defines)
		]) {
			await this.nextStep(document, action);
		}
		await this._onFileProcessedListener?.(document);
	}

	private async findAndReplaceDirectives(document: AbstractOpenFile) { 
		if(document.cache.directives) {
			document.processedCode = document.cache.processCode;

			const definesRelations: Map<string, Directives.Defining.Define> = new Map();
			const conditionRelations: Map<{
				else?: string;
				endIf?: string;
			}, Directives.Conditionals.Condition> = new Map();

			document.directives = document.cache.directives.map(d => {
				const instance = Serialization.Deserialize.object<PreprocessorDirective>(d);
				instance.id = d.id;
				if(instance instanceof Directives.Defining.Define) {
					const undef = (d as Serialization.Preprocessor.DefineCache).undef;
					if(undef) {
						definesRelations.set(undef, instance);
					}
				} else if(instance instanceof Directives.Conditionals.Condition) {
					const elseDir = (d as Serialization.Preprocessor.IfCache).else;
					const endIf = (d as Serialization.Preprocessor.IfCache).endIf;
					if(elseDir || endIf) {
						conditionRelations.set({
							else: elseDir,
							endIf: endIf
						}, instance);
					}
				}
				return instance;
			}).filter(i => !!i) as PreprocessorDirective[];
			
			for(const [undefId, define] of definesRelations) {
				define.undef = document.directives.find(d => d.id === undefId) as Directives.Defining.Undef;
			}
			for(const [relation, condition] of conditionRelations) {
				if(relation.else) {
					condition.elseBlock = document.directives.find(d => d.id === relation.else) as Directives.Conditionals.Else | Directives.Conditionals.ElseIf;
				}
				if(relation.endIf) {
					condition.endIf = document.directives.find(d => d.id === relation.endIf) as Directives.Conditionals.Endif;
				}
			}


			return;
		}
		const {code, directives } = await this.findDirectives(document);
		document.processedCode = code;
		document.directives = directives;
		document.cache.directives = directives.map(d => d.toJSON());
	}

	private async sortIncludes(document: AbstractOpenFile) {
		if(document.cache.sortedIncludes) {
			return document.cache.sortedIncludes;
		}
		await this.buildDependencyGraph(document);
	
		const depManager = new DependencyManager();
		return await depManager.topologicalSort(this.dependencyGraph, document.path);
	}

	private async processIncludes(document: AbstractOpenFile) {
		for(const include of document.sortedIncludes ) {
			if(include === document.path) {
				continue;
			}
			await this.fileManager.openFile(include);
		}
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
				if(!includePath.silent) {
					openedFile.diagnostics.push(PawnErrors.report(100, includePath.pathRange, includePath.pathText));
				}
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
		} 
		if(this.fileManager.includePath){
			return await this.plungeFile(join(this.fileManager.includePath, path));
		}
		return undefined;
	}

	private async plungeFile(path: string) {
		const extenisions = ["", ".inc", ".p", ".pawn"];
		for (const ext of extenisions) {
			if(await this.fileManager.isFileExist(path + ext)) {
				return path + ext;
			}
		}
		return undefined;
	}

	private async processFileDirectives(document: AbstractOpenFile) {
		if(document.cache.includes) {
			document.processedCode = document.cache.processCode;
			document.includes = document.cache.includes.map(include => document.directives.find(d => d instanceof Directives.Include && d.id === include) as Directives.Include).filter(i => !!i) as Directives.Include[];
			document.defines = new Map();
			for(const key of Object.keys(document.cache.defines ?? {})) {
				const value = document.cache.defines![key];
				document.defines!.set(key, value.map(v => document.directives.find(d => d instanceof Directives.Defining.Define && d.id === v) as Directives.Defining.Define).filter(i => !!i) as Directives.Defining.Define[]);
			}
			return;
		}
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
				const range = new Range(
					element.range.end,
					document.positionAt(document.text.length)
				);
				document.diagnostics.push({
					message: Locale.t("Non-executable code"),
					range: range,
					severity: DiagnosticSeverity.Hint,
					source: "pawn-lsp",
					tags: [DiagnosticTag.Unnecessary]
				});				
			}
			else if(element instanceof Directives.Error) {
				document.diagnostics.push(PawnErrors.report(
					element.type === Directives.Error.Type.Error ? 111 : 237, 
					element.range, 
					element.message
				));
			}
			else if(element instanceof Directives.FileLineChange) {
				document.diagnostics.push({
					message: element.hintMessage,
					range: element.range,
					severity: DiagnosticSeverity.Hint,
					source: "pawn-lsp"
				});		
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
			
		}


		document.cache.processCode = document.processedCode = code;
		document.includes = includes;
		document.defines = defines;

		document.cache.includes = includes.map(include => include.id);
		document.cache.defines = {};	
		document.defines.forEach((value, key) => {
			document.cache.defines![key] = value.map(v => v.id);
		});
	}

	private handleUndef(directive: Directives.Defining.Undef, defines:  Map<string, Directives.Defining.Define[]>)
	{
		const define = defines.get(directive.define);
		if(define) {
			const lastDef = define[define.length - 1];
			lastDef.undef = directive;
		} else {
			this.currentDocument?.diagnostics.push(PawnErrors.report(17, directive.defineRange, directive.define));
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

	private handleEndIf(code: string, directive: Directives.Conditionals.Endif, ifStack: ConditionStack): string
	{
		if (ifStack.length === 0) {
			this.currentDocument?.diagnostics.push(PawnErrors.report(26, directive.range));
			return code;
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
				this.currentDocument?.diagnostics.push({
					message: Locale.t("Non-executable code"),
					range: range,
					severity: DiagnosticSeverity.Hint,
					source: "pawn-lsp",
					tags: [DiagnosticTag.Unnecessary]
				});				
			}
		}
		return code;
	}
	private handleElse(directive: Directives.Conditionals.Else, ifStack: ConditionStack): void
	{
		if (ifStack.length === 0) {
			this.currentDocument?.diagnostics.push(PawnErrors.report(26, directive.range));
			return;
			throw new Error("Unexpected #else");
		}
		const currentIf = ifStack[ifStack.length - 1];
	
		currentIf.directive.elseBlock = directive;

		currentIf.skip = currentIf.directive.conditionResult;
	}
	private handleElseIf(directive: Directives.Conditionals.ElseIf, ifStack: ConditionStack, defines: Map<string, Directives.Defining.Define[]>): void
	{
		if (ifStack.length === 0) {
			this.currentDocument?.diagnostics.push(PawnErrors.report(26, directive.range));
			return;
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

		const reg = /^([\t ]*)#([\t ]*)(define|if|elseif|else|emit|endif|endinput|endscript|error|warning|file|include|line|pragma|section|tryinclude|undef|\w+)(.*?)[\t ]*(?=\/\/|\r?\n|$)/gim;
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
			code: codeWithoutDirectives
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
		const directiveText = directive.toLowerCase();
		
		switch (directiveText) {				
			case "define": {
				return new Directives.Defining.Define(directiveRange, this.matchDefinePattern(rest, restIndex), startIndex, endIndex);
			}
			case "undef": { 
				return new Directives.Defining.Undef(directiveRange, this.prepareUndefInfo(rest, restIndex), startIndex, endIndex);
			}
			case "tryinclude":
			case "include": {
				const directiveInstance = new Directives.Include(directiveRange, this.matchIncludePath(rest, restIndex), startIndex, endIndex);
				directiveInstance.silent = directiveText === "tryinclude";
				return directiveInstance;
			}
			case "pragma": {
				this.parsePragma(rest);
				return new Directives.Pragma(directiveRange, rest, startIndex, endIndex);
			}
			case "if":
				return new Directives.Conditionals.Condition(directiveRange, rest, startIndex, endIndex);
			case "endif": {
				return new Directives.Conditionals.Endif(directiveRange, startIndex,endIndex);
			}
			case "elseif": {
				return new Directives.Conditionals.ElseIf(directiveRange, rest, startIndex, endIndex);
			}
			case "else": {
				return new Directives.Conditionals.Else(directiveRange, startIndex,endIndex);
			}
				
			case "enscript":
			case "endinput":
				return new Directives.Endinput(directiveRange, startIndex, endIndex);
			case "emit":
			case "assert":{
				this.currentDocument?.diagnostics.push({
					message: Locale.t("This directive is not yet supported by the extension."),
					range: directiveRange,
					severity: DiagnosticSeverity.Hint,
					source: "pawn-lsp"
				});
				return;
			}
			case "line":
			case "file": {
				return new Directives.FileLineChange(
					directiveRange, 
					directiveText === "file" 
						? Locale.t("Changes the name of the compiling file")
						: Locale.t("Changes the number of the compiling line"), 
					startIndex, 
					endIndex
				);
			}
			case "warning":
			case "error": {
				return new Directives.Error(
					directiveRange, 
					rest, 
					directiveText === "error" ? Directives.Error.Type.Error : Directives.Error.Type.Wawrning , 
					startIndex, 
					endIndex
				);
			}
			default:
				this.currentDocument?.diagnostics.push(PawnErrors.report(31, directiveRange));
		}
	}

	private parsePragma(text: string) {
		console.debug(text);
	}

	/**
	 * Переводит строку с константой вещественного числа в 
	 * вещественное число формата IEE-754
	 * @param inputString строка с константой
	 * @param rationaPrecision задананная точность
	 * @returns информация о распаршенном вещественном числе
	 */
	public static floatMemorizing(inputString: string, rationaPrecision: number | undefined): ParsedFloatInfo | undefined {
		let ptr: number = 0;
		let fnum: number = 0.0;
		let ffrac: number = 0.0;
		let fmult: number = 1.0;
		let dnum: number = 0;
		let dbase: number = 1

		for (let i = 0; i < (rationaPrecision ?? 0); i++) {
			dbase *= 10;
		}

		if (!Preprocessor.isDigit(inputString[ptr])) {
			return undefined;
		}

		while (ptr < inputString.length && (Preprocessor.isDigit(inputString[ptr]) || inputString[ptr] === '_')) {
			if (inputString[ptr] !== '_') {
				fnum = fnum * 10.0 + (parseInt(inputString[ptr], 10));
				dnum = dnum * 10 + parseInt(inputString[ptr], 10) * dbase;
			}
			ptr++;
		}

		if (ptr >= inputString.length || inputString[ptr] !== '.') {
			return undefined;
		}
		ptr++;

		if (ptr >= inputString.length || !Preprocessor.isDigit(inputString[ptr])) {
			return undefined;
		}

		let ignore: boolean = dbase ? false : true;

		// Process fractional part
		for(;ptr < inputString.length && (Preprocessor.isDigit(inputString[ptr]) || inputString[ptr] === '_'); ptr++) {
			if (inputString[ptr] === '_') {
				continue;
			}
			ffrac = ffrac * 10.0 + parseInt(inputString[ptr], 10);
			fmult /= 10.0;
			dbase = Math.floor(dbase / 10);
			dnum += parseInt(inputString[ptr], 10) * dbase;
			if (!ignore && dbase === 0 && rationaPrecision) {
				// this.currentDocument?.diagnostics.push(PawnErrors.report(222))
				ignore = true;
			}
		}

		

		// Combine integer and fractional parts
		fnum += ffrac * fmult;

		if(rationaPrecision === undefined) {
			// this.currentDocument?.diagnostics.push(PawnErrors.report(70))
			return undefined;
		} else if(!rationaPrecision) {
			// симуляция потери данных
			const value: number = fnum;
			const buffer = new ArrayBuffer(4);
			const floatViewArray = new Float32Array(buffer);
			const intView = new Int32Array(buffer);
			floatViewArray[0] = value;
			return {
				memoryView: intView[0],
				simulatedFloat: floatViewArray[0],
				parsedFloat: fnum
			}
		} else {
			return {
				memoryView: dnum,
				simulatedFloat: dnum / Math.pow(10, rationaPrecision),
				parsedFloat: fnum
			}
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
						if (Preprocessor.isDigit(cptr.getChar())) {
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
					if (Preprocessor.isDigit(cptr.getChar())) {   /* \ddd */
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
	private static isDigit(c: string): boolean
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

	private async processDefines(code: string, defines: Map<string, Directives.Defining.Define[]>)
	{
		for(let definesArray of defines.values()) {
			for(let findinglocalDefine of definesArray) {
				const start = findinglocalDefine.endIndex;
				const stop = findinglocalDefine.undef ?  findinglocalDefine.undef.startIndex : -1;
				for(let definesArray of defines.values()) {
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

		return code;
	}

	private codeMapper: CodeMapper = new CodeMapper();

	private async substringrReplacingOnChank(str: string, define: Directives.Defining.Define, preShift: number, title: string = "Processing replacements..."): Promise<string>
	{
		const changes: FindedDefine[] = [];
		const res = this.testPreprocess(str, define, changes);
		
		let startPos: number, originalStartPos: number;
		changes.forEach(change => {
			startPos = change.start + preShift;
			originalStartPos = this.codeMapper.getOriginalPos(startPos);
			this.codeMapper.addChange({
				originalStartPos: originalStartPos,
				startIndex: startPos,
				changeLength: change.shift
			});
			// const range = new Range(this.file.positionAt(originalStartPos), this.currentDocument.positionAt(originalStartPos + change.length));
			// this.tokensManager.addToken(range, SemanticTokens.macro);
			preShift -= change.shift;
		});
		return res;
		// return await vscode.window.withProgress(
		// 	{
		// 		location: vscode.ProgressLocation.Window,	
		// 		title: title,
		// 		cancellable: true,
		// 	},
		// 	async (progress, token) => {
		// 		const changes: FindedDefine[] = [];
		// 		const res = testPreprocess(str, define, changes);
				
		// 		let startPos: number, originalStartPos: number;
		// 		changes.forEach(change => {
		// 			startPos = change.start + preShift;
		// 			originalStartPos = this.codeMapper.getOriginalPos(startPos);
		// 			this.codeMapper.addChange({
		// 				originalStartPos: originalStartPos,
		// 				startIndex: startPos,
		// 				changeLength: change.shift
		// 			});
		// 			const range = new Range(this.file.positionAt(originalStartPos), this.file.positionAt(originalStartPos + change.length));
		// 			this.tokensManager.addToken(range, SemanticTokens.macro);
		// 			preShift -= change.shift;
		// 		});
		// 		return res;
		// 	}
		// );
	}

	private readonly substindex = new Map<string, Directives.Defining.Define[]>();;

	private testPreprocess(code: string, define: Directives.Defining.Define, changes: FindedDefine[]) {
		try {
			this.substindex.clear(); // очищаем индекс макросов
			this.substindex.set(define.prefix[0], [define]); // добавляем в массив макрос с ключом равным первому символу макроса
		
			return this.substallpatterns(code, changes);
		} catch(e) {
			console.error(e);
		}
		return "";
	}

	private substallpatterns(line: string, changes: FindedDefine[]) {
		let 
			start: number,
			end: number,
			/**
			 * Длина префикса макроса, который мы ищем в строке
			 */
			prefixlen: number,
			subst: Directives.Defining.Define|null = null,
			shift = 0
		;
		
		/**
		 * Стрим для работы с входной строкой
		 */
		let stream = new LikeCCharStream(line);
		

		// Обход строки до ее конца
		while(!this.isFileEnd(stream.char)) {
			// Поиск начала префикса макроса
			while (!this.isAlphabeticSymbol(stream.char) && !this.isFileEnd(stream.char)) {
				// Пропуск строк
				if (this.isStringStrating(stream)) {
					stream = this.skipstring(stream);
					if (this.isFileEnd(stream.char)) {
						break;        /* abort loop on error */
					}
				}
				stream.curIndex++;          /* skip non-alphapetic character (or closing quote of a string) */
			}
			if (this.isFileEnd(stream.char)) {
				break; /* abort loop on error */
			}
			/* if matching the operator "defined", skip it plus the symbol behind it */
			if (stream.compare("defined") && stream.getShiftChar(7) <= ' ') {
				stream.curIndex += 7; /* skip "defined" */
				/* skip white space & parantheses */
				while ((stream.getChar() <= ' ' && !this.isFileEnd(stream.getChar())) || stream.getChar() === '(') {
					stream.curIndex++;
				}
				/* skip the symbol behind it */
				while (this.alphanum(stream.getChar())) {
					stream.curIndex++;
				}
				/* drop back into the main loop */
				continue;
			}
			/* get the prefix (length), look for a matching definition */
			prefixlen = 0;
			while (this.alphanum(stream.getShiftChar(prefixlen))) {
				prefixlen++;
			} 
			if(prefixlen <= 0) {
				throw new Error("");
			}
			
			subst = this.findSubstr(stream, prefixlen);
			if (subst !== null) {
				let replaceData: ReplaceInfo = { shift: 0};
				const mappingInfo = { findedLength: 0, replacingLength: 0 };
				/* properly match the pattern and substitute */
				if (!this.substpattern(stream, subst, replaceData, mappingInfo)) {
					stream.curIndex += prefixlen;      /* match failed, skip this prefix */
				}
				else {
					changes.push(new FindedDefine(stream.curIndex + shift, prefixlen, mappingInfo.findedLength - mappingInfo.replacingLength));
					shift += replaceData.shift;
				}
				
				/* match succeeded: do not update "start", because the substitution text
				* may be matched by other macros
				*/
			}
			else {
				stream.curIndex += prefixlen;        /* no macro with this prefix, skip this prefix */
			}
		}

		return stream.source;
	}

	private isAlphabeticSymbol(c: string): boolean
	{
		return /[a-zA-Z_@]/.test(c);
	}

	private skipstring(stream: LikeCCharStream)
	{
		let 
			flags: number = 0
		;

		while (stream.char === '!' || stream.char === '\\') {
			if (stream.char === '\\') {
				flags = 1;
			}
			stream.curIndex++;
		}

		let endquote : string = stream.char;

		// Пропускаем открывающую ковычку
		stream.curIndex++;
		while (stream.char !== endquote && !this.isFileEnd(stream.char)) {
			this.litchar(stream, flags);
		}
		return stream;
	}
	private alphanum(c: string): boolean
	{	
		return (this.isAlphabeticSymbol(c) || Preprocessor.isDigit(c));
	}
	private findSubstr(stream: LikeCCharStream, len: number)
	{
		let item = this.substindex.get(stream.char);
		return item ? this.findStringpair(item, stream, len) : null;
	}
	private findStringpair(array: Directives.Defining.Define[], stream: LikeCCharStream, matchlength: number): Directives.Defining.Define|null
	{
		for(let define of array) {
			if (matchlength !== define.prefixLen) {
				continue;
			}
			if (stream.compare(define.prefix)) {
				return define;
			}
		};
		return null;
	}
	private substpattern(stream: LikeCCharStream, define: Directives.Defining.Define, replaceData: ReplaceInfo, mappingInfo: MappingInfo)
	{
		let instring: number;

		/* pattern prefix matches; match the rest of the pattern, gather
		* the parameters
		*/
		let args = [];
		let arg = 0;
		let sourceShift = define.prefixLen;
		let pattern = new LikeCCharStream(define.postPrefix);
		let match = 1;         /* so far, pattern matches */

		while (match && !this.isFileEnd(stream.getShiftChar(sourceShift)) && !this.isFileEnd(pattern.char)) {
			if (pattern.char === '%') { // обработка параметра в паттерне
				pattern.curIndex++; // получаем следующий символ
				if (!Preprocessor.isDigit(pattern.getChar())) { // если символ не число
					match = 1;
					continue;
				}
				arg = +pattern.getChar(); // получаем номер параметра
				
				if(!(arg >= 0 && arg <= 9)) { // если номер параметра не в диапазоне от 0 до 9
					throw new Error(""); // выбрасываем исключение
				}
				pattern.curIndex++;	// берём следующий символ после номера параметра
				if(this.isFileEnd(pattern.getChar())) {
					throw new Error("");	// файл закончился, а паттерн не закончился
				}

				let e = new LikeCCharStream(stream.source); // создаем копию основного стрима
				e.curIndex = stream.curIndex + sourceShift; // сдвигаем его на позицию, где мы ищем параметр
				while (e.char !== pattern.char && !this.isFileEnd(e.char) && e.char !== '\n') { // пока символ не совпал с паттерном и это не конец файла или строки
					if (this.isStringStrating(e)) { // пропуск строки
						e =this. skipstring(e);
					}              
					else if (/\(\{\[/.exec(e.char)) { // пропуск групп
						
						e = this.skippgroup(e);
					}
					if (!this.isFileEnd(e.char)) {
						e.curIndex++;      /* skip non-alphapetic character (or closing quote of
											* a string, or the closing paranthese of a group) */
					}
				}
				/* store the parameter (overrule any earlier) */
				let len = e.curIndex - stream.curIndex; // длина найденного параметра
				args[arg] = stream.substr(len - sourceShift, sourceShift); // сохраняем параметр в массив
				/* character behind the pattern was matched too */
				if (e.char === pattern.char) { // если символ совпал с паттерном
					sourceShift = len + 1;
				}
				else if (e.char === '\n' && pattern.getChar() === ';' && this.isFileEnd(pattern.getShiftChar(1)) && !Preprocessor.needSemicolon) {
					sourceShift = len;    /* allow a trailing ; in the pattern match to end of line */
				}
				else {
					match = 0;
					sourceShift = len;
				} /* if */
				pattern.curIndex++;
			}
			else if (pattern.char === ';' && this.isFileEnd(pattern.getShiftChar(1)) && !Preprocessor.needSemicolon) {
				/* source may be ';' or end of the line */
				while (stream.getShiftChar(sourceShift) <= ' ' && !this.isFileEnd(stream.getShiftChar(sourceShift))) {
					stream.curIndex++;          /* skip white space */
				}
				if (stream.getShiftChar(sourceShift) !== ';' && !this.isFileEnd(stream.getShiftChar(sourceShift))) {
					match = 0;
				}
				pattern.curIndex++;            /* skip the semicolon in the pattern */
			}
			else {
				let ch: number;
				/* skip whitespace between two non-alphanumeric characters, except
				* for two identical symbols
				*/
				if (!this.alphanum(pattern.char) && pattern.getShiftChar(1) !== pattern.char) {
					while (stream.getShiftChar(sourceShift) <= ' ' && !this.isFileEnd(stream.getShiftChar(sourceShift))) {
						sourceShift++;                  /* skip white space */
					}
				}
				ch = this.litchar(pattern, 0);         /* this increments "p" */
				if (stream.getShiftChar(sourceShift).charCodeAt(0) !== ch) {
					match = 0;
				}
				else {
					sourceShift++;                    /* this character matches */
				}
			} 
		}
		mappingInfo.findedLength = sourceShift;


		if (match && this.isFileEnd(pattern.char)) {
			/* if the last character to match is an alphanumeric character, the
			* current character in the source may not be alphanumeric
			*/
			if (this.alphanum(pattern.getShiftChar(-1)) && this.alphanum(stream.getShiftChar(sourceShift))) {
				match = 0;
			}
		}

		if (match) {
			/* calculate the length of the substituted string */
			instring = 0;
			for (let e = new LikeCCharStream(define.replacement), len = 0; !this.isFileEnd(e.char); e.curIndex++) {
				if (e.getChar() === '%' && Preprocessor.isDigit(e.getShiftChar(1)) && !instring) {
					let argNum = +e.getShiftChar(1);
					let arg = args[argNum];
					len += arg ? arg.length : 2;
					e.curIndex++;          /* skip %, digit is skipped later */
				}
				else {
					if (e.getChar() === '"') {
						instring = instring > 0 ? 0 : 1;
					}
					len++;
				}
			}
			/* substitute pattern */
			instring = 0;
			stream.strdel(sourceShift);
			const lengthBeforeReplace = sourceShift;
			
			sourceShift = 0;
			for (let e = new LikeCCharStream(define.replacement); !this.isFileEnd(e.char); e.curIndex++) {
				if (e.getChar() === '%' && Preprocessor.isDigit(e.getShiftChar(1)) && !instring) {
					let argNum = +e.getShiftChar(1);
					let arg = args.at(argNum);
					if (arg !== undefined) {

						stream.strIns(arg, sourceShift);
						sourceShift += arg.length;
					}
					else {
						throw new Error("236"); /* parameter does not exist, incorrect #define pattern */
						stream.strIns(e.substr(2), sourceShift);
						sourceShift += 2;
					} /* if */
					e.curIndex++;          /* skip %, digit is skipped later */
				}
				else {
					if (e.char === '"') {
						instring = instring > 0 ? 0 : 1;
					}
					stream.strIns(e.substr(1), sourceShift);
					sourceShift++;
				}
			}
			replaceData.shift = lengthBeforeReplace - sourceShift;
			mappingInfo.replacingLength = sourceShift;
		}

		

		return match;
	}
	private skippgroup(stream: LikeCCharStream): LikeCCharStream
	{
		let nest = 0;
		let open = stream.char;
		let close;

		switch (open) {
		case '(':
			close = ')';
			break;
		case '{':
			close = '}';
			break;
		case '[':
			close = ']';
			break;
		case '<':
			close = '>';
			break;
		default:
			throw new Error();
		}/* switch */

		stream.curIndex++;
		while (stream.char !== close || nest > 0) {
			if (stream.char === open) {
				nest++;
			}
			else if (stream.char === close) {
				nest--;
			}
			else if (this.isStringStrating(stream)) {
				stream = this.skipstring(stream);
			}
			if (this.isFileEnd(stream.char)) {
				break;
			}
			stream.curIndex++;
		} /* while */
		return stream;
	}

	private parsePreprocExpr(input: string) {
		input = this.substallpatterns(input, []);
		const val = this.parseConstExpr(input);
	}

	private parseConstExpr(input: string) {
		const expr = this.parseExpression(input);
	}
	private parseExpression(input: string) {

	}
}