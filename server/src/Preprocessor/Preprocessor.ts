import { AbstractOpenFile } from "../AbstractOpenFile"

export type OnFileProcessedListener = (file: AbstractOpenFile) => (Promise<void> | void);

export class Preprocessor
{
	/**
	 * Фукнция, которая вызывается после окончания обработки препроцессором файла
	 */
	private static _onFileProcessedListener?: OnFileProcessedListener;

	static set onFileProcessedListener(value: OnFileProcessedListener) {
		Preprocessor._onFileProcessedListener = value;
	}
	
	private constructor() {

	}

	public static async processFile(fil: AbstractOpenFile) {
		// TODO: обработка файла препроцессором

		Preprocessor._onFileProcessedListener?.(fil);
	}
}