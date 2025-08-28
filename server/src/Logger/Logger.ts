import { _, RemoteConsole } from "vscode-languageserver";

export class Logger {

	private static instance?: Logger;

	private constructor(private outputChanel: RemoteConsole) {

	}

	static log(message: string) {
		Logger.instance?.outputChanel.log(message);
	}
	static error(message: string) {
		Logger.instance?.outputChanel.error(message);
	}


	public static init(outputChanel: RemoteConsole) {
		if(Logger.instance) {
			return;
		}
		Logger.instance = new Logger(outputChanel);
	}
}