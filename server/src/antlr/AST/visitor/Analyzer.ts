import { BaseVisitor } from "./BaseVisitor";
import { Declarations } from "../Nodes/Declarations";
import { EnumDeclaration } from "../Nodes/enum/EnumDeclaration";
import { EnumMember } from "../Nodes/enum/EnumMember";
import { CodeBlock } from "../Nodes/CodeBlock";
import { ReturnStatement } from "../Nodes/ReturnStatement";
import { BinarOperator } from "../Nodes/Operators/BinarOperator";
import { IntLiteral } from "../Nodes/Literals/IntLiteral";
import { UnarOperator } from "../Nodes/Operators/UnarOperator";
import { OperatorNew, VariableModifire } from "../Nodes/Operators/OperatorNew";
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
import { DiagnosticSeverity, DiagnosticTag, SemanticTokenModifiers, SymbolKind} from "vscode-languageserver";
import { PawnErrors } from "../../../Errors/PawnErrors";
import { LSPPawnErrors } from "../../../Errors/LSPPawnErrors";
import { SemanticTokensLegendManager, SymbolManager } from "../../../SymbolSystem";
import { SymbolsFactory } from "../../../SymbolSystem/SymbolsFactory";
import * as Symbols from "../../../SymbolSystem/Symbols";
import { DefaultTag } from "../Nodes/DefaultTag";
import { Constexpr } from "../Nodes/Variables/Constexpr";
import { ScopeManager } from "../../../Managers/ScopeManager";
import { MayBeTag } from "../../../SymbolSystem/Symbols/MayBeTag";
import { TypeInferenceEngine } from "../../../TypeInferenceEngine";
import { FloatLiteral } from "../Nodes/Literals/FloatLiteral";
import { Pawn } from "../../../Pawn";

export class Analyzer extends BaseVisitor
{

	private tagInferer: TypeInferenceEngine;
	constructor(
		protected file: AbstractOpenFile,
		scope: IScope,
		private symbolManager: SymbolManager,
		private scopeManager: ScopeManager,
	) {
		super();
		this.curScope = scope;

		this.tagInferer = new TypeInferenceEngine(this.scopeManager, this.addTag.bind(this));
		this.addBuildinConstants();
	}

	private addBuildinConstants() {
		// const boolTag = new Tag(["bool"]);
		// this.addBuildinConstant("true", 1, boolTag);
		// this.addBuildinConstant("false", 0, boolTag);

		// const defaultTag = new DefaultTag;
		// this.addBuildinConstant("EOS", 0, defaultTag);
		// this.addBuildinConstant("cellbits", 32, defaultTag);
		// this.addBuildinConstant("cellmax", 2147483647, defaultTag);
		// this.addBuildinConstant("cellmin", -2147483647 - 1, defaultTag);
		// this.addBuildinConstant("charbits", 8, defaultTag);
		// this.addBuildinConstant("charmin", 0, defaultTag);
		// this.addBuildinConstant("charmax", 254, defaultTag); // ~((Ucell)-1 << sCHARBITS) - 1
		// this.addBuildinConstant("ucharmax", 16777215, defaultTag); // (1 << (sizeof(Cell)-1)*8)-1
		
		// this.addBuildinConstant("__Pawn", 778, defaultTag); // Версия Pawn
		// this.addBuildinConstant("__PawnBuild", 10, defaultTag);
		// this.addBuildinConstant("__line", 0, defaultTag); // Текущая строка

	}

	// private addBuildinConstant(name: string, value: number, tag: Tag) {
	// 	let varInit = new Constexpr(name, value, tag);
	// 	this.curScope.addVar(varInit);
	// }


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
	private pendingReferences: Map<string, Range[]> = new Map();

	beforeVisitBoolLiteral(node: BoolLiteral): void {
	}
	afterVisitBoolLiteral(node: BoolLiteral): void {
		node.inferredTag = this.tagInferer.inferTag(node);
	}

	beforeVisitIfStatemnt(node: IfStatement): void {
	
	}
	afterVisitIfStatemnt(node: IfStatement): void {
	
	}
	beforeVisitAssigment(node: AssigmentOperator): void {

	}
	afterVisitAssigment(node: AssigmentOperator): void {
		if(node.left) {
			const symbol = this.addSymbolReference(node.left.id, node.left.pos, node.left.idPos, [SemanticTokenModifiers.modification]);
			if(!symbol) {
				return;
			}
			else if(!(symbol instanceof Symbols.Variable || symbol instanceof Symbols.EnumMember || symbol instanceof Symbols.EnumMember || symbol instanceof Symbols.Macro)) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InvalidFunctionCall, node.range));
			}
			else if(symbol.isConst) {					
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MustBeLValue, node.left.range));
			}
		}
	}
	beforeVisitArrayDeclaration(node: ArrayDeclaration): void {

	}
	afterVisitArrayDeclaration(node: ArrayDeclaration): void {
		// this.checkUsed(node, (variable: VarDeclaration) => this.curScope.addVar(variable));
		
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
					const variable = this.curScope.findSymbol(el.expresion.id);
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
		this.extendScope(node.range);
	}
	afterVisitFor(node: ForCycle): void {
		this.restrictScope();
	}
	beforeVisitWhile(node: WhileCycle): void {
		this.extendScope(node.range);
	}
	afterVisitWhile(node: WhileCycle): void {
		this.restrictScope();
	}
	beforeVisitString(node: StringLiteral): void {

	}
	afterVisitString(node: StringLiteral): void {

	}
	beforeVisitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void {
		const modifires: SemanticTokenModifiers[] = [];	
		if(node.const) {
			modifires.push(SemanticTokenModifiers.readonly);
		}

		const symbol = SymbolsFactory.createParameter(node.id, this.file.path, node.range, node.idPos, modifires);
		this.symbolManager.add(this.file.path, symbol);
		this.curScope.add(symbol);

		this.curScope.currentSymbol?.childrens.push(symbol.defenition);
		this.curScope.currentFunction?.parameters.push(symbol);

		node.symbol = symbol;

		
	}
	afterVisitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void {
		if(node.reference) {
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.CanBeReferenceToArray, node.pos, node.id));
		}
		if(node.dimensions >= Pawn.MAX_ARRAY_DIMENSIONS) {
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MaxArrayDimenssions, node.pos));
		}

		// this.checkUsed(node, (variable: FunctionDeclarationParameter) => this.curScope.addVar(variable));

		// this.tokens.addToken(node.idPos, SemanticTokens.parameter, this.checkVarModifires(node.modifires).concat([SemanticTokensModifires.declaration]));
	}
	beforeVisitVariable(node: Variable): void {
	
	}
	afterVisitVariable(node: Variable): void {
		const symbol = this.addSymbolReference(node.id, node.pos, node.idPos);
		if(!symbol) {
			return;
		}
		
		/*
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
								this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MustBeConstantExpression, el.pos));
							else {
								const val = el.expresion.value;
								if(val < 0) {
									this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InvalidArraySize, el.pos));
								}
								else if(val >= size) {
									this.file.diagnostics.push(LSPPawnErrors.reportError(32, 32, el.pos, node.id,  size-1));
								}
							}
							return el.expresion;
						}
						if(el.expresion instanceof Variable) {
							const enumer = variable.indexes[iter];
							// const checkVar = this.curScope.findVar(el.expresion.id);
							// if(!(enumer instanceof EnumDeclaration)) {
							// 	variable.used = true;
							// } else {
							// 	if(checkVar instanceof EnumMember) {
							// 		if(enumer !== checkVar.parent) {
							// 			this.file.diagnostics.push(LSPPawnErrors.reportCustom(Locale.t("Expected enum member from \"%s\", but found from \"%s\"", enumer.id, checkVar.parent!.id), DiagnosticSeverity.Error, el.pos));
							// 		}
							// 	}
							// 	else {
							// 		this.file.diagnostics.push(LSPPawnErrors.reportCustom(Locale.t("Expected enum member from \"%s\"", enumer.id), DiagnosticSeverity.Error, el.pos));
							// 	}
							// }
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

		// node.declaration = variable;
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
		// if(!node.isTaged)
		// 	node.tag = variable.tag;
		*/
	}
	private curScope: IScope;

	beforeVisitVarInit(node: VariableInit): void {
		

	}
	afterVisitVarInit(node: VariableInit): void {
		const modifiers: SemanticTokenModifiers[] = [];
		if(node.modifires.indexOf(VariableModifire.const) !== -1) {
			modifiers.push(SemanticTokenModifiers.readonly);
		}
		const symbol = SymbolsFactory.createVariable(node.id, this.file.path, node.range, node.idPos, modifiers);
		this.symbolManager.add(this.file.path, symbol, this.curScope.currentSymbol === undefined);
		this.curScope.add(symbol);
		this.curScope.currentSymbol?.childrens.push(symbol.defenition);
		symbol.tag = this.addTag(node.tag.id, node.tag.pos, node.tag.idPos);

		if(node.rightValue) {
			const expectedTag = symbol.tag;
			const actualTag = node.rightValue.inferredTag;
			
			this.checkTagMismatch(expectedTag, actualTag, true, node.idPos);
		}			
	}
	beforeVisitFunctionCall(node: FunctionCall): void {

	}
	afterVisitFunctionCall(node: FunctionCall): void {
		const symbol = this.addSymbolReference(node.id, node.pos, node.idPos, [], true);
		if(!symbol) {
			return;
		} 
		if(!(symbol instanceof Symbols.Function))  {
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InvalidFunctioncall, node.idPos));
			return;
		}

		node.inferredTag = this.tagInferer.inferTag(node);

		this.checkCallFunctionParameters(symbol, node);
	}

	private addPendingReference(functionName: string, callHeadrRange: Range) {
		const ranges = this.pendingReferences.get(functionName);
		if(ranges) {
			ranges.push(callHeadrRange);
		}
		else {
			this.pendingReferences.set(functionName, [callHeadrRange]);
		}
	}
	private resolvePendingReferences(functionSymbol: Symbols.Function) {
		const pending = this.pendingReferences.get(functionSymbol.name);
		if(!pending) {
			return;
		}
		pending.forEach(pos => {
			functionSymbol.addReferance(new Symbols.SymbolReferance(this.file.path, pos, pos));

			// if (this.isDefaultTag(functionSymbol.returnTag)) {
            //     this.file.diagnostics.push(LSPPawnErrors.reportCustom(
            //         Locale.t("Function used before definition"), 
            //         DiagnosticSeverity.Hint, 
            //         pos
            //     ));
            // } else {
            //     this.file.diagnostics.push(PawnErrors.report(208, pos, functionSymbol.name));
            // }
		});
		this.pendingReferences.delete(functionSymbol.name);
        functionSymbol.isUsed = true;
	}


	beforeVisitOperatorNew(node: OperatorNew): void {
	
	}
	afterVisitOperatorNew(node: OperatorNew): void {
	
	}
	beforeVisitUnarOperator(node: UnarOperator): void {

	}
	afterVisitUnarOperator(node: UnarOperator): void {
		node.inferredTag = this.tagInferer.inferTag(node);
	}
	beforeVisitLiteral(node: IntLiteral | FloatLiteral): void {
	
	}
	afterVisitLiteral(node: IntLiteral | FloatLiteral): void {
		node.inferredTag = this.tagInferer.inferTag(node);
	}
	beforeVisitBinarOperator(node: BinarOperator): void {
		
			
	}
	afterVisitBinarOperator(node: BinarOperator): void {
		if(!(node.left && node.right)) {
			return;
		}
		
		node.setRange(node.left.pos.start, node.right.pos.end);
		node.inferredTag = this.tagInferer.inferTag(node);
		
	}
	beforeVisitReturn(node: ReturnStatement): void {
	
	}
	afterVisitReturn(node: ReturnStatement): void {
		// TODO: error 78
		if(!node.value) {
			return;
		}
		// const currentFunction = this.curScope.currenFunction;
		// this.checkTagMismatch(currentFunction.tag, node.value.tag, true, node.value.pos);
	}
	beforeVisitCodeBlock(node: CodeBlock): void {
		this.extendScope(node.range);
	}
	afterVisitCodeBlock(node: CodeBlock): void {
		this.restrictScope();
	}
	beforeVisitEnumMember(node: EnumMember): void {
		const symbol = SymbolsFactory.createEnumMember(node.id, this.file.path, node.range, node.idPos, true);
		node.symbol = symbol;
		this.symbolManager.add(this.file.path, symbol);
		node.parent?.symbol?.members.push(symbol);
		this.curScope.currentSymbol?.childrens.push(symbol.defenition);
		this.curScope.parent?.add(symbol);
	}
	afterVisitEnumMember(node: EnumMember): void {			
	}
	beforeVisitEnumDeclaration(node: EnumDeclaration): void {
		const name = node.id || "<anonymous>";
		const symbol = SymbolsFactory.createEnum(name, this.file.path, node.range, node.idPos, true);	
		this.symbolManager.add(this.file.path, symbol, true);	
		this.curScope.add(symbol);
		node.symbol = symbol;
		
		if(node.id) {
			const tag = this.addTag(node.id, node.idPos);
			if(tag.symbolKind !== SymbolKind.Enum) {
				tag.getReferences().forEach(symbol.addReferance.bind(symbol));
				tag.clearReferences();
				this.curScope.replaceTag(symbol);
			}
		}

		this.curScope.currentSymbol?.childrens.push(symbol.defenition);
		this.extendScope(node.range, symbol.defenition);
	}
	afterVisitEnumDeclaration(node: EnumDeclaration): void {
		// const array = this.functionsDeclarations.get(node.id);
		// const el = new Definition<EnumDeclaration>(node, this.file.URI);
		// if(array)
		// {
		// 	array.push(el);
		// }
		// else {
		// 	this.functionsDeclarations.set(node.id, [el]);
		// }
			
	}
	
	beforeVisitDeclarations(declaration: Declarations): void {
		this.curScope.range = declaration.range;
	}
	afterVisitDeclarations(declaration: Declarations): void {
		// this.checkIds(this.curScope.identifires());
		this.pendingReferences.forEach((ranges, id) => {
			ranges.forEach(range => {
				this.file.diagnostics.push(LSPPawnErrors.reportError(17, 17, range, {symbolName: id}));
			});
		});
		this.pendingReferences.clear();
	}

	beforeVisitOperatorOverload(node: OperatorOverload): void {
		
	}
	afterVisitOperatorOverload(node: OperatorOverload): void {
		const symbol = SymbolsFactory.createFunction(node.id, this.file.path, node.range, node.idPos);
		this.symbolManager.add(this.file.path, symbol, true);
		node.symbol = symbol.defenition;
		symbol.hasImplementation = node.code !== undefined;

		symbol.returnTag = this.addTag(node.tag.id, node.tag.pos, node.tag.idPos);

		this.checkOperatorTag(node.operator, symbol.returnTag, node.tag.idPos);

		// like operatoradjust in pawnc
		// this.operatorAdjust();
		const tags: MayBeTag[] = [];
		let count = 0;
		node.parameters.forEach(param => {
			if(count < 2) {
				if(param.tags.length > 1) {
					/* function argument may only have a single tag */
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.FunctionArgumentMayOnlyHaveSingleArgument, param.pos, count + 1));
				}
				else if (param.tags.length == 1) {
					const tag = param.tags[0];
					tags.push(this.addTag(tag.id, tag.pos, tag.idPos));
				}
			}
			if(node.operator === "~" && count == 0) {
				if(param.dimensions === 0) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MustBeArrayArgument, param.pos, param.id));
				}
			} else {
				if(param.dimensions !== 0 || param.reference) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MustBeNonReference, param.pos, param.id));
				}
			}
			if(param.defaultValue) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MayNotHaveDefaultValue, param.pos, param.id));
			}
			count++;
		});

		switch(node.operator) {
			case "!":
			case "=":
			case "++":
			case "--":
				if(count !== 1) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InvalidArgumentsCountInOperatorOverloading, node.pos));
				}
				break;
			case "-":
				if(count !== 1 && count !== 2) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InvalidArgumentsCountInOperatorOverloading, node.pos));
				}
				break;
			default:
				if(count !== 2) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InvalidArgumentsCountInOperatorOverloading, node.pos));
				}
		}

		if (this.isDefaultTag(tags[0].name) && ((node.operator != '=' && this.isDefaultTag(tags[1].name)) || (node.operator == '=' && this.isDefaultTag(symbol.returnTag.name))))
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.CantChangePredefinedOperator, node.pos));

		symbol.name = node.id = Analyzer.operatorName(node.operator, tags[0], tags[1], count, symbol.returnTag);

		if(this.scopeManager.globalScope.findSymbol(node.id)) {
			// TODO: должна быть проверка реализована функция или просто объявлена
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.SymbolAlreadyDefined, node.pos, node.id));
		} else {
			this.scopeManager.globalScope.add(symbol);
		}
	}
	
	beforeVisitFunctionDeclaration(node: FunctionDeclaration): void {
		const symbol = SymbolsFactory.createFunction(node.id, this.file.path, node.range, node.idPos);
		this.symbolManager.add(this.file.path, symbol, true);
		node.symbol = symbol.defenition;
		symbol.hasImplementation = node.code !== undefined;

		symbol.returnTag = this.addTag(node.tag.id, node.tag.pos, node.tag.idPos);

		const existing = this.scopeManager.globalScope.findSymbol(node.id);
		if(existing) {
			this.handleFunctionRedeclaration(node, existing);
		} else {
			this.scopeManager.globalScope.add(symbol);
			this.resolvePendingReferences(symbol);
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

		this.extendScope(node.range, symbol.defenition);
		this.curScope.currentFunction = symbol;
	}
	afterVisitFunctionDeclaration(node: FunctionDeclaration): void {
		this.restrictScope();

		node.parameters.forEach(parameter => {
			const modifires: SemanticTokenModifiers[] = [SemanticTokenModifiers.definition];
			if(parameter.const) {
				modifires.push(SemanticTokenModifiers.readonly);
			}
		})
		
		
		// const modif = [SemanticTokensModifires.declaration];
		if(node.code !== undefined) {
			node.symbol?.modifiers;
		}
			

		// this.tokens.addToken(node.idPos, SemanticTokens.function, modif);		
		this.addFunctionSignature(node);	
	}
	
	beforeVisitVariableDeclaration(node: VarDeclaration): void {
		const modifiers: SemanticTokenModifiers[] = [SemanticTokenModifiers.definition];
		if(node.modifires.indexOf(VariableModifire.const) !== -1) {
			modifiers.push(SemanticTokenModifiers.readonly);
		}
		const symbol = SymbolsFactory.createVariable(node.id, this.file.path, node.range, node.idPos, modifiers);
		this.symbolManager.add(this.file.path, symbol, this.curScope.currentSymbol === undefined);
		this.curScope.add(symbol);
		this.addTag(node.tag.id, node.tag.pos, node.tag.idPos);
		this.curScope.currentSymbol?.childrens.push(symbol.defenition);
	}
	afterVisitVariableDeclaration(node: VarDeclaration): void {
		// this.checkUsed(node, (variable: VarDeclaration) => this.curScope.addVar(variable));		
		// this.tokens.addToken(node.idPos, SemanticTokens.variable, this.checkVarModifires(node.modifires).concat(SemanticTokensModifires.declaration));
	}

	private checkIds(ids: Map<string, Declaration>) {
		ids.forEach((element, key) => {
			if(element.id === "cellmin" || element.id === "cellmax") {
				return;
			}

			if(element instanceof FunctionDeclaration) {
				if(!element.used && !element.native && !element.stock && element.modifire !== FunctionModifire.public && element.modifire !== FunctionModifire.forward && element.id !== "main")
				{
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.SymbolIsNeverUsed, element.idPos, key));
				}
			} else if(element instanceof Constexpr) {
				return;
			} else if(element instanceof EnumDeclaration || element instanceof EnumMember) {
				if(!element.used)
				{
					// this.file.diagnostics.push(PawnErrors.report(203, element.idPos, key));
				}
			} else if(element instanceof VarDeclaration){
				if(!element.used) {
					if(element.isConstant) {
						this.file.diagnostics.push(LSPPawnErrors.reportCustom(Locale.t("Constant is never used"), DiagnosticSeverity.Hint, element.idPos, [DiagnosticTag.Unnecessary]));
					} else if(!element.stock && element.modifires.indexOf(VariableModifire.public) === -1){
						this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.SymbolIsNeverUsed, element.idPos, key));
					}
				} 
			}

			if(!element.used && !element.native) {
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
		let id = this.curScope.findSymbol(node.id);
		if (id) {
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.SymbolAlreadyDefined, node.idPos, node.id));
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

	private extendScope(range: Range, newSymbol?: Symbols.SymbolReferance | undefined) {
		this.curScope = this.curScope.extend(range, newSymbol);
		this.scopeManager.register(this.curScope);
	}
	private restrictScope() {
		// this.checkIds(this.curScope.variables());
		if(this.curScope.parent)
			this.curScope = this.curScope.parent;
	}

	private isEqualSimpleTag(a: string, b: string) {
		if(a === b) {
			return true;
		}
		return a === "_" && b === "bool" || a === "_" && b === "bool";
	}

	public functions: Map<string, FunctionInfo> = new Map<string, FunctionInfo>();

	private addFunctionSignature(func: FunctionDeclaration) {

		const functionInfo: FunctionInfo = new FunctionInfo(func.id, func.tag.id);
		// functionInfo.docs = func.docs;
		func.parameters.forEach(el => {
			const param: FunctionParameterInfo = new FunctionParameterInfo(el.id, el.tag.id);
			param.constant = el.const;
			param.reference = el.reference;

			functionInfo.pushParameter(param);
		});
		if(func.ellipse) {
			const param: FunctionParameterInfo = new FunctionParameterInfo("...", func.ellipse.tagString);
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
	private checkTagMismatch(formalTag: MayBeTag | null, actualTag: MayBeTag | null, allowCoerce: boolean, errorRange: Range) {
		this.checkSingleTagMismatch(formalTag?.name ?? "_", actualTag?.name ?? "_", allowCoerce, errorRange);
	}


	private checkMultyTagMismatch(formalTags: string[], actualTag: string, range: Range) {
		if(this.checkAllTags(formalTags, actualTag)) {
			return;
		}

		const names = formalTags.map((name) => `"${name}"`);
		const lastTag = names.pop();
		const formalTag = names.join(", ");
		const formalTagsName = formalTag === "" ? `${lastTag},` : `${formalTag} or ${lastTag};`;
		this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.TagMismatch, range, formalTags.length === 1 ? Locale.t("tag") : Locale.t("tags"), formalTagsName, actualTag))
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
		this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.TagMismatch, range, Locale.t("tag"), formalTag, actualTag))
	}

	private isDefaultTag(tag: string): boolean {
		return tag === "_";
	}
	private isTagFixed(tag: string): boolean {
		return /[A-Z]/.test(tag[0]);
	}

	private simpleCheckTagMismatch(formalTag: string, actualTag: string, allowCoerce: boolean): boolean {
		if(formalTag === actualTag) {
			return true;
		}
		// Если необходимый тэг - дефолтный, а проверяемый не "fixed", то проверяемый приводиться к дефолтному
		return allowCoerce && this.isDefaultTag(formalTag) && this.isTagFixed(actualTag);
	}

	private handleFunctionRedeclaration(node: FunctionDeclaration, existing: Symbols.AbstractSymbol) {
		if(!(existing instanceof Symbols.Function)) {
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.SymbolAlreadyDefined, node.idPos, node.id));
			return;
		}
		if(existing.hasImplementation) {
			if (!node.code) {
				this.file.diagnostics.push(LSPPawnErrors.reportCustom(
					Locale.t("duplicating function head"), 
					DiagnosticSeverity.Warning, 
					node.idPos
				));
			} else {
				this.file.diagnostics.push(LSPPawnErrors.reportCustom(
					Locale.t("duplicating function implementation"), 
					DiagnosticSeverity.Warning, 
					node.idPos
				));
			}
		} else {
			// const isCompatible = (existing.modifier === FunctionModifire.forward && node.modifier === FunctionModifire.public) ||
            //                  (existing.modifier === FunctionModifire.public && node.modifier === FunctionModifire.forward);

			// if (!isCompatible) {
			// 	this.file.diagnostics.push(PawnErrors.report(21, node.idPos, node.id));
			// }
		}
	}

	private checkCallFunctionParameters(functionSymbol: Symbols.Function, node: FunctionCall) {
		if(functionSymbol.parameters.length != node.vars.length) {
			this.file.diagnostics.push(LSPPawnErrors.reportWarn(202,202,node.pos, functionSymbol.parameters.length, node.vars.length));
		}
		// let param = 0;
		// if(functionSymbol.parameters.length !== node.vars.length && func.ellipse === undefined) {
		// 	if(func.parameters.length < node.vars.length)
		// 	{
		// 		this.file.diagnostics.push(LSPPawnErrors.reportWarn(202,202,node.idPos, func.parameters.length, node.vars.length));
		// 		func.parameters.forEach(element => {
		// 			this.checkTagMismatch(element.tag, node.vars[param].tag, true, node.vars[param].pos);
		// 			param++;
		// 		});
		// 	}
		// 	else
		// 	{
		// 		node.vars.forEach(element => {
		// 			this.checkTagMismatch(func.parameters[param].tag, element.tag, true, element.pos);
		// 			param++;
		// 		});

		// 		for(let i = param; i < func.parameters.length; i++) {
		// 			if(func.parameters[i].defaultValue) continue;
		// 			this.file.diagnostics.push(LSPPawnErrors.reportWarn(202,202,node.idPos, func.parameters.length, node.vars.length));
		// 			break;
		// 		}
		// 	}
		// }
		// else {
		// 	if(func.parameters.length <= node.vars.length && func.ellipse) {
		// 		func.parameters.forEach(element => {
		// 			this.checkTagMismatch(element.tag, node.vars[param].tag, true, node.vars[param].pos);
		// 			param++;
		// 		});
		// 		for(; param < node.vars.length; param++)
		// 		{
		// 			this.checkTagMismatch(func.ellipse.tag, node.vars[param].tag, true, node.vars[param].pos);
		// 		}
		// 	}
		// 	else {
		// 		if(func.parameters.length === node.vars.length) {
		// 			func.parameters.forEach(element => {
		// 				this.checkTagMismatch(element.tag, node.vars[param].tag, true, node.vars[param].pos);
		// 				param++;
		// 			});
		// 		}
		// 		else {
		// 			this.file.diagnostics.push(LSPPawnErrors.reportWarn(202,202,node.idPos, func.parameters.length, node.vars.length));
		// 		}
		// 	}
		// }
	}

	private addSymbolReference(name: string, symbolRange: Range, symbolNameRange: Range, modifiers: SemanticTokenModifiers[] = [], addPendingReference = false) {
		const symbol = this.curScope.findSymbol(name);
		if(!symbol) {
			if(addPendingReference) {
				// TODO: проврека параметров после разрешения ссылки
				this.addPendingReference(name, symbolNameRange);
			} else {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.UndefinedSymbol, symbolNameRange, {symbolName: name}));
			}
			return undefined;
		} 

		symbol.isUsed = true;

		const reference = new Symbols.SymbolReferance(this.file.path, symbolRange, symbolNameRange, symbol.modifiers);
		symbol.addReferance(reference);
		this.curScope.currentSymbol?.childrens.push(reference);

		return symbol;
	}

	private addTag(name: string, range: Range, nameRange: Range = range): MayBeTag {
		let tag = this.curScope.findTag(name);
		if(!tag) {
			tag = SymbolsFactory.createTag(name, this.file.path, range, nameRange);
			this.curScope.addTag(tag);
			this.symbolManager.add(this.file.path, tag);
			this.curScope.currentSymbol?.childrens.push(tag.defenition);
		} else {
			const reference = new Symbols.SymbolReferance(this.file.path, range, nameRange, tag.modifiers);
			tag.addReferance(reference);
			this.curScope.currentSymbol?.childrens.push(reference);
		}
		return tag;
	}

	private checkOperatorTag(operator: string, resultTag: MayBeTag, errorRange: Range) {
		switch(operator) {
			case "!":
			case "<":
			case ">":
			case "==":
			case "!=":
			case "<=":
			case ">=": {
				console.log(resultTag, this.addTag("bool", errorRange));

				if (resultTag != this.addTag("bool", errorRange)) {
					/* operator X requires a "bool:" result tag */
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InvalidOperatorOverloadResultTag, errorRange, operator,"bool:")); 
				}
				break;
			}
			case "~": {
				if(!this.isDefaultTag(resultTag.name)) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InvalidOperatorOverloadResultTag, errorRange, operator,"_:"));
				}
				break;
			}
		}
	}

	private operatorAdjust() {

	}

	static operatorName(operator: string, firstTag: MayBeTag, secondTag: MayBeTag, paramsCount: number, resultTag: MayBeTag): string {
		if(operator === "=") {
			return `${resultTag.name}=${firstTag.name}`;
		} 
		if(paramsCount === 1 || operator === "~") {
			return `${operator}${secondTag.name}`;
		}
		return `${firstTag.name}${operator}${secondTag.name}`;
	}

	/** Аналог check_userop pawnc. Выполняет существует ли пользовательская перегрузка оператора */
	private checkUserOperator(operator: string, tag1: MayBeTag, tag2: MayBeTag, paramsCount: number) {
		if(this.isDefaultTag(tag1.name) && (paramsCount === 1 || this.isDefaultTag(tag2.name))) {
			return false;
		}

		// if(paramsCount === 2) {
		// 	if(operator === "=") {
		// 		// if (lval != null && (lval->ident==iARRAYCELL || lval->ident==iARRAYCHAR))
 		// 		// 	savealt = true;
		// 	} else {

		// 	}
		// }

		let symbol = this.tagInferer.findUserOperator(operator, tag1, tag2, paramsCount);
		if(!symbol) {
			return false;
		}

		if(symbol === this.curScope.currentFunction) {
			return false;
		}

		symbol.isUsed = true;
		return true;
	}

	
	static isCommutativeOperation(operator: string)
	{
		switch(operator) {
			case "+": // ob_add 
			case "*": // os_mult
			case "=": // ob_eq
			case "!=": // ob_ne
			case "&&": // ob_and
			case "^": // ob_xor
			case "||": // ob_or
				return true;
			default: return false;
		}
	}

}