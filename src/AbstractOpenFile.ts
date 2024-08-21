import { CompletionItem, CompletionItemKind, DocumentSymbol, l10n, MarkdownString, ParameterInformation, Range, SignatureHelp, SignatureInformation, SnippetString, TextDocument, Uri } from "vscode";
import { FileManager } from "./Managers/FileManager";
import { DiagnosticManager } from "./Managers/diagnostic";
import { SemanticTokensManager, Token } from "./Managers/SemanticTokensManager";
import { SymbolsManager } from "./Managers/SymbolsManager";
import { IScope } from "./antlr/Scopes/IScope";
import { Scope } from "./antlr/Scopes/Scope";
import { PreprocessorDirective } from "./Prepocessor/PreprocessorDirective";
import { Define } from "./Prepocessor/Define";

export class FunctionInfo
{
	private _parameters: FunctionParameterInfo[] = [];
	private _text?: string;

	constructor(
		public readonly name: string,
		public readonly tag: string
	) {

	}

	pushParameter(param: FunctionParameterInfo) {
		this._parameters.push(param);
	}

	get parameters(): FunctionParameterInfo[] {
		return this._parameters;
	}

	get label(): string {
		if(!this._text) 
			this._text = this.makeText();
		return this._text;
	}

	private makeText(): string {
		let label = `${this.tag}:${this.name}(`;
		label += this.parameters.map(item => `${item.constant ? "const " : ""}${item.reference ? "&" : ""}${item.tag}:${item.name}`).join(", ");
		label += ")";
		return label;
	}
}
export class FunctionParameterInfo
{
	public constant: boolean = false;
	public reference: boolean = false;

	constructor(
		public readonly name: string,
		public readonly tag: string,
	) {

	}
}

export abstract class AbstractOpenFile
{

	protected diagnositcManager: DiagnosticManager;
	public readonly tokensManager: SemanticTokensManager = new SemanticTokensManager();
	public readonly symbolsManager: SymbolsManager = new SymbolsManager();
	protected complitions: CompletionItem[] = [];
	protected functions: Map<string, FunctionInfo> = new Map<string, FunctionInfo>();
	protected defines: Map<string, Define>  = new Map<string, Define>();

	public scope: IScope = new Scope(this);

	
	constructor(protected file: TextDocument, public readonly fileManager: FileManager) {
		this.diagnositcManager = fileManager.getDiagnostic();
		console.debug(`Был открыт файл! ${file.fileName}`);

		
		this.loadDefaultComplitions();
	}

	public getHover(word: string): MarkdownString {
		
		let someThing;
		if(someThing = this.functions.get(word)) {
			// const label = someThing.label.replace(/([\\`*_\[\]{}()#+\-.!])/g, '\\$1');
			return new MarkdownString("").appendCodeblock(someThing.label, "pawn");
		}
		else if(someThing = this.defines.get(word)){
			return someThing.doc;
		}
		return new MarkdownString();
	}


	private loadDefaultComplitions()
	{
		this.loadDefaultConstatns();	
		this.loadDefaultKeywords();	
		this.loadDefaultOperator();	
		
	}
	abstract processIncludededDirectives(array: PreprocessorDirective[]): void;
	abstract get exportDirectives(): Define[];
	private loadDefaultOperator()
	{
		interface compl {
			label: string;
			doc?: string;
		}
		const keywords: compl[] = [
			{label: "sizeof", doc: l10n.t("Returns the size of the array (number of cells)")},
			{label: "tagof", doc: l10n.t("Returns the tag ID")},
			{label: "char", doc: l10n.t("Results in the number of cells needed to store a packed array of characters")},
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
			{label: "cellbits", doc: l10n.t("The size of a cell in bits; usually `32`.")},
			{label: "cellmax", doc: l10n.t("The largest valid positive value that a cell can hold; usually `214748364`.")},
			{label: "cellmin", doc: l10n.t("The largest valid negative value that a cell can hold; usually `-214748364`.")},
			{label: "charbit", doc: l10n.t("The size of a packed character in bits; usually `8`.")},
			{label: "charmax", doc: l10n.t("The largest valid packed character value; a packed character is usually 8-bit and the maximum valid value isthus `25`")},
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
			{label: "switch", insertText: "switch ($1)\r\n{\r\n\tcase $2:\r\n\t{\r\n\t\t$3\r\n\t}\r\n\tdefault:\r\n\t{\r\n\t\t$0\r\n\t}\r\n}", kind: CompletionItemKind.Struct, detail: l10n.t("Switch Statement")},
			{label: "for"},
			{label: "while"},
			{label: "case", insertText: "case $0"},
			{label: "case", insertText: "case $1:\r\n{\r\n\t$0\r\n}", kind: CompletionItemKind.Struct, detail: l10n.t("Case Statement")},
			{label: "default", insertText: "default"},
			{label: "default", insertText: "default:\r\n{\r\n\t$0\r\n}", kind: CompletionItemKind.Struct, detail: l10n.t("defaultComplitionKeywordDefaultStatmentDetail")},
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

	abstract get tokens(): Token[];

	public abstract findAndOpenAllDirectives(): Promise<void>;
	public abstract getComplitions(): CompletionItem[];
	public addComplition(comp: CompletionItem) {
		this.complitions.push(comp);
	}

	private readonly _documentsLinks: Map<Range, Uri> = new Map<Range, Uri>();
	get documentsLinks(): Map<Range, Uri> {
		return this._documentsLinks;
	}

	private readonly _signatures: Map<string, SignatureHelp> = new Map<string, SignatureHelp>();
	get signatures(): Map<string, SignatureHelp> {
		return this._signatures;
	}
	get functionsInfo(): Map<string, FunctionInfo> {
		return this.functions;
	}

	get uri(): Uri
	{
		return this.file.uri;
	}

	protected prepareSignatures() {
		this.functions.forEach((functionInfo, name) => {
			const signatureHelp  =  new SignatureHelp();

			const parameters: ParameterInformation[] = [];
			functionInfo.parameters.forEach(parameter =>{
				const paramInfo = new ParameterInformation(parameter.name);
				parameters.push(paramInfo);
			});

			const signature = new SignatureInformation(functionInfo.label);
		
			// signature.documentation = 'Это пример помощи с параметрами';

			signature.parameters = parameters;
			signatureHelp.signatures = [signature];

			this.signatures.set(name, signatureHelp);
		});
	}

	public abstract parseCode(): Promise<void>;
	public abstract processDirectives(): Promise<void>;
	public abstract processIncludes(): Promise<void>;
}