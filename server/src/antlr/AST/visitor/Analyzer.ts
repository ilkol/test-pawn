import { BaseVisitor } from "./BaseVisitor";
import { Declarations } from "../Nodes/Declarations";
import { EnumDeclaration } from "../Nodes/enum/EnumDeclaration";
import { EnumMember } from "../Nodes/enum/EnumMember";
import { CodeBlock } from "../Nodes/CodeBlock";
import { ReturnStatement } from "../Nodes/ReturnStatement";
import { BinarOperator } from "../Nodes/Operators/BinarOperator";
import { IntLiteral } from "../Nodes/Literals/IntLiteral";
import { UnarOperator } from "../Nodes/Operators/UnarOperator";
import { OperatorNew } from "../Nodes/Operators/OperatorNew";
import { FunctionDeclaration, FunctionModifire } from "../Nodes/Functions/FunctionDeclaration";
import { FunctionCall } from "../Nodes/Functions/FunctionCall";
import { IScope } from "../../Scopes/IScope";
import { Scope } from "../../Scopes/Scope";
import { Declaration } from "../Nodes/Declaration";
import { Variable } from "../Nodes/Variable";
import { FunctionDeclarationParameter } from "../Nodes/Functions/FunctionDeclarationParameter";
import { StringLiteral } from "../Nodes/Literals/StringLiteral";
import { WhileCycle } from "../Nodes/Cycles/WhileCycle";
import { ForCycle } from "../Nodes/Cycles/ForCycle";
import { VarDeclaration } from "../Nodes/Variables/VarDeclaration";
import { Expression } from "../Nodes/Expresion";
import { AssigmentOperator } from "../Nodes/Operators/AssigmentOperator";
import { ArrayNode } from "../Nodes/Variables/Array";
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
import { NamedArgument } from "../Nodes/Functions/NamedArgument";
import { TernarOperator } from "../Nodes/Operators/TernarOperator";
import { ArrayInit } from "../Nodes/Literals/ArrayInit";
import { Ellipse } from "../Nodes/Operators/Ellipse";

/** Состояние проверки аргумента функции при ее вызове */
enum ArgumentState {
	/** Ещё не проверен */
	Unset,
	/** Аргумент пропущен (_) */
	Skiped,
	/** Аргумент проверен */
	Done
}

export class Analyzer extends BaseVisitor
{
	public declaraedFunctions: Map<string, Tag> = new Map();
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
	private pendingReferences: Map<string, FunctionCall[]> = new Map();

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
			if(!node.left.isLValue) {
				console.log(node.left);
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MustBeLValue, node.range));
			}
			// const symbol = this.addSymbolReference(node.left.id, node.left.pos, node.left.idPos, [SemanticTokenModifiers.modification]);
			// if(!symbol) {
			// 	return;
			// }
			// if(!(symbol instanceof Symbols.Variable || symbol instanceof Symbols.Parameter || symbol instanceof Symbols.EnumMember || symbol instanceof Symbols.EnumMember || symbol instanceof Symbols.Macro)) {
			// 	this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InvalidFunctionCall, node.range));
			// }
			// else if(symbol.isConst) {					
			// 	this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MustBeLValue, node.left.range));
			// }
		}
	}
	beforeVisitArrayInit(node: ArrayInit): void {

	}
	afterVisitArrayInit(node: ArrayInit): void {
		
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
		for(const tag of node.tags) {
			symbol.validTags.push(this.addTag(tag.id, tag.range, tag.idPos));
		}

		if(this.curScope.findSymbol(symbol.name, true)) {
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.SymbolAlreadyDefined, node.pos, node.id));
		} else {
			const findedSymbol = this.curScope.findSymbol(symbol.name);
			if(findedSymbol && !(findedSymbol instanceof Symbols.Function)) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.SymbolShadowing, node.pos, node.id));
			} 
		}

		this.symbolManager.add(this.file.path, symbol);
		this.curScope.add(symbol);

		this.curScope.currentSymbol?.childrens.push(symbol.defenition);
		this.curScope.currentFunction?.parameters.push(symbol);

		node.symbol = symbol;

		
	}
	afterVisitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void {
		
		if(node.dimensions.length) {
			if(node.reference) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.CanBeReferenceToArray, node.pos, node.id));
			}
		}
		if(node.dimensions.length >= Pawn.MAX_ARRAY_DIMENSIONS) {
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MaxArrayDimenssions, node.pos));
		}

		const symbol = node.symbol!;
		symbol.hasDefaultValue = node.defaultValue ? true : false;
		// TODO: тут должна быть првоерка tagof/sizeof

		if(node.isConstant) {
			symbol.addModifier(Symbols.VariableModifire.Const)
		}
		// TODO: тут есть какой-то written (doarg)

		if(this.curScope.currentFunction?.hasModifier(FunctionModifire.Public)) {
			symbol.isUsed = true;
		}
	}
	beforeVisitVariable(node: Variable): void {
	
	}
	afterVisitVariable(node: Variable): void {
		const symbol = this.addSymbolReference(node.id, node.pos, node.idPos);
		if(!symbol) {
			return;
		}
		if(symbol instanceof Symbols.Enum || symbol instanceof Symbols.EnumMember 
			|| symbol instanceof Symbols.Function 
			|| symbol instanceof Symbols.Parameter 
			|| symbol instanceof Symbols.Variable) {
			node.symbol = symbol;
		}
		node.inferredTag = this.tagInferer.inferTag(node);
		if(symbol instanceof Symbols.EnumMember) {
			// TODO: вычсиление значение перечисления
			// node.constExpr = symbol.
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

	// beforeVisitVarInit(node: VariableInit): void {
		

	// }
	// afterVisitVarInit(node: VariableInit): void {
	// 	const modifiers: SemanticTokenModifiers[] = [];
	// 	if(node.isConstant) {
	// 		modifiers.push(SemanticTokenModifiers.readonly);
	// 	}
	// 	const symbol = SymbolsFactory.createVariable(node.id, this.file.path, node.range, node.idPos, modifiers);
	// 	this.symbolManager.add(this.file.path, symbol, this.curScope.currentSymbol === undefined);
	// 	this.curScope.add(symbol);
	// 	this.curScope.currentSymbol?.childrens.push(symbol.defenition);
	// 	symbol.tag = this.addTag(node.tag.id, node.tag.pos, node.tag.idPos);

	// 	if(node.rightValue) {
	// 		const expectedTag = symbol.tag;
	// 		const actualTag = node.rightValue.inferredTag;
			
	// 		this.checkTagMismatch(expectedTag, actualTag, true, node.rightValue.pos);
	// 	}			
	// }
	beforeVisitFunctionCall(node: FunctionCall): void {

	}
	afterVisitFunctionCall(node: FunctionCall): void {
		const symbol = this.addSymbolReference(node.id, node.pos, node.idPos, [], true);
		if(symbol instanceof Symbols.Function) {
			node.symbol = symbol;
		}
		node.inferredTag = this.tagInferer.inferTag(node);
		
		if(!symbol) {
			const func = this.declaraedFunctions.get(node.id);
			if(func) {
				const resultTag = this.addTag(node.tag.id, node.tag.pos, node.tag.idPos);
				if(resultTag !== SymbolsFactory.defaultTag) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.FunctionWithTagUsedBeforeDeclaration, node.idPos));
				}
			}
			this.addPendingReference(node.id, node);
			return;
		} 
		if(!(symbol instanceof Symbols.Function))  {
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InvalidFunctioncall, node.idPos));
			return;
		}

		this.checkCallFunctionParameters(symbol, node);
	}

	private addPendingReference(functionName: string, callHeadrRange: FunctionCall) {
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
		const returnNotDefaultTag = functionSymbol.returnTag !== SymbolsFactory.defaultTag;
		pending.forEach(func => {
			functionSymbol.addReferance(new Symbols.SymbolReferance(this.file.path, func.pos, func.idPos));
			if(returnNotDefaultTag) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.FunctionWithTagUsedBeforeDeclaration, func.idPos));
			}
			this.checkCallFunctionParameters(functionSymbol, func);
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
		switch(node.operator) {
			case "++":
			case "--":
				if(!node.value?.isLValue) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MustBeLValue, node.value?.range ?? node.range));
				}
				if(node.value instanceof Variable && !(node.value.symbol instanceof Symbols.Function) && node.value.symbol?.hasModifier(Symbols.VariableModifire.Const)) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MustBeLValue, node.value?.range ?? node.range));
				}
				break;
			case "~":
				node.constExpr = ~node.constExpr;
				break;
			case "!":
				if(node.value) {
					if(node.value.inferredTag && this.checkUserOperator(node.operator, node.value!.inferredTag, SymbolsFactory.defaultTag, 1)) {
						node.constExpr = 0;
					} else {
						node.constExpr = +!node.value.constExpr;
						node.inferredTag = SymbolsFactory.boolTag;
					}
				}
				break;
			case "-":
				if(node.value) {
					// TODO: проверка тега RATIONAL
					if(node.value.isConstExpr) {
						
					} else if(node.value.inferredTag && this.checkUserOperator(node.operator, node.value.inferredTag, SymbolsFactory.defaultTag, 1)) {
						node.constExpr = 0;
					} else {
						node.constExpr = -node.constExpr;
					}
				}
				break;
			case "defined":
				// TODO: поиск символа
				// node.constExpt = this.curScope.findSymbol(node.expresion);
				if(node.value instanceof Variable) {
					node.constExpr = this.curScope.findSymbol(node.value.id) !== undefined ? 1 : 0;
					node.inferredTag = SymbolsFactory.boolTag;

				}
				break;
			case "sizeof":
				if(node.value) {

					if(node.value instanceof Variable) {
						const symbol = this.curScope.findSymbol(node.value.id);
						if(!symbol) {
							this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.UndefinedSymbol, node.value.range, node.value.id));
						}
						
						// TODO:
						// if(symbol.isConstExp) {
						// 	this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.ConstSymbolHasnotSize, node.value.range));
						// }
						if(symbol instanceof Symbols.Function) {
							this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.FunctionSymbolHasnotSize, node.value.range));
						}
						// if(!symbol.isDefined) {
						// 	this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.UndefinedSymbol, node.value.range, node.value.id));
						// }
						node.constExpr = 1;
						// if(symbol instanceof Symbols.Variable) {
						// 	symbol.dimensions.forEach(dim => {
								
						// 	});
						// }

					} else {
						this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InvalidSymbolName, node.value.range, "unknown"));
					}
				}
				// TODO: вычисление размера символа
				break;
			case "tagof":
				node.constExpr = 1;
				// TODO: вычисление тега
				break;
			case "char":
				if(node.value && node.value.isConstExpr) {
					node.constExpr = Math.floor((node.value.constExpr + 3) / 4);
				}
				break;
		}
		node.inferredTag = this.tagInferer.inferTag(node);
	}
	beforeVisitLiteral(node: IntLiteral | FloatLiteral): void {
	
	}
	afterVisitLiteral(node: IntLiteral | FloatLiteral): void {
		node.inferredTag = this.tagInferer.inferTag(node);
		node.constExpr = node.value;
	}
	beforeVisitBinarOperator(node: BinarOperator): void {
		
			
	}
	afterVisitBinarOperator(node: BinarOperator): void {
		if(!(node.left && node.right)) {
			return;
		}
		
		node.setRange(node.left.pos.start, node.right.pos.end);
		node.inferredTag = this.tagInferer.inferTag(node);

		const leftTag = node.left.inferredTag;
		const rightTag = node.right.inferredTag;

		if (!leftTag || !rightTag || !this.tagInferer.findUserOperator(node.operator, leftTag, rightTag, 2)) {
			this.checkTagMismatch(leftTag, rightTag, false, node.range);
   		}

		if(node.left.isConstExpr && node.right.isConstExpr) {
			let modif: ((first: number, second: number) => number) | undefined = undefined;
			switch(node.operator) {
				case "||": 
					modif  = (first, second) => first || second;
					break;
				case "&&": 
					modif  = (first, second) => first && second;
					break;
				case "+": 
					modif  = (first, second) => first + second;
					break;
				case "-": 
					modif  = (first, second) => first - second;
					break;
				case "|": 
					modif  = (first, second) => first | second;
					break;
				case "^": 
					modif  = (first, second) => first ^ second;
					break;
				case "&": 
					modif  = (first, second) => first & second;
					break;
				case "==": 
					modif  = (first, second) => first == second ? 1 : 0;
					break;
				case "!=": 
					modif  = (first, second) => first != second ? 1 : 0;
					break;
				case "<=": 
					modif  = (first, second) => first <= second ? 1 : 0;
					break;
				case ">=": 
					modif  = (first, second) => first >= second ? 1 : 0;
					break;
				case "<": 
					modif  = (first, second) => first < second ? 1 : 0;
					break;
				case ">": 
					modif  = (first, second) => first > second ? 1 : 0;
					break;
				case ">>": 
					modif  = (first, second) => first >> second ;
					break;
				case "<<": 
					modif  = (first, second) => first << second ;
					break;
				case "*": 
					modif  = (first, second) => first * second ;
					break;
				case "/": 
					modif  = (first, second) => first / second ;
					break;
				case "%": 
					modif  = (first, second) => first % second ;
					break;
				default: {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.ExpressionError, node.range));
				}
			}
			node.constExpr = modif ? modif(node.left.constExpr, node.right.constExpr) : 0;
		} else {
			node.constExpr = 0;
		}
		
	}
	beforeVisitTernarOperator(node: TernarOperator): void {
		
			
	}
	afterVisitTernarOperator(node: TernarOperator): void {
		if(!(node.onTrue && node.onFalse && node.condition)) {
			return;
		}

		node.inferredTag = this.tagInferer.inferTag(node);

		const onTrue = node.onTrue.inferredTag;
		const onFalse = node.onFalse.inferredTag;

		if (onTrue && onFalse) {
			this.checkTagMismatch(onTrue, onFalse, false, node.onFalse.range);
   		}
		
	}
	beforeVisitReturn(node: ReturnStatement): void {
	
	}
	afterVisitReturn(node: ReturnStatement): void {
		const currentFunction = this.curScope.currentFunction;
		if(!currentFunction) {
			throw new Error("Неожиданный return");
		}
		
		// TODO: error 78
		if(!node.value) {
			if(!currentFunction.shuldReturnValue) {
				currentFunction.emptyReturnsRanges.push(node.range);
				return;
			}
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.ShoutdReturnValue, node.range, currentFunction.name));
			return;
		}
		if(!currentFunction.shuldReturnValue) {
			currentFunction.emptyReturnsRanges.forEach(range => {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.ShoutdReturnValue, range, currentFunction.name));
			});
			if(currentFunction.emptyReturnsRanges.length) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MixEmptyReturnAndReturnValue, node.range));
			}
			currentFunction.emptyReturnsRanges = [];
		}
		currentFunction.shuldReturnValue = true;

		
		this.checkTagMismatch(currentFunction.returnTag, node.value.inferredTag, true, node.value.pos);
	}
	beforeVisitCodeBlock(node: CodeBlock): void {
		this.extendScope(node.range);
	}
	afterVisitCodeBlock(node: CodeBlock): void {
		this.restrictScope();
	}
	beforeVisitEnumMember(node: EnumMember): void {
		const symbol = SymbolsFactory.createEnumMember(node.id, this.file.path, node.range, node.idPos, node.parent?.symbol);
		node.symbol = symbol;
		this.symbolManager.add(this.file.path, symbol);
		node.parent?.symbol?.members.push(symbol);
		this.curScope.currentSymbol?.childrens.push(symbol.defenition);
		this.curScope.parent?.add(symbol);
	}
	afterVisitEnumMember(node: EnumMember): void {	
		const symbol = node.symbol;
		if(symbol) {
			symbol.value = node.initValue ? this.getConstantExpression(node.initValue) : symbol.parentSymbol?.lastValue ?? 0;
			// TODO: увелечение индекса по правилу, описанному пользователем
			if(symbol.parentSymbol) {
				symbol.parentSymbol.lastValue = symbol.value + 1;
			}
		}		
	}
	beforeVisitEnumDeclaration(node: EnumDeclaration): void {
		const name = node.id || "<anonymous>";
		const symbol = SymbolsFactory.createEnum(name, this.file.path, node.range, node.idPos, true);	
		this.symbolManager.add(this.file.path, symbol, true);	
		this.curScope.add(symbol);
		node.symbol = symbol;
		
		let tag = node.explicitTag ? this.addTag(node.explicitTag.id, node.explicitTag.idPos) : SymbolsFactory.defaultTag;
		if(node.id && !node.explicitTag) {
			tag = this.addTag(node.id, node.idPos);
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
			ranges.forEach(func => {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.UndefinedSymbol, func.idPos, id));
			});
		});
		this.pendingReferences.clear();

		this.restrictScope(true, true);
	}

	beforeVisitOperatorOverload(node: OperatorOverload): void {
		this.evaluateFunctionDeclaration(node, true);
	}
	afterVisitOperatorOverload(node: OperatorOverload): void {
		this.restrictScope(node.code ? true : false);
	}
	
	beforeVisitFunctionDeclaration(node: FunctionDeclaration): void {
		this.evaluateFunctionDeclaration(node);
	}
	afterVisitFunctionDeclaration(node: FunctionDeclaration): void {
		this.restrictScope(node.code ? true : false);

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
		const modifiers: SemanticTokenModifiers[] = [node.initValue ? SemanticTokenModifiers.definition : SemanticTokenModifiers.declaration];
		if(node.isConstant) {
			modifiers.push(SemanticTokenModifiers.readonly);
		}
		if(node.hasModifier(Symbols.VariableModifire.Static)) {
			modifiers.push(SemanticTokenModifiers.static);
		}
		const symbol = SymbolsFactory.createVariable(node.id, this.file.path, node.range, node.idPos, modifiers);
		symbol.addModifier(node.modifires);
		
		node.symbol = symbol;
		this.symbolManager.add(this.file.path, symbol, this.curScope.currentSymbol === undefined);
		this.curScope.add(symbol);
		symbol.tag = this.addTag(node.tag.id, node.tag.pos, node.tag.idPos);
		this.curScope.currentSymbol?.childrens.push(symbol.defenition);

		
	}
	afterVisitVariableDeclaration(node: VarDeclaration<Symbols.Variable>): void {
		const symbol = node.symbol;
    	if (!symbol || !node.initValue) return;
		if(!(node.initValue instanceof ArrayInit)) {
			const expectedTag = symbol.tag;
			const actualTag = node.initValue.inferredTag = this.tagInferer.inferTag(node.initValue);
			
			this.checkTagMismatch(expectedTag, actualTag, true, node.initValue.pos);
			return;
		}

		this.checkInitArraySize([node.initValue], node.dimensions);

		// for(let i = 0; i < node.dimensions.length; i++) {
		// 	// TODO: проверка размерности массивов
		// 	if(val.value[i] < node.dimensions[i]) {
		// 		this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.ArrayNotFullyInit, val.range));
		// 	} else if(val.value[i] > node.dimensions[i]) {
		// 		this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InitDataExceededDeclareSize, val.range));
		// 	}
		// }
	}

	private checkInitArraySize(values: (Ellipse | Expression)[], dims: (Expression | null)[], depth: number = 0) {
		const dim = dims[depth];
		if(!dim) {
			return;
		}
		let declaredSize = dim.constExpr;
		
		if(dim instanceof Variable) {
			const enumRoot = this.curScope.findSymbol(dim.id);
			if(!(enumRoot instanceof Symbols.Enum)) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MustBeConstantExpression, dim.range));
				return;
			}
			declaredSize = enumRoot.members.length;
		}

		for(const val of values) {
			if(val instanceof Ellipse) {
				continue;
			}
			if(val instanceof ArrayInit) {
				if(val.value.length > declaredSize) {
					if(declaredSize !== 0) {
						this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InitDataExceededDeclareSize, val.range));
					}
				} else if(val.value.length < declaredSize) {
					if(depth === dims.length - 1) {
						this.file.diagnostics.push(LSPPawnErrors.reportCustom(
							Locale.t("Vector partially initialized. Remaining %s elements will be 0.", declaredSize - val.value.length), 
							DiagnosticSeverity.Hint, 
							val.range
						));
					}
					else {
						this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.ArrayNotFullyInit, val.range));
					}
				}
				this.checkInitArraySize(val.value, dims, depth + 1);
			}
		}
	}

	private extendScope(range: Range, newSymbol?: Symbols.SymbolReferance | undefined) {
		this.curScope = this.curScope.extend(range, newSymbol);
		this.scopeManager.register(this.curScope);
	}
	private restrictScope(checkUsed: boolean = true, skipConstatns: boolean = false) {
		if(checkUsed) {
			for(const symbol of this.curScope.getLocalSymbols()) {
				if(skipConstatns && symbol instanceof Symbols.Variable && symbol.isConst) {
					continue;
				}
				if(!symbol.isUsed) {
					if(symbol instanceof Symbols.Function && (!symbol.hasImplementation || symbol.hasModifier(FunctionModifire.Native | FunctionModifire.Stock | FunctionModifire.Public))) {
						continue;
					}
					if(symbol instanceof Symbols.Variable  && symbol.hasModifier(Symbols.VariableModifire.Stock)) {
						continue;
					}
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.SymbolIsNeverUsed, symbol.defenition.tokenRange, symbol.name));
				}
			}
		}
		if(this.curScope.parent)
			this.curScope = this.curScope.parent;
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


	private checkMultyTagMismatch(formalTags: MayBeTag[], actualTag: MayBeTag, range: Range) {
		if(this.checkAllTags(formalTags, actualTag)) {
			return;
		}
		
		const tags = formalTags.length ? formalTags : [SymbolsFactory.defaultTag];
		const names: string[] = tags.map((tag) =>tag.name);
		const lastTag = names.pop();
		const formalTag = names.join(", ");
		const formalTagsName = formalTag === "" ? `${lastTag},` : `${formalTag} or ${lastTag};`;
		this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.TagMismatch, range, tags.length === 1 ? Locale.t("tag") : Locale.t("tags"), formalTagsName, actualTag.name))
	}	

	private checkAllTags(formalTags: MayBeTag[], actualTag: MayBeTag): boolean {
		for(const formalTag of formalTags) {
			if(this.simpleCheckTagMismatch(formalTag.name, actualTag.name, true)) {
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
		return allowCoerce && this.isDefaultTag(formalTag) && !this.isTagFixed(actualTag);
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
		let namedArguments = false;
		let argPos = 0, argNumber = 0;
		const usedArgs: ArgumentState[] = Array(functionSymbol.parameters.length).fill(ArgumentState.Unset);

		for(const argument of node.vars) {
			if(argNumber >= functionSymbol.parameters.length) {
				if(!functionSymbol.ellipse) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.ArgumentCountMismatch, argument.pos, argNumber));
					break;
				} 
				const value = argument instanceof NamedArgument ? argument.value : argument;
				if(value) {
					const tag = value.inferredTag = this.tagInferer.inferTag(value);
					this.checkMultyTagMismatch(functionSymbol.ellipse.validTags, tag, value.range);
				}
				continue;
			}
			const argSymbol =  this.curScope.findSymbol(argument.name);
			if(argSymbol) {
				argSymbol.isUsed = true;
			}

			if(argument instanceof NamedArgument && argument.id !== "_") {
				namedArguments = true;
				argPos = functionSymbol.parameters.findIndex(param => param.name === argument.id);
				if(argPos === -1) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.UndefinedSymbol, argument.idPos, argument.id));
					break;
				}
			} else {
				if(namedArguments) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.NamedargumentsMustBeAfterPositional, argument.pos));
				}
				argPos = argNumber;
			}

			if(argPos >= Pawn.MAX_PARAMETERS_COUNt) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MaxArguments, argument.pos));
				break;
			}
			if(usedArgs[argPos] !== ArgumentState.Unset) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.ArgumentAlreadySet, argument.pos));
			}

			if(argument instanceof NamedArgument && argument.id === "_") {
				usedArgs[argPos] = ArgumentState.Skiped;
				/*if (arg[argidx].ident==0 || arg[argidx].ident==iVARARGS) {
					error(202);
				} else */if (!functionSymbol.parameters[argPos].hasDefaultValue) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.ArgumentHasntDefaultValue, argument.pos, argPos + 1));
				}
				// if (arg[argidx].ident!=0 && arg[argidx].ident!=iVARARGS)
  				// 	argidx++;
			} else {
				usedArgs[argPos] = ArgumentState.Done;
				const parameter = functionSymbol.parameters[argPos];
				// if(!parameter) {
					// 202
				// } else if() {

				// }
			}
			argNumber++;

		}

		// Проверка пропущенных аргументов, иимеющих значения по умолчанию
		let argindex = 0;
		for(const parameter of functionSymbol.parameters) {
			if(usedArgs[argindex] === ArgumentState.Done) continue;
			if(!parameter.hasDefaultValue) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.ArgumentCountMismatch, node.pos, argindex));
			}

			usedArgs[argindex] = ArgumentState.Done;
			argindex++;
		}

		// Проверка пропущенных аргументов, имеющих в качестве значений по умолчанию операторы tagof и sizeof
		for(const parameter of functionSymbol.parameters) {
			if(usedArgs[argindex] === ArgumentState.Done) continue;
		}

	}

	private addSymbolReference(name: string, symbolRange: Range, symbolNameRange: Range, modifiers: SemanticTokenModifiers[] = [], addPendingReference = false) {
		const symbol = this.curScope.findSymbol(name);
		if(!symbol) {
			if(addPendingReference) {
				// TODO: проврека параметров после разрешения ссылки
				// this.addPendingReference(name, symbolNameRange);
			} else {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.UndefinedSymbol, symbolNameRange, name));
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

	static operatorName(operator: string, firstTag: MayBeTag, secondTag: MayBeTag, paramsCount: number, resultTag: MayBeTag): string {
		if(operator === "=") {
			return `${resultTag.name}=${firstTag.name}`;
		} 
		if(paramsCount === 1 || operator === "~") {
			return `${operator}${firstTag.name}`;
		}
		return `${firstTag.name}${operator}${secondTag.name}`;
	}

	/** Аналог check_userop pawnc. Выполняет существует ли пользовательская перегрузка оператора */
	private checkUserOperator(operator: string, tag1: MayBeTag, tag2: MayBeTag, paramsCount: number) {
		if(this.isDefaultTag(tag1.name) && (paramsCount === 1 || this.isDefaultTag(tag2.name))) {
			return false;
		}

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

	/**
	 * Ищет символ функции либо создает его. Аналог из pawnc fetchfunc
	 */
	private ensureFunctionSymbol(name: string, tag: MayBeTag, range: Range, idRange: Range, declaration: boolean = true): Symbols.Function | null {
		let symbol = this.scopeManager.globalScope.findSymbol(name);
		if(symbol) {
			if(!(symbol instanceof Symbols.Function)) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.SymbolAlreadyDefined, idRange, name));
				return null;
			}
			if(symbol.hasModifier(FunctionModifire.Native)) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.SymbolAlreadyDefined, idRange, name));
			}
			if(symbol.returnTag != tag) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MismatchPrototype, idRange));
			}
			
		} else {
			symbol = SymbolsFactory.createFunction(name, this.file.path, range, idRange);
			this.symbolManager.add(this.file.path, symbol, true);
		}
		// тут должна быть проверка deprecated
		return symbol as Symbols.Function;
	}
	private createFunctionStub(node: FunctionDeclaration, symbol: Symbols.Function) {
		// TODO: тут в оригинальном компиляторе есть проверка размерности...
		const isPublic = node.hasModifier(FunctionModifire.Public) || node.id[0] === '@';
		const isStocked = node.hasModifier(FunctionModifire.Stock);
		const isNative = node.hasModifier(FunctionModifire.Native);
		const isStatic = node.hasModifier(FunctionModifire.Static);
		if(isNative) {
			if(isPublic || isStocked || isStatic) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InvalidModifiersCombination, node.pos));
			}
		} else {
			// if(node.hasModifier(FunctionModifire.Public | FunctionModifire.Stock | FunctionModifire.Static)) {

			// }
		}


		if(isNative) {
			symbol.addModifier(FunctionModifire.Native);
			// TODO: тут идёт установка текущей библы			
		} else if(isPublic) {
			symbol.addModifier(FunctionModifire.Public);
		}
		symbol.addModifier(FunctionModifire.Forward);

		if(node instanceof OperatorOverload) {
			this.operatoradjust(node, symbol);
		}

		// TODO: дальше тут есть присвоение функции для нативок
		// Плюс к тому создания массива с таким же идентификатором,
		// если функция возвращает массив
		
	}

	private evaluateFunctionDeclaration(node: FunctionDeclaration | OperatorOverload, isOverload = false) {
		const symbol = this.ensureFunctionSymbol(node.id, this.addTag(node.tag.id, node.tag.pos, node.tag.idPos), node.range, node.idPos);
		if(!symbol) {
			return;
		}
		symbol.returnTag = this.addTag(node.tag.id, node.tag.pos, node.tag.idPos);
		const ellipse = node.ellipse;
		if(ellipse && ellipse.tags) {
			symbol.ellipse = {
				validTags: ellipse.tags.map(tag => this.addTag(tag.id, tag.pos, tag.idPos))
			};
		}
		node.symbol = symbol;
		if(isOverload) {
			this.checkOperatorTag((<OperatorOverload>node).operator, symbol.returnTag, node.tag.idPos);
		}

		
		if(node.hasModifier(FunctionModifire.Forward | FunctionModifire.Native)) {
			this.createFunctionStub(node, symbol);
		} else {

			const isStocked = node.stock;
			const isStatic = node.hasModifier(FunctionModifire.Static);
			const isPublic = node.hasModifier(FunctionModifire.Public) || node.id[0] === '@';
			if(isPublic && isStocked) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.InvalidModifiersCombination, node.idPos));
			}
		
			if(isPublic) {
				symbol.addModifier(FunctionModifire.Public);
			}
			if(isStatic) {
				symbol.addModifier(FunctionModifire.Static);
			}
	
			if(isPublic && !symbol.hasModifier(FunctionModifire.Forward)) {
				this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.PublicBeforeForward, node.idPos, symbol.name));
			}
	
			if(isOverload) {
				this.operatoradjust(node as OperatorOverload, symbol);
			}
			const argCount = node.parameters.length;
			if(symbol.name === "main" || symbol.name === "entry") {
				if(argCount) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.FunctionMaynotHaveArguments, node.pos));
				}
				symbol.isUsed = true;
			}
		
			if(node.code === undefined) {
				symbol.addModifier(FunctionModifire.Forward);
				// this.file.diagnostics.push(PawnErrors.report(218, node.pos));
			} else {
				symbol.hasImplementation = true;
			}
			if(isStocked) {
				symbol.addModifier(FunctionModifire.Stock);
			}
		}

		this.scopeManager.globalScope.add(symbol);

		this.resolvePendingReferences(symbol);

		if(node.parameters.length >= Pawn.MAX_PARAMETERS_COUNt) {
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MaxArguments, node.pos));
		}

		this.extendScope(node.range, symbol.defenition);
		this.curScope.currentFunction = symbol;
	}
	
	// like operatoradjust in pawnc
	private operatoradjust(node: OperatorOverload, symbol: Symbols.Function) {
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
				} else {
					tags.push(SymbolsFactory.defaultTag);
				}
			}
			if(node.operator === "~" && count == 0) {
				if(param.dimensions.length === 0) {
					this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MustBeArrayArgument, param.pos, param.id));
				}
			} else {
				if(param.dimensions.length || param.reference) {
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

		const newName = Analyzer.operatorName(node.operator, tags[0], tags[1], count, symbol.returnTag);
		if(this.scopeManager.globalScope.findSymbol(newName)) {
			// TODO: должна быть проверка реализована функция или просто объявлена
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.SymbolAlreadyDefined, node.pos, newName));
		} else {
			this.scopeManager.globalScope.add(symbol);
		}
		this.curScope.renameSymbol(symbol.name, newName);
		symbol.name = node.id  = newName;
		

	}

	private getConstantExpression(expr: Expression): number {
		if(!expr.isConstExpr) {
			this.file.diagnostics.push(PawnErrors.report(PawnErrors.Code.MustBeConstantExpression, expr.range));
			return 0;
		}
		return expr.constExpr;
	}
}