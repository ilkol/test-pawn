import path from "path";
import fs from "fs";

import { PawnSettings } from "./Settings";
import { ProjectConfig } from "./Managers/ConfigManager";

export class PathResolver {
	constructor(private _workspaceRoot?: string) {

	}

	set workspaceRoot(v: string | undefined) {
		this._workspaceRoot = v;
	}

	async resolve(settings: PawnSettings, config?: ProjectConfig): Promise<{ compiler: string, includes: string[] }> {
		const includes = new Set<string>();
        let compilerPath = config?.compilerPath || settings.compilerPath;

        if (!compilerPath && this._workspaceRoot) {
            const autoDetected = path.join(this._workspaceRoot, 'pawno', 'pawncc.exe');
            if (fs.existsSync(autoDetected)) compilerPath = autoDetected;
        }

        if (compilerPath) {
            const systemInc = path.join(path.dirname(compilerPath), 'include');
			const absolutePath = this.makeAbsolute(systemInc);
            if (fs.existsSync(absolutePath)) includes.add(absolutePath);
        }

        const includePaths = config ? config.includePaths : settings.includePaths;
        includePaths.forEach(p => {
            const absolutePath = this.makeAbsolute(p);
            if (fs.existsSync(absolutePath)) includes.add(absolutePath);
        });

        return {
            compiler: compilerPath,
            includes: Array.from(includes)
        };
	}

	public makeAbsolute(p: string): string {
        if (path.isAbsolute(p) || !this._workspaceRoot) return p;
        return path.join(this._workspaceRoot, p);
    }

}