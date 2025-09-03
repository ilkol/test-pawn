import { DiagnosticError } from "../../diagnostic/DiagnosticError";
import { DiagnosticMessage } from "../../diagnostic/DiagnosticMessage";
import { BaseVisitor } from "./BaseVisitor";
import { Declarations } from "../Nodes/Declarations";
import { DiagnosticWarning } from "../../diagnostic/DiagnosticWarning";
import { EnumDeclaration } from "../Nodes/enum/EnumDeclaration";
import { EnumMember } from "../Nodes/enum/EnumMember";
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
import { Declaration } from "../Nodes/Declaration";
import { Variable } from "../Nodes/Variable";
import { FunctionDeclarationParameter } from "../Nodes/Functions/FunctionDeclarationParameter";
import { StringLiteral } from "../Nodes/Literals/StringLiteral";
import { WhileCycle } from "../Nodes/Cycles/WhileCycle";
import { ForCycle } from "../Nodes/Cycles/ForCycle";
import { VarDeclaration } from "../Nodes/Variables/VarDeclaration";
import { ArrayDeclaration } from "../Nodes/Variables/ArrayDeclaration";
import { Expression } from "../Nodes/Expresion";
import { AssigmentOperator } from "../Nodes/Operators/AssigmentOperator";
import { Array } from "../Nodes/Variables/Array";
import { OperatorOverload } from "../Nodes/Operators/OperatorOverload";
import { Tag } from "../Nodes/Tag";
import { IHasTag } from "../Nodes/IHasTag";
import { AbstractOpenFile, FunctionInfo, FunctionParameterInfo } from "../../../AbstractOpenFile";
import { IfStatement } from "../Nodes/Conditions/IfStatement";

import { BoolLiteral } from "../Nodes/Literals/BoolLiteral";
import { ArrayChar } from "../Nodes/Operators/ArrayChar";
import { DoWhileCycle } from "../Nodes/Cycles/DoWhileCycle";
import { Range } from "../../../types";
import { Locale } from "../../../Locale";
import { DiagnosticSeverity, SemanticTokenModifiers} from "vscode-languageserver";
import { PawnErrors } from "../../../Errors/PawnErrors";
import { LSPPawnErrors } from "../../../Errors/LSPPawnErrors";
import { SymbolManager } from "../../../SymbolSystem";
import { SymbolsFactory } from "../../../SymbolSystem/SymbolsFactory";

export class Analyzer extends BaseVisitor
{
	constructor(
		protected file: AbstractOpenFile,
		scope: IScope,
		private symbolManager: SymbolManager,
		// public readonly diagnostics: DiagnosticMessage[],
		// public readonly tokens: SemanticTokensManager,
		// public readonly symbolsManager: SymbolsManager,
		// public readonly complitions: CompletionItem[],
		// public readonly signatures: Map<string, SignatureHelp>
	) {
		super();
		this.curScope = scope;

		let varInit = new VariableInit();
		varInit.id = "cellmin";
		this.curScope.addVar(varInit);
		varInit = new VariableInit();
		varInit.id = "cellmax";
		this.curScope.addVar(varInit);
	}


	beforeVisitWDohile(node: DoWhileCycle): void {

	}
	afterVisitWDohile(node: DoWhileCycle): void {

	}
	beforeVisitOperatorArrayIndex(node: ArrayChar): void {

	}
	afterVisitOperatorArrayIndex(node: ArrayChar): void {

	}
	beforeVisitOperatorArrayChar(node: ArrayChar): void {
		
	}
	afterVisitOperatorArrayChar(node: ArrayChar): void {

	}
	private undefindedFunctions: Map<string, Range[]> = new Map();

	beforeVisitBoolLiteral(node: BoolLiteral): void {
	}
	afterVisitBoolLiteral(node: BoolLiteral): void {
	}


	// public readonly functionsDeclarations: Map<string, Definition<Declaration>[]> = new Map();
	// public readonly functionsCalls: Map<string, Reference<IHasID>[]> = new Map<string, funcCall.FunctionCall[]>();

	beforeVisitIfStatemnt(node: IfStatement): void {
	
	}
	afterVisitIfStatemnt(node: IfStatement): void {
	
	}
	beforeVisitAssigment(node: AssigmentOperator): void {

	}
	afterVisitAssigment(node: AssigmentOperator): void {
		if(node.left?.declaration) {
			if(node.left?.declaration.isConstant) {
				this.file.diagnostics.push(PawnErrors.report(22, node.left.range));
			}
		}
	}
	beforeVisitArrayDeclaration(node: ArrayDeclaration): void {

	}
	afterVisitArrayDeclaration(node: ArrayDeclaration): void {
		this.checkUsed(node, (variable: VarDeclaration) => this.curScope.addVar(variable));
		
		// this.tokens.addToken(node.idPos, SemanticTokens.variable, this.checkVarModifires(node.modifires).concat([SemanticTokensModifires.declaration]));

		let index = -1;
		node.indexes = node.indexes.map(el => {
			index++;
			if(el instanceof Expression) {
				if(el.expresion instanceof IntLiteral) {
					node.pushSize(index, el.expresion.value);
					return el.expresion;
				}
				if(el.expresion instanceof Variable) {
					const variable = this.curScope.findVar(el.expresion.id);
					if(variable) {
						if(!(variable instanceof EnumDeclaration)) {
							this.file.diagnostics.push(LSPPawnErrors.reportCustom(Locale.t("Expecting an integer constant or enumeration, but found \"%s\"", el.expresion.name), DiagnosticSeverity.Error, el.pos));
						}
						else {
							variable.used = true;
							// this.tokens.addToken(el.expresion.idPos, SemanticTokens.enum);
							return variable;
						}
					}
				}
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
		// this.tokens.addToken(node.idPos, SemanticTokens.parameter, this.checkVarModifires(node.modifires).concat([SemanticTokensModifires.declaration]));
	}
	beforeVisitVariable(node: Variable): void {
	
	}
	afterVisitVariable(node: Variable): void {
		const variable = this.curScope.findVar(node.id);
		if(variable) {
			variable.used = true;
			if(variable instanceof ArrayDeclaration) {
				if(!(node instanceof Array)) {

				}
				else {
					if(variable.indexes.length !== node.indexes.length) {
						this.file.diagnostics.push(LSPPawnErrors.reportError(48, 48, node.idPos, {original: variable.indexes.length, passed: node.indexes.length}));
					}
					else {
						let iter = -1;
						node.indexes = node.indexes.map(el => {
							iter++;
							if(el.expresion instanceof IntLiteral) {
								const size = variable.size[iter];
								if(!size)
									this.file.diagnostics.push(PawnErrors.report(8, el.pos));
								else {
									const val = el.expresion.value;
									if(val < 0) {
										this.file.diagnostics.push(PawnErrors.report(9, el.pos));
									}
									else if(val >= size) {
										this.file.diagnostics.push(LSPPawnErrors.reportError(32, 32, el.pos, node.id,  size-1));
									}
								}
								return el.expresion;
							}
							if(el.expresion instanceof Variable) {
								const enumer = variable.indexes[iter];
								const checkVar = this.curScope.findVar(el.expresion.id);
								if(!(enumer instanceof EnumDeclaration)) {
									variable.used = true;
								} else {
									if(checkVar instanceof EnumMember) {
										if(enumer !== checkVar.parent) {
											this.file.diagnostics.push(LSPPawnErrors.reportCustom(Locale.t("Expected enum member from \"%s\", but found from \"%s\"", enumer.id, checkVar.parent!.id), DiagnosticSeverity.Error, el.pos));
										}
									}
									else {
										this.file.diagnostics.push(LSPPawnErrors.reportCustom(Locale.t("Expected enum member from \"%s\"", enumer.id), DiagnosticSeverity.Error, el.pos));
									}
								}
							}
							return el;
						});
					}
				}
			}
			else {
				if(node instanceof Array) {
					if(variable instanceof FunctionDeclarationParameter){
						let checkvar = variable.variable;
						if(!(checkvar instanceof Array)) {
							this.file.diagnostics.push(LSPPawnErrors.reportError("28.notArray",28,  node.idPos, node.id, node.idPos));
						}
					}
				}
			}

			node.declaration = variable;
			// const array = this.functionsCalls.get(node.id);
			// const el = new Reference<Variable>(node, this.file.URI);
			// if(array)
			// {
			// 	array.push(el);	
			// }
			// else {
			// 	this.functionsCalls.set(node.id, [el]);
			// }
			// variable.references.push(node);

			// const token = variable instanceof FunctionDeclarationParameter ? SemanticTokens.parameter : (variable instanceof EnumMember ? SemanticTokens.enumMember : SemanticTokens.variable);
			// this.tokens.addToken(node.idPos, token, this.checkVarModifires(variable.modifires));
			if(!node.isTaged)
				node.tag = variable.tag;
		}
		else {	
			this.file.diagnostics.push(PawnErrors.report(17, node.idPos, {symbolName: node.id}));
			// const func = this.curScope.findFunction(node.id);
			// if(func) {
			// 	// this.tokens.addToken(node.idPos, SemanticTokens.function);
			// 	this.addDiagnostic(new DiagnosticError(Locale.t("The identifier \"%s\" is a function", node.id), node.idPos));
		
			// }
			// else this.addDiagnostic(new DiagnosticError(Locale.t("Variable \"%s\" is undefinded", node.id), node.idPos));
		}
	}
	private curScope: IScope;

	beforeVisitVarInit(node: VariableInit): void {

	}
	afterVisitVarInit(node: VariableInit): void {
		this.checkUsed(node, (variable: VariableInit) => this.curScope.addVar(variable));
		if(node.rightValue)
			this.compareTag(node, node.rightValue, node.rightValue.pos);
	}
	beforeVisitFunctionCall(node: FunctionCall): void {

	}
	afterVisitFunctionCall(node: FunctionCall): void {

		let func = this.curScope.findFunction(node.id);

		// this.tokens.addToken(node.idPos, SemanticTokens.function);

		// const array = this.functionsCalls.get(node.id);
		// const el = new funcCall.FunctionCall(node, this.file.URI);
		// if(array)
		// {
		// 	array.push(el);
		// }
		// else {
		// 	this.functionsCalls.set(node.id, [el]);
		// }

		if(func) {
			func.used = true;
			if(!node.isTaged)
				node.tag = func.tag;

			let param = 0;
			if(func.parameters.length !== node.vars.length && func.ellipse === undefined) {
				if(func.parameters.length < node.vars.length)
				{
					this.file.diagnostics.push(LSPPawnErrors.reportWarn(202,202,node.idPos, func.parameters.length, node.vars.length));
					func.parameters.forEach(element => {
						this.checkTagMismatch(element.tag, node.vars[param].tag, true, node.vars[param].pos);
						param++;
					});
				}
				else
				{
					node.vars.forEach(element => {
						this.checkTagMismatch(func.parameters[param].tag, element.tag, true, element.pos);
						param++;
					});

					for(let i = param; i < func.parameters.length; i++) {
						if(func.parameters[i].defaultValue) continue;
						this.file.diagnostics.push(LSPPawnErrors.reportWarn(202,202,node.idPos, func.parameters.length, node.vars.length));
						break;
					}
				}
			}
			else {
				if(func.parameters.length <= node.vars.length && func.ellipse) {
					func.parameters.forEach(element => {
						this.checkTagMismatch(element.tag, node.vars[param].tag, true, node.vars[param].pos);
						param++;
					});
					for(; param < node.vars.length; param++)
					{
						this.checkTagMismatch(func.ellipse.tag, node.vars[param].tag, true, node.vars[param].pos);
					}
				}
				else {
					if(func.parameters.length === node.vars.length) {
						func.parameters.forEach(element => {
							this.checkTagMismatch(element.tag, node.vars[param].tag, true, node.vars[param].pos);
							param++;
						});
					}
					else {
						this.file.diagnostics.push(LSPPawnErrors.reportWarn(202,202,node.idPos, func.parameters.length, node.vars.length));
					}
				}
			}
		}
		else {
			const ranges = this.undefindedFunctions.get(node.id);
			if(ranges) {
				ranges.push(node.idPos);
			}
			else {
				this.undefindedFunctions.set(node.id, [node.idPos]);
			}
		}
		
		
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
				(<BinarOperator>node).tag = new Tag(["bool"]);
		}
	}
	beforeVisitReturn(node: ReturnStatement): void {
	
	}
	afterVisitReturn(node: ReturnStatement): void {
		// TODO: error 78
		if(!node.value) {
			return;
		}
		const currentFunction = this.curScope.currenFunction;
		this.checkTagMismatch(currentFunction.tag, node.value.tag, true, node.value.pos);
	}
	beforeVisitCodeBlock(node: CodeBlock): void {
		this.extendScope();
	}
	afterVisitCodeBlock(node: CodeBlock): void {
		this.restrictScope();
	}
	beforeVisitEnumMember(node: EnumMember): void {

	}
	afterVisitEnumMember(node: EnumMember): void {	
		this.checkUsed(node, (variable: EnumMember) => this.curScope.addEnumMember(variable));
		// this.tokens.addToken(node.idPos, SemanticTokens.enumMember, [SemanticTokensModifires.const, SemanticTokensModifires.declaration]);
	}
	beforeVisitEnumDeclaration(node: EnumDeclaration): void {
		
	}
	afterVisitEnumDeclaration(node: EnumDeclaration): void {
		if(node.id) {
			this.checkUsed(node, (variable: EnumDeclaration) => this.curScope.addEnum(variable));
			const symbol = SymbolsFactory.createEnum(node.id, this.file.path, node.range, node.idPos, true);	
			this.symbolManager.add(this.file.path, symbol);	
			node.symbol = symbol.defenition;
		}
		// const array = this.functionsDeclarations.get(node.id);
		// const el = new Definition<EnumDeclaration>(node, this.file.URI);
		// if(array)
		// {
		// 	array.push(el);
		// }
		// else {
		// 	this.functionsDeclarations.set(node.id, [el]);
		// }
			
		
		// this.tokens.addToken(node.idPos, SemanticTokens.enum, [SemanticTokensModifires.declaration]);
	}
	
	beforeVisitDeclarations(declaration: Declarations): void {
		
	}
	afterVisitDeclarations(declaration: Declarations): void {
		this.checkIds(this.curScope.identifires());
		this.undefindedFunctions.forEach((ranges, id) => {
			ranges.forEach(range => {
				this.file.diagnostics.push(LSPPawnErrors.reportError(17, 17, range, {symbolName: id}));
				// this.file.diagnostics.push(LSPPawnErrors.reportError("17.function", 17, range, {symbolName: id}));
			});
		});
	}
	
	beforeVisitFunctionDeclaration(node: FunctionDeclaration): void {
		const symbol = SymbolsFactory.createFunction(node.id, this.file.path, node.range, node.idPos);
		this.symbolManager.add(this.file.path, symbol);
		node.symbol = symbol.defenition;
		if(node.id !== "main" && !(node instanceof OperatorOverload)) { 
			let id = this.curScope.find(node.id);
			if (id) {
				if(id instanceof FunctionDeclaration) {
					if(!id.code) {
						if(!node.code) {
							this.file.diagnostics.push(LSPPawnErrors.reportCustom(Locale.t("duplicating function head"), DiagnosticSeverity.Warning, node.idPos));
						}
					}else {
						if((id.modifire !== FunctionModifire.forward && node.modifire !== FunctionModifire.public) && (id.modifire !== FunctionModifire.public && node.modifire !== FunctionModifire.forward)) {
							this.file.diagnostics.push(PawnErrors.report(21, node.idPos, node.id));
						}
					}
				}
				else {
					this.file.diagnostics.push(PawnErrors.report(21, node.idPos, node.id));
				}
			} else {
				this.curScope.addFunction(node);
				const ranges = this.undefindedFunctions.get(node.id);
				if(ranges) {
					ranges.forEach(range => {
						if(this.isDefaultTag(node.tag.id)) {
							this.file.diagnostics.push(LSPPawnErrors.reportCustom(Locale.t("Function \"%s\" used before definition", node.id), DiagnosticSeverity.Hint, range));
						} else {
							this.file.diagnostics.push(PawnErrors.report(208, range, node.id));
						}
					});
					this.undefindedFunctions.delete(node.id);
					node.used = true;
				}

				// const array = this.functionsDeclarations.get(node.id);
				// const el = new funcDef.FunctionDeclaration(node, this.file.URI);
				// if(array)
				// {
				// 	array.push(el);
				// }
				// else {
				// 	this.functionsDeclarations.set(node.id, [el]);
				// }
				
			}
		}

		if(node.assigmentFunctionID) {
			// if(!node.native) {
			// 	this.addDiagnostic(new DiagnosticError(Locale.t("Assignment is only possible to a native function"), node.idPos));
			// 	return;
			// }
			
			// let id = this.curScope.find(node.assigmentFunctionID);
			// if (!id) {
			// 	this.addDiagnostic(new DiagnosticError(Locale.t("Identifire \"%s\" not found", node.assigmentFunctionID), node.pos));
			// }

		}

		let symbolRange:Range = node.idPos;
		let selectRange = node.idPos;
		if(node.code) {
			symbolRange = new Range(symbolRange.start, node.code.pos.end);
			selectRange = node.code.pos;
		}
		// const symbol = new DocumentSymbol(node.id, "function", SymbolKind.Function, symbolRange, selectRange);
		// this.symbolsManager.addSymbol(symbol);

		this.extendScope();
		this.curScope.currenFunction =node;
	}
	afterVisitFunctionDeclaration(node: FunctionDeclaration): void {
		this.restrictScope();

		node.parameters.forEach(parameter => {
			const modifires: SemanticTokenModifiers[] = [SemanticTokenModifiers.definition];
			if(parameter.const) {
				modifires.push(SemanticTokenModifiers.readonly);
			}
			const symbol = SymbolsFactory.createParameter(parameter.id, this.file.path, parameter.range, parameter.idPos, modifires);
			this.symbolManager.add(this.file.path, symbol);
			parameter.symbol = symbol;
			node.symbol?.childrens.push(symbol.defenition);
		})
		
		
		// const modif = [SemanticTokensModifires.declaration];
		if(node.code !== undefined) {
			node.symbol?.modifiers;
		}
			

		// this.tokens.addToken(node.idPos, SemanticTokens.function, modif);		
		this.addFunctionSignature(node);	
	}
	
	beforeVisitVariableDeclaration(node: VarDeclaration): void {

	}
	afterVisitVariableDeclaration(node: VarDeclaration): void {
		this.checkUsed(node, (variable: VarDeclaration) => this.curScope.addVar(variable));		
		// this.tokens.addToken(node.idPos, SemanticTokens.variable, this.checkVarModifires(node.modifires).concat(SemanticTokensModifires.declaration));
	}

	private checkIds(ids: Map<string, Declaration>) {
		ids.forEach((element, key) => {
			if(element.importFileName !== this.file.path) return;
			if(key === "cellmin" || key === "cellmax") return;
			if(!element.used && !element.native) {
				this.file.diagnostics.push(PawnErrors.report(203, element.idPos, key));
				// let diagnostic: DiagnosticMessage, diagnosticMsg: string;
				// let stock = element.stock;
				// if(element instanceof FunctionDeclaration) {
				// 	diagnosticMsg = Locale.t("Function");
				// 	if(element.modifire !== FunctionModifire.none)
				// 		stock = true;
				// }
				// else if(element instanceof EnumDeclaration){
				// 	stock = true;
				// 	diagnosticMsg = Locale.t("Enum identifire");
				// }
				// else if(element instanceof EnumMember){
				// 	stock = true;
				// 	diagnosticMsg = Locale.t("Enum member");
				// }
				// else if(element instanceof FunctionDeclarationParameter){
				// 	diagnosticMsg = Locale.t("Parameter");
				// }
				// else {
				// 	if((<VarDeclaration>element).isConstant) {
				// 		diagnosticMsg = Locale.t("Constant");
				// 		stock = true;
				// 	}
				// 	else {
				// 		diagnosticMsg = Locale.t("Variable");
				// 		stock = (<VarDeclaration>element).modifires.indexOf(VariableModifire.public) !== -1;
				// 	}
				// }				
				
				// if(!stock) {
				// 	diagnostic = new DiagnosticWarning(Locale.t("%s \"%s\" is never used", diagnosticMsg, key), element.idPos);
				// 	diagnostic.tags = [DiagnosticTag.Unnecessary];
				// }
				// else
				// 	diagnostic = new DiagnosticUnused("warning 203: " + Locale.t("%s \"%s\" is never used", diagnosticMsg, key), element.idPos);
				// this.addDiagnostic(diagnostic);
			}
		});
	}

	private checkUsed<T extends Declaration>(node: T, callback: (variable: T) => void) {
		let id = this.curScope.find(node.id);
		if (id) {
			this.file.diagnostics.push(PawnErrors.report(21, node.idPos, node.id));
		} else {
			callback(node);
		}
	}

	// private checkVarModifires(modifires: VariableModifire[]): SemanticTokensModifires[] {
	// 	if(modifires === undefined) return [];
	// 	const tokens: SemanticTokensModifires[] = [];
	// 	modifires.forEach(value => {
	// 		switch(value) {
	// 			case VariableModifire.const: 
	// 				tokens.push(SemanticTokensModifires.const);
	// 				break;
	// 			case VariableModifire.static:
	// 				tokens.push(SemanticTokensModifires.static);
	// 				break;
	// 			// case VariableModifire.stock:
	// 			// 	tokens.push(SemanticTokensModifires.);
	// 			// 	break;
	// 		}
	// 	});
	// 	return tokens;
	// }

	private extendScope() {
		this.curScope = new Scope(this.file, this.curScope);
	}
	private restrictScope() {
		this.checkIds(this.curScope.variables());
		if(this.curScope.parent)
			this.curScope = this.curScope.parent;
	}


	private isEqualTag(a: Tag, b: Tag): boolean {
		for(let first of a.tags) {
			for(let second of b.tags) {
				if(this.isEqualSimpleTag(first,second)) {
					return true;
				}
			}
		}
		return false;
		// console.error(a, b);
		// if(a.tags.length === 1 && b.tags.length) {
		// 	return a.id === b.id || (a.id === "_" && b.id === "bool") || (b.id === "_" && a.id === "bool");
		// }
		// else if(a.tags.length === 1) {
		// 	const tag = a.tags[0];
		// 	for(var element of b.tags)
		// 	{
		// 		if(tag === element) return true;
		// 	}
		// }
		// else if(b.tags.length === 1) {
		// 	const tag = b.tags[0];
		// 	for(var element of a.tags)
		// 	{
		// 		if(tag === element) return true;
		// 	}
		
		// }
		// else {
		// 	for(var element of a.tags)
		// 	{
		// 		console.log(element, b.tags.indexOf(element));
		// 		if(b.tags.indexOf(element) !== -1) return true;
		// 	}
		// }
		// return false;

	}
	private isEqualSimpleTag(a: string, b: string) {
		if(a === b) {
			return true;
		}
		return a === "_" && b === "bool" || a === "_" && b === "bool";
	}

	private compareTag(a: IHasTag, b: IHasTag, errorRange: Range): boolean {
		if(!this.isEqualTag(a.tag, b.tag)) {
			this.file.diagnostics.push(PawnErrors.report(213, errorRange, Locale.t("Tag"), a.tag.tagString, b.tag.tagString));
			return false;
		}
		return true;
	}

	public functions: Map<string, FunctionInfo> = new Map<string, FunctionInfo>();

	private addFunctionSignature(func: FunctionDeclaration) {

		const functionInfo: FunctionInfo = new FunctionInfo(func.id, func.tag.tagString);
		// functionInfo.docs = func.docs;
		func.parameters.forEach(el => {
			const param: FunctionParameterInfo = new FunctionParameterInfo(el.id, el.tag.tagString);
			param.constant = el.const;
			param.reference = el.reference;

			functionInfo.pushParameter(param);
		});
		if(func.ellipse) {
			const param: FunctionParameterInfo = new FunctionParameterInfo("...", func.ellipse.tag.tagString);
			functionInfo.pushParameter(param);
		}
	
		this.functions.set(func.id, functionInfo);
	}

	/**
	 * Выполняет проверку соответствие типов
	 * @param formalTag необходимый тэг
	 * @param actualRag проверяемый тэг
	 * @param allowCoerce разрешено грубое приведение типа
	 */
	private checkTagMismatch(formalTag: Tag, actualTag: Tag, allowCoerce: boolean, errorRange: Range) {
		if(formalTag.tags.length === 1) {
			this.checkSingleTagMismatch(formalTag.tags[0], actualTag.tags[0], allowCoerce, errorRange);
			return;
		}
		else {
			this.checkMultyTagMismatch(formalTag.tags, actualTag.tags[0], errorRange);
		}
	}

	private checkMultyTagMismatch(formalTags: string[], actualTag: string, range: Range) {
		if(this.checkAllTags(formalTags, actualTag)) {
			return;
		}

		const names = formalTags.map((name) => `"${name}"`);
		const lastTag = names.pop();
		const formalTag = names.join(", ");
		const formalTagsName = formalTag === "" ? `${lastTag},` : `${formalTag} or ${lastTag};`;
		this.file.diagnostics.push(PawnErrors.report(213, range, formalTags.length === 1 ? Locale.t("tag") : Locale.t("tags"), formalTagsName, actualTag))
	}	

	private checkAllTags(formalTags: string[], actualTag: string): boolean {
		for(const formalTag of formalTags) {
			if(this.simpleCheckTagMismatch(formalTag, actualTag, true)) {
				return true;
			}
		}
		return false;
	}

	private checkSingleTagMismatch(formalTag: string, actualTag: string, allowCoerce: boolean, range: Range) {
		if(this.simpleCheckTagMismatch(formalTag, actualTag, allowCoerce)) {
			return;
		}
		this.file.diagnostics.push(PawnErrors.report(213, range, Locale.t("tag"), formalTag, actualTag))
	}

	private isDefaultTag(tag: string): boolean {
		return tag === "_";
	}
	private isTagFixed(tag: string): boolean {
		return tag === "Fixed";
	}

	private simpleCheckTagMismatch(formalTag: string, actualTag: string, allowCoerce: boolean): boolean {
		if(formalTag === actualTag) {
			return true;
		}
		// Если необходимый тэг - дефолтный, а проверяемый не Fixed, то проверяемый приводиться к дефолтному
		return allowCoerce && this.isDefaultTag(formalTag) && this.isTagFixed(actualTag);
	}
}