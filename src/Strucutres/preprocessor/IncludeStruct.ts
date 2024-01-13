import { Position, Range } from "vscode";
import { TokenPreprocessor } from "../../Tokens/TokenPreprocessor";
import { PreprocessorStruct } from "./PreprocessorStruct";

export enum IncludeType {
	/**
	 * Без использования любых скобок
	 */
	none,
	/**
	 * Использованы <>
	 */
	default,
	/**
	 * Использованы ковычки ""
	 */
	user
}

export class IncludePath {
	private readonly _includePath: string;
	private _type: IncludeType = IncludeType.none

	constructor(private sourcePath: string, public start: number, public end: number) {
		this._includePath = this.convertPath();
	}

	private convertPath() {
		
		let path = this.sourcePath;

		//Получение чистого пути без скобок и ковычек
		let firstChar = 0;
		let lastChar = path.length - 1;
		switch(path[0]) {
			case '<':
			case '"': {
				let char = '"';
				this._type = IncludeType.user;
				if(path[0] == "<") {
					this._type = IncludeType.default;
					char = '>';
				}

				lastChar = path.indexOf(char, 1);
				path = path.substring(++firstChar, lastChar);
				break;
			}
		}
		
		this.start += firstChar;
		this.end -= lastChar - 1;

		return path;
	}

	/**
	 * Строковый путь
	 */
	get path(): string {
		return this._includePath;
	}
	/**
	 * Тип подключаемого файла
	 */
	get type(): IncludeType {
		return this._type;
	}
}
export class IncludeStruct extends PreprocessorStruct {
	
	/**
	 * Рсапознаный путь
	 */
	private readonly _includePath: IncludePath;
	/**
	 * Позиция для кликабельной ссылки для перехода в файл
	 */
	public readonly linkRange: Range;
	
	constructor(code: TokenPreprocessor) {
		super(code);

		let pos = code.getPos();
		this._includePath = new IncludePath(code.getWhat(), pos.start.character, pos.end.character);

		this.linkRange = new Range(pos.start.line, code.skipStart + this._includePath.start, pos.end.line,  code.skipStart + this._includePath.path.length + 1);
	}

	/**
	 * Рсапознаный путь
	 */
	get path(): IncludePath {
		return this._includePath;
	}
}