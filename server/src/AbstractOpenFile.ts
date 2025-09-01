import { CompletionItem, Diagnostic, DocumentLink, ParameterInformation, SignatureHelp, SignatureInformation, URI } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { FileManager } from "./Managers/FileManager";
import { Position } from "./types";
import { PreprocessorDirective } from "./Preprocessor/Directives/PreprocessorDirective";
import { Include } from "./Preprocessor/Directives";
import { Define } from "./Preprocessor/Directives/Defining";
import { ASTNode } from "./antlr/AST/Nodes/ASTNode";
import { IScope } from "./antlr/Scopes/IScope";
import { FileCache } from "./cache/FileCache";
import { CacheManager } from "./cache/CacheManager";

export enum ParsingStep {
	/**
	 * Файл не был никак обработан
	 */
	newFile,
	/**
	 * Файл был открыт и хэш его текста был сохранен в кэш
	 */
	textHashed,

	/**
	 * Собраны и заменены все директивы препроцессора
	 */
	directivesCollected,

	/**
	 * Выполнены большенство команд препроцессора
	 */
	directivesProcessed,

	/**
	 * Спсиок подключаемых инклудов отсортирован
	 */
	buildedDependcyGraph,

	/**
	 * Подключаемые файлы проаанализированы
	 */
	processedIncludes,

	/**
	 * Файл был обработан препроцессором
	 */
	preprocessed,

	/**
	 * Файл был распаршен и создано AST
	 */
	parsed,

	/**
	 * AST было пройдено
	 */
	astWalked,

}

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
	public _parsinState: ParsingStep = ParsingStep.newFile;

	set parsinState(value: ParsingStep) {
		// this.cache.parseStep = 
		this._parsinState = value;
	}
	get parsinState(): ParsingStep {
		return this._parsinState;
	}

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

	private _cache?: FileCache;

	set cache(value: FileCache | undefined) {
		this._cache = value;
	}

	get cache(): FileCache 
	{
		if(!this._cache) {
			this._cache = {
				cacheVersion: CacheManager.VERSION,
				path: this.path,
				texttHash: CacheManager.hashText(this.text),
				processCode: this.processedCode,
				diagnostics: [],
				// parseStep: this.parsinState
			};
		}
		return this._cache;
	}



	positionAt(offset: number): Position {
		return Position.fromLSP(this.document.positionAt(offset));
	}

	private _AST?: ASTNode;

	get AST(): ASTNode | undefined {
		return this._AST;
	}
	set AST(value: ASTNode | undefined){
		this._AST = value;
	}

	get URI(): URI {
		return this.document.uri;
	}
	protected _path: string;

	get path(): string {
		return this._path;
	}
	set path(value: string) {
		this._path = value;
	}

	private _processedCode: string;

	get processedCode(): string {
		return this._processedCode;
	}
	set processedCode(value: string) {
		this._processedCode = value;
	}

	private _directives: PreprocessorDirective[] = [];
	get directives(): PreprocessorDirective[] {
		return this._directives;
	}
	set directives(value: PreprocessorDirective[]) {
		this._directives = value;
	}
	
	get text(): string {
		return this.document.getText();
	}

	protected _diagnostics: Diagnostic[] = [];

	get diagnostics(): Diagnostic[] {
		return this._diagnostics;
	}

	constructor(protected document: TextDocument) {
		this._path = FileManager.getPathByURI(document.uri);
		this._processedCode = document.getText();
	}

	protected _complitions: CompletionItem[] = [];
	public get completions(): CompletionItem[] {
		return this.completions;
	}

	protected functions: Map<string, FunctionInfo> = new Map<string, FunctionInfo>();
	
	protected _isParsed = false;
	public get isParsed(): boolean {
		return this._isParsed;
	}


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

	public includes: Include[] = [];
	public sortedIncludes: string[] = [];
	public defines: Map<string, Define[]> = new Map();
	abstract get scope(): IScope;

	// public abstract getCash(): FileCache;
	// public abstract setCache(cache: FileCache): boolean;
}