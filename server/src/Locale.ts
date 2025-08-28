import { I18n } from "i18n";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { _, RemoteConsole } from "vscode-languageserver";

export class Locale {

	private static instance?: Locale;
	private i18n: I18n;

	private constructor(locale?: string) {
		this.i18n = new I18n({
			locales: [
				"en",
				"ru"
			],
			directory: join(__dirname, '../locales'),
			defaultLocale: locale ?? "en",
			objectNotation: true, // для множественного числа или разных вариантов переводов, кароч прикольна
			retryInDefaultLocale: true,

		});
	}

	static t(message: string, ...args: any[]): string {
		return this.instance?.i18n.__(message, ...args) ?? "";
	}

	static set locale(value: string) {
		this.instance?.i18n.setLocale(value);
	}


	public static init(locale?: string) {
		if(Locale.instance) {
			return;
		}
		Locale.instance = new Locale(locale);
	}
}