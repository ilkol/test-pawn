import { TextDocument } from "vscode";
import { FileManager } from "./Managers/FileManager";
import { DiagnosticManager } from "./Managers/diagnostic";
import { SemanticTokensManager, Token } from "./Managers/SemanticTokensManager";
import { SymbolsManager } from "./Managers/SymbolsManager";

export abstract class AbstractOpenFile
{

	protected diagnositcManager: DiagnosticManager;
	public readonly tokensManager: SemanticTokensManager = new SemanticTokensManager();
	public readonly symbolsManager: SymbolsManager = new SymbolsManager();
	
	constructor(protected file: TextDocument, public readonly fileManager: FileManager) {
		this.diagnositcManager = fileManager.getDiagnostic();
		console.debug("Был открыт файл!");
	}

	get tokens(): Token[] {
		return this.tokensManager.tokens;
	}

	public abstract tryParse(): void;
}