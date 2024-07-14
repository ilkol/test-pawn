/* eslint-disable curly */
import { DiagnosticError } from "../../diagnostic/DiagnosticError";
import { DiagnosticMessage } from "../../diagnostic/DiagnosticMessage";
import { BaseVisitor } from "./BaseVisitor";
import { Declarations } from "../Nodes/Declarations";
import { DiagnosticWarning } from "../../diagnostic/DiagnosticWarning";
import { EnumDeclaration } from "../Nodes/enum/EnumDeclaration";
import { EnumMember } from "../Nodes/enum/EnumMember";
import { FunctionParameter } from "../Nodes/Functions/FunctionParameter";
import { CodeBlock } from "../Nodes/CodeBlock";
import { ReturnStatement } from "../Nodes/ReturnStatement";
import { BinarOperator } from "../Nodes/Operators/BinarOperator";
import { IntLiteral } from "../Nodes/Literals/IntLiteral";
import { UnarOperator } from "../Nodes/Operators/UnarOperator";
import { OperatorNew, VariableModifire } from "../Nodes/Operators/OperatorNew";
import { DiagnosticUnused } from "../../diagnostic/DiagnosticUnused";
import { FunctionDeclaration, FunctionModifire } from "../Nodes/Functions/FunctionDeclaration";
import { FunctionCall } from "../Nodes/Functions/FunctionCall";
import { VariableInit } from "../Nodes/VariableInit";
import { IScope } from "../../Scopes/IScope";
import { Scope } from "../../Scopes/Scope";
import { IHasID } from "../Nodes/IHasID";
import { Declaration } from "../Nodes/Declaration";
import { Variable } from "../Nodes/Variable";
import { FunctionDeclarationParameter } from "../Nodes/Functions/FunctionDeclarationParameter";
import { SemanticTokensManager } from "../../../Managers/SemanticTokensManager";
import { StringLiteral } from "../Nodes/Literals/StringLiteral";
import { CompletionItem, CompletionItemKind, DiagnosticTag, DocumentSymbol, l10n, ParameterInformation, Range, SignatureHelp, SignatureInformation, SnippetString, SymbolKind, SymbolTag } from "vscode";
import { WhileCycle } from "../Nodes/Cycles/WhileCycle";
import { ForCycle } from "../Nodes/Cycles/ForCycle";
import { VarDeclaration } from "../Nodes/Variables/VarDeclaration";
import { ArrayDeclaration } from "../Nodes/Variables/ArrayDeclaration";
import { Expresion } from "../Nodes/Expresion";
import { AssigmentOperator } from "../Nodes/Operators/AssigmentOperator";
import { Array } from "../Nodes/Variables/Array";
import { SemanticTokens, SemanticTokensModifires } from "../../../SemanticTokens";
import { SymbolsManager } from "../../../Managers/SymbolsManager";
import { OperatorOverload } from "../Nodes/Operators/OperatorOverload";
import { Tag } from "../Nodes/Tag";
import { IHasTag } from "../Nodes/IHasTag";
import { FunctionInfo, FunctionParameterInfo } from "../../../AbstractOpenFile";

export class Analyzer extends BaseVisitor
{
	beforeVisitAssigment(node: AssigmentOperator): void {

	}
	afterVisitAssigment(node: AssigmentOperator): void {
	
	}
	beforeVisitArrayDeclaration(node: ArrayDeclaration): void {

	}
	afterVisitArrayDeclaration(node: ArrayDeclaration): void {
		this.checkUsed(node, (variable: VarDeclaration) => this.curScope.addVar(variable));
		
		this.tokens.addToken(node.idPos, SemanticTokens.variable, this.checkVarModifires(node.modifires).concat([SemanticTokensModifires.declaration]));

		let index = -1;
		node.indexes = node.indexes.map(el => {
			index++;
			if(el instanceof Expresion) {
				if(el.expresion instanceof IntLiteral) {
					node.pushSize(index, el.expresion.value);
					return el.expresion;
				}
				if(el.expresion instanceof Variable) {
					const variable = this.curScope.findVar(el.expresion.id);
					if(variable) {
						if(!(variable instanceof EnumDeclaration)) {
							this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorExpectedIntLiteralOrEnumMemberButFound") + ' "'+el.expresion.name+"\"", el.pos));
						}
						else {
							variable.used = true;
							this.tokens.addToken(el.expresion.idPos, SemanticTokens.enum);
							return variable;
						}
					}
				}
				// else
				// 	this.addDiagnostic(new DiagnosticError("Ожидается целочисленная константа, а найдено пустое вырожение", el.pos));
			}
			return el;
		});
	}
	beforeVisitFor(node: ForCycle): void {
		this.extendScope();
	}
	afterVisitFor(node: ForCycle): void {
		this.restrictScope();
	}
	beforeVisitWhile(node: WhileCycle): void {
		this.extendScope();
	}
	afterVisitWhile(node: WhileCycle): void {
		this.restrictScope();
	}
	beforeVisitString(node: StringLiteral): void {

	}
	afterVisitString(node: StringLiteral): void {

	}
	beforeVisitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void {
		
	}
	afterVisitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void {
		this.checkUsed(node, (variable: FunctionDeclarationParameter) => this.curScope.addVar(variable));
		this.tokens.addToken(node.idPos, SemanticTokens.parameter, this.checkVarModifires(node.modifires).concat([SemanticTokensModifires.declaration]));
	}
	beforeVisitVariable(node: Variable): void {
	
	}
	afterVisitVariable(node: Variable): void {
		const variable = this.curScope.findVar(node.id);
		if(variable) {
			variable.used = true;
			if(variable instanceof ArrayDeclaration) {
				if(!(node instanceof Array))
					this.addDiagnostic(new DiagnosticError("\"" + node.id + '" ' + l10n.t("analyzerErrorIsArray"), node.idPos));
				else {
					if(variable.indexes.length != node.indexes.length) {
						this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorArraySizeMismatch"), node.pos));
					}
					else {
						let iter = -1;
						node.indexes = node.indexes.map(el => {
							iter++;
							if(el.expresion instanceof IntLiteral) {
								const size = variable.size.at(iter);
								if(!size)
									this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorExpectedConstant"), el.pos));
								else {
									const val = el.expresion.value;
									if(val < 0) {
										this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorArrayIndexCanNotBeNegative"), el.pos));
									}
									else if(val >= size) {
										this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorArrayIndexOutSize") + ` ${size-1}`, el.pos));
									}
								}
								return el.expresion;
							}
							if(el.expresion instanceof Variable) {
								const enumer = variable.indexes.at(iter);
								const checkVar = this.curScope.findVar(el.expresion.id);
								if(!(enumer instanceof EnumDeclaration)) {
									variable.used = true;
								} else {
									if(checkVar instanceof EnumMember) {
										if(enumer !== checkVar.parent)
											this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorExpectedEnumMember") + ' "' +enumer.id+"\"", el.pos)); 
									}
									else {
										this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorExpectedEnumMember") + ' "' + enumer.id+"\"", el.pos));
									}
								}
							}
							// else
							// 	this.addDiagnostic(new DiagnosticError("Ожидается целочисленная константа, а найдено пустое вырожение", el.pos));
							return el;
						});
					}
				}
			}
			else {
				if(node instanceof Array)
					this.addDiagnostic(new DiagnosticError("\"" + node.id + '" ' + l10n.t("analyzerErrorIsNotArray"), node.idPos));
			}
			this.tokens.addToken(node.idPos, SemanticTokens.variable, this.checkVarModifires(variable.modifires));
			if(!node.isTaged)
				node.tag = variable.tag;
		}
		else {	
			const func = this.curScope.findFunction(node.id);
			if(func) {
				this.tokens.addToken(node.idPos, SemanticTokens.function);
				this.addDiagnostic(new DiagnosticError("\"" + node.id + '"' + l10n.t("analyzerErrorIsFunction"), node.idPos));
		
			}
			else this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorUndefindedVariable") + ' "' + node.id + "\"", node.idPos));
		}
	}
	private curScope: IScope = new Scope();

	beforeVisitVarInit(node: VariableInit): void {

	}
	afterVisitVarInit(node: VariableInit): void {
		this.checkUsed(node, (variable: VariableInit) => this.curScope.addVar(variable));
		if(node.var)
			this.compareTag(node.var, node.rightValue, node.rightValue.pos);
	}
	beforeVisitFunctionCall(node: FunctionCall): void {

	}
	afterVisitFunctionCall(node: FunctionCall): void {
		let func = this.curScope.findFunction(node.id);
		this.tokens.addToken(node.idPos, SemanticTokens.function);
		if(func) {
			func.used = true;
			if(!node.isTaged)
				node.tag = func.tag;
		}
		else 
			this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorFunction") + ' "' + node.id + '"', node.idPos));
		
		
	}
	beforeVisitOperatorNew(node: OperatorNew): void {
	
	}
	afterVisitOperatorNew(node: OperatorNew): void {
	
	}
	beforeVisitUnarOperator(node: UnarOperator): void {

	}
	afterVisitUnarOperator(node: UnarOperator): void {

	}
	beforeVisitIntLiteral(node: IntLiteral): void {
	
	}
	afterVisitIntLiteral(node: IntLiteral): void {
	
	}
	beforeVisitBinarOperator(node: BinarOperator): void {
		
			
	}
	afterVisitBinarOperator(node: BinarOperator): void {
		if(node.left && node.right) {
			node.setRange(node.left.pos.start, node.right.pos.end);
		}

		if(node.left && node.right) {
			if(this.compareTag(node.left, node.right, node.pos)) {
				if(!node.isTaged)
					node.tag = node.left.tag;
			}
		}

		switch(node.operator) {
			case "<":
			case ">":
			case "!=":
			case ">=":
			case "<=":
			case "==":
			case "==":
				(<BinarOperator>node).tag = new Tag("bool");
		}
	}
	beforeVisitReturn(node: ReturnStatement): void {
	
	}
	afterVisitReturn(node: ReturnStatement): void {
		if(node.value) {
			if(node.value.tag.id !== this.curScope.returnTag?.id) {
				if(node.value.expresion instanceof Variable) {
					const variable = this.curScope.findVar(node.value.expresion.id);
					if(variable?.tag.id !== this.curScope.returnTag?.id) {
						this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorReturnValueMustBeWithTag") + ` "${this.curScope.returnTag?.id}"` + l10n.t("analyzerErrorButFoundTag") + ` "${variable?.tag.id}"`, node.value.pos));
					}
				}
				else this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorReturnValueMustBeWithTag") + ` "${this.curScope.returnTag?.id}"` + l10n.t("analyzerErrorButFoundTag") + ` "${node.value.tag.id}"`, node.value.pos));
			}
		}
	}
	beforeVisitCodeBlock(node: CodeBlock): void {
		this.extendScope();
	}
	afterVisitCodeBlock(node: CodeBlock): void {
		this.restrictScope();
	}
	beforeVisitFunctionParameter(node: FunctionParameter): void {
	
	}
	afterVisitFunctionParameter(node: FunctionParameter): void {
		
	}
	beforeVisitEnumMember(node: EnumMember): void {

	}
	afterVisitEnumMember(node: EnumMember): void {	
		this.checkUsed(node, (variable: EnumMember) => this.curScope.addVar(variable));
		this.tokens.addToken(node.idPos, SemanticTokens.enumMember, [SemanticTokensModifires.const, SemanticTokensModifires.declaration]);
	}
	beforeVisitEnumDeclaration(node: EnumDeclaration): void {
		
	}
	afterVisitEnumDeclaration(node: EnumDeclaration): void {
		this.checkUsed(node, (variable: EnumDeclaration) => this.curScope.addVar(variable));		
		this.tokens.addToken(node.idPos, SemanticTokens.enum, [SemanticTokensModifires.declaration]);
	}
	
	beforeVisitDeclarations(declaration: Declarations): void {

	}
	afterVisitDeclarations(declaration: Declarations): void {
		this.checkIds(this.curScope.identifires());
	}
	
	beforeVisitFunctionDeclaration(node: FunctionDeclaration): void {
		if(node.id !== "main" && !(node instanceof OperatorOverload)) {
			this.checkUsed(node, (variable: FunctionDeclaration) => this.curScope.addFunction(variable));

			const compl = new CompletionItem(node.id, CompletionItemKind.Function);
			compl.insertText = new SnippetString(`${node.id}($0)`);
			this.addComplition(compl)
		}

		if(node.assigmentFunctionID) {
			if(!node.native) {
				this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorAssigmentCanBeOnlyOnNativeFunctin"), node.idPos));
				return;
			}
			
			let id = this.curScope.find(node.assigmentFunctionID);
			if (!id) {
				this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorIdentificatorNotFoundStart") + ` "${node.assigmentFunctionID}" ` + l10n.t("analyzerErrorIdentificatorNotFoundEnd"), node.pos));
			}

		}

		let symbolRange:Range = node.idPos;
		let selectRange = node.idPos;
		if(node.code) {
			symbolRange = new Range(symbolRange.start, node.code.pos.end);
			selectRange = node.code.pos;
		}
		const symbol = new DocumentSymbol(node.id, "function", SymbolKind.Function, symbolRange, selectRange);
		// symbol.tags = [SymbolTag.Deprecated];
		this.symbolsManager.addSymbol(symbol);

		this.extendScope();
		this.curScope.returnTag = node.tag;
	}
	afterVisitFunctionDeclaration(node: FunctionDeclaration): void {
		this.restrictScope();
		const modif = [SemanticTokensModifires.declaration];
		if(node.code != undefined)
			modif.push(SemanticTokensModifires.declaration);

		this.tokens.addToken(node.idPos, SemanticTokens.function, modif);		
		this.addFunctionSignature(node);	
	}
	
	beforeVisitVariableDeclaration(node: VarDeclaration): void {

	}
	afterVisitVariableDeclaration(node: VarDeclaration): void {
		this.checkUsed(node, (variable: VarDeclaration) => this.curScope.addVar(variable));		
		this.tokens.addToken(node.idPos, SemanticTokens.variable, this.checkVarModifires(node.modifires).concat(SemanticTokensModifires.declaration));
	}
		
	constructor(
		public readonly diagnostics: DiagnosticMessage[],
		public readonly tokens: SemanticTokensManager,
		public readonly symbolsManager: SymbolsManager,
		public readonly complitions: CompletionItem[],
		public readonly signatures: Map<string, SignatureHelp>
	) {
		super();

		let varInit = new VariableInit();
		varInit.id = "cellmin";
		this.curScope.addVar(varInit);
		varInit = new VariableInit();
		varInit.id = "cellmax";
		this.curScope.addVar(varInit);
	}
	
	private addComplition(compl: CompletionItem) {
		this.complitions.push(compl);
	}
	private addDiagnostic(msg: DiagnosticMessage) {
		this.diagnostics.push(msg);
	}

	private checkIds(ids: Map<string, Declaration>) {
		ids.forEach((element, key) => {
			if(key == "cellmin" || key == "cellmax") return;
			if(!element.used && !element.native) {
				let diagnostic: DiagnosticMessage, diagnosticMsg: string;
				let stock = element.stock;
				if(element instanceof FunctionDeclaration) {
					diagnosticMsg = l10n.t("analyzerFunction");
					if(element.modifire !== FunctionModifire.none)
						stock = true;
				}
				else if(element instanceof EnumDeclaration){
					stock = true;
					diagnosticMsg = l10n.t("analyzerEnumId");
				}
				else if(element instanceof EnumMember){
					stock = true;
					diagnosticMsg = l10n.t("analyzerEnumMember");
				}
				else {
					if((<VarDeclaration>element).isConstant)
						diagnosticMsg = l10n.t("analyzerConstant");
					else diagnosticMsg = l10n.t("analyzerVariable");
				}
				
				if(!stock) {
					diagnostic = new DiagnosticWarning(`${diagnosticMsg} "${key}" ` + l10n.t("analyzerErrorNeverUsed"), element.idPos);
					diagnostic.tags = [DiagnosticTag.Unnecessary];
				}
				else
					diagnostic = new DiagnosticUnused(`${diagnosticMsg} "${key}" ` + l10n.t("analyzerErrorNeverUsed"), element.idPos);
				this.addDiagnostic(diagnostic);
			}
		});
	}

	private checkUsed<T extends Declaration>(node: T, callback: (variable: T) => void) {
		let id = this.curScope.find(node.id);
		if (id) {
			this.addDiagnostic(new DiagnosticError(l10n.t("analyzerErrorIdAlreadyExistsStart") + ` "${node.id}" ` + l10n.t("analyzerErrorIdAlreadyExistsEnd"), node.idPos));
		} else {
			callback(node);
		}
	}

	private checkVarModifires(modifires: VariableModifire[]): SemanticTokensModifires[] {
		const tokens: SemanticTokensModifires[] = [];
		modifires.forEach(value => {
			switch(value) {
				case VariableModifire.const: 
					tokens.push(SemanticTokensModifires.const);
					break;
				case VariableModifire.static:
					tokens.push(SemanticTokensModifires.static);
					break;
				// case VariableModifire.stock:
				// 	tokens.push(SemanticTokensModifires.);
				// 	break;
			}
		});
		return tokens;
	}

	private extendScope() {
		this.curScope = new Scope(this.curScope);
	}
	private restrictScope() {
		this.checkIds(this.curScope.variables());
		if(this.curScope.parent)
			this.curScope = this.curScope.parent;
	}


	private isEqualTag(a: Tag, b: Tag): boolean {
		return a.id == b.id;

	}
	private compareTag(a: IHasTag, b: IHasTag, errorRange: Range): boolean {
		if(!this.isEqualTag(a.tag, b.tag)) {
			this.addDiagnostic(new DiagnosticWarning(l10n.t("analyzerErrorTagMismatch") + ` (${a.tag.id}, ${b.tag.id}))`, errorRange));
			return false;
		}
		return true;
	}

	public functions: Map<string, FunctionInfo> = new Map<string, FunctionInfo>();

	private addFunctionSignature(func: FunctionDeclaration) {

		const functionInfo: FunctionInfo = new FunctionInfo(func.id, func.tag.id);
		func.parameters.forEach(el => {
			const param: FunctionParameterInfo = new FunctionParameterInfo(el.id, el.tag.id);
			param.constant = el.const;
			param.reference = el.reference;

			functionInfo.pushParameter(param)
		});
		if(func.ellipse) {
			const param: FunctionParameterInfo = new FunctionParameterInfo("...", func.ellipse.tag.id);
			functionInfo.pushParameter(param)
		}
	
		this.functions.set(func.id, functionInfo);
	}
}