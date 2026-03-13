// Generated from ./server/src/antlr/generated/pawn.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./pawnParser";
import { ProcessorLabelContext } from "./pawnParser";
import { DeclarationContext } from "./pawnParser";
import { EnumContext } from "./pawnParser";
import { EnumMemberContext } from "./pawnParser";
import { EnumIteratorContext } from "./pawnParser";
import { VarDeclarationContext } from "./pawnParser";
import { VariableDeclarationContext } from "./pawnParser";
import { FunctionDeclContext } from "./pawnParser";
import { OperatorOverloadContext } from "./pawnParser";
import { FunctionDeclarationParamsContext } from "./pawnParser";
import { NativeAssigmentContext } from "./pawnParser";
import { TagContext } from "./pawnParser";
import { PluralTagContext } from "./pawnParser";
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
import { ArrayInitContext } from "./pawnParser";
import { ArrayInitMemberContext } from "./pawnParser";
import { AssigmentsContext } from "./pawnParser";
import { DeclParamsContext } from "./pawnParser";
import { EllipseContext } from "./pawnParser";
import { ReferenceContext } from "./pawnParser";
import { VarModifiresContext } from "./pawnParser";
import { NumberContext } from "./pawnParser";
import { FloatContext } from "./pawnParser";
import { IntegerContext } from "./pawnParser";
import { HexContext } from "./pawnParser";
import { RationalContext } from "./pawnParser";
import { BinaryContext } from "./pawnParser";
import { CanBeOverloadedContext } from "./pawnParser";
import { ArefmeticOperatorContext } from "./pawnParser";
import { CompareOperatorContext } from "./pawnParser";
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
import { AssigmentExpressionContext } from "./pawnParser";
import { TernaryExpressionContext } from "./pawnParser";
import { LogicalOrExpressionContext } from "./pawnParser";
import { LogicalAndExpressionContext } from "./pawnParser";
import { EqualOrNotExpressionContext } from "./pawnParser";
import { CompareExpressionContext } from "./pawnParser";
import { BitOrExpressionContext } from "./pawnParser";
import { XorExpressionContext } from "./pawnParser";
import { BitAndExpressionContext } from "./pawnParser";
import { BitShiftExpressionContext } from "./pawnParser";
import { AdditiveExpressionContext } from "./pawnParser";
import { MultiplicativeExpressionContext } from "./pawnParser";
import { PrefixExpressionContext } from "./pawnParser";
import { PostfixExpressionContext } from "./pawnParser";
import { FunctionOrArrayExpressionContext } from "./pawnParser";
import { PrimaryExpressionContext } from "./pawnParser";
import { LiteralOrSymbolContext } from "./pawnParser";
import { CompoundExpressionContext } from "./pawnParser";
import { ExpresionContext } from "./pawnParser";
import { FunctionCallOperatorContext } from "./pawnParser";
import { FunctionArgumentContext } from "./pawnParser";
import { SymbolContext } from "./pawnParser";


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
	 * Visit a parse tree produced by `pawnParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

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
	 * Visit a parse tree produced by `pawnParser.functionDeclarationParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclarationParams?: (ctx: FunctionDeclarationParamsContext) => Result;

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
	 * Visit a parse tree produced by `pawnParser.pluralTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPluralTag?: (ctx: PluralTagContext) => Result;

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
	 * Visit a parse tree produced by `pawnParser.hex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHex?: (ctx: HexContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.rational`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRational?: (ctx: RationalContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.binary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary?: (ctx: BinaryContext) => Result;

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
	 * Visit a parse tree produced by `pawnParser.compareOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompareOperator?: (ctx: CompareOperatorContext) => Result;

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
	 * Visit a parse tree produced by `pawnParser.assigmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssigmentExpression?: (ctx: AssigmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.ternaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.equalOrNotExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualOrNotExpression?: (ctx: EqualOrNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.compareExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompareExpression?: (ctx: CompareExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.bitOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOrExpression?: (ctx: BitOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.xorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXorExpression?: (ctx: XorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.bitAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitAndExpression?: (ctx: BitAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.bitShiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitShiftExpression?: (ctx: BitShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.prefixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixExpression?: (ctx: PrefixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.functionOrArrayExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionOrArrayExpression?: (ctx: FunctionOrArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.literalOrSymbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralOrSymbol?: (ctx: LiteralOrSymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.compoundExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundExpression?: (ctx: CompoundExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.expresion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpresion?: (ctx: ExpresionContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.functionCallOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallOperator?: (ctx: FunctionCallOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.functionArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionArgument?: (ctx: FunctionArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `pawnParser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;
}

