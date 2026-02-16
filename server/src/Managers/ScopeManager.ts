import { AbstractOpenFile } from "../AbstractOpenFile";
import { IScope } from "../antlr/Scopes/IScope";
import { Scope } from "../antlr/Scopes/Scope";
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