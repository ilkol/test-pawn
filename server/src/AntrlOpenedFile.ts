import { AbstractOpenFile } from "./AbstractOpenFile";
import { IScope } from "./antlr/Scopes/IScope";

export class AntlrOpenedFile extends AbstractOpenFile {
	get globalScope(): IScope {
		return this.scopeManager.globalScope;
	}

	public findDirectives(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	protected findAllDirectives(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	public parseCode(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	public walkAST(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	public processDirectives(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	public processIncludes(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	public openFileWithoutPreprocessor(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	public includeIncludesScopse(includes: AbstractOpenFile[]): void {
		throw new Error("Method not implemented.");
	}
	public processDefines(): Promise<void> {
		throw new Error("Method not implemented.");
	}
}