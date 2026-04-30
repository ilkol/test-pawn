import path from "path";
import fs from "fs";

export interface ProjectConfig {
	entryPoint: string;
	includePaths: string[];
	compilerPath: string;
	compilerOptions: string[];
}

/**
 * Файл ответ за управление конфига, который создается в корне открытой директории. 
 */
export class ConfigManager {
	private configPath?: string;
	public config?: ProjectConfig;

	isEntryPointSet(): boolean {
		return !!this.config?.entryPoint && this.config.entryPoint.trim() !== "";
	}

	private readonly DEFAULT_CONFIG: ProjectConfig = {
		entryPoint: "",
		compilerPath: "./pawno/pawncc.exe",
		includePaths: ["./pawno/include"],
		compilerOptions: ["-;+", "-(+"]
	};

	async initialize(rootPath: string) {
		this.configPath = path.join(rootPath, 'pawn.json');

		if (fs.existsSync(this.configPath)) {
			await this.loadConfig();
		} else {
			await this.createDefaultConfig();
		}

	}

	public async handleFileChange(uri: string): Promise<boolean> {
        const oldEntryPoint = this.config?.entryPoint;
        const oldIncludePaths = JSON.stringify(this.config?.includePaths);

        await this.loadConfig();

        const entryPointChanged = oldEntryPoint !== this.config?.entryPoint;
        const includesChanged = oldIncludePaths !== JSON.stringify(this.config?.includePaths);

        return entryPointChanged || includesChanged;
    }

	private async loadConfig() {
		if (!this.configPath) return;

		try {
			const content = await fs.promises.readFile(this.configPath, 'utf-8');
			const parsed = JSON.parse(content);

			// Валидируем структуру
			const validated = this.validate(parsed);
            
            // 2. Сравниваем: если структура изменилась в процессе валидации - сохраняем обратно в файл
            if (JSON.stringify(parsed) !== JSON.stringify(validated)) {
                console.log(`[ConfigManager] Fixing malformed config structure at ${this.configPath}`);
                this.config = validated;
                await this.saveCurrentConfig(); // Обновляем файл на диске до полной структуры
            } else {
                this.config = validated;
            }
		} catch (e) {
			console.error(`[ConfigManager] Invalid config file at ${this.configPath}. Reverting to defaults.`);
			this.config = { ...this.DEFAULT_CONFIG };
			await this.createDefaultConfig(); 
		}
	}

	private async saveCurrentConfig() {
        if (!this.configPath || !this.config) return;
        try {
            await fs.promises.writeFile(
                this.configPath, 
                JSON.stringify(this.config, null, 4), 
                'utf-8'
            );
        } catch (e) {
            console.error(`[ConfigManager] Error writing config: ${e}`);
        }
    }

	private validate(data: any): ProjectConfig {
        return {
            entryPoint: typeof data.entryPoint === 'string' ? data.entryPoint : this.DEFAULT_CONFIG.entryPoint,
            compilerPath: typeof data.compilerPath === 'string' ? data.compilerPath : this.DEFAULT_CONFIG.compilerPath,
            includePaths: Array.isArray(data.includePaths) ? data.includePaths : [...this.DEFAULT_CONFIG.includePaths],
            compilerOptions: Array.isArray(data.compilerOptions) ? data.compilerOptions : [...this.DEFAULT_CONFIG.compilerOptions],
        };
    }

	private async createDefaultConfig() {
		if (!this.configPath) return;

		const defaultConfig = {
			entryPoint: "",
			compilerPath: "./pawno/pawncc.exe",
			includePaths: [
				"./pawno/include"
			],
			compilerOptions: [
				"-;+",
				"-(+"
			]
		} satisfies ProjectConfig;

		await fs.promises.writeFile(this.configPath, JSON.stringify(defaultConfig, null, 4), 'utf-8');
	}

}