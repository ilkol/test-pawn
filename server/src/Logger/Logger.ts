import { _, RemoteConsole } from "vscode-languageserver";
import * as Sentry from "@sentry/node";

export class Logger {

	private static instance?: Logger;
	static isDebug: boolean = false;

	private constructor(private outputChanel: RemoteConsole) {

	}

	static log(message: string) {
		Logger.instance?.outputChanel.log(message);
	}
	static error(message: string) {
		Logger.instance?.outputChanel.error(message);
	}

	static reportError(message: string, ctx?: any) {
		if (!Logger.instance) {
			return;
		}
		if(!Logger.isDebug) {
			Sentry.captureMessage(message, {
				extra: {
					context: ctx,
					trace: new Error().stack,
				}
			});
		} else {
			console.error(message, ctx);
		}
	}

	public static init(outputChanel: RemoteConsole) {
		if (Logger.instance) {
			return;
		}
		Logger.instance = new Logger(outputChanel);
	}
}