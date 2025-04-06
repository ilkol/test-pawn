import { CompletionItem, CompletionItemKind, DiagnosticSeverity, DiagnosticTag, DocumentLink, DocumentSymbol, l10n, MarkdownString, ParameterInformation, Range, SignatureHelp, SignatureInformation, SnippetString, TextDocument, Uri } from "vscode";
import { FileManager } from "./Managers/FileManager";
import { DiagnosticManager } from "./Managers/diagnostic";
import { SemanticTokensManager, Token } from "./Managers/SemanticTokensManager";
import { SymbolsManager } from "./Managers/SymbolsManager";
import { IScope } from "./antlr/Scopes/IScope";
import { Scope } from "./antlr/Scopes/Scope";
import { PreprocessorDirective } from "./Prepocessor/PreprocessorDirective";
import { Define } from "./Prepocessor/Define";
import { Docs } from "./antlr/AST/Nodes/Docs/Dosc";
import { Include } from "./Prepocessor/Include";

export class FunctionInfo
{
	private _parameters: FunctionParameterInfo[] = [];
	private _text?: string;
	public docs?: Docs;

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
			{this._text = this.makeText();}
		return this._text;
	}

	private makeText(): string {
		let label = `${this.tag === "_" ? "" : (this.tag + ":")}${this.name}(`;
		label += this.parameters.map(item => 
			`${item.constant ? "const " : ""}${item.reference ? "&" : ""}${item.tag === "_" ? "" : (item.tag + ":")}${item.name}`
		).join(", ");
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
	public abstract updateSemanticTokens(): void;
	protected diagnositcManager: DiagnosticManager;
	public readonly tokensManager: SemanticTokensManager = new SemanticTokensManager();
	public readonly symbolsManager: SymbolsManager = new SymbolsManager();
	protected complitions: CompletionItem[] = [];
	protected functions: Map<string, FunctionInfo> = new Map<string, FunctionInfo>();

	abstract get defines(): Map<string, Define[]>;
	// protected defines: Map<string, Define>  = new Map<string, Define>();

	public addDiagnostic(msg: string, type: DiagnosticSeverity, range: Range, tags?: DiagnosticTag[]) {
		this.diagnositcManager.addDiagnostic(msg, type, this.uri.path, range, tags);
	}

	public scope: IScope = new Scope(this);

	protected _isParsed = false;

	public isParsed(): boolean {
		return this._isParsed;
	}
	
	constructor(protected file: TextDocument, public readonly fileManager: FileManager) {
		this.diagnositcManager = fileManager.getDiagnostic();

		this.loadDefaultComplitions();
	}

	/**
	 * asdasd
	 * asdasd
	 * asdasd
	 * @param word 
	 * @returns 
	 */
	public getHover(word: string): MarkdownString {
		
		let someThing;
		if(someThing = this.functionsInfo.get(word)){
			const result = new MarkdownString("").appendCodeblock(someThing.label, "pawn");
			if(someThing.docs) {

				result.appendMarkdown(someThing.docs.text);
			}
			return result;
		}
		return new MarkdownString();
	}


	protected loadDefaultComplitions()
	{
		this.loadDefaultConstatns();	
		this.loadDefaultKeywords();	
		this.loadDefaultOperator();	
		
	}
	abstract processIncludededDirectives(array: PreprocessorDirective[]): void;
	abstract get exportDirectives(): Define[];
	private loadDefaultOperator()
	{
		interface Сompl {
			label: string;
			doc?: string;
		}
		const keywords: Сompl[] = [
			{label: "sizeof", doc: l10n.t("Returns the size of the array (number of cells)")},
			{label: "tagof", doc: l10n.t("Returns the tag ID")},
			{label: "char", doc: l10n.t("Results in the number of cells needed to store a packed array of characters")},
		];

		keywords.forEach(key => {
			const complition = new CompletionItem(key.label, CompletionItemKind.Operator);
			complition.documentation = new MarkdownString(key.doc);
			this.complitions.push(complition);

		});
	}
	private loadDefaultConstatns()
	{
		interface Сompl {
			label: string;
			doc?: string;
		}
		const keywords: Сompl[] = [
			{label: "cellbits", doc: l10n.t("The size of a cell in bits; usually `32`.")},
			{label: "cellmax", doc: l10n.t("The largest valid positive value that a cell can hold; usually `214748364`.")},
			{label: "cellmin", doc: l10n.t("The largest valid negative value that a cell can hold; usually `-214748364`.")},
			{label: "charbits", doc: l10n.t("The size of a packed character in bits; usually `8`.")},
			{label: "charmax", doc: l10n.t("The largest valid packed character value; a packed character is usually 8-bit and the maximum valid value isthus `25`")},
		];

		keywords.forEach(key => {
			const complition = new CompletionItem(key.label, CompletionItemKind.Constant);
			complition.documentation = new MarkdownString(key.doc);
			this.complitions.push(complition);

		});
	}
	private loadDefaultKeywords()
	{
		interface Сompl {
			label: string;
			insertText?: string;
			kind?: CompletionItemKind;
			detail?: string;
			documentation?: string | MarkdownString;
		}
		
		const keywords: Сompl[] = [
			{label: "new", insertText: "new", detail: l10n.t("new `identifire`;"), documentation: new MarkdownString(l10n.t("The keyword `new` declares a new variable."))},
			{label: "new", kind: CompletionItemKind.Struct, insertText: "new ${0};", detail: l10n.t("new `identifire`;"), documentation: new MarkdownString(l10n.t("The keyword `new` declares a new variable."))},
			{label: "if", insertText: "if", detail: l10n.t("if (`conditional expression`) `statement`"), documentation: new MarkdownString(l10n.t("The `if` keyword divides the command execution flow into two cases. If the condition is met, the following code is executed. Otherwise, the code is skipped."))},
			{label: "if", kind: CompletionItemKind.Struct, insertText: "if ($1)$0", detail: l10n.t("if (`conditional expression`) `statement`"), documentation: new MarkdownString(l10n.t("The `if` keyword divides the command execution flow into two cases. If the condition is met, the following code is executed. Otherwise, the code is skipped."))},
			{label: "else", insertText: "else $0", detail: l10n.t("else `statement`"), documentation: new MarkdownString(l10n.t("The `else` keyword must follow the `if` statement. The code after `else` is executed if the condition in `if` is equal logically \"true\". When `if` statements are nested and `else` clauses are present, a given `else` is associated with the closest preceding if statement in the same block."))},
			{label: "return", insertText: "return", detail: l10n.t("return `expression`;"), documentation: new MarkdownString(l10n.t("Terminates the current function and moves program control to the statement following the calling statement. The value of the expression is returned as the function result."))},
			{label: "return", kind: CompletionItemKind.Struct, insertText: "return $0;", detail: l10n.t("return `expression`;"), documentation: new MarkdownString(l10n.t("Terminates the current function and moves program control to the statement following the calling statement. The value of the expression is returned as the function result."))},
			{label: "true", detail: "true", documentation: l10n.t("Constant equal 1, but tagged as bool:")},
			{label: "false", detail: "false", documentation: l10n.t("Constant equal 0, but tagged as bool:")},
			{label: "switch", insertText: "switch", detail: l10n.t("switch (`expression`) { `case list` }"), documentation: l10n.t("Transfers control to different statements within the switch body de pending on the value of the switch expression. The body of the switch statement is a compound statement, which contains a series of “case clauses”.")},
			{label: "switch", insertText: "switch ($1)\r\n{\r\n\tcase $2:\r\n\t{\r\n\t\t$3\r\n\t}\r\n\tdefault:\r\n\t{\r\n\t\t$0\r\n\t}\r\n}", kind: CompletionItemKind.Struct, detail: l10n.t("switch (`expression`) { `case list` }"), documentation: l10n.t("Transfers control to different statements within the switch body de pending on the value of the switch expression. The body of the switch statement is a compound statement, which contains a series of “case clauses”.")},
			{label: "for", detail: l10n.t("for (`expression 1`; `expression 2`; `expression 3`) statement")},
			{label: "while", detail: l10n.t("while (`expression`) statement")},
			{label: "case", insertText: "case $0"},
			{label: "case", insertText: "case $1:\r\n{\r\n\t$0\r\n}", kind: CompletionItemKind.Struct, detail: l10n.t("Case Statement")},
			{label: "default", insertText: "default"},
			{label: "default", insertText: "default:\r\n{\r\n\t$0\r\n}", kind: CompletionItemKind.Struct, detail: l10n.t("defaultComplitionKeywordDefaultStatmentDetail")},
			{label: "break", insertText: "break;\r\n$0"},
			{label: "continue", insertText: "continue;\r\n$0"},
			{label: "enum", insertText: "enum $1 {\r\n\t$0\r\n}"},
			{label: "stock", insertText: "stock $0"},
			{label: "forward", insertText: "forward $0", detail: l10n.t("forward ")},
			{label: "public", insertText: "public $0"},
			{label: "const", insertText: "const $0"},
			{label: "static", insertText: "static $0"},
			{label: "char"},
			{label: "native", insertText: "native $0"},
			{label: "operator"},
		];

		keywords.forEach(key => {
			const complition = new CompletionItem(key.label, key.kind ? key.kind : CompletionItemKind.Keyword);
			if(key.insertText)
				{complition.insertText = new SnippetString(key.insertText);}
			complition.detail = key.detail;
			complition.documentation = key.documentation;
			this.complitions.push(complition);

		});
	}

	abstract get tokens(): Token[];

	public abstract get includes(): Include[];
	public abstract findDirectives(): Promise<void>;
	protected abstract findAllDirectives(): Promise<void>;
	public abstract getComplitions(): CompletionItem[];
	public addComplition(comp: CompletionItem) {
		this.complitions.push(comp);
	}

	private _documentsLinks: DocumentLink[] = [];
	get documentsLinks(): DocumentLink[] {
		return this._documentsLinks;
	}
	public documentsLinksClear() {
		this._documentsLinks = [];
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
	public abstract openFileWithOutPreprocessor(): Promise<void>;
	public abstract includeIncludesScopse(includes: AbstractOpenFile[]): void;
	public abstract processDefines(): Promise<void>;
}