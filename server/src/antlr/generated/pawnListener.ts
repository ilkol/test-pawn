// Generated from ./server/src/antlr/generated/pawn.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
	 * Enter a parse tree produced by `pawnParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.functionDeclarationParams`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclarationParams?: (ctx: FunctionDeclarationParamsContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.functionDeclarationParams`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclarationParams?: (ctx: FunctionDeclarationParamsContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.pluralTag`.
	 * @param ctx the parse tree
	 */
	enterPluralTag?: (ctx: PluralTagContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.pluralTag`.
	 * @param ctx the parse tree
	 */
	exitPluralTag?: (ctx: PluralTagContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.hex`.
	 * @param ctx the parse tree
	 */
	enterHex?: (ctx: HexContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.hex`.
	 * @param ctx the parse tree
	 */
	exitHex?: (ctx: HexContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.rational`.
	 * @param ctx the parse tree
	 */
	enterRational?: (ctx: RationalContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.rational`.
	 * @param ctx the parse tree
	 */
	exitRational?: (ctx: RationalContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.binary`.
	 * @param ctx the parse tree
	 */
	enterBinary?: (ctx: BinaryContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.binary`.
	 * @param ctx the parse tree
	 */
	exitBinary?: (ctx: BinaryContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.assigmentExpression`.
	 * @param ctx the parse tree
	 */
	enterAssigmentExpression?: (ctx: AssigmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.assigmentExpression`.
	 * @param ctx the parse tree
	 */
	exitAssigmentExpression?: (ctx: AssigmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.ternaryExpression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.ternaryExpression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.equalOrNotExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualOrNotExpression?: (ctx: EqualOrNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.equalOrNotExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualOrNotExpression?: (ctx: EqualOrNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.compareExpression`.
	 * @param ctx the parse tree
	 */
	enterCompareExpression?: (ctx: CompareExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.compareExpression`.
	 * @param ctx the parse tree
	 */
	exitCompareExpression?: (ctx: CompareExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.bitOrExpression`.
	 * @param ctx the parse tree
	 */
	enterBitOrExpression?: (ctx: BitOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.bitOrExpression`.
	 * @param ctx the parse tree
	 */
	exitBitOrExpression?: (ctx: BitOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.xorExpression`.
	 * @param ctx the parse tree
	 */
	enterXorExpression?: (ctx: XorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.xorExpression`.
	 * @param ctx the parse tree
	 */
	exitXorExpression?: (ctx: XorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.bitAndExpression`.
	 * @param ctx the parse tree
	 */
	enterBitAndExpression?: (ctx: BitAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.bitAndExpression`.
	 * @param ctx the parse tree
	 */
	exitBitAndExpression?: (ctx: BitAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.bitShiftExpression`.
	 * @param ctx the parse tree
	 */
	enterBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.bitShiftExpression`.
	 * @param ctx the parse tree
	 */
	exitBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.prefixExpression`.
	 * @param ctx the parse tree
	 */
	enterPrefixExpression?: (ctx: PrefixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.prefixExpression`.
	 * @param ctx the parse tree
	 */
	exitPrefixExpression?: (ctx: PrefixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.functionOrArrayExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionOrArrayExpression?: (ctx: FunctionOrArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.functionOrArrayExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionOrArrayExpression?: (ctx: FunctionOrArrayExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.literalOrSymbol`.
	 * @param ctx the parse tree
	 */
	enterLiteralOrSymbol?: (ctx: LiteralOrSymbolContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.literalOrSymbol`.
	 * @param ctx the parse tree
	 */
	exitLiteralOrSymbol?: (ctx: LiteralOrSymbolContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.compoundExpression`.
	 * @param ctx the parse tree
	 */
	enterCompoundExpression?: (ctx: CompoundExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.compoundExpression`.
	 * @param ctx the parse tree
	 */
	exitCompoundExpression?: (ctx: CompoundExpressionContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.functionArgument`.
	 * @param ctx the parse tree
	 */
	enterFunctionArgument?: (ctx: FunctionArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.functionArgument`.
	 * @param ctx the parse tree
	 */
	exitFunctionArgument?: (ctx: FunctionArgumentContext) => void;

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
}

