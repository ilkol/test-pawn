import { TextDocument } from "vscode";
import { FileManager } from "./Managers/FileManager";
import { DiagnosticManager } from "./Managers/diagnostic";
import { SemanticTokensManager } from "./Managers/SemanticTokensManager";
import { SymbolsManager } from "./Managers/SymbolsManager";

export abstract class AbstractOpenFile
{

	protected diagnositcManager: DiagnosticManager;
	public readonly tokensManager: SemanticTokensManager = new SemanticTokensManager();
	public readonly symbolsManager: SymbolsManager = new SymbolsManager();
	
	constructor(protected file: TextDocument, public readonly fileManager: FileManager) {
		this.diagnositcManager = fileManager.getDiagnostic();
		console.log("Был открыт файл!");
	}

	public abstract tryParse(): void;
}