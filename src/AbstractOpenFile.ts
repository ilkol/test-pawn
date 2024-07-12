import { CompletionItem, CompletionItemKind, DocumentSymbol, SnippetString, TextDocument } from "vscode";
import { FileManager } from "./Managers/FileManager";
import { DiagnosticManager } from "./Managers/diagnostic";
import { SemanticTokensManager, Token } from "./Managers/SemanticTokensManager";
import { SymbolsManager } from "./Managers/SymbolsManager";

export abstract class AbstractOpenFile
{

	protected diagnositcManager: DiagnosticManager;
	public readonly tokensManager: SemanticTokensManager = new SemanticTokensManager();
	public readonly symbolsManager: SymbolsManager = new SymbolsManager();
	protected readonly complitions: CompletionItem[] = [];
	
	constructor(protected file: TextDocument, public readonly fileManager: FileManager) {
		this.diagnositcManager = fileManager.getDiagnostic();
		console.debug("Был открыт файл!");

		this.loadDefaultKeywords();
	}

	private loadDefaultKeywords()
	{
		interface compl {
			label: string;
			insertText?: string;
		}
		const keywords: compl[] = [
			{label: "new", insertText: "new ${0};"},
			{label: "if", insertText: "if ($1)$0"},
			{label: "else", insertText: "else $0"},
			{label: "return", insertText: "return $0;"},
			{label: "true"},
			{label: "false"},
			{label: "switch"},
			{label: "case", insertText: "case $1:\r\n$0"},
			{label: "default", insertText: "default:\r\n$0"},
			{label: "break", insertText: "break;\r\n$0"},
			{label: "continue", insertText: "continue;\r\n$0"},
			{label: "enum", insertText: "enum $1 {\r\n\t$0\r\n}"},
			{label: "stock", insertText: "stock $0"},
			{label: "forward", insertText: "forward $0"},
			{label: "public", insertText: "public $0"},
			{label: "const", insertText: "const $0"},
			{label: "static", insertText: "static $0"},
			{label: "char"},
			{label: "native", insertText: "native $0"},
			{label: "operator"},
		];

		keywords.forEach(key => {
			const conplition = new CompletionItem(key.label, CompletionItemKind.Keyword);
			if(key.insertText)
				conplition.insertText = new SnippetString(key.insertText);
			this.complitions.push(conplition);

		});
	}

	get tokens(): Token[] {
		return this.tokensManager.tokens;
	}

	public abstract tryParse(): void;
	public getComplitions(): CompletionItem[] {
		return this.complitions;
	}
	public addComplition(comp: CompletionItem) {
		this.complitions.push(comp);
	}
}