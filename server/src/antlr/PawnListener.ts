/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable curly */
import { DiagnosticMessage } from "./diagnostic/DiagnosticMessage";
import { Declarations } from "./AST/Nodes/Declarations";
import { Stack } from "./Stack/Stack";
import { pawnListener as IPawnListener } from "./generated/pawnListener";
import { ArrayIndexContext, ArrayIndexOperatorContext, ArrayInitContext, ArrayOperatorCharContext, ArrayOperatorIndexContext, BinarExpressionOperatorContext, BinaryContext, Bool_constContext, CaseContext, ChainedRelationalOperatorContext, ChainedRelationalOperatorsContext, CompoundStatmentContext, CycleKeywordsContext, DeclParamsContext, DefaultContext, DocBlockContext, EllipseContext, ElseStatementContext, EnumContext, EnumMemberContext, ExpresionContext, FileContext, FloatContext, ForContext, FuncDeclModifContext, FunctionArgumentContext, FunctionCallOperatorContext, FunctionDeclContext, FunctionDeclarationParamsContext, HexContext, IfStatementContext, IntegerContext, NativeAssigmentContext, OperatorOverloadContext, PluralTagContext, PostDecrementContext, PostIncrementContext, PreDecrementContext, PreExpresionOperatorContext, PreIncrementContext, PreSymbolOperatorContext, PredefinedConstantsContext, RationalContext, ReturnContext, StatementContext, StringContext, SwitchContext, SymbolContext, TagContext, TagOperatorContext, TagableExpressionContext, UnarOperatorContext, VarDeclarationContext, VarInitContext, VarModifiresContext, VariableContext, WhileContext } from "./generated/pawnParser";
import { VarDeclaration } from "./AST/Nodes/Variables/VarDeclaration";
import { OperatorNew } from "./AST/Nodes/Operators/OperatorNew";
import { EnumDeclaration } from "./AST/Nodes/enum/EnumDeclaration";
import { EnumMember } from "./AST/Nodes/enum/EnumMember";
import { Tag } from "./AST/Nodes/Tag";
import { CodeBlock } from "./AST/Nodes/CodeBlock";
import { Statements } from "./AST/Nodes/Statements";
import { IntLiteral } from "./AST/Nodes/Literals/IntLiteral";
import { ReturnStatement } from "./AST/Nodes/ReturnStatement";
import { Expression } from "./AST/Nodes/Expresion";
import { AbstractOperator } from "./AST/Nodes/Operators/AbstractOperator";
import { BinarOperator } from "./AST/Nodes/Operators/BinarOperator";
import { UnarOperator } from "./AST/Nodes/Operators/UnarOperator";
import { ASTNode } from "./AST/Nodes/ASTNode";
import { FunctionDeclaration, FunctionModifire } from "./AST/Nodes/Functions/FunctionDeclaration";
import { FunctionCall } from "./AST/Nodes/Functions/FunctionCall";
import { VariableInit } from "./AST/Nodes/VariableInit";
import { Variable } from "./AST/Nodes/Variable";
import { FunctionDeclarationParameter } from "./AST/Nodes/Functions/FunctionDeclarationParameter";
import { FloatLiteral } from "./AST/Nodes/Literals/FloatLiteral";
import { StringLiteral } from "./AST/Nodes/Literals/StringLiteral";
import { WhileCycle } from "./AST/Nodes/Cycles/WhileCycle";
import { Cycle } from "./AST/Nodes/Cycles/Cycle";
import { ForCycle } from "./AST/Nodes/Cycles/ForCycle";
import { ArrayNode } from "./AST/Nodes/Variables/Array";
import { ArrayDeclaration } from "./AST/Nodes/Variables/ArrayDeclaration";
import { AssigmentOperator } from "./AST/Nodes/Operators/AssigmentOperator";
import { Ellipse } from "./AST/Nodes/Operators/Ellipse";
import { OperatorOverload } from "./AST/Nodes/Operators/OperatorOverload";
import { Literal } from "./AST/Nodes/Literals/Literal";
import { IfStatement } from "./AST/Nodes/Conditions/IfStatement";
import { SwitchStatement } from "./AST/Nodes/Conditions/switch/SwitchStatement";
import { CaseStatement } from "./AST/Nodes/Conditions/switch/CaseStatement";
import { DefaultStatement } from "./AST/Nodes/Conditions/switch/DefaultStatement";
import { Docs } from "./AST/Nodes/Docs/Dosc";
import { Statement } from "./AST/Nodes/Statement";
import { AbstractStatement } from "./AST/Nodes/AbstractStatement";
import { ChainedOperator } from "./AST/Nodes/Operators/ChainedOperators";
import { VarOrFunctionDeclaration } from "./AST/Nodes/VarOrFunctionDeclaration";
import { BoolLiteral } from "./AST/Nodes/Literals/BoolLiteral";
import { HexLiteral } from "./AST/Nodes/Literals/HexLiteral";
import { FixedLiteral } from "./AST/Nodes/Literals/FixedLiteral";
import { BinarLiteral } from "./AST/Nodes/Literals/BinarLiteral";
import { ArrayInit } from "./AST/Nodes/Literals/ArrayInit";
import { Break } from "./AST/Nodes/Cycles/Break";
import { Continue } from "./AST/Nodes/Cycles/Continue";
import { ArrayIndex } from "./AST/Nodes/Operators/ArrayIndex";
import { ArrayChar } from "./AST/Nodes/Operators/ArrayChar";
import { DiagnosticSeverity } from "vscode-languageserver";
import { Position, Range } from "../types";
import { Locale } from "../Locale";
import { NamedArgument } from "./AST/Nodes/Functions/NamedArgument";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { VariableModifire } from "../SymbolSystem/Symbols";

export class PawnListener implements IPawnListener
{
	private nodes: Stack<ASTNode> = new Stack<ASTNode>();
	private docs: Stack<Docs> = new Stack<Docs>();
	private root: Declarations | null = null;
	public readonly diagnostics: DiagnosticMessage[] = [];
	
	public get Root() : Declarations | null {
		return this.root;
	}
	addDiagnostic(msg: string, type: DiagnosticSeverity, pos: Range): void;
	addDiagnostic(msg: string, type: DiagnosticSeverity, startLine: number | Range, startChar?: number, endLine?: number, endChar?: number): void {
		console.error(msg);
		if(startLine instanceof Range) {	
			this.diagnostics.push(new DiagnosticMessage(msg, type, startLine));
		}
		else this.diagnostics.push(new DiagnosticMessage(msg, type, startLine - 1, <number>startChar, <number>endLine - 1, <number>endChar));
	}

	enterFile(ctx: FileContext): void {
		let node = new Declarations();	
		if(this.root === null) {
			this.root = node;
		}	
		this.nodes.push(node);
	}
	exitFile(ctx: FileContext): void {
		let node: Declarations = <Declarations>this.nodes.pop();
		if(ctx.stop)
			node.setPos(ctx.start, ctx.stop);
	}

	enterOperatorOverload(ctx: OperatorOverloadContext):void
	{
		let node = new OperatorOverload();	
		(<Declarations>this.nodes.peek()).declarations.push(node);
		this.nodes.push(node);
	}
	exitOperatorOverload(ctx: OperatorOverloadContext):void
	{
		let node = <OperatorOverload>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			node.operator = ctx.canBeOverloaded().text;
			node.id = node.tag.id + `:operator` + node.operator;

			node.setIDPos(
				ctx.OPERATOR().symbol.line, ctx.OPERATOR().symbol.charPositionInLine, 
				ctx.functionDeclarationParams().OPEN_PARENTHESIS().symbol.charPositionInLine);

		}
	}
	
	exitNativeAssigment(ctx: NativeAssigmentContext): void
	{
		let last = <FunctionDeclaration>this.nodes.peek();

		last.assigmentFunctionID = ctx.IDENTIFIER().text;
	}
	enterFunctionDecl(ctx: FunctionDeclContext): void {
		let node = new FunctionDeclaration();	
		node.docs = this.docs.pop();
		(<Declarations>this.nodes.peek()).declarations.push(node);
		this.nodes.push(node);
	}
	exitFunctionDecl(ctx: FunctionDeclContext): void {
		let node = <FunctionDeclaration>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			try {
				let id = ctx.IDENTIFIER();
				node.id = id.text;
				node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);

			} catch(e) {
				let last = this.nodes.peek();
				this.addDiagnostic(Locale.t("Expecting a function identifire, but finding node \"%s\"", node.name), DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	

	enterVarDeclaration(ctx: VarDeclarationContext): void 
	{
		let node = new OperatorNew();	
		this.nodes.push(node);
	}
	exitVarDeclaration(ctx: VarDeclarationContext): void 
	{
		let node = <OperatorNew>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
				
			let last = this.nodes.peek();
			if(last instanceof Declarations) {
				let tmp: Declarations = last;
				node.vars.forEach(element => {
					tmp.declarations.push(element);
				});
			}
			else if(last instanceof ForCycle) {
				last.initialization = node;
			}
			else if(last instanceof Statement) {
				last.statemnent = node;
			}
			else {
				console.error(last);
				this.addDiagnostic(Locale.t("Unexpected var declaration"), DiagnosticSeverity.Error, node.pos);	
			}
		}
	}

	exitVarModifires = (ctx: VarModifiresContext) => {
		const last = this.nodes.peek();
		const pos = new Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.stop!.line - 1, ctx.stop!.charPositionInLine);
		if(last instanceof OperatorNew) {
			const modif = ctx.text;
			switch(modif) {
				case "const": {
					last.addModifire(VariableModifire.Const);
					break;
				}
				case "stock": {
					last.addModifire(VariableModifire.Stock);
					break;
				}
				case "static": {
					last.addModifire(VariableModifire.Static);
					break;
				}
				case "public": {
					last.addModifire(VariableModifire.Public);
					break;
				}
				default: {
					this.addDiagnostic(Locale.t("Undefinded var modifire \"%s\"", modif), DiagnosticSeverity.Error, pos);	
				}
			}
		}
		else {
			console.error(last);
			this.addDiagnostic(Locale.t("Unexpected var modifire"), DiagnosticSeverity.Error, pos);	
		}
	};

	enterVariable(ctx: VariableContext): void {
		let node = new Variable();			
		this.nodes.push(node);
	}
	exitVariable(ctx: VariableContext): void {
		let node = <Variable>this.nodes.pop();
		if(ctx.stop)
		{	
			node.setPos(ctx.start, ctx.stop);
			try {
				let id = ctx.IDENTIFIER();
				node.id = id.text;
				node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);

			} catch(e) {
				this.addDiagnostic(Locale.t("Variable identifire expected"), DiagnosticSeverity.Error, node.pos);
			}

			// let decl = this.nodes.peek();
			// if(decl instanceof OperatorNew)
			// 	decl.push(node);
			// else 

			const last = this.nodes.peek();
			var declarationVar:VarDeclaration = new VarDeclaration();
			if(node instanceof ArrayNode) {
				declarationVar = new ArrayDeclaration();
				(<ArrayDeclaration>declarationVar).indexes = node.indexes;
			}

			declarationVar.setPos(ctx.start, ctx.stop);
			declarationVar.id = node.id;
			declarationVar.idPos = node.idPos;
			declarationVar.tag = node.tag;
			
			if(last instanceof OperatorNew) {
				last.pushParameter(declarationVar);
			}
			else if(last instanceof VariableInit)
			{
				last.var = declarationVar;
			}
			else if(last instanceof Expression)
			{
				last.expresion = node;
			}
			else if(last instanceof EnumMember)
			{
				last.setValue(declarationVar);
			}
			else if(last instanceof FunctionDeclarationParameter)
			{
				last.variable = node;
				// last.push(new FunctionDeclarationParameter(declarationVar));
			}
			else if(last instanceof CodeBlock)
			{
				this.addDiagnostic("warning 215: " + Locale.t("expression has no effect"), DiagnosticSeverity.Warning, node.idPos);
			}
			else {
				console.error(last);
				this.addDiagnostic(Locale.t("Unexpected variable"), DiagnosticSeverity.Error, node.idPos);
			}
		}
	}

	enterEnum(ctx: EnumContext): void
	{
		let node = new EnumDeclaration();	
		(<Declarations>this.nodes.peek()).declarations.push(node);
		this.nodes.push(node);
	}
	exitEnum(ctx: EnumContext): void
	{
		let node = <EnumDeclaration>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);

			let id = ctx.IDENTIFIER();
			if(id) {
				node.id = id.text;
				node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);
			}

			node.vars.forEach(element => {
				element.tag = new Tag(node.id);
			});
		}
	}
	
	enterEnumMember(ctx: EnumMemberContext): void
	{
		let node = new EnumMember();	
		// (<EnumDeclaration>this.nodes.peek()).push(node);
		this.nodes.push(node);
	}
	exitEnumMember(ctx: EnumMemberContext): void
	{
		const node = <EnumMember>this.nodes.pop();
		if(ctx.stop)
		{	
			node.setPos(ctx.start, ctx.stop);
			const last = <EnumDeclaration>this.nodes.peek();
			last.pushParameter(node);
			node.parent = last;
		}
	}

	exitPluralTag(ctx: PluralTagContext) {
		let node = <ASTNode>this.nodes.peek();
		if(node instanceof Ellipse || node instanceof FunctionDeclarationParameter) {
			
			ctx.IDENTIFIER().forEach(id => {
				const tag = new Tag(id.text);
				tag.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);
				tag.range = tag.idPos;
				node.addTag(tag);
			});
		}
	}

	enterTag(ctx: TagContext): void {
		let node = new Tag();	
		this.nodes.push(node);
	}
	exitTag(ctx: TagContext): void {
		let node = <Tag>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			let id = ctx.IDENTIFIER();
			node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);
			node.id = id.text;
			let last = this.nodes.peek();
			if(last instanceof FunctionDeclarationParameter) {
				last.addTag(node);
			}
			else if(last instanceof VarOrFunctionDeclaration) {
				last.tag = node;
			}
			else if(last instanceof Expression) {
				last.tag = node;
				last.isTaged = true;
			}
			else if(last instanceof Ellipse) {
				last.tag = node;
			}
			else {
				this.addDiagnostic(Locale.t("Unexpected tag operator"), DiagnosticSeverity.Error, node.pos);
			}
		
		}
	}

	// enterTagOperator = (ctx: TagOperatorContext) => {
	// 	const node = new Expresion();
	// 	this.nodes.push(node);
	// };
	// exitTagOperator = (ctx: TagOperatorContext) => {
	// 	let node = <Expresion>this.nodes.pop();
	// 	console.log(node);
	// 	if(ctx.stop) {
	// 		node.setPos(ctx.start, ctx.stop);
	// 		let last = this.nodes.peek();

	// 		if(last instanceof Expresion && node.expresion) {
	// 			last.expresion = node.expresion;
	// 			last.tag = node.tag;
	// 			last.isTaged = true;
	// 		}
	// 	}
	// };

	enterEllipse(ctx: EllipseContext): void
	{
		const node = new Ellipse();
		this.nodes.push(node);
	}
	exitEllipse(ctx: EllipseContext): void {
		let node = <Ellipse>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			let last = this.nodes.peek();

			// ctx.tag()?.IDENTIFIER().forEach((tag) => {
			// 	node.addTag(tag.text);
			// });
			if(last instanceof FunctionDeclaration) {
				last.ellipse = node;
			}
			else {
				this.addDiagnostic(Locale.t("Unexpected ellipse operator"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	
	enterCompoundStatment(ctx: CompoundStatmentContext): void {
		let node = new CodeBlock(new Statements());	
		this.nodes.push(node);
	}

	exitCompoundStatment(ctx: CompoundStatmentContext): void {
		let node = <CodeBlock>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			let last = this.nodes.peek();
			if(last instanceof Statement) {
				last.statemnent = node;
			}
			else {
				console.error(node);
				console.error(last);
				this.addDiagnostic(Locale.t("Unexpected code"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	
	enterHex = (ctx: HexContext) => {
		let node = new HexLiteral();
		this.nodes.push(node);
	};
	exitHex = (ctx: HexContext) => {
		let node = <HexLiteral>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			node.value = ctx.HEX().text;

			this.evalLiteral(node);
		}
	};
	enterBinary = (ctx: BinaryContext) => {
		let node = new BinarLiteral();
		this.nodes.push(node);
	};
	exitBinary = (ctx: BinaryContext) => {
		let node = <BinarLiteral>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			node.value = ctx.BINARY().text;

			this.evalLiteral(node);
		}
	};
	enterRational = (ctx: RationalContext) => {
		let node = new FixedLiteral();
		this.nodes.push(node);
	};
	exitRational = (ctx: RationalContext) => {
		let node = <FixedLiteral>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			node.value = ctx.RATIONAL().text;

			this.evalLiteral(node);
		}
	};
	
	enterBool_const = (ctx: Bool_constContext) => {
		let node = new BoolLiteral();
		this.nodes.push(node);
	};
	exitBool_const = (ctx: Bool_constContext) => {
		let node = <BoolLiteral>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			node.value = ctx.TRUE() !== undefined;

			this.evalLiteral(node);
		}
	};
	private evalLiteral(node: Literal<any>) {
		const last = this.nodes.peek();
		if(last instanceof ArrayInit) {
			last.value.push(node);
		}
		else if(last instanceof Expression) {
			last.expresion = node;
		}
		else if(last instanceof FunctionDeclarationParameter) {
			last.defaultValue = node;
		}
		else if(last instanceof CaseStatement) {
			last.condition = node;
		}
		else {
			console.debug(last);
			this.addDiagnostic(Locale.t("Unexpected literal"), DiagnosticSeverity.Error, node.pos);
		}
	}
	enterInteger(ctx: IntegerContext): void {
		let node = new IntLiteral();
		this.nodes.push(node);
	}
	exitInteger(ctx: IntegerContext): void {
		let node = <IntLiteral>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			node.value = +ctx.INTEGER().text;

			this.evalLiteral(node);
		}
	}
	enterReturn(ctx: ReturnContext): void {
		let node = new ReturnStatement();
		this.nodes.push(node);
	}
	exitReturn(ctx: ReturnContext): void {
		let node = <ReturnStatement>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			let last = this.nodes.peek();
			if(last instanceof Statement) {
				last.statemnent = node;
			}
			else {
				console.error(node);
				console.error(last);
				this.addDiagnostic(Locale.t("Unexpected return statement"), DiagnosticSeverity.Error, node.pos);	
			}
		}
	}
	enterTagableExpression(ctx: TagableExpressionContext): void {
		const node = new Expression();
		this.nodes.push(node);
	}
	exitTagableExpression(ctx: TagableExpressionContext): void {
		this.evalExpression(ctx);
	}
	enterExpresion(ctx: ExpresionContext): void {
		const node = new Expression();
		this.nodes.push(node);
	}
	exitExpresion(ctx: ExpresionContext): void {
		this.evalExpression(ctx);
	}

	private evalExpression(ctx: ExpresionContext | TagableExpressionContext) {
		let node = <Expression>this.nodes.pop();

		if(!node.expresion) {
			if(ctx.stop) {
				const pos = new Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.stop.line - 1, ctx.stop.charPositionInLine);
				this.addDiagnostic(Locale.t("Empty expresion"), DiagnosticSeverity.Error, pos);
			}
			return;
		}
		if(node.isTaged) {
			node.expresion.tag = node.tag;
			node.expresion.isTaged = true;
		}
		node = node.expresion;
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			
			const last = this.nodes.peek();

			if(last instanceof VariableInit) {
				last.rightValue = node;
			} 
			else if(last instanceof NamedArgument) {
				last.value = node;
			}
			else if(last instanceof AbstractOperator) {
				last.expresion = node;
			}
			else if(last instanceof Statement) {
				last.statemnent = node;
			}
			else if(last instanceof IfStatement) {
				last.condition = node;
			}
			else if(last instanceof SwitchStatement) {
				last.condition = node;
			}
			else if(last instanceof ForCycle) {
				try {
					last.addExpresion(node);
				}
				catch(e) {
					console.error(last);
					this.addDiagnostic(Locale.t("Unexpected expresion"), DiagnosticSeverity.Error, node.pos);
				}
			}
			else if(last instanceof Cycle) {
				last.condition = node;
			}
			else if(last instanceof FunctionDeclarationParameter) {
				last.defaultValue = node;
			}
			else if(last instanceof ReturnStatement) {
				last.value = node;
			}
			else if(last instanceof EnumMember) {
				// last.value = node;
			}
			else if(last instanceof CaseStatement || last instanceof DefaultStatement)
			{
				last.code = node;
			}
			else if(last instanceof Expression)
			{
				last.expresion = node;
			}
			else {
				console.debug(last);
				this.addDiagnostic(Locale.t("Unexpected expresion"), DiagnosticSeverity.Error, node.pos);
			}
		}

		// let pre = ctx.preOperators();
		// if(pre) {
			// if(ctx.stop) {
				// let node = new UnarOperator();
				// node.value = last;
				// if(pre.NOT()) {	
				// 	node.operator = "!";
				// }
				// else if(pre.MINUS()) {
				// 	node.operator = "!";			
				// }
				// else if(pre.DECREMENTS()) {
				// 	node.operator = "--";			
				// }
				// else if(pre.DECREMENTS()) {
				// 	node.operator = "++";			
				// }
				// this.nodes.push(node);
			// }
		// }
	}
	
	enterArrayInit = (ctx: ArrayInitContext) => {
		let node = new ArrayInit();	
		this.nodes.push(node);
	};
	exitArrayInit = (ctx: ArrayInitContext) => {
		let node = <ArrayInit>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			
			let last = this.nodes.peek();
			if(last instanceof VariableInit) {
				last.rightValue = node;
			}
			else if(last instanceof ArrayInit) {
				last.value.push(node);
			}
			else if(last instanceof FunctionDeclarationParameter) {
				last.defaultValue = node;
			}
			else {
				console.debug(last);
				this.addDiagnostic(Locale.t("Unexpected array init"), DiagnosticSeverity.Error, node.pos);
			}
		}
	};

	exitCycleKeywords = (ctx: CycleKeywordsContext) => {
		if(ctx.stop) {
			const node = ctx.BREAK() ? new Break() : new Continue();
			node.setPos(ctx.start, ctx.stop);

			let last = this.nodes.peek();
			if(last instanceof Statement) {
				last.statemnent = node;
			}
			else {
				console.debug(last);
				this.addDiagnostic(Locale.t("Unexpected cycle keyword"), DiagnosticSeverity.Error, node.pos);
			}
		}
	};

	enterFunctionArgument(ctx: FunctionArgumentContext) {
		let node = new NamedArgument();	
		this.nodes.push(node);
	}
	exitFunctionArgument(ctx: FunctionArgumentContext) {
		let node = this.nodes.pop();
		if(!(node instanceof NamedArgument)) {
			throw new Error(`Ожидается NamedArgument, а найден ${node?.name}`);
		}
		if(!ctx.stop) {
			return;
		}
		node.setPos(ctx.start, ctx.stop);
		const last = this.nodes.peek();
		if(!(last instanceof FunctionCall)) {
			throw new Error(`Ожидается FunctionCall, а найден ${last?.name}`);
		}

		let id: TerminalNode;
		if(ctx.SKIP_PARAM()) {
			id = ctx.SKIP_PARAM()!;
			node.id = id.text;
			node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);
			return;
		} else {
			const symbol = ctx.symbol();
	
			if(!symbol) {
				if(node.value)
					last.pushParameter(node.value);
				return;
			}
			id = symbol.IDENTIFIER();
		}

		node.id = id.text;
		node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);
		last.pushParameter(node);
	}

	enterFunctionCallOperator(ctx: FunctionCallOperatorContext): void {
		let node = new FunctionCall();	
		this.nodes.push(node);
	}

	

	exitFunctionCallOperator(ctx: FunctionCallOperatorContext): void 
	{
		let node = <FunctionCall>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);

			try {
				let id = ctx.IDENTIFIER();
				node.id = id.text;
				node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);

			} catch(e) {
				this.addDiagnostic(Locale.t("Function identifire expected"), DiagnosticSeverity.Error, node.pos);
			}
			
			let last = this.nodes.peek();
			if(last instanceof Expression) {
				last.expresion = node;
			}
			else {
				console.debug(last);
				this.addDiagnostic(Locale.t("Unexpected function call"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}

	enterVarInit(ctx: VarInitContext):void {
		let node = new VariableInit();
		this.nodes.push(node);
	}
	exitVarInit(ctx: VarInitContext):void {
		const node = <VariableInit>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			const last = this.nodes.peek();
			if(last instanceof OperatorNew) {
				last.pushParameter(node);
			}
			else {
				console.error(last);
				this.addDiagnostic(Locale.t("parserErrorUnexpectedInitialization"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}

	enterDeclParams(ctx: DeclParamsContext): void {
		let node = new FunctionDeclarationParameter();	
		this.nodes.push(node);
	}
	exitDeclParams(ctx: DeclParamsContext):void {
		const node = <FunctionDeclarationParameter>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			
			const id = ctx.IDENTIFIER();
			node.id = id.text;
			node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);

			if(ctx.CONST())
				node.const = true;
			if(ctx.reference())
				node.reference = true;
			const last = this.nodes.peek();
			if(last instanceof FunctionDeclaration) {
				last.pushParameter(node);
			}
			else {
				console.debug(last);
				this.addDiagnostic(Locale.t("Unexpected function parameter"), DiagnosticSeverity.Error, node.idPos);
			}
		}
	}
	enterFloat(ctx: FloatContext): void {
		const node = new FloatLiteral();
		this.nodes.push(node);
	}

	exitFloat(ctx: FloatContext): void {
		let node = <FloatLiteral>this.nodes.pop();
		if(ctx.stop) {
			node.range = new Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.start.line - 1, ctx.start.charPositionInLine + ctx.FLOAT().text.length); 
			node.value = +ctx.FLOAT().text;

			const last = this.nodes.peek();
			if(last instanceof Expression) {
				last.expresion = node;
			}
			else if(last instanceof FunctionDeclarationParameter) {
				last.defaultValue = node;
			}
			else {
				console.debug(last);
				this.addDiagnostic(Locale.t("Unexpected float literal"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}

	enterString(ctx: StringContext): void {
		const node = new StringLiteral();
		this.nodes.push(node);
	}
	exitString(ctx: StringContext): void {
		let node = <StringLiteral>this.nodes.pop();
		if(ctx.stop) {
			node.value = ctx.text;
			node.setRange(new Position(ctx.start.line - 1, ctx.start.charPositionInLine), new Position(ctx.start.line - 1, ctx.start.charPositionInLine + ctx.text.length));

			const last = this.nodes.peek();
			if(last instanceof Expression) {
				last.expresion = node;
			}
			else if(last instanceof FunctionDeclarationParameter) {
				last.defaultValue = node;
			}
			else if(last instanceof CaseStatement) {
				last.condition = node;
			}
			else {
				console.debug(last);
				this.addDiagnostic(Locale.t("Unexpected string"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	exitFuncDeclModif(ctx: FuncDeclModifContext): void {
		const last = this.nodes.peek();
		if(last instanceof FunctionDeclaration) {
			if(ctx.funcModif()?.STOCK())
				last.addModifier(FunctionModifire.Stock);
			else if(ctx.funcModif()?.PUBLIC())
				last.addModifier(FunctionModifire.Public);
			else if(ctx.FORWARD())
				last.addModifier(FunctionModifire.Forward);
			else if(ctx.NATIVE())
				last.addModifier(FunctionModifire.Native);
		}
		else if(ctx.stop) {
			console.debug(last);
			const pos = new Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.stop.line - 1, ctx.stop.charPositionInLine);
			this.addDiagnostic(Locale.t("Unexpected function modifier"), DiagnosticSeverity.Error, pos);
		}
	}

	enterWhile(ctx: WhileContext): void {
		const node = new WhileCycle();
		this.nodes.push(node);
	}
	exitWhile(ctx: WhileContext): void {
		const node = <WhileCycle>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			const last = this.nodes.peek();
			if(last instanceof Statement) {
				last.statemnent = node;
			}
			else {
				this.addDiagnostic(Locale.t("Unexpected while loop"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	enterFor(ctx: ForContext): void {
		const node = new ForCycle();
		this.nodes.push(node);
	}
	exitFor(ctx: ForContext): void {
		const node = <ForCycle>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			const last = this.nodes.peek();
			if(last instanceof Statement) {
				last.statemnent = node;
			}
			else {
				this.addDiagnostic(Locale.t("Unexpected for loop"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	

	enterIfStatement(ctx: IfStatementContext): void {
		const node = new IfStatement();
		this.nodes.push(node);
	}
	exitIfStatement(ctx: IfStatementContext): void {
		const node = <IfStatement>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			
			const last = this.nodes.peek();
			if(last instanceof Statement) {
				last.statemnent = node;
			}
			else {
				console.error(last);
				this.addDiagnostic(Locale.t("Unexpected condition statement"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}

	enterSwitch(ctx: SwitchContext): void {
		const node = new SwitchStatement();
		this.nodes.push(node);
	}
	exitSwitch(ctx: SwitchContext): void {
		const node = <SwitchStatement>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			
			const last = this.nodes.peek();
			if(last instanceof Statement) {
				last.statemnent = node;
			}
			else {
				this.addDiagnostic(Locale.t("Unexpected switch statement"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}

	enterCase(ctx: CaseContext): void {
		const node = new CaseStatement();
		this.nodes.push(node);
	}
	exitCase(ctx: CaseContext): void {
		const node = <CaseStatement>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			
			const last = this.nodes.peek();
			if(last instanceof SwitchStatement) {
				last.cases.push(node);
			}
			else {
				this.addDiagnostic(Locale.t("Unexpected case statement"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}

	enterDefault(ctx: DefaultContext): void {
		const node = new DefaultStatement();
		this.nodes.push(node);
	}
	exitDefault(ctx: DefaultContext): void {
		const node = <DefaultStatement>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			
			const last = this.nodes.peek();
			if(last instanceof SwitchStatement) {
				last.default = node;
			}
			else {
				this.addDiagnostic(Locale.t("Unexpected default statement"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}

	exitDocBlock(ctx: DocBlockContext)
	{
		this.docs.push(new Docs(ctx.text));
	}

	enterStatement(ctx: StatementContext): void {
		const node = new Statement();
		this.nodes.push(node);
	}
	exitStatement(ctx: StatementContext): void {
		const node = <AbstractStatement>(<Statement>this.nodes.pop()).statemnent;
		
		let last = this.nodes.peek();
		if(
			last instanceof FunctionDeclaration || 
			last instanceof IfStatement || 
			last instanceof Cycle || 
			last instanceof CaseStatement || 
			last instanceof DefaultStatement
		) {
			last.code = node;
		}
		else if(last instanceof CodeBlock) {
			last.statements.push(node);
		}
		else {
			console.error(node);
			console.error(last);
			this.addDiagnostic(Locale.t("Unexpected code"), DiagnosticSeverity.Error, node.pos);
		}	
	}

	
	enterBinarExpressionOperator =(ctx: BinarExpressionOperatorContext) => {
		const node = new BinarOperator();
		this.nodes.push(node);
	};
	exitBinarExpressionOperator =(ctx: BinarExpressionOperatorContext) => {
		let node = <BinarOperator>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			node.operator = ctx._operator.text;
			
			if(node.operator === "=") {
				node = AssigmentOperator.copy(node);
			}

			const last = this.nodes.peek();
			if(last instanceof Expression) {
				node.left = last.expresion!;
				last.expresion = node;
			}
			else {
				this.addDiagnostic(Locale.t("Unexpected binar operator"), DiagnosticSeverity.Error, node.pos);
			}
		}
	};
	enterChainedRelationalOperator(ctx: ChainedRelationalOperatorContext) {
		const node = new ChainedOperator();
		this.nodes.push(node);
	}
	exitChainedRelationalOperator = (ctx: ChainedRelationalOperatorContext) => {
		const node = <ChainedOperator>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			// node.operator = ctx.chainedRelationalOperators()[0].text;
			
			const last = this.nodes.peek();
			if(last instanceof Expression) {
				node.setFirstLeft(last.expresion!);
				last.expresion = node;
			}
			else {
				console.error(last);
				this.addDiagnostic(Locale.t("Unexpected binar operator"), DiagnosticSeverity.Error, node.pos);
			}
		}
	};

	exitChainedRelationalOperators = (ctx: ChainedRelationalOperatorsContext) => {
		const last = this.nodes.peek();
		if(last instanceof ChainedOperator) {
			if(ctx.stop) { 
				const node = new BinarOperator();
				node.setPos(ctx.start, ctx.stop);
				node.operator = ctx.text;
				last.push(node);
			}
		} else {
			const pos = new Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.stop!.line - 1, ctx.stop!.charPositionInLine);
			this.addDiagnostic(Locale.t("Unexpected compare operator"), DiagnosticSeverity.Error, pos);
		}
	};

	enterUnarOperator = (ctx: UnarOperatorContext) => {
		const node = new UnarOperator();
		this.nodes.push(node);
	};
	exitUnarOperator =(ctx: UnarOperatorContext) => {
		const node = <UnarOperator>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			
			const last = this.nodes.peek();
			if(last instanceof Expression) {
				last.expresion = node;
			}
			else {
				this.addDiagnostic(Locale.t("Unexpected unar operator"), DiagnosticSeverity.Error, node.pos);
			}
		}
	};

	exitPostDecrement = (ctx: PostDecrementContext) => {
		const node = this.nodes.peek();
		const pos = new Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.stop!.line - 1, ctx.stop!.charPositionInLine);
		if(node instanceof UnarOperator) {
			node.operator = "--";
		}
		else {
			this.addDiagnostic(Locale.t("Unexpected post decrement"), DiagnosticSeverity.Error, pos);
		}
	};
	exitPreDecrement = (ctx: PreDecrementContext) => {
		const node = this.nodes.peek();
		const pos = new Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.stop!.line - 1, ctx.stop!.charPositionInLine);
		if(node instanceof UnarOperator) {
			node.operator = "--";
		}
		else {
			this.addDiagnostic(Locale.t("Unexpected pre decrement"), DiagnosticSeverity.Error, pos);
		}
	};
	exitPreIncrement = (ctx: PreIncrementContext) => {
		const node = this.nodes.peek();
		const pos = new Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.stop!.line - 1, ctx.stop!.charPositionInLine);
		if(node instanceof UnarOperator) {
			node.operator = "++";
		}
		else {
			this.addDiagnostic(Locale.t("Unexpected pre increment"), DiagnosticSeverity.Error, pos);
		}
	};
	exitPostIncrement = (ctx: PostIncrementContext) => {
		const node = this.nodes.peek();
		const pos = new Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.stop!.line - 1, ctx.stop!.charPositionInLine);
		if(node instanceof UnarOperator) {
			node.operator = "++";
		}
		else {
			this.addDiagnostic(Locale.t("Unexpected pre increment"), DiagnosticSeverity.Error, pos);
		}
	};
	exitPreExpresionOperator = (ctx: PreExpresionOperatorContext) => {
		const node = this.nodes.peek();
		const pos = new Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.stop!.line - 1, ctx.stop!.charPositionInLine);
		if(node instanceof UnarOperator) {
			node.operator = ctx.text;
		}
		else {
			this.addDiagnostic(Locale.t("Unexpected operator"), DiagnosticSeverity.Error, pos);
		}
	};
	exitPreSymbolOperator = (ctx: PreSymbolOperatorContext) => {
		const node = this.nodes.peek();
		const pos = new Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.stop!.line - 1, ctx.stop!.charPositionInLine);
		if(node instanceof UnarOperator) {
			node.operator = ctx.text;
		}
		else {
			this.addDiagnostic(Locale.t("Unexpected operator"), DiagnosticSeverity.Error, pos);
		}
	};
	exitSymbol = (ctx: SymbolContext) => {
		const node = new Variable();
		if(ctx.stop)
		{	
			node.setPos(ctx.start, ctx.stop);
			try {
				let id = ctx.IDENTIFIER();
				node.id = id.text;
				node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);

			} catch(e) {
				this.addDiagnostic(Locale.t("Variable identifire expected"), DiagnosticSeverity.Error, node.pos);
			}

	
			const last = this.nodes.peek();
			
			if(last instanceof UnarOperator) {
				last.value = node;
			}
			// else if(last instanceof Lvalur)
			// {
			// 	last.var = declarationVar;
			// }
			else if(last instanceof BinarOperator)
			{
				last.expresion = node;
			}
			else if(last instanceof Expression)
			{
				last.expresion = node;
			}
			else {
				console.error(last);
				this.addDiagnostic(Locale.t("Unexpected symbol"), DiagnosticSeverity.Error, node.idPos);
			}
		}
	};

	enterArrayIndexOperator(ctx: ArrayIndexOperatorContext) {
		this.nodes.push(new UnarOperator());
	}
	exitArrayIndexOperator(ctx: ArrayIndexOperatorContext) {
		const node = <ASTNode>this.nodes.pop();
		if(!(node instanceof ArrayIndex || node instanceof ArrayChar)) {
			console.error(node);
			this.addDiagnostic(Locale.t("Unexpected node (AST error)"), DiagnosticSeverity.Error, node.pos);
			return;
		}
		if(ctx.stop)
		{	
			node.setPos(ctx.start, ctx.stop);

			const last = this.nodes.peek();
			if(last instanceof Expression)
			{
				last.expresion = node;
			}
			else {
				console.error(last);
				this.addDiagnostic(Locale.t("Unexpected array"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	enterArrayOperatorIndex(ctx: ArrayOperatorIndexContext) {
		this.nodes.push(new ArrayIndex());
	}
	exitArrayOperatorIndex(ctx: ArrayOperatorIndexContext) {
		this.enterArrayIndexOper(ctx);
	}
	enterArrayOperatorChar(ctx: ArrayOperatorCharContext) {
		this.nodes.push(new ArrayChar());
	}
	exitArrayOperatorChar(ctx: ArrayOperatorCharContext) {
		this.enterArrayIndexOper(ctx);
	}

	private enterArrayIndexOper(ctx: ArrayOperatorIndexContext|ArrayOperatorCharContext) {
		const node = <ASTNode>this.nodes.pop();
		if(!(node instanceof ArrayIndex || node instanceof ArrayChar)) {
			console.error(node);
			this.addDiagnostic(Locale.t("Unexpected node (AST error)"), DiagnosticSeverity.Error, node.pos);
			return;
		}
		if(ctx.stop)
		{	
			node.setPos(ctx.start, ctx.stop);

			const last = this.nodes.pop();	
			if(last instanceof UnarOperator)
			{
				if(!last.value) {
					this.addDiagnostic(Locale.t("Symbol not found"), DiagnosticSeverity.Error, last.pos);
					this.nodes.push(last);
					return;
				}
				node.left = last.value;
			}
			else if(last instanceof ArrayIndex || last instanceof ArrayChar)
			{
				node.left = last;
				
			}
			else {
				console.error(last);
				this.addDiagnostic(Locale.t("Expected symbol or array index/char operator"), DiagnosticSeverity.Error, node.pos);
				return;
			}
			this.nodes.push(node);
		}
	}

	exitPredefinedConstants(ctx: PredefinedConstantsContext) {
		const node = new Variable();
		if(ctx.stop)
		{	
			node.setPos(ctx.start, ctx.stop);
			node.id = ctx.text;
			node.setIDPos(ctx._start.line, ctx._start.charPositionInLine, ctx.stop.charPositionInLine + ctx.text.length);
			const last = this.nodes.peek();
			
			if(last instanceof Expression)
			{
				last.expresion = node;
			}
			else {
				console.error(last);
				this.addDiagnostic(Locale.t("Unexpected constant"), DiagnosticSeverity.Error, node.idPos);
			}
		}
	}
}