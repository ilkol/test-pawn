import { AbstractOpenFile } from "../AbstractOpenFile";

export type OnFileParsedListener = (file: AbstractOpenFile) => (Promise<void> | void);

export class Parser
{
	/**
	 * Фукнция, которая вызывается после окончания обработки препроцессором файла
	 */
	private static _onFileParsedListener?: OnFileParsedListener;
	
	static set onFileParsedListener(value: OnFileParsedListener) {
		Parser._onFileParsedListener = value;
	}

	private constructor() {

	}

	public static async parseFile(fil: AbstractOpenFile) {
		// TODO: обработка файла препроцессором

		Parser._onFileParsedListener?.(fil);
	}
}