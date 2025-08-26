import { Range } from "../../types";
import { PreprocessorDirective } from "./PreprocessorDirective";

export enum PragmaVariations {
	amxlimit,	// устаналивает максимальный размер amx машины
	amxram,		// устаналивает максимальный размер занимаемой оперативной памяти amx машины
	codepage,	// как я понял позволяет изменить кодировку, то есть прочтение файла
	compress,	// устаналивает флаг сжимать или нет байткод
	ctrlchar,	// устаналивает escape-символ 
	deprecated,	// удаляет из последующего кода \a...хз зачем
	dynamic,	// устаналивает размер стека | #pragma dynamic 100 
	library,	// добавляет библиотеку, хз зачем | #pragma library name|"name"
	pack,		// устаналивает флаг чтения упакованный строк или нет
	rational,	// задает тэг для хранения вещественных чисел и количество знаков после зщапятой
	semicolon,
	tabsize,
	align,
	unused, // unused, unread, unwritten
	nodestruct,
	naked,
	warning,
	compat,
	option,
}

export class Pragma extends PreprocessorDirective
{

	
	constructor(range: Range, readonly rest: string, startIndex: number, restIndex: number, endIndex: number) {
		super(range, startIndex, endIndex);

		
	}
}