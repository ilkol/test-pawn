// Generated from .\src\antlr\generated\pawn.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./pawnParser";
import { DeclarationContext } from "./pawnParser";
import { EnumContext } from "./pawnParser";
import { EnumMemberContext } from "./pawnParser";
import { EnumIteratorContext } from "./pawnParser";
import { Var_definitionContext } from "./pawnParser";
import { FunctionDeclContext } from "./pawnParser";
import { OperatorOverloadContext } from "./pawnParser";
import { NativeAssigmentContext } from "./pawnParser";
import { TagContext } from "./pawnParser";
import { VariableContext } from "./pawnParser";
import { ArrayIndexContext } from "./pawnParser";
import { FuncDeclModifContext } from "./pawnParser";
import { FuncModifContext } from "./pawnParser";
import { StatementContext } from "./pawnParser";
import { ControlStatmentsContext } from "./pawnParser";
import { AssigmentContext } from "./pawnParser";
import { ArrayInitContext } from "./pawnParser";
import { ArrayInitMemberContext } from "./pawnParser";
import { AssigmentsContext } from "./pawnParser";
import { GroupingContext } from "./pawnParser";
import { ConstGroupingContext } from "./pawnParser";
import { ExpresionContext } from "./pawnParser";
import { ConstExpresionContext } from "./pawnParser";
import { TernarOperatorContext } from "./pawnParser";
import { PreOperatorsContext } from "./pawnParser";
import { OperationContext } from "./pawnParser";
import { VarOrLiteralContext } from "./pawnParser";
import { DeclParamsContext } from "./pawnParser";
import { EllipseContext } from "./pawnParser";
import { ReferenceContext } from "./pawnParser";
import { VarModifiresContext } from "./pawnParser";
import { RValueContext } from "./pawnParser";
import { ConstRValueContext } from "./pawnParser";
import { SizeofContext } from "./pawnParser";
import { NumberContext } from "./pawnParser";
import { IntegerContext } from "./pawnParser";
import { FloatContext } from "./pawnParser";
import { HexContext } from "./pawnParser";
import { OperatorContext } from "./pawnParser";
import { CanBeOverloadedContext } from "./pawnParser";
import { ArefmeticOperatorContext } from "./pawnParser";
import { LogicOperatorContext } from "./pawnParser";
import { CompareOperatorContext } from "./pawnParser";
import { BitwiseOperatorContext } from "./pawnParser";
import { If_statementContext } from "./pawnParser";
import { Else_statementContext } from "./pawnParser";
import { SwitchContext } from "./pawnParser";
import { CaseContext } from "./pawnParser";
import { DefaultContext } from "./pawnParser";
import { Case_listContext } from "./pawnParser";
import { RangeContext } from "./pawnParser";
import { ConditionContext } from "./pawnParser";
import { CodeBlockContext } from "./pawnParser";
import { ReturnContext } from "./pawnParser";
import { CyclesContext } from "./pawnParser";
import { DoContext } from "./pawnParser";
import { WhileContext } from "./pawnParser";
import { ForContext } from "./pawnParser";
import { CycleBodyContext } from "./pawnParser";
import { CycleKeywordsContext } from "./pawnParser";
import { LiteralContext } from "./pawnParser";
import { Bool_constContext } from "./pawnParser";
import { StringContext } from "./pawnParser";
import { AngledStringContext } from "./pawnParser";
import { FunctionCallContext } from "./pawnParser";


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
	 * Enter a parse tree produced by `pawnParser.var_definition`.
	 * @param ctx the parse tree
	 */
	enterVar_definition?: (ctx: Var_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.var_definition`.
	 * @param ctx the parse tree
	 */
	exitVar_definition?: (ctx: Var_definitionContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.controlStatments`.
	 * @param ctx the parse tree
	 */
	enterControlStatments?: (ctx: ControlStatmentsContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.controlStatments`.
	 * @param ctx the parse tree
	 */
	exitControlStatments?: (ctx: ControlStatmentsContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.assigment`.
	 * @param ctx the parse tree
	 */
	enterAssigment?: (ctx: AssigmentContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.assigment`.
	 * @param ctx the parse tree
	 */
	exitAssigment?: (ctx: AssigmentContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.grouping`.
	 * @param ctx the parse tree
	 */
	enterGrouping?: (ctx: GroupingContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.grouping`.
	 * @param ctx the parse tree
	 */
	exitGrouping?: (ctx: GroupingContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.constGrouping`.
	 * @param ctx the parse tree
	 */
	enterConstGrouping?: (ctx: ConstGroupingContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.constGrouping`.
	 * @param ctx the parse tree
	 */
	exitConstGrouping?: (ctx: ConstGroupingContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.constExpresion`.
	 * @param ctx the parse tree
	 */
	enterConstExpresion?: (ctx: ConstExpresionContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.constExpresion`.
	 * @param ctx the parse tree
	 */
	exitConstExpresion?: (ctx: ConstExpresionContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.preOperators`.
	 * @param ctx the parse tree
	 */
	enterPreOperators?: (ctx: PreOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.preOperators`.
	 * @param ctx the parse tree
	 */
	exitPreOperators?: (ctx: PreOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.operation`.
	 * @param ctx the parse tree
	 */
	enterOperation?: (ctx: OperationContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.operation`.
	 * @param ctx the parse tree
	 */
	exitOperation?: (ctx: OperationContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.varOrLiteral`.
	 * @param ctx the parse tree
	 */
	enterVarOrLiteral?: (ctx: VarOrLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.varOrLiteral`.
	 * @param ctx the parse tree
	 */
	exitVarOrLiteral?: (ctx: VarOrLiteralContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.rValue`.
	 * @param ctx the parse tree
	 */
	enterRValue?: (ctx: RValueContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.rValue`.
	 * @param ctx the parse tree
	 */
	exitRValue?: (ctx: RValueContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.constRValue`.
	 * @param ctx the parse tree
	 */
	enterConstRValue?: (ctx: ConstRValueContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.constRValue`.
	 * @param ctx the parse tree
	 */
	exitConstRValue?: (ctx: ConstRValueContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.sizeof`.
	 * @param ctx the parse tree
	 */
	enterSizeof?: (ctx: SizeofContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.sizeof`.
	 * @param ctx the parse tree
	 */
	exitSizeof?: (ctx: SizeofContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.operator`.
	 * @param ctx the parse tree
	 */
	enterOperator?: (ctx: OperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.operator`.
	 * @param ctx the parse tree
	 */
	exitOperator?: (ctx: OperatorContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.logicOperator`.
	 * @param ctx the parse tree
	 */
	enterLogicOperator?: (ctx: LogicOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.logicOperator`.
	 * @param ctx the parse tree
	 */
	exitLogicOperator?: (ctx: LogicOperatorContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.bitwiseOperator`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOperator?: (ctx: BitwiseOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.bitwiseOperator`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOperator?: (ctx: BitwiseOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.else_statement`.
	 * @param ctx the parse tree
	 */
	enterElse_statement?: (ctx: Else_statementContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.else_statement`.
	 * @param ctx the parse tree
	 */
	exitElse_statement?: (ctx: Else_statementContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.codeBlock`.
	 * @param ctx the parse tree
	 */
	enterCodeBlock?: (ctx: CodeBlockContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.codeBlock`.
	 * @param ctx the parse tree
	 */
	exitCodeBlock?: (ctx: CodeBlockContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.cycleBody`.
	 * @param ctx the parse tree
	 */
	enterCycleBody?: (ctx: CycleBodyContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.cycleBody`.
	 * @param ctx the parse tree
	 */
	exitCycleBody?: (ctx: CycleBodyContext) => void;

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
	 * Enter a parse tree produced by `pawnParser.angledString`.
	 * @param ctx the parse tree
	 */
	enterAngledString?: (ctx: AngledStringContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.angledString`.
	 * @param ctx the parse tree
	 */
	exitAngledString?: (ctx: AngledStringContext) => void;

	/**
	 * Enter a parse tree produced by `pawnParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `pawnParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
}

