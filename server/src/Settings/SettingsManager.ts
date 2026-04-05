import { ClientConnection } from "../ClientConnection";

export interface PawnSettings {
	compilerPath: string;
	includePaths: string[];
	clearOnBuild: boolean;
}

const defaultSettings: PawnSettings = {
	compilerPath: "",
	includePaths: [],
	clearOnBuild: true,
}

export class SettingsManager {
	private settings: PawnSettings = defaultSettings;

	constructor(private connection: ClientConnection) {}

	async refresh() {
		const result = await this.connection.workspace.getConfiguration("pawnlanguage");
		this.settings = result || defaultSettings;
		return this.settings;
	}

	get current() {
		return this.settings;
	}
}