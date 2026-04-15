import { Serialization } from "../../cache/Serialization";
import { Range } from "../../types";
import { PreprocessorDirective } from "./PreprocessorDirective";

export enum PragmaVariations {
	amxlimit,	// устаналивает максимальный размер amx машины | #pragma amxlimit VALUE
	amxram,		// устаналивает максимальный размер занимаемой оперативной памяти amx машины | #pragma amxram VALUE
	codepage,	// как я понял позволяет изменить кодировку, то есть прочтение файла | #pragma codepage "path.txt"
	compress,	// устаналивает флаг сжимать или нет байткод | #pragma compress VALUE
	ctrlchar,	// устаналивает escape-символ  | #pragma ctrlchar 0x1
	deprecated,	// помечает следующую функцию как устаревшую |  #pragma deprecated TEXT
	dynamic,	// устаналивает размер стека | #pragma dynamic 100 
	library,	// добавляет библиотеку, хз зачем | #pragma library name|"name"
	pack,		// устаналивает флаг чтения упакованный строк или нет |  #pragma pack VALUE
	rational,	// задает тэг для хранения вещественных чисел и количество знаков после зщапятой |  #pragma rational Float (8)
	semicolon,	// устаналивает флаг нужна ли точка запятой | #pragma semicolon VALUE
	tabsize,	// устаналивает количество пробелов для табуляции | #pragma tabsize VALUE       > 0
	align,		// включает режим выравнивания стека | #pragma align
	unused, 	// изменяет флаги символа (unused, unread, unwritten) | #pragma unused|unread|unwritten a,b,c,d
	noDestruct,	// помечает символы флагом, который игнорирует вызов "деструктора" символа | #pragma noDestruct a,b,c,d
	naked,		// перевод флаг в true, который при создании новой функции используется для подобия inline.
	warning,	// включает/выключает варнинг #pragma warning enable|disable 201 | #pragma warning push|pop
	compat,		// включает режим для исключения повторных включений | #pragma compat VALUE
	option,		// короче использутся, чтобы переключить какой-нибудь "option" | #pragma option TEXT
}

export class Pragma extends PreprocessorDirective
{
	constructor(range: Range, readonly rest: string, startIndex: number, endIndex: number, text: string) {
		super(range, startIndex, endIndex, text);
	}

	static fromJSON(json: Serialization.Preprocessor.PragmaCache): Pragma {
		return new Pragma(
			Serialization.Deserialize.range(json.range),
			json.rest,
			json.startIndex,
			json.endIndex,
			json.text,
		);
	}

	toJSON(): Serialization.Preprocessor.PragmaCache {
		return {
			...super.toJSON(),
			__type: Serialization.Preprocessor.List.Pragma,
			rest: this.rest,
		}
	}
}