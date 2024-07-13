import { CompletionItem, CompletionItemKind, DocumentSymbol, MarkdownString, Range, SnippetString, TextDocument, Uri } from "vscode";
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
		console.debug(`Был открыт файл! ${file.fileName}`);

		
		this.loadDefaultComplitions();
	}

	private loadDefaultComplitions()
	{
		this.loadDefaultConstatns();	
		this.loadDefaultKeywords();	
		this.loadDefaultOperator();	
		
	}
	private loadDefaultOperator()
	{
		interface compl {
			label: string;
			doc?: string;
		}
		const keywords: compl[] = [
			{label: "sizeof", doc: "Возвращает размер массива (количество ячеек)"},
			{label: "tagof", doc: "Возвращает идентификатор тэга"},
			{label: "char", doc: "Приводит к количеству ячеек, необходимых для хранения упакованного массива символов"},
		];

		keywords.forEach(key => {
			const conplition = new CompletionItem(key.label, CompletionItemKind.Operator);
			conplition.documentation = new MarkdownString(key.doc);
			this.complitions.push(conplition);

		});
	}
	private loadDefaultConstatns()
	{
		interface compl {
			label: string;
			doc?: string;
		}
		const keywords: compl[] = [
			{label: "cellbits", doc: "The size of a cell in bits; usually `32`."},
			{label: "cellmax", doc: "The largest valid positive value that a cell can hold; usually `214748364`."},
			{label: "cellmin", doc: "The largest valid negative value that a cell can hold; usually `-214748364`."},
			{label: "charbit", doc: "The size of a packed character in bits; usually `8`"},
			{label: "charmax", doc: "The largest valid packed character value; a packed character is usually 8-bit and the maximum valid value isthus `25`"},
		];

		keywords.forEach(key => {
			const conplition = new CompletionItem(key.label, CompletionItemKind.Constant);
			conplition.documentation = new MarkdownString(key.doc);
			this.complitions.push(conplition);

		});
	}
	private loadDefaultKeywords()
	{
		interface compl {
			label: string;
			insertText?: string;
			kind?: CompletionItemKind;
			detail?: string;
		}
		
		const keywords: compl[] = [
			{label: "new", insertText: "new ${0};"},
			{label: "if", insertText: "if ($1)$0"},
			{label: "else", insertText: "else $0"},
			{label: "return", insertText: "return $0;"},
			{label: "true"},
			{label: "false"},
			{label: "switch", insertText: "switch ($0)"},
			{label: "switch", insertText: "switch ($1)\r\n{\r\n\tcase $2:\r\n\t{\r\n\t\t$3\r\n\t}\r\n\tdefault:\r\n\t{\r\n\t\t$0\r\n\t}\r\n}", kind: CompletionItemKind.Struct, detail: "Switch Statement"},
			{label: "for"},
			{label: "while"},
			{label: "case", insertText: "case $0"},
			{label: "case", insertText: "case $1:\r\n{\r\n\t$0\r\n}", kind: CompletionItemKind.Struct, detail: "Case Statement"},
			{label: "default", insertText: "default"},
			{label: "default", insertText: "default:\r\n{\r\n\t$0\r\n}", kind: CompletionItemKind.Struct, detail: "Default Statement"},
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
			const conplition = new CompletionItem(key.label, key.kind ? key.kind : CompletionItemKind.Keyword);
			if(key.insertText)
				conplition.insertText = new SnippetString(key.insertText);
			conplition.detail = key.detail;
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

	private readonly _documentsLinks: Map<Range, Uri> = new Map<Range, Uri>();
	get documentsLinks(): Map<Range, Uri> {
		return this._documentsLinks;
	}
}