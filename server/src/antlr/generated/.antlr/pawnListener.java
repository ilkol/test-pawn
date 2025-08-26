// Generated from d:/test-pawn/src/antlr/generated/pawn.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link pawnParser}.
 */
public interface pawnListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link pawnParser#file}.
	 * @param ctx the parse tree
	 */
	void enterFile(pawnParser.FileContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#file}.
	 * @param ctx the parse tree
	 */
	void exitFile(pawnParser.FileContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#declaration}.
	 * @param ctx the parse tree
	 */
	void enterDeclaration(pawnParser.DeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#declaration}.
	 * @param ctx the parse tree
	 */
	void exitDeclaration(pawnParser.DeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#enum}.
	 * @param ctx the parse tree
	 */
	void enterEnum(pawnParser.EnumContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#enum}.
	 * @param ctx the parse tree
	 */
	void exitEnum(pawnParser.EnumContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#enumMember}.
	 * @param ctx the parse tree
	 */
	void enterEnumMember(pawnParser.EnumMemberContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#enumMember}.
	 * @param ctx the parse tree
	 */
	void exitEnumMember(pawnParser.EnumMemberContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#enumIterator}.
	 * @param ctx the parse tree
	 */
	void enterEnumIterator(pawnParser.EnumIteratorContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#enumIterator}.
	 * @param ctx the parse tree
	 */
	void exitEnumIterator(pawnParser.EnumIteratorContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#var_definition}.
	 * @param ctx the parse tree
	 */
	void enterVar_definition(pawnParser.Var_definitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#var_definition}.
	 * @param ctx the parse tree
	 */
	void exitVar_definition(pawnParser.Var_definitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#functionDecl}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDecl(pawnParser.FunctionDeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#functionDecl}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDecl(pawnParser.FunctionDeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#operatorOverload}.
	 * @param ctx the parse tree
	 */
	void enterOperatorOverload(pawnParser.OperatorOverloadContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#operatorOverload}.
	 * @param ctx the parse tree
	 */
	void exitOperatorOverload(pawnParser.OperatorOverloadContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#nativeAssigment}.
	 * @param ctx the parse tree
	 */
	void enterNativeAssigment(pawnParser.NativeAssigmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#nativeAssigment}.
	 * @param ctx the parse tree
	 */
	void exitNativeAssigment(pawnParser.NativeAssigmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#tag}.
	 * @param ctx the parse tree
	 */
	void enterTag(pawnParser.TagContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#tag}.
	 * @param ctx the parse tree
	 */
	void exitTag(pawnParser.TagContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(pawnParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(pawnParser.VariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#arrayIndex}.
	 * @param ctx the parse tree
	 */
	void enterArrayIndex(pawnParser.ArrayIndexContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#arrayIndex}.
	 * @param ctx the parse tree
	 */
	void exitArrayIndex(pawnParser.ArrayIndexContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#funcDeclModif}.
	 * @param ctx the parse tree
	 */
	void enterFuncDeclModif(pawnParser.FuncDeclModifContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#funcDeclModif}.
	 * @param ctx the parse tree
	 */
	void exitFuncDeclModif(pawnParser.FuncDeclModifContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#funcModif}.
	 * @param ctx the parse tree
	 */
	void enterFuncModif(pawnParser.FuncModifContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#funcModif}.
	 * @param ctx the parse tree
	 */
	void exitFuncModif(pawnParser.FuncModifContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(pawnParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(pawnParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#controlStatments}.
	 * @param ctx the parse tree
	 */
	void enterControlStatments(pawnParser.ControlStatmentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#controlStatments}.
	 * @param ctx the parse tree
	 */
	void exitControlStatments(pawnParser.ControlStatmentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#assigment}.
	 * @param ctx the parse tree
	 */
	void enterAssigment(pawnParser.AssigmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#assigment}.
	 * @param ctx the parse tree
	 */
	void exitAssigment(pawnParser.AssigmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#arrayInit}.
	 * @param ctx the parse tree
	 */
	void enterArrayInit(pawnParser.ArrayInitContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#arrayInit}.
	 * @param ctx the parse tree
	 */
	void exitArrayInit(pawnParser.ArrayInitContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#arrayInitMember}.
	 * @param ctx the parse tree
	 */
	void enterArrayInitMember(pawnParser.ArrayInitMemberContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#arrayInitMember}.
	 * @param ctx the parse tree
	 */
	void exitArrayInitMember(pawnParser.ArrayInitMemberContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#assigments}.
	 * @param ctx the parse tree
	 */
	void enterAssigments(pawnParser.AssigmentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#assigments}.
	 * @param ctx the parse tree
	 */
	void exitAssigments(pawnParser.AssigmentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#grouping}.
	 * @param ctx the parse tree
	 */
	void enterGrouping(pawnParser.GroupingContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#grouping}.
	 * @param ctx the parse tree
	 */
	void exitGrouping(pawnParser.GroupingContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#constGrouping}.
	 * @param ctx the parse tree
	 */
	void enterConstGrouping(pawnParser.ConstGroupingContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#constGrouping}.
	 * @param ctx the parse tree
	 */
	void exitConstGrouping(pawnParser.ConstGroupingContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(pawnParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(pawnParser.ExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#constExpresion}.
	 * @param ctx the parse tree
	 */
	void enterConstExpresion(pawnParser.ConstExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#constExpresion}.
	 * @param ctx the parse tree
	 */
	void exitConstExpresion(pawnParser.ConstExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#ternarOperator}.
	 * @param ctx the parse tree
	 */
	void enterTernarOperator(pawnParser.TernarOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#ternarOperator}.
	 * @param ctx the parse tree
	 */
	void exitTernarOperator(pawnParser.TernarOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#preOperators}.
	 * @param ctx the parse tree
	 */
	void enterPreOperators(pawnParser.PreOperatorsContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#preOperators}.
	 * @param ctx the parse tree
	 */
	void exitPreOperators(pawnParser.PreOperatorsContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#operation}.
	 * @param ctx the parse tree
	 */
	void enterOperation(pawnParser.OperationContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#operation}.
	 * @param ctx the parse tree
	 */
	void exitOperation(pawnParser.OperationContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#varOrLiteral}.
	 * @param ctx the parse tree
	 */
	void enterVarOrLiteral(pawnParser.VarOrLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#varOrLiteral}.
	 * @param ctx the parse tree
	 */
	void exitVarOrLiteral(pawnParser.VarOrLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#declParams}.
	 * @param ctx the parse tree
	 */
	void enterDeclParams(pawnParser.DeclParamsContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#declParams}.
	 * @param ctx the parse tree
	 */
	void exitDeclParams(pawnParser.DeclParamsContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#ellipse}.
	 * @param ctx the parse tree
	 */
	void enterEllipse(pawnParser.EllipseContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#ellipse}.
	 * @param ctx the parse tree
	 */
	void exitEllipse(pawnParser.EllipseContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#reference}.
	 * @param ctx the parse tree
	 */
	void enterReference(pawnParser.ReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#reference}.
	 * @param ctx the parse tree
	 */
	void exitReference(pawnParser.ReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#varModifires}.
	 * @param ctx the parse tree
	 */
	void enterVarModifires(pawnParser.VarModifiresContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#varModifires}.
	 * @param ctx the parse tree
	 */
	void exitVarModifires(pawnParser.VarModifiresContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#rValue}.
	 * @param ctx the parse tree
	 */
	void enterRValue(pawnParser.RValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#rValue}.
	 * @param ctx the parse tree
	 */
	void exitRValue(pawnParser.RValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#constRValue}.
	 * @param ctx the parse tree
	 */
	void enterConstRValue(pawnParser.ConstRValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#constRValue}.
	 * @param ctx the parse tree
	 */
	void exitConstRValue(pawnParser.ConstRValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#sizeof}.
	 * @param ctx the parse tree
	 */
	void enterSizeof(pawnParser.SizeofContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#sizeof}.
	 * @param ctx the parse tree
	 */
	void exitSizeof(pawnParser.SizeofContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(pawnParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(pawnParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#integer}.
	 * @param ctx the parse tree
	 */
	void enterInteger(pawnParser.IntegerContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#integer}.
	 * @param ctx the parse tree
	 */
	void exitInteger(pawnParser.IntegerContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#float}.
	 * @param ctx the parse tree
	 */
	void enterFloat(pawnParser.FloatContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#float}.
	 * @param ctx the parse tree
	 */
	void exitFloat(pawnParser.FloatContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#hex}.
	 * @param ctx the parse tree
	 */
	void enterHex(pawnParser.HexContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#hex}.
	 * @param ctx the parse tree
	 */
	void exitHex(pawnParser.HexContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#operator}.
	 * @param ctx the parse tree
	 */
	void enterOperator(pawnParser.OperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#operator}.
	 * @param ctx the parse tree
	 */
	void exitOperator(pawnParser.OperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#canBeOverloaded}.
	 * @param ctx the parse tree
	 */
	void enterCanBeOverloaded(pawnParser.CanBeOverloadedContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#canBeOverloaded}.
	 * @param ctx the parse tree
	 */
	void exitCanBeOverloaded(pawnParser.CanBeOverloadedContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#arefmeticOperator}.
	 * @param ctx the parse tree
	 */
	void enterArefmeticOperator(pawnParser.ArefmeticOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#arefmeticOperator}.
	 * @param ctx the parse tree
	 */
	void exitArefmeticOperator(pawnParser.ArefmeticOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#logicOperator}.
	 * @param ctx the parse tree
	 */
	void enterLogicOperator(pawnParser.LogicOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#logicOperator}.
	 * @param ctx the parse tree
	 */
	void exitLogicOperator(pawnParser.LogicOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#compareOperator}.
	 * @param ctx the parse tree
	 */
	void enterCompareOperator(pawnParser.CompareOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#compareOperator}.
	 * @param ctx the parse tree
	 */
	void exitCompareOperator(pawnParser.CompareOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#bitwiseOperator}.
	 * @param ctx the parse tree
	 */
	void enterBitwiseOperator(pawnParser.BitwiseOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#bitwiseOperator}.
	 * @param ctx the parse tree
	 */
	void exitBitwiseOperator(pawnParser.BitwiseOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#if_statement}.
	 * @param ctx the parse tree
	 */
	void enterIf_statement(pawnParser.If_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#if_statement}.
	 * @param ctx the parse tree
	 */
	void exitIf_statement(pawnParser.If_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#else_statement}.
	 * @param ctx the parse tree
	 */
	void enterElse_statement(pawnParser.Else_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#else_statement}.
	 * @param ctx the parse tree
	 */
	void exitElse_statement(pawnParser.Else_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#switch}.
	 * @param ctx the parse tree
	 */
	void enterSwitch(pawnParser.SwitchContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#switch}.
	 * @param ctx the parse tree
	 */
	void exitSwitch(pawnParser.SwitchContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#case}.
	 * @param ctx the parse tree
	 */
	void enterCase(pawnParser.CaseContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#case}.
	 * @param ctx the parse tree
	 */
	void exitCase(pawnParser.CaseContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#default}.
	 * @param ctx the parse tree
	 */
	void enterDefault(pawnParser.DefaultContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#default}.
	 * @param ctx the parse tree
	 */
	void exitDefault(pawnParser.DefaultContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#case_list}.
	 * @param ctx the parse tree
	 */
	void enterCase_list(pawnParser.Case_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#case_list}.
	 * @param ctx the parse tree
	 */
	void exitCase_list(pawnParser.Case_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#range}.
	 * @param ctx the parse tree
	 */
	void enterRange(pawnParser.RangeContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#range}.
	 * @param ctx the parse tree
	 */
	void exitRange(pawnParser.RangeContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#condition}.
	 * @param ctx the parse tree
	 */
	void enterCondition(pawnParser.ConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#condition}.
	 * @param ctx the parse tree
	 */
	void exitCondition(pawnParser.ConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#codeBlock}.
	 * @param ctx the parse tree
	 */
	void enterCodeBlock(pawnParser.CodeBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#codeBlock}.
	 * @param ctx the parse tree
	 */
	void exitCodeBlock(pawnParser.CodeBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#return}.
	 * @param ctx the parse tree
	 */
	void enterReturn(pawnParser.ReturnContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#return}.
	 * @param ctx the parse tree
	 */
	void exitReturn(pawnParser.ReturnContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#cycles}.
	 * @param ctx the parse tree
	 */
	void enterCycles(pawnParser.CyclesContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#cycles}.
	 * @param ctx the parse tree
	 */
	void exitCycles(pawnParser.CyclesContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#do}.
	 * @param ctx the parse tree
	 */
	void enterDo(pawnParser.DoContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#do}.
	 * @param ctx the parse tree
	 */
	void exitDo(pawnParser.DoContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#while}.
	 * @param ctx the parse tree
	 */
	void enterWhile(pawnParser.WhileContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#while}.
	 * @param ctx the parse tree
	 */
	void exitWhile(pawnParser.WhileContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#for}.
	 * @param ctx the parse tree
	 */
	void enterFor(pawnParser.ForContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#for}.
	 * @param ctx the parse tree
	 */
	void exitFor(pawnParser.ForContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#cycleBody}.
	 * @param ctx the parse tree
	 */
	void enterCycleBody(pawnParser.CycleBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#cycleBody}.
	 * @param ctx the parse tree
	 */
	void exitCycleBody(pawnParser.CycleBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#cycleKeywords}.
	 * @param ctx the parse tree
	 */
	void enterCycleKeywords(pawnParser.CycleKeywordsContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#cycleKeywords}.
	 * @param ctx the parse tree
	 */
	void exitCycleKeywords(pawnParser.CycleKeywordsContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(pawnParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(pawnParser.LiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#bool_const}.
	 * @param ctx the parse tree
	 */
	void enterBool_const(pawnParser.Bool_constContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#bool_const}.
	 * @param ctx the parse tree
	 */
	void exitBool_const(pawnParser.Bool_constContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#string}.
	 * @param ctx the parse tree
	 */
	void enterString(pawnParser.StringContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#string}.
	 * @param ctx the parse tree
	 */
	void exitString(pawnParser.StringContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#angledString}.
	 * @param ctx the parse tree
	 */
	void enterAngledString(pawnParser.AngledStringContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#angledString}.
	 * @param ctx the parse tree
	 */
	void exitAngledString(pawnParser.AngledStringContext ctx);
	/**
	 * Enter a parse tree produced by {@link pawnParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(pawnParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link pawnParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(pawnParser.FunctionCallContext ctx);
}