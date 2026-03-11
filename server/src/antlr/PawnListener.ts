/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable curly */
import { DiagnosticMessage } from "./diagnostic/DiagnosticMessage";
import { Declarations } from "./AST/Nodes/Declarations";
import { Stack } from "./Stack/Stack";
import { pawnListener as IPawnListener } from "./generated/pawnListener";
import { AdditiveExpressionContext, ArrayIndexContext, ArrayInitContext, AssigmentExpressionContext, BinaryContext, BitAndExpressionContext, BitOrExpressionContext, BitShiftExpressionContext, Bool_constContext, CaseContext, Case_listContext, CompareExpressionContext, CompoundExpressionContext, CompoundStatmentContext, CycleKeywordsContext, DeclParamsContext, DefaultContext, DocBlockContext, EllipseContext, ElseStatementContext, EnumContext, EnumMemberContext, EqualOrNotExpressionContext, ExpresionContext, FileContext, FloatContext, ForContext, FuncDeclModifContext, FunctionArgumentContext, FunctionCallOperatorContext, FunctionDeclContext, FunctionDeclarationParamsContext, FunctionOrArrayExpressionContext, HexContext, IfStatementContext, IntegerContext, LogicalAndExpressionContext, LogicalOrExpressionContext, MultiplicativeExpressionContext, NativeAssigmentContext, OperatorOverloadContext, PluralTagContext, PostfixExpressionContext, PredefinedConstantsContext, PrefixExpressionContext, PrimaryExpressionContext, RationalContext, ReturnContext, StatementContext, StringContext, SwitchContext, SymbolContext, TagContext, TernaryExpressionContext, VarDeclarationContext, VarModifiresContext, VariableDeclarationContext, WhileContext, XorExpressionContext } from "./generated/pawnParser";
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
// import { VariableInit } from "./AST/Nodes/VariableInit";
import { Variable } from "./AST/Nodes/Variable";
import { FunctionDeclarationParameter } from "./AST/Nodes/Functions/FunctionDeclarationParameter";
import { FloatLiteral } from "./AST/Nodes/Literals/FloatLiteral";
import { StringLiteral } from "./AST/Nodes/Literals/StringLiteral";
import { WhileCycle } from "./AST/Nodes/Cycles/WhileCycle";
import { Cycle } from "./AST/Nodes/Cycles/Cycle";
import { ForCycle } from "./AST/Nodes/Cycles/ForCycle";
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
import { TernarOperator } from "./AST/Nodes/Operators/TernarOperator";
import { ComaOperator } from "./AST/Nodes/Operators/ComaOperator";
import { Token } from "antlr4ts";
import { Interval } from "antlr4ts/misc/Interval";
import { RightValue } from "./AST/Nodes/RightValue";
import { PawnErrors } from "../Errors/PawnErrors";
import { CompoundExpression } from "./AST/Nodes/CompoundExpression";

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
		const variablesCount = ctx.variableDeclaration().length;
		const variables: VarDeclaration[] = [];
		for(let i = 0; i < variablesCount; i++) {
			variables.push(<VarDeclaration>this.nodes.pop());
		}

		let node = <OperatorNew>this.nodes.pop();
		
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
				
		}

		variables.forEach(v => {
			v.modifires = node.modifires;
			node.pushParameter(v);
		});		

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

	exitVariableDeclaration(ctx: VariableDeclarationContext) {
		const node = new VarDeclaration();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
		}

		if(ctx.ASSIGMENT()) {
			node.initValue = <Expression>this.nodes.pop();
		}
		const indexCount = ctx.SQUARE_OPEN_BRACKET().length;
		if(indexCount) {
			for(let i = 0; i < indexCount; i++) {
				node.dimensions.unshift(<Expression>this.nodes.pop());
			}
		}

		const id = ctx.IDENTIFIER();
		node.id = id.text;
		node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);
		
		if(ctx.tag()) {
			node.tag = <Tag>this.nodes.pop();
		}
		
		this.nodes.push(node);
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

	// enterVariable(ctx: VariableContext): void {
	// 	let node = new Variable();			
	// 	this.nodes.push(node);
	// }
	// exitVariable(ctx: VariableContext): void {
	// 	let node = <Variable>this.nodes.pop();
	// 	if(ctx.stop)
	// 	{	
	// 		node.setPos(ctx.start, ctx.stop);
	// 		try {
	// 			let id = ctx.IDENTIFIER();
	// 			node.id = id.text;
	// 			node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);

	// 		} catch(e) {
	// 			this.addDiagnostic(Locale.t("Variable identifire expected"), DiagnosticSeverity.Error, node.pos);
	// 		}

	// 		// let decl = this.nodes.peek();
	// 		// if(decl instanceof OperatorNew)
	// 		// 	decl.push(node);
	// 		// else 

	// 		const last = this.nodes.peek();
	// 		var declarationVar:VarDeclaration = new VarDeclaration();
	// 		if(node instanceof ArrayNode) {
	// 			declarationVar = new ArrayDeclaration();
	// 			(<ArrayDeclaration>declarationVar).indexes = node.indexes;
	// 		}

	// 		declarationVar.setPos(ctx.start, ctx.stop);
	// 		declarationVar.id = node.id;
	// 		declarationVar.idPos = node.idPos;
	// 		declarationVar.tag = node.tag;
			
	// 		if(last instanceof OperatorNew) {
	// 			last.pushParameter(declarationVar);
	// 		}
	// 		else if(last instanceof VariableInit)
	// 		{
	// 			last.var = declarationVar;
	// 		}
	// 		else if(last instanceof Expression)
	// 		{
	// 			last.expresion = node;
	// 		}
	// 		else if(last instanceof FunctionDeclarationParameter)
	// 		{
	// 			last.variable = node;
	// 			// last.push(new FunctionDeclarationParameter(declarationVar));
	// 		}
	// 		else if(last instanceof CodeBlock)
	// 		{
	// 			this.addDiagnostic("warning 215: " + Locale.t("expression has no effect"), DiagnosticSeverity.Warning, node.idPos);
	// 		}
	// 		else {
	// 			console.error(last);
	// 			this.addDiagnostic(Locale.t("Unexpected variable"), DiagnosticSeverity.Error, node.idPos);
	// 		}
	// 	}
	// }

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
		let value = ctx.ASSIGMENT() ? <Expression>this.nodes.pop() : undefined;
		let index = ctx.SQUARE_OPEN_BRACKET() ? <Expression>this.nodes.pop() : undefined;
		let tag = ctx.tag() ? <Tag>this.nodes.pop() : undefined;
		
		const node = <EnumMember>this.nodes.pop();
		if(tag) {
			node.tag = tag;
		}
		const id = ctx.IDENTIFIER();
		node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);
		node.id = id.text;
		
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
			else if(last instanceof EnumMember || last instanceof VarDeclaration) {
				this.nodes.push(node);
			}
			else if(last instanceof EnumDeclaration) {
				last.explicitTag = node;
			}
			else if(last instanceof Expression) {
				this.nodes.push(node);
				// last.tag = node;
				// last.isTaged = true;
			} else if(last instanceof FunctionDeclaration) {
				last.tag = node;
			}
			else if(last instanceof Ellipse) {
				last.addTag(node);
			}
			else if(last instanceof OperatorNew) {
				this.nodes.push(node);
			}
			else {
				console.log(last);
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
				this.nodes.push(node);
				// this.addDiagnostic(Locale.t("Unexpected ellipse operator"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	
	enterCompoundStatment(ctx: CompoundStatmentContext): void {
		let node = new CodeBlock(new Statements());	
		this.nodes.push(node);
	}

	exitCompoundStatment(ctx: CompoundStatmentContext): void {
		const statementsCount = ctx.statement().length;
		const statements = [];
		for(let i = 0; i < statementsCount; i++) {
			statements.unshift(<AbstractStatement>this.nodes.pop());
		}
		let node = <CodeBlock>this.nodes.pop();
		statements.forEach(node.statements.push.bind(node.statements));
		
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
		this.nodes.push(node);
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
		const value = ctx.compoundExpression() ? <Expression>this.nodes.pop() : undefined;
		let node = <ReturnStatement>this.nodes.pop();
		if(value) {
			node.value = value;
		}
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
	
	enterExpresion(ctx: ExpresionContext): void {
		const node = new Expression();
		this.nodes.push(node);
	}
	exitCompoundExpression(ctx: CompoundExpressionContext) {
		const expressionsCount = ctx.expresion().length;
		let node: Expression;
		if(expressionsCount === 1) {
			node = <Expression>this.nodes.pop();
		} else {
			node = new CompoundExpression();
			for(let i = 0; i < expressionsCount; i++) {
				(<CompoundExpression>node).add(<Expression>this.nodes.pop());
			}
		}

		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
		}

		this.nodes.push(node);
	}
	exitExpresion(ctx: ExpresionContext): void {
		let node = <Expression>this.nodes.pop();
		this.nodes.pop(); // pop stub

		const last = this.nodes.peek();

		if(last instanceof EnumMember) {
			this.nodes.push(node);
		}
		// else if(last instanceof VariableInit) {
		// 	last.rightValue = node;
		// } 
		else if(last instanceof NamedArgument) {
			last.value = node;
		}
		else if(last instanceof DefaultStatement)
		{
			last.code = node;
		}
		else if(last instanceof Expression)
		{
			this.nodes.push(node);
		}
		else if(
			last instanceof OperatorNew || 
			last instanceof VarDeclaration || 
			last instanceof Tag || 
			last instanceof AbstractStatement || 
			last instanceof Cycle ||
			last instanceof Statement
		)
		{
			this.nodes.push(node);
		}
		else {
			this.nodes.push(node);
			console.error("Unexpected expresion");
			console.debug(last);
			console.debug(node);
			// this.addDiagnostic(Locale.t("Unexpected expresion"), DiagnosticSeverity.Error, node.pos);
		}
	}

	// hier14
	exitAssigmentExpression(ctx: AssigmentExpressionContext) {
		 if (!ctx.stop || !ctx.assigments().length) {
			return; 
		}

		const operandCount = ctx.ternaryExpression().length;
		const operands: Expression[] = [];
		const operators: string[] = ctx.assigments().map(op => op.text);

		for (let i = 0; i < operandCount; i++) {
			operands.unshift(this.nodes.pop() as Expression);
		}

		let right = operands.pop()!;
		for (let i = operators.length - 1; i >= 0; i--) {
			const left = operands.pop()!;
			let op = new AssigmentOperator();
			op.range = new Range(left.range.start, right.range.end);
			op.right = right;
			op.operator = operators[i];
			if(!(left instanceof Variable)) {
				const diag = PawnErrors.report(PawnErrors.Code.MustBeLValue, left.pos);
				this.addDiagnostic(diag.message, diag.severity!, left.pos);
			} else {
				op.left = left;
			}
			right = op;
		}
		this.nodes.push(right);
	}
	exitTernaryExpression(ctx: TernaryExpressionContext) {
		if(!ctx.stop || ctx.childCount <= 1) {
			return; // primaryExpression уже лежит в стеке
		}

		const node = new TernarOperator();
		node.setPos(ctx.start, ctx.stop);

		node.onFalse = this.nodes.pop() as Expression;
		node.onTrue = this.nodes.pop() as Expression;
		node.condition = this.nodes.pop() as Expression;
		
		this.nodes.push(node);
	}
	exitLogicalOrExpression(ctx: LogicalOrExpressionContext) {
		this.evaluateBinarOperator(ctx);
	}
	exitLogicalAndExpression(ctx: LogicalAndExpressionContext) {
		this.evaluateBinarOperator(ctx);
	}
	exitEqualOrNotExpression(ctx: EqualOrNotExpressionContext) {
		this.evaluateBinarOperator(ctx);
	}
	exitCompareExpression(ctx: CompareExpressionContext) {
		if(!ctx.stop || ctx.childCount <= 1) {
			return; // primaryExpression уже лежит в стеке
		}

		const operandCount = (ctx.childCount + 1) / 2;
		const operands: Expression[] = [];
		for (let i = 0; i < operandCount; i++) {
			operands.unshift(this.nodes.pop() as Expression);
		}
		
		if(operandCount === 2) {
			const node = new BinarOperator();
			node.operator = ctx._op.text!;
			node.left = operands[0];
			node.right = operands[1];
			node.operator = ctx.getChild(1).text;
			node.setPos(ctx.start, ctx.stop);
			this.nodes.push(node);
			return;
		}

		const chain = new ChainedOperator();
		chain.setPos(ctx.start, ctx.stop);
		chain.operands = operands;
		
		for (let i = 1; i < ctx.childCount; i += 2) {
			chain.pushOperator(ctx.getChild(i).text);
		}

		chain.setPos(ctx.start, ctx.stop);
		this.nodes.push(chain);
	}
	exitBitOrExpression(ctx: BitOrExpressionContext) {
		this.evaluateBinarOperator(ctx);
	}
	exitXorExpression(ctx: XorExpressionContext) {
		this.evaluateBinarOperator(ctx);
	}
	exitBitAndExpression(ctx: BitAndExpressionContext) {
		this.evaluateBinarOperator(ctx);
	}
	exitBitShiftExpression(ctx: BitShiftExpressionContext) {
		this.evaluateBinarOperator(ctx);
	}
	exitAdditiveExpression(ctx: AdditiveExpressionContext) {
		this.evaluateBinarOperator(ctx);
	}
	exitMultiplicativeExpression(ctx: MultiplicativeExpressionContext) {
		this.evaluateBinarOperator(ctx);
	}
	exitPrefixExpression(ctx: PrefixExpressionContext) {
		if(!ctx.stop || ctx.childCount <= 1) {
			return; // primaryExpression уже лежит в стеке
		}

		const last = this.nodes.pop() as Expression;
		if(ctx.DEFINED() || ctx.SIZEOF() || ctx.TAGOF() || ctx.STATE() || ctx.INCREMENTS() || ctx.DECREMENTS() || ctx.BIT_COMPLEMEN() || ctx.NOT() || ctx.MINUS()) {
			const op = ctx.getChild(0).text.toLowerCase();
			
			let node = new UnarOperator();
			node.operator = op;
			node.setPos(ctx.start, ctx.stop);
			node.value = last;
			this.nodes.push(node);
			return;
		}

		const tag = this.nodes.pop() as Tag;
		last.tag = tag;
		last.isTaged = true;
		
		this.nodes.push(last);
	}
	exitPostfixExpression(ctx: PostfixExpressionContext) {
		if(!ctx.stop || ctx.childCount <= 1) {
			return; // primaryExpression уже лежит в стеке
		}
		
		let node = this.nodes.pop() as Expression;
		for(let i = 1; i < ctx.childCount; i++) {
			const child = ctx.getChild(i);
			const operator = child.text;
			
			const nodeOperator = new UnarOperator();
			nodeOperator.operator = operator;
			nodeOperator.setPos(ctx.start, ctx.stop);
			nodeOperator.value = node;

			node = nodeOperator;
		}
		this.nodes.push(node);
	}
	
	exitFunctionOrArrayExpression(ctx: FunctionOrArrayExpressionContext) {
		if(ctx.childCount <= 1) {
			return; // в стеке уже 1 выражение
		}

		// собираем аргументы
		const functionArgs = [];
		const hasFunctionCall = ctx.functionCallOperator();
		if(hasFunctionCall) {
			const argCount = hasFunctionCall.functionArgument().length;
			for (let j = 0; j < argCount; j++) 
				functionArgs.unshift(this.nodes.pop() as RightValue | NamedArgument);
			
		}

		// собираем индексы
		const bracketGroups = ctx.SQUARE_OPEN_BRACKET().length + ctx.CURLY_OPEN_BRACKET().length
		const indexNodes: Expression[] = [];
		for (let i = 0; i < bracketGroups; i++) {
			indexNodes.unshift(this.nodes.pop() as Expression);
		}

		// получаем исходный символ
		let currentNode = this.nodes.pop() as Expression;

		if(!(currentNode instanceof Variable)) {
			const diag = PawnErrors.report(PawnErrors.Code.ExpressionError, currentNode.pos);
			this.addDiagnostic(diag.message, diag.severity!, currentNode.pos);
			currentNode.isLValue = false;
		}


		for (let i = 1; i < ctx.childCount; i++) {
			const child = ctx.getChild(i);

			if (child instanceof TerminalNode) {
				const tokenText = child.text;
				
				if (tokenText === '[' || tokenText === '{') {
					const isChar = tokenText === '{';
					const indexExpr = indexNodes.shift()!; // Берем следующий индекс из очереди
					const closeBracket = ctx.getChild(i + 2) as TerminalNode;

					const arrayNode = isChar ? new ArrayChar() : new ArrayIndex();
					arrayNode.left = currentNode;
					arrayNode.right = indexExpr;

					arrayNode.range = this.calculateNodeRange(ctx.start, closeBracket.symbol);
					
					currentNode = arrayNode;
					i += 2; // Пропускаем: [ , выражение , ]
				}
			} 
			else if (child instanceof FunctionCallOperatorContext) {
				const call = new FunctionCall();
				
				call.range = (this.calculateNodeRange(ctx.start, child.stop!));
				functionArgs.forEach(call.pushParameter.bind(call));
				if(currentNode instanceof Variable) {
					call.id = currentNode.id;
					call.setIDPos(currentNode.idPos);
				} else {
					const diag = PawnErrors.report(PawnErrors.Code.InvalidFunctionCall, call.idPos);
					this.addDiagnostic(diag.message, DiagnosticSeverity.Error, call.idPos);
				}
				
				currentNode = call;
				break;
			}
		}

		
		this.nodes.push(currentNode);
	}
	exitPrimaryExpression(ctx: PrimaryExpressionContext) {
		if(!ctx.stop) {
			return;
		}
		if(!ctx.OPEN_PARENTHESIS()) {
			return; // литерал/символ уже загружен в стек
		}
		const expCount = ctx.assigmentExpression().length;
		if(expCount === 1) {
			return; // одно выражение уже в стеке
		}
		const nodes: Expression[] = [];
		for(let i = 0; i < expCount; i++) {
			nodes.unshift(this.nodes.pop() as Expression);
		}
		this.nodes.push(new ComaOperator(nodes, this.calculateNodeRange(ctx.start, ctx.stop)))
	}
	
	exitArrayInit = (ctx: ArrayInitContext) => {
		let node = new ArrayInit();	
		const membersCount = ctx.arrayInitMember().length;
		for(let i = 0; i < membersCount; i++) {
			node.value.unshift(this.nodes.pop());
		}

		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
		}
		this.nodes.push(node);
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
		if(!(last instanceof Expression)) {
			throw new Error(`Неожиданный аргумент (${last?.name})`);
		}

		let id: TerminalNode;
		if(ctx.SKIP_PARAM()) {
			id = ctx.SKIP_PARAM()!;
			return;
		} else {
			const symbol = ctx.symbol();
	
			if(!symbol) {
				if(node.value) {
					this.nodes.push(node.value);
				}
				return;
			}
			id = symbol.IDENTIFIER();
		}

		node.id = id.text;
		node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);
		this.nodes.push(node);
	}

	// enterVarInit(ctx: VarInitContext):void {
	// 	let node = new VariableInit();
	// 	this.nodes.push(node);
	// }
	// exitVarInit(ctx: VarInitContext):void {
	// 	const node = <VariableInit>this.nodes.pop();
	// 	if(ctx.stop) {
	// 		node.setPos(ctx.start, ctx.stop);
	// 		const last = this.nodes.peek();
	// 		if(last instanceof OperatorNew) {
	// 			last.pushParameter(node);
	// 		}
	// 		else {
	// 			console.error(last);
	// 			this.addDiagnostic(Locale.t("parserErrorUnexpectedInitialization"), DiagnosticSeverity.Error, node.pos);
	// 		}
	// 	}
	// }

	enterDeclParams(ctx: DeclParamsContext): void {
		let node = new FunctionDeclarationParameter();	
		this.nodes.push(node);
	}
	exitDeclParams(ctx: DeclParamsContext):void {
		const defaultValue = ctx.ASSIGMENT() ? <Expression>this.nodes.pop() : undefined;

		const node = <FunctionDeclarationParameter>this.nodes.pop();
		if(defaultValue) {
			node.defaultValue = defaultValue;
		}
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
			
			const sanitized = ctx.FLOAT().text.replace(/_/g, '');
			node.value = Number(sanitized);

			const last = this.nodes.peek();
			this.nodes.push(node);			
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
			if(last instanceof StringLiteral) {
				this.nodes.pop();
				last.value += node.value;
				this.nodes.push(node);
			} else {
				this.nodes.push(node);
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
		const code = <AbstractStatement>this.nodes.pop();
		const cond = <Expression>this.nodes.pop();
		const node = <WhileCycle>this.nodes.pop();

		node.condition = cond;
		node.code = code;

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
		const code = <AbstractStatement>this.nodes.pop();
		const lastExp = ctx._third ? <Expression>this.nodes.pop() : undefined;
		const cond = ctx._second ? <Expression>this.nodes.pop() : undefined;
		const firstExp = ctx._first?.compoundExpression() ? <Expression>this.nodes.pop() : undefined;


		const node = <ForCycle>this.nodes.pop();

		if(firstExp) {
			node.initialization = firstExp;
		}
		if(lastExp) {
			node.increment = lastExp;
		}
		if(cond) {
			node.condition = cond;
		}
		node.code = code;

		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			const last = this.nodes.peek();
			if(last instanceof Statement) {
				last.statemnent = node;
			}
			else {
				console.log(last);
				this.addDiagnostic(Locale.t("Unexpected for loop"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	

	enterIfStatement(ctx: IfStatementContext): void {
		const node = new IfStatement();
		this.nodes.push(node);
	}
	exitIfStatement(ctx: IfStatementContext): void {
		const elseCode = ctx.elseStatement() ? <AbstractStatement>this.nodes.pop() : undefined;
		const code = <AbstractStatement>this.nodes.pop();
		const cond = <Expression>this.nodes.pop();
		const node = <IfStatement>this.nodes.pop();
		
		node.condition = cond;
		node.code = code;
		node.else = elseCode;

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
		const defaultStatement = ctx.default() ? <DefaultStatement>this.nodes.pop() : undefined;
		const caseCount = ctx.case().length;
		const cases: CaseStatement[] = [];
		for(let i = 0; i < caseCount; i++) {
			cases.push(<CaseStatement>this.nodes.pop());
		}
		const switchExp = <Expression>this.nodes.pop();
		const node = <SwitchStatement>this.nodes.pop();

		node.condition = switchExp;
		node.cases = cases;
		node.default = defaultStatement;
		
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
		const statement = <AbstractStatement>this.nodes.pop();
		const caseListCount = ctx.case_list().length;
		const caseList: Expression[] = [];
		for(let i = 0; i < caseListCount; i++) {
			caseList.unshift(<Expression>this.nodes.pop());
		}

		const node = <CaseStatement>this.nodes.pop();
		node.code = statement;
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			
			// const last = this.nodes.peek();
			// if(last instanceof SwitchStatement) {
			// 	last.cases.push(node);
			// }
			// else {
			// 	this.addDiagnostic(Locale.t("Unexpected case statement"), DiagnosticSeverity.Error, node.pos);
			// }
		}
		this.nodes.push(node);
	}
	exitCase_list(ctx: Case_listContext) {
		// TODO: нужно правильно обрабатывать период
		if(ctx.PERIOD()) {
			this.nodes.pop();
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
		}
		this.nodes.push(node);
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
		const node = ctx.compoundExpression() ? <Expression>this.nodes.pop() : <AbstractStatement>(<Statement>this.nodes.pop()).statemnent;
		
		if(ctx.compoundExpression()) {
			this.nodes.pop();
		}

		let last = this.nodes.peek();
		if(
			last instanceof FunctionDeclaration || 
			last instanceof DefaultStatement
		) {
			last.code = node;
		}
		else {
			// console.error(node);
			// console.error(last);
			// this.addDiagnostic(Locale.t("Unexpected code"), DiagnosticSeverity.Error, node.pos);
			this.nodes.push(node);
		}	
	}

	
	// enterBinarExpressionOperator =(ctx: BinarExpressionOperatorContext) => {
	// 	const node = new BinarOperator();
	// 	this.nodes.push(node);
	// };
	// exitBinarExpressionOperator =(ctx: BinarExpressionOperatorContext) => {
	// 	let node = <BinarOperator>this.nodes.pop();
	// 	if(ctx.stop) {
	// 		node.setPos(ctx.start, ctx.stop);
	// 		node.operator = ctx._operator.text;
			
	// 		if(node.operator === "=") {
	// 			node = AssigmentOperator.copy(node);
	// 		}

	// 		const last = this.nodes.peek();
	// 		if(last instanceof Expression) {
	// 			node.left = last.expresion!;
	// 			last.expresion = node;
	// 		}
	// 		else {
	// 			this.addDiagnostic(Locale.t("Unexpected binar operator"), DiagnosticSeverity.Error, node.pos);
	// 		}
	// 	}
	// };
	// enterChainedRelationalOperator(ctx: ChainedRelationalOperatorContext) {
	// 	const node = new ChainedOperator();
	// 	this.nodes.push(node);
	// }
	// exitChainedRelationalOperator = (ctx: ChainedRelationalOperatorContext) => {
	// 	const node = <ChainedOperator>this.nodes.pop();
	// 	if(ctx.stop) {
	// 		node.setPos(ctx.start, ctx.stop);
	// 		// node.operator = ctx.chainedRelationalOperators()[0].text;
			
	// 		const last = this.nodes.peek();
	// 		if(last instanceof Expression) {
	// 			node.setFirstLeft(last.expresion!);
	// 			last.expresion = node;
	// 		}
	// 		else {
	// 			console.error(last);
	// 			this.addDiagnostic(Locale.t("Unexpected binar operator"), DiagnosticSeverity.Error, node.pos);
	// 		}
	// 	}
	// };

	
	exitSymbol = (ctx: SymbolContext) => {
		const last = this.nodes.peek();
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
			
			// if(last instanceof UnarOperator) {
			// 	last.value = node;
			// }
			if(last instanceof NamedArgument)
			{
			}
			else {
				this.nodes.push(node);
			}
		}
	};

	exitPredefinedConstants(ctx: PredefinedConstantsContext) {
		const node = new Variable();
		if(ctx.stop)
		{	
			node.setPos(ctx.start, ctx.stop);
			node.id = ctx.text;
			node.setIDPos(ctx._start.line, ctx._start.charPositionInLine, ctx.stop.charPositionInLine + ctx.text.length);
			const last = this.nodes.peek();
			
			this.nodes.push(node);
		}
	}



	private calculateNodeRange(start: Token, end: Token) {
		let endLine = end.line;
		let endCharacter = end.charPositionInLine;

		const stopText = end.inputStream?.getText(new Interval(end.startIndex, end.stopIndex)) || "";
		if (stopText.includes('\n')) {
			const lines = stopText.split('\n');
			const lineCount = lines.length;
			const lastLine = lines[lineCount - 1];

			endLine = end.line + (lineCount - 1);
			endCharacter = lastLine.length;
		} else {
			endCharacter += stopText.length;
		}

		return new Range(start.line - 1, start.charPositionInLine,endLine - 1, endCharacter);
	}

	private evaluateBinarOperator(ctx: MultiplicativeExpressionContext | AdditiveExpressionContext | BitShiftExpressionContext | BitAndExpressionContext | XorExpressionContext | BitOrExpressionContext | EqualOrNotExpressionContext | LogicalAndExpressionContext | LogicalOrExpressionContext) {
		if(!ctx.stop || ctx.childCount <= 1) {
			return; // primaryExpression уже лежит в стеке
		}

		const opCount = Math.floor(ctx.childCount / 2);

		 const operands: Expression[] = [];
		for (let i = 0; i <= opCount; i++) {
			operands.unshift(this.nodes.pop() as Expression);
		}
		let leftNode = operands.shift()!;

		for (let i = 0; i < opCount; i++) {
			const rightNode = operands.shift()!;
			
			const operatorText = ctx.getChild(i * 2 + 1).text;

			const binaryNode = new BinarOperator();
			binaryNode.operator = operatorText;
			binaryNode.left = leftNode;
			binaryNode.right = rightNode;

			binaryNode.range = new Range(leftNode.range.start, rightNode.range.end);

			leftNode = binaryNode;
		}

		this.nodes.push(leftNode);
	}
}