import { CompletionItem, Diagnostic, DocumentLink, ParameterInformation, SignatureHelp, SignatureInformation } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { FileManager } from "./Managers/FileManager";

export class FunctionInfo
{
	private _parameters: FunctionParameterInfo[] = [];
	private _text?: string;
	// public docs?: Docs;


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

/**
 * Класс хранящий информацию об открытом файле для анализа кода Pawn
 */
export abstract class AbstractOpenFile
{
	/**
	 * Основная инфомрация о файле из LSP API
	 */
	protected _file?: TextDocument;

	get file(): TextDocument | undefined {
		return this._file;
	}
	set file(value: TextDocument) {
		this._file = value;
		this.path = FileManager.getPathByURI(value.uri);
	}

	protected _path: string;

	get path(): string {
		return this._path;
	}
	set path(value: string) {
		this._path = value;
	}

	protected _diagnostics: Diagnostic[] = [];

	get diagnostics(): Diagnostic[] {
		return this._diagnostics;
	}

	constructor(protected document: TextDocument) {
		this._path = FileManager.getPathByURI(document.uri);
	}

	protected _complitions: CompletionItem[] = [];
	public get completions(): CompletionItem[] {
		return this.completions;
	}

	protected functions: Map<string, FunctionInfo> = new Map<string, FunctionInfo>();
	// abstract get defines(): Map<string, Define[]>;

	// public scope: IScope = new Scope(this);
	
	protected _isParsed = false;
	public get isParsed(): boolean {
		return this._isParsed;
	}
	
	// public getHover(word: string): MarkdownString {
		
	// 	let someThing;
	// 	if(someThing = this.functionsInfo.get(word)){
	// 		const result = new MarkdownString("").appendCodeblock(someThing.label, "pawn");
	// 		if(someThing.docs) {

	// 			result.appendMarkdown(someThing.docs.text);
	// 		}
	// 		return result;
	// 	}
	// 	return new MarkdownString();
	// }


	// abstract processIncludededDirectives(array: PreprocessorDirective[]): void;
	// abstract get exportDirectives(): Define[];
	
	

	// abstract get tokens(): Token[];

	// public abstract get includes(): Include[];
	public abstract findDirectives(): Promise<void>;
	protected abstract findAllDirectives(): Promise<void>;
	public addComplition(comp: CompletionItem) {
		this._complitions.push(comp);
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

	protected prepareSignatures() {
		this.functionsInfo.forEach((functionInfo, name) => {
			const parameters: ParameterInformation[] = [];
			functionInfo.parameters.forEach(parameter =>{
				parameters.push({
					label: parameter.name
				} satisfies ParameterInformation);
			});
			this.signatures.set(name, 
				{
					signatures: [
						{
							label: functionInfo.label,
							parameters: parameters,

						} satisfies SignatureInformation
					]
				} satisfies SignatureHelp
			);
		});
	}

	public abstract parseCode(): Promise<void>;
	public abstract walkAST(): Promise<void>;
	public abstract processDirectives(): Promise<void>;
	public abstract processIncludes(): Promise<void>;
	public abstract openFileWithoutPreprocessor(): Promise<void>;
	public abstract includeIncludesScopse(includes: AbstractOpenFile[]): void;
	public abstract processDefines(): Promise<void>;

	// public abstract getCash(): FileCache;
	// public abstract setCache(cache: FileCache): boolean;
}