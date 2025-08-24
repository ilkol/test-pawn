import { AbstractOpenFile } from "./AbstractOpenFile";

export class AntlrOpenedFile extends AbstractOpenFile {
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