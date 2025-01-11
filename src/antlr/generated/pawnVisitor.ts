// Generated from .\src\antlr\generated\pawn.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./pawnParser";
import { ProcessorLabelContext } from "./pawnParser";
import { DeclarationContext } from "./pawnParser";
import { EnumContext } from "./pawnParser";
import { EnumMemberContext } from "./pawnParser";
import { EnumIteratorContext } from "./pawnParser";
import { VarDeclarationContext } from "./pawnParser";
import { VarInitContext } from "./pawnParser";
import { FunctionDeclContext } from "./pawnParser";
import { OperatorOverloadContext } from "./pawnParser";
import { NativeAssigmentContext } from "./pawnParser";
import { TagContext } from "./pawnParser";
import { VariableContext } from "./pawnParser";
import { ArrayIndexContext } from "./pawnParser";
import { FuncDeclModifContext } from "./pawnParser";
import { FuncModifContext } from "./pawnParser";
import { StatementContext } from "./pawnParser";
import { CompoundStatmentContext } from "./pawnParser";
import { AssertContext } from "./pawnParser";
import { ExitContext } from "./pawnParser";
import { GotoContext } from "./pawnParser";
import { SleepContext } from "./pawnParser";
import { IfStatementContext } from "./pawnParser";
import { ElseStatementContext } from "./pawnParser";
import { ReturnContext } from "./pawnParser";
import { ConditionContext } from "./pawnParser";
import { SwitchContext } from "./pawnParser";
import { CaseContext } from "./pawnParser";
import { DefaultContext } from "./pawnParser";
import { Case_listContext } from "./pawnParser";
import { RangeContext } from "./pawnParser";
import { ArrayInitContext } from "./pawnParser";
import { ArrayInitMemberContext } from "./pawnParser";
import { AssigmentsContext } from "./pawnParser";
import { GroupingContext } from "./pawnParser";
import { ConstGroupingContext } from "./pawnParser";
import { ConstExpresionContext } from "./pawnParser";
import { PreOperatorsContext } from "./pawnParser";
import { OperationContext } from "./pawnParser";
import { OperatorsContext } from "./pawnParser";
import { VarOrLiteralContext } from "./pawnParser";
import { DeclParamsContext } from "./pawnParser";
import { EllipseContext } from "./pawnParser";
import { ReferenceContext } from "./pawnParser";
import { VarModifiresContext } from "./pawnParser";
import { ConstRValueContext } from "./pawnParser";
import { SizeofContext } from "./pawnParser";
import { NumberContext } from "./pawnParser";
import { FloatContext } from "./pawnParser";
import { IntegerContext } from "./pawnParser";
import { CanBeOverloadedContext } from "./pawnParser";
import { ArefmeticOperatorContext } from "./pawnParser";
import { LogicOperatorContext } from "./pawnParser";
import { CompareOperatorContext } from "./pawnParser";
import { BitwiseOperatorContext } from "./pawnParser";
import { CyclesContext } from "./pawnParser";
import { DoContext } from "./pawnParser";
import { WhileContext } from "./pawnParser";
import { ForContext } from "./pawnParser";
import { ForFirstExpContext } from "./pawnParser";
import { CycleKeywordsContext } from "./pawnParser";
import { LiteralContext } from "./pawnParser";
import { Bool_constContext } from "./pawnParser";
import { PredefinedConstantsContext } from "./pawnParser";
import { StringContext } from "./pawnParser";
import { DocsContext } from "./pawnParser";
import { DocBlockContext } from "./pawnParser";
import { ExpresionContext } from "./pawnParser";
import { UnarOperatorContext } from "./pawnParser";
import { BinarOperatorContext } from "./pawnParser";
import { BinarExpressionOperatorsContext } from "./pawnParser";
import { AssigmentOperatorContext } from "./pawnParser";
import { ArrayIndexOperatorContext } from "./pawnParser";
import { ArrayCharOperatorContext } from "./pawnParser";
import { FunctionCallOperatorContext } from "./pawnParser";
import { TagOperatorContext } from "./pawnParser";
import { DefinedOperatorContext } from "./pawnParser";
import { SizeofOperatorContext } from "./pawnParser";
import { StateOperatorContext } from "./pawnParser";
import { TagofOperatorContext } from "./pawnParser";
import { SymbolContext } from "./pawnParser";
import { LvalueContext } from "./pawnParser";
import { PostIncrementContext } from "./pawnParser";
import { PreIncrementContext } from "./pawnParser";
import { PostDecrementContext } from "./pawnParser";
import { PreDecrementContext } from "./pawnParser";
import { ComplemenContext } from "./pawnParser";
import { TwoComplemenContext } from "./pawnParser";
import { ChainedRelationalOperatorsContext } from "./pawnParser";
import { NotOperatorContext } from "./pawnParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `pawnParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface pawnVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `pawnParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.processorLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessorLabel?: (ctx: ProcessorLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.enum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum?: (ctx: EnumContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.enumMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumMember?: (ctx: EnumMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.enumIterator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumIterator?: (ctx: EnumIteratorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.varDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDeclaration?: (ctx: VarDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.varInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarInit?: (ctx: VarInitContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.operatorOverload`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorOverload?: (ctx: OperatorOverloadContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.nativeAssigment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNativeAssigment?: (ctx: NativeAssigmentContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag?: (ctx: TagContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.arrayIndex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayIndex?: (ctx: ArrayIndexContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.funcDeclModif`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncDeclModif?: (ctx: FuncDeclModifContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.funcModif`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncModif?: (ctx: FuncModifContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.compoundStatment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundStatment?: (ctx: CompoundStatmentContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.assert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssert?: (ctx: AssertContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.exit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExit?: (ctx: ExitContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.goto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoto?: (ctx: GotoContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.sleep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSleep?: (ctx: SleepContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.elseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStatement?: (ctx: ElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn?: (ctx: ReturnContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.switch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch?: (ctx: SwitchContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase?: (ctx: CaseContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefault?: (ctx: DefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.case_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_list?: (ctx: Case_listContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.range`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange?: (ctx: RangeContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.arrayInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInit?: (ctx: ArrayInitContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.arrayInitMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitMember?: (ctx: ArrayInitMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.assigments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssigments?: (ctx: AssigmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.grouping`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrouping?: (ctx: GroupingContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.constGrouping`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstGrouping?: (ctx: ConstGroupingContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.constExpresion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstExpresion?: (ctx: ConstExpresionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.preOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreOperators?: (ctx: PreOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.operation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperation?: (ctx: OperationContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.operators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperators?: (ctx: OperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.varOrLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarOrLiteral?: (ctx: VarOrLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.declParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclParams?: (ctx: DeclParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.ellipse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEllipse?: (ctx: EllipseContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReference?: (ctx: ReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.varModifires`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarModifires?: (ctx: VarModifiresContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.constRValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstRValue?: (ctx: ConstRValueContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.sizeof`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSizeof?: (ctx: SizeofContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.float`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat?: (ctx: FloatContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.canBeOverloaded`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCanBeOverloaded?: (ctx: CanBeOverloadedContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.arefmeticOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArefmeticOperator?: (ctx: ArefmeticOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.logicOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicOperator?: (ctx: LogicOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.compareOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompareOperator?: (ctx: CompareOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.bitwiseOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOperator?: (ctx: BitwiseOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.cycles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCycles?: (ctx: CyclesContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.do`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDo?: (ctx: DoContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.while`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile?: (ctx: WhileContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.for`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor?: (ctx: ForContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.forFirstExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForFirstExp?: (ctx: ForFirstExpContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.cycleKeywords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCycleKeywords?: (ctx: CycleKeywordsContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.bool_const`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_const?: (ctx: Bool_constContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.predefinedConstants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredefinedConstants?: (ctx: PredefinedConstantsContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.docs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocs?: (ctx: DocsContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.docBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocBlock?: (ctx: DocBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.expresion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpresion?: (ctx: ExpresionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.unarOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnarOperator?: (ctx: UnarOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.binarOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinarOperator?: (ctx: BinarOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.binarExpressionOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinarExpressionOperators?: (ctx: BinarExpressionOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.assigmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssigmentOperator?: (ctx: AssigmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.arrayIndexOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayIndexOperator?: (ctx: ArrayIndexOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.arrayCharOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCharOperator?: (ctx: ArrayCharOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.functionCallOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallOperator?: (ctx: FunctionCallOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.tagOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagOperator?: (ctx: TagOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.definedOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinedOperator?: (ctx: DefinedOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.sizeofOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSizeofOperator?: (ctx: SizeofOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.stateOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateOperator?: (ctx: StateOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.tagofOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagofOperator?: (ctx: TagofOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLvalue?: (ctx: LvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.postIncrement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostIncrement?: (ctx: PostIncrementContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.preIncrement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreIncrement?: (ctx: PreIncrementContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.postDecrement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostDecrement?: (ctx: PostDecrementContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.preDecrement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreDecrement?: (ctx: PreDecrementContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.complemen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplemen?: (ctx: ComplemenContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.twoComplemen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTwoComplemen?: (ctx: TwoComplemenContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.chainedRelationalOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChainedRelationalOperators?: (ctx: ChainedRelationalOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.notOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotOperator?: (ctx: NotOperatorContext) => Result;
}

