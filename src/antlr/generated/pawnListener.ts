// Generated from .\src\antlr\generated\pawn.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
import { DeclParamsContext } from "./pawnParser";
import { EllipseContext } from "./pawnParser";
import { ReferenceContext } from "./pawnParser";
import { VarModifiresContext } from "./pawnParser";
import { NumberContext } from "./pawnParser";
import { FloatContext } from "./pawnParser";
import { IntegerContext } from "./pawnParser";
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
import { ExpresionContext } from "./pawnParser";
import { TagableExpressionContext } from "./pawnParser";
import { TernarOperatorContext } from "./pawnParser";
import { ChainedRelationalOperatorContext } from "./pawnParser";
import { BinarExpressionOperatorContext } from "./pawnParser";
import { UnarOperatorContext } from "./pawnParser";
import { PreExpresionOperatorContext } from "./pawnParser";
import { PreSymbolOperatorContext } from "./pawnParser";
import { BinarOperatorContext } from "./pawnParser";
import { BinarExpressionOperatorsContext } from "./pawnParser";
import { AssigmentOperatorContext } from "./pawnParser";
import { ArrayIndexOperatorContext } from "./pawnParser";
import { ArrayCharOperatorContext } from "./pawnParser";
import { FunctionCallOperatorContext } from "./pawnParser";
import { TagOperatorContext } from "./pawnParser";
import { SymbolContext } from "./pawnParser";
import { LvalueContext } from "./pawnParser";
import { PostIncrementContext } from "./pawnParser";
import { PreIncrementContext } from "./pawnParser";
import { PostDecrementContext } from "./pawnParser";
import { PreDecrementContext } from "./pawnParser";
import { ChainedRelationalOperatorsContext } from "./pawnParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `pawnParser`.
 */
export interface pawnListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `pawnParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.processorLabel`.
	 * @param ctx the parse tree
	 */
	enterProcessorLabel?: (ctx: ProcessorLabelContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.processorLabel`.
	 * @param ctx the parse tree
	 */
	exitProcessorLabel?: (ctx: ProcessorLabelContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.enum`.
	 * @param ctx the parse tree
	 */
	enterEnum?: (ctx: EnumContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.enum`.
	 * @param ctx the parse tree
	 */
	exitEnum?: (ctx: EnumContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.enumMember`.
	 * @param ctx the parse tree
	 */
	enterEnumMember?: (ctx: EnumMemberContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.enumMember`.
	 * @param ctx the parse tree
	 */
	exitEnumMember?: (ctx: EnumMemberContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.enumIterator`.
	 * @param ctx the parse tree
	 */
	enterEnumIterator?: (ctx: EnumIteratorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.enumIterator`.
	 * @param ctx the parse tree
	 */
	exitEnumIterator?: (ctx: EnumIteratorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVarDeclaration?: (ctx: VarDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.varInit`.
	 * @param ctx the parse tree
	 */
	enterVarInit?: (ctx: VarInitContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.varInit`.
	 * @param ctx the parse tree
	 */
	exitVarInit?: (ctx: VarInitContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	exitFunctionDecl?: (ctx: FunctionDeclContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.operatorOverload`.
	 * @param ctx the parse tree
	 */
	enterOperatorOverload?: (ctx: OperatorOverloadContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.operatorOverload`.
	 * @param ctx the parse tree
	 */
	exitOperatorOverload?: (ctx: OperatorOverloadContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.nativeAssigment`.
	 * @param ctx the parse tree
	 */
	enterNativeAssigment?: (ctx: NativeAssigmentContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.nativeAssigment`.
	 * @param ctx the parse tree
	 */
	exitNativeAssigment?: (ctx: NativeAssigmentContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.tag`.
	 * @param ctx the parse tree
	 */
	enterTag?: (ctx: TagContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.tag`.
	 * @param ctx the parse tree
	 */
	exitTag?: (ctx: TagContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.arrayIndex`.
	 * @param ctx the parse tree
	 */
	enterArrayIndex?: (ctx: ArrayIndexContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.arrayIndex`.
	 * @param ctx the parse tree
	 */
	exitArrayIndex?: (ctx: ArrayIndexContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.funcDeclModif`.
	 * @param ctx the parse tree
	 */
	enterFuncDeclModif?: (ctx: FuncDeclModifContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.funcDeclModif`.
	 * @param ctx the parse tree
	 */
	exitFuncDeclModif?: (ctx: FuncDeclModifContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.funcModif`.
	 * @param ctx the parse tree
	 */
	enterFuncModif?: (ctx: FuncModifContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.funcModif`.
	 * @param ctx the parse tree
	 */
	exitFuncModif?: (ctx: FuncModifContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.compoundStatment`.
	 * @param ctx the parse tree
	 */
	enterCompoundStatment?: (ctx: CompoundStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.compoundStatment`.
	 * @param ctx the parse tree
	 */
	exitCompoundStatment?: (ctx: CompoundStatmentContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.assert`.
	 * @param ctx the parse tree
	 */
	enterAssert?: (ctx: AssertContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.assert`.
	 * @param ctx the parse tree
	 */
	exitAssert?: (ctx: AssertContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.exit`.
	 * @param ctx the parse tree
	 */
	enterExit?: (ctx: ExitContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.exit`.
	 * @param ctx the parse tree
	 */
	exitExit?: (ctx: ExitContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.goto`.
	 * @param ctx the parse tree
	 */
	enterGoto?: (ctx: GotoContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.goto`.
	 * @param ctx the parse tree
	 */
	exitGoto?: (ctx: GotoContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.sleep`.
	 * @param ctx the parse tree
	 */
	enterSleep?: (ctx: SleepContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.sleep`.
	 * @param ctx the parse tree
	 */
	exitSleep?: (ctx: SleepContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.return`.
	 * @param ctx the parse tree
	 */
	enterReturn?: (ctx: ReturnContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.return`.
	 * @param ctx the parse tree
	 */
	exitReturn?: (ctx: ReturnContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.switch`.
	 * @param ctx the parse tree
	 */
	enterSwitch?: (ctx: SwitchContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.switch`.
	 * @param ctx the parse tree
	 */
	exitSwitch?: (ctx: SwitchContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.case`.
	 * @param ctx the parse tree
	 */
	enterCase?: (ctx: CaseContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.case`.
	 * @param ctx the parse tree
	 */
	exitCase?: (ctx: CaseContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.default`.
	 * @param ctx the parse tree
	 */
	enterDefault?: (ctx: DefaultContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.default`.
	 * @param ctx the parse tree
	 */
	exitDefault?: (ctx: DefaultContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.case_list`.
	 * @param ctx the parse tree
	 */
	enterCase_list?: (ctx: Case_listContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.case_list`.
	 * @param ctx the parse tree
	 */
	exitCase_list?: (ctx: Case_listContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.range`.
	 * @param ctx the parse tree
	 */
	enterRange?: (ctx: RangeContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.range`.
	 * @param ctx the parse tree
	 */
	exitRange?: (ctx: RangeContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.arrayInit`.
	 * @param ctx the parse tree
	 */
	enterArrayInit?: (ctx: ArrayInitContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.arrayInit`.
	 * @param ctx the parse tree
	 */
	exitArrayInit?: (ctx: ArrayInitContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.arrayInitMember`.
	 * @param ctx the parse tree
	 */
	enterArrayInitMember?: (ctx: ArrayInitMemberContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.arrayInitMember`.
	 * @param ctx the parse tree
	 */
	exitArrayInitMember?: (ctx: ArrayInitMemberContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.assigments`.
	 * @param ctx the parse tree
	 */
	enterAssigments?: (ctx: AssigmentsContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.assigments`.
	 * @param ctx the parse tree
	 */
	exitAssigments?: (ctx: AssigmentsContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.declParams`.
	 * @param ctx the parse tree
	 */
	enterDeclParams?: (ctx: DeclParamsContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.declParams`.
	 * @param ctx the parse tree
	 */
	exitDeclParams?: (ctx: DeclParamsContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.ellipse`.
	 * @param ctx the parse tree
	 */
	enterEllipse?: (ctx: EllipseContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.ellipse`.
	 * @param ctx the parse tree
	 */
	exitEllipse?: (ctx: EllipseContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.varModifires`.
	 * @param ctx the parse tree
	 */
	enterVarModifires?: (ctx: VarModifiresContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.varModifires`.
	 * @param ctx the parse tree
	 */
	exitVarModifires?: (ctx: VarModifiresContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.float`.
	 * @param ctx the parse tree
	 */
	enterFloat?: (ctx: FloatContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.float`.
	 * @param ctx the parse tree
	 */
	exitFloat?: (ctx: FloatContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.canBeOverloaded`.
	 * @param ctx the parse tree
	 */
	enterCanBeOverloaded?: (ctx: CanBeOverloadedContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.canBeOverloaded`.
	 * @param ctx the parse tree
	 */
	exitCanBeOverloaded?: (ctx: CanBeOverloadedContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.arefmeticOperator`.
	 * @param ctx the parse tree
	 */
	enterArefmeticOperator?: (ctx: ArefmeticOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.arefmeticOperator`.
	 * @param ctx the parse tree
	 */
	exitArefmeticOperator?: (ctx: ArefmeticOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.compareOperator`.
	 * @param ctx the parse tree
	 */
	enterCompareOperator?: (ctx: CompareOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.compareOperator`.
	 * @param ctx the parse tree
	 */
	exitCompareOperator?: (ctx: CompareOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.cycles`.
	 * @param ctx the parse tree
	 */
	enterCycles?: (ctx: CyclesContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.cycles`.
	 * @param ctx the parse tree
	 */
	exitCycles?: (ctx: CyclesContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.do`.
	 * @param ctx the parse tree
	 */
	enterDo?: (ctx: DoContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.do`.
	 * @param ctx the parse tree
	 */
	exitDo?: (ctx: DoContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.while`.
	 * @param ctx the parse tree
	 */
	enterWhile?: (ctx: WhileContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.while`.
	 * @param ctx the parse tree
	 */
	exitWhile?: (ctx: WhileContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.for`.
	 * @param ctx the parse tree
	 */
	enterFor?: (ctx: ForContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.for`.
	 * @param ctx the parse tree
	 */
	exitFor?: (ctx: ForContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.forFirstExp`.
	 * @param ctx the parse tree
	 */
	enterForFirstExp?: (ctx: ForFirstExpContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.forFirstExp`.
	 * @param ctx the parse tree
	 */
	exitForFirstExp?: (ctx: ForFirstExpContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.cycleKeywords`.
	 * @param ctx the parse tree
	 */
	enterCycleKeywords?: (ctx: CycleKeywordsContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.cycleKeywords`.
	 * @param ctx the parse tree
	 */
	exitCycleKeywords?: (ctx: CycleKeywordsContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.bool_const`.
	 * @param ctx the parse tree
	 */
	enterBool_const?: (ctx: Bool_constContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.bool_const`.
	 * @param ctx the parse tree
	 */
	exitBool_const?: (ctx: Bool_constContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.predefinedConstants`.
	 * @param ctx the parse tree
	 */
	enterPredefinedConstants?: (ctx: PredefinedConstantsContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.predefinedConstants`.
	 * @param ctx the parse tree
	 */
	exitPredefinedConstants?: (ctx: PredefinedConstantsContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.docs`.
	 * @param ctx the parse tree
	 */
	enterDocs?: (ctx: DocsContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.docs`.
	 * @param ctx the parse tree
	 */
	exitDocs?: (ctx: DocsContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.docBlock`.
	 * @param ctx the parse tree
	 */
	enterDocBlock?: (ctx: DocBlockContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.docBlock`.
	 * @param ctx the parse tree
	 */
	exitDocBlock?: (ctx: DocBlockContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.expresion`.
	 * @param ctx the parse tree
	 */
	enterExpresion?: (ctx: ExpresionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.expresion`.
	 * @param ctx the parse tree
	 */
	exitExpresion?: (ctx: ExpresionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.tagableExpression`.
	 * @param ctx the parse tree
	 */
	enterTagableExpression?: (ctx: TagableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.tagableExpression`.
	 * @param ctx the parse tree
	 */
	exitTagableExpression?: (ctx: TagableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.ternarOperator`.
	 * @param ctx the parse tree
	 */
	enterTernarOperator?: (ctx: TernarOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.ternarOperator`.
	 * @param ctx the parse tree
	 */
	exitTernarOperator?: (ctx: TernarOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.chainedRelationalOperator`.
	 * @param ctx the parse tree
	 */
	enterChainedRelationalOperator?: (ctx: ChainedRelationalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.chainedRelationalOperator`.
	 * @param ctx the parse tree
	 */
	exitChainedRelationalOperator?: (ctx: ChainedRelationalOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.binarExpressionOperator`.
	 * @param ctx the parse tree
	 */
	enterBinarExpressionOperator?: (ctx: BinarExpressionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.binarExpressionOperator`.
	 * @param ctx the parse tree
	 */
	exitBinarExpressionOperator?: (ctx: BinarExpressionOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.unarOperator`.
	 * @param ctx the parse tree
	 */
	enterUnarOperator?: (ctx: UnarOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.unarOperator`.
	 * @param ctx the parse tree
	 */
	exitUnarOperator?: (ctx: UnarOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.preExpresionOperator`.
	 * @param ctx the parse tree
	 */
	enterPreExpresionOperator?: (ctx: PreExpresionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.preExpresionOperator`.
	 * @param ctx the parse tree
	 */
	exitPreExpresionOperator?: (ctx: PreExpresionOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.preSymbolOperator`.
	 * @param ctx the parse tree
	 */
	enterPreSymbolOperator?: (ctx: PreSymbolOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.preSymbolOperator`.
	 * @param ctx the parse tree
	 */
	exitPreSymbolOperator?: (ctx: PreSymbolOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.binarOperator`.
	 * @param ctx the parse tree
	 */
	enterBinarOperator?: (ctx: BinarOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.binarOperator`.
	 * @param ctx the parse tree
	 */
	exitBinarOperator?: (ctx: BinarOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.binarExpressionOperators`.
	 * @param ctx the parse tree
	 */
	enterBinarExpressionOperators?: (ctx: BinarExpressionOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.binarExpressionOperators`.
	 * @param ctx the parse tree
	 */
	exitBinarExpressionOperators?: (ctx: BinarExpressionOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.assigmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssigmentOperator?: (ctx: AssigmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.assigmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssigmentOperator?: (ctx: AssigmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.arrayIndexOperator`.
	 * @param ctx the parse tree
	 */
	enterArrayIndexOperator?: (ctx: ArrayIndexOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.arrayIndexOperator`.
	 * @param ctx the parse tree
	 */
	exitArrayIndexOperator?: (ctx: ArrayIndexOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.arrayCharOperator`.
	 * @param ctx the parse tree
	 */
	enterArrayCharOperator?: (ctx: ArrayCharOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.arrayCharOperator`.
	 * @param ctx the parse tree
	 */
	exitArrayCharOperator?: (ctx: ArrayCharOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.functionCallOperator`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallOperator?: (ctx: FunctionCallOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.functionCallOperator`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallOperator?: (ctx: FunctionCallOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.tagOperator`.
	 * @param ctx the parse tree
	 */
	enterTagOperator?: (ctx: TagOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.tagOperator`.
	 * @param ctx the parse tree
	 */
	exitTagOperator?: (ctx: TagOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.symbol`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.symbol`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.lvalue`.
	 * @param ctx the parse tree
	 */
	enterLvalue?: (ctx: LvalueContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.lvalue`.
	 * @param ctx the parse tree
	 */
	exitLvalue?: (ctx: LvalueContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.postIncrement`.
	 * @param ctx the parse tree
	 */
	enterPostIncrement?: (ctx: PostIncrementContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.postIncrement`.
	 * @param ctx the parse tree
	 */
	exitPostIncrement?: (ctx: PostIncrementContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.preIncrement`.
	 * @param ctx the parse tree
	 */
	enterPreIncrement?: (ctx: PreIncrementContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.preIncrement`.
	 * @param ctx the parse tree
	 */
	exitPreIncrement?: (ctx: PreIncrementContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.postDecrement`.
	 * @param ctx the parse tree
	 */
	enterPostDecrement?: (ctx: PostDecrementContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.postDecrement`.
	 * @param ctx the parse tree
	 */
	exitPostDecrement?: (ctx: PostDecrementContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.preDecrement`.
	 * @param ctx the parse tree
	 */
	enterPreDecrement?: (ctx: PreDecrementContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.preDecrement`.
	 * @param ctx the parse tree
	 */
	exitPreDecrement?: (ctx: PreDecrementContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.chainedRelationalOperators`.
	 * @param ctx the parse tree
	 */
	enterChainedRelationalOperators?: (ctx: ChainedRelationalOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.chainedRelationalOperators`.
	 * @param ctx the parse tree
	 */
	exitChainedRelationalOperators?: (ctx: ChainedRelationalOperatorsContext) => void;
}

