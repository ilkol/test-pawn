import { SemanticTokenModifiers } from "vscode-languageserver";
import { AbstractOpenFile } from "../AbstractOpenFile";
import { IScope } from "../antlr/Scopes/IScope";
import { Scope } from "../antlr/Scopes/Scope";
import { Tag } from "../SymbolSystem/Symbols/Tag";
import { SymbolsFactory } from "../SymbolSystem/SymbolsFactory";
import { Position, Range } from "../types";

export class ScopeManager {
	/** Массив всех областей видимости в файле */
	private _scopes: IScope[] = [];
	/** Глобальная область видимости */
	private _globalScope: IScope;

	constructor(
		/** Анализируемый файл */
		private file: AbstractOpenFile
	) {
		this._globalScope = new Scope(file, new Range(0,0,0,0));
		this.injectBuiltinConstants(this._globalScope);
	}

	private injectBuiltinConstants(scope: IScope) {
		const defaultTag = SymbolsFactory.defaultTag;
		const boolTag = SymbolsFactory.boolTag;
		const flaotTag = SymbolsFactory.createTag("Float", "system", new Range(0,0,0,0), new Range(0,0,0,0));
		scope.addTag(defaultTag);
		scope.addTag(boolTag);
		scope.addTag(flaotTag);

		[
			this.createBuildinConstant("true", 1, boolTag),
			this.createBuildinConstant("false", 0, boolTag),

			this.createBuildinConstant("EOS", 0, defaultTag),
			this.createBuildinConstant("cellbits", 32, defaultTag),
			this.createBuildinConstant("cellmax", 2147483647, defaultTag),
			this.createBuildinConstant("cellmin", -2147483647 - 1, defaultTag),
			this.createBuildinConstant("charbits", 8, defaultTag),
			this.createBuildinConstant("charmin", 0, defaultTag),
			this.createBuildinConstant("charmax", 254, defaultTag), // ~((Ucell)-1 << sCHARBITS) - 1
			this.createBuildinConstant("ucharmax", 16777215, defaultTag), // (1 << (sizeof(Cell)-1)*8)-1
			
			this.createBuildinConstant("__Pawn", 778, defaultTag), // Версия Pawn
			this.createBuildinConstant("__PawnBuild", 10, defaultTag),
			// this.addBuildinConstant("__line", 0, defaultTag); // Текущая строка
		].forEach(scope.add.bind(scope));
	}

	private createBuildinConstant(name: string, value: number, tag: Tag) {
		return SymbolsFactory.createVariable(name, "system", new Range(0,0,0,0), new Range(0,0,0,0), [SemanticTokenModifiers.definition, SemanticTokenModifiers.readonly]);
	}

	/** Глобальная область видимости */
	get globalScope(): IScope {
		return this._globalScope;
	}

	/**
	 * Регистрирует новую область видимости в файле
	 * @param scope новая область видимости
	 */
	public register(scope: IScope) {
		this._scopes.push(scope);
	}

	/**
	 * Выполняет поиск области видимости с наименьшей областью, содержащую указанную позицию
	 * @param position интересующая позиция
	 * @returns найденная область видимости
	 */
	public findInnermostAt(position: Position): IScope {
		const candidates = this._scopes.filter(scope => scope.range.contains(position));
		if(!candidates.length) {
			return this.file.globalScope;
		}
		candidates.sort((a, b) => this.compareRangeSize(a.range, b.range));
	
		return candidates[0];
	}

	private compareRangeSize(a: Range, b: Range): number {
		const lines = (a.end.line - a.start.line) - (b.end.line - b.start.line);
		if (lines !== 0) return lines;
		// Если строки одинаковые, сравниваем разницу в символах
		return (a.end.character - a.start.character) - (b.end.character - b.start.character);
	}

	/** Очищает массив областей видимости */
	public clear() {
		this._scopes = [];
	}
}