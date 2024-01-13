import { PreprocessorStruct } from "./PreprocessorStruct";
import { IncludeToken } from "../../Tokens/preprocessor/IncludeToken";
import { Range } from "vscode";

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
	
	constructor(code: IncludeToken) {
		super(code);

		let pos = code.getPos();
		this._includePath = new IncludePath(code.path, pos.start.character, pos.end.character);

		this.linkRange = new Range(code.start.line, code.start.character + this._includePath.start, code.start.line,  code.start.character + this._includePath.path.length + 1);
	}

	/**
	 * Рсапознаный путь
	 */
	get path(): IncludePath {
		return this._includePath;
	}
}