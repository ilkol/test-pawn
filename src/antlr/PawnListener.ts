/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable curly */
import { DiagnosticSeverity, l10n, Position, Range } from "vscode";
import { DiagnosticMessage } from "./diagnostic/DiagnosticMessage";
import { Declarations } from "./AST/Nodes/Declarations";
import { Stack } from "./Stack/Stack";
import { pawnListener } from "./generated/pawnListener";
import { ArrayIndexContext, CaseContext, CompoundStatmentContext, DeclParamsContext, DefaultContext, DocBlockContext, EllipseContext, ElseStatementContext, EnumContext, EnumMemberContext, ExpresionContext, FileContext, FloatContext, ForContext, FuncDeclModifContext, FunctionCallOperatorContext, FunctionDeclContext, IfStatementContext, IntegerContext, NativeAssigmentContext, NumberContext, OperationContext, OperatorOverloadContext, ReturnContext, StatementContext, StringContext, SwitchContext, TagContext, VarDeclarationContext, VarInitContext, VarModifiresContext, VariableContext, WhileContext } from "./generated/pawnParser";
import { VarDeclaration } from "./AST/Nodes/Variables/VarDeclaration";
import { OperatorNew, VariableModifire } from "./AST/Nodes/Operators/OperatorNew";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { EnumDeclaration } from "./AST/Nodes/enum/EnumDeclaration";
import { EnumMember } from "./AST/Nodes/enum/EnumMember";
import { Tag } from "./AST/Nodes/Tag";
import { CodeBlock } from "./AST/Nodes/CodeBlock";
import { Statements } from "./AST/Nodes/Statements";
import { IntLiteral } from "./AST/Nodes/Literals/IntLiteral";
import { ReturnStatement } from "./AST/Nodes/ReturnStatement";
import { Expresion } from "./AST/Nodes/Expresion";
import { AbstractOperator } from "./AST/Nodes/Operators/AbstractOperator";
import { BinarOperator } from "./AST/Nodes/Operators/BinarOperator";
import { UnarOperator } from "./AST/Nodes/Operators/UnarOperator";
import { ASTNode } from "./AST/Nodes/ASTNode";
import { FunctionDeclaration, FunctionModifire } from "./AST/Nodes/Functions/FunctionDeclaration";
import { FunctionCall } from "./AST/Nodes/Functions/FunctionCall";
import { VariableInit } from "./AST/Nodes/VariableInit";
import { FunctionParameter } from "./AST/Nodes/Functions/FunctionParameter";
import { Variable } from "./AST/Nodes/Variable";
import { FunctionDeclarationParameter } from "./AST/Nodes/Functions/FunctionDeclarationParameter";
import { FloatLiteral } from "./AST/Nodes/Literals/FloatLiteral";
import { StringLiteral } from "./AST/Nodes/Literals/StringLiteral";
import { WhileCycle } from "./AST/Nodes/Cycles/WhileCycle";
import { Cycle } from "./AST/Nodes/Cycles/Cycle";
import { ForCycle } from "./AST/Nodes/Cycles/ForCycle";
import { ArrayIndexes } from "./AST/Nodes/Variables/ArrayIndexes";
import { Array } from "./AST/Nodes/Variables/Array";
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
import { ElseStatement } from "./AST/Nodes/Conditions/ElseStatement";

export class PawnListener implements pawnListener
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
			node.id = node.tag.tagString + `:operator` + node.operator;

			node.setIDPos(
				ctx.OPERATOR().symbol.line, ctx.OPERATOR().symbol.charPositionInLine, 
				ctx.OPEN_PARENTHESIS().symbol.charPositionInLine);

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
				this.addDiagnostic(l10n.t("Expecting a function identifire, but finding node \"{0}\"", node.name), DiagnosticSeverity.Error, node.pos);
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
				console.log(last);
				this.addDiagnostic(l10n.t("Unexpected var declaration"), DiagnosticSeverity.Error, node.pos);	
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
					last.modifires.push(VariableModifire.const);
					break;
				}
				case "stock": {
					last.modifires.push(VariableModifire.stock);
					break;
				}
				case "static": {
					last.modifires.push(VariableModifire.static);
					break;
				}
				default: {
					this.addDiagnostic(l10n.t("Undefinded var modifire \"{0}\"", modif), DiagnosticSeverity.Error, pos);	
				}
			}
		}
		else {
			console.log(last);
			this.addDiagnostic(l10n.t("Unexpected var modifire"), DiagnosticSeverity.Error, pos);	
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
				this.addDiagnostic(l10n.t("Variable identifire expected"), DiagnosticSeverity.Error, node.pos);
			}

			// let decl = this.nodes.peek();
			// if(decl instanceof OperatorNew)
			// 	decl.push(node);
			// else 

			const last = this.nodes.peek();
			var declarationVar:VarDeclaration = new VarDeclaration();
			if(node instanceof Array) {
				declarationVar = new ArrayDeclaration();
				(<ArrayDeclaration>declarationVar).indexes = node.indexes;
			}

			declarationVar.setPos(ctx.start, ctx.stop);
			declarationVar.id = node.id;
			declarationVar.idPos = node.idPos;
			declarationVar.tag = node.tag;
			
			if(last instanceof OperatorNew) {
				last.push(declarationVar);
			}
			else if(last instanceof VariableInit)
			{
				last.var = declarationVar;
			}
			else if(last instanceof Expresion)
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
				this.addDiagnostic("warning 215: " + l10n.t("expression has no effect"), DiagnosticSeverity.Warning, node.idPos);
			}
			else {
				console.log(last);
				this.addDiagnostic(l10n.t("Unexpected variable"), DiagnosticSeverity.Error, node.idPos);
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

			let decl = <Declarations>this.nodes.peek();
			node.vars.forEach(element => {
				decl.declarations.push(element);
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
			last.push(node);
			node.parent = last;
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
			let ids = ctx.IDENTIFIER();
			ids.forEach(id => {
				node.addTag(id.text);
			});
			if(ids.length === 1) {
				let id = ids[0];
				node.id = id.text;
				node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);
			}
			// try {
			// 	let id = ctx.IDENTIFIER();
			// 	node.id = id.text;
			// 	node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);

			// } catch(e) {
			// 	this.addDiagnostic("Ожидается идентификатор тэга", DiagnosticSeverity.Error, node.pos);
			// }
			let last = this.nodes.peek();
			if(last && 'tag' in last) {
				last.tag = node;
				if('isTaged' in last)
					last.isTaged = true;
			}
		
		}
	}

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
				this.addDiagnostic(l10n.t("Unexpected ellipse operator"), DiagnosticSeverity.Error, node.pos);
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
				console.log(node);
				console.log(last);
				this.addDiagnostic(l10n.t("Unexpected code"), DiagnosticSeverity.Error, node.pos);
			}
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

			const last = this.nodes.peek();
			if(last instanceof Expresion) {
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
				this.addDiagnostic(l10n.t("Unexpected integer literal"), DiagnosticSeverity.Error, node.pos);
			}
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
				console.log(last);
				this.addDiagnostic(l10n.t("Unexpected expresion"), DiagnosticSeverity.Error, node.pos);	
			}
		}
	}
	enterExpresion(ctx: ExpresionContext): void {
		const node = new Expresion();
		this.nodes.push(node);
	}
	exitExpresion(ctx: ExpresionContext): void {
		let node = <Expresion>this.nodes.pop();
					
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			
			const last = this.nodes.peek();

			// const opCtx = ctx.preOperators();
			// if(opCtx) {
			// 	const oper = new UnarOperator(new AbstractOperator(opCtx.text));
			// 	if(opCtx.stop)
			// 		oper.setPos(opCtx.start, opCtx.stop);
			// 	if(node.expresion) {
			// 		oper.value = node.expresion;
			// 		node.expresion = oper;
			// 	}

			// }

			
			// if(node.expresion instanceof Literal && !(node instanceof AbstractOperator)) {
			// 	if(node.isTaged) {
			// 		node.expresion.tag = node.tag;
			// 	}
			// 	node = node.expresion;
			// }

			if(last instanceof VariableInit) {
				last.rightValue = node;
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
			else if(last instanceof ArrayIndexes) {
				last.push(node);
			}
			else if(last instanceof ForCycle) {
				try {
					last.addExpresion(node);
				}
				catch(e) {
					console.log(last);
					this.addDiagnostic(l10n.t("Unexpected expresion"), DiagnosticSeverity.Error, node.pos);
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
			else if(last instanceof FunctionCall)
			{
				last.push(new FunctionParameter(node));
			}
			else if(last instanceof EnumMember) {
				// last.value = node;
			}
			else if(last instanceof CaseStatement || last instanceof DefaultStatement)
			{
				last.code = node;
			}
			else if(last instanceof Expresion)
			{
				last.expresion = node;
			}
			else {
				console.debug(last);
				this.addDiagnostic(l10n.t("Unexpected expresion"), DiagnosticSeverity.Error, node.pos);
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

	exitOperation(ctx: OperationContext): void 
	{
		let node = <Expresion>this.nodes.pop();
		if(node && ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			const last = this.nodes.pop();
			if(last instanceof Expresion) {
				if(node instanceof BinarOperator) {
					node.left = last;
					this.nodes.push(node);
				}
				else if(node instanceof UnarOperator) {
					if(node.expresion)
						this.addDiagnostic(l10n.t("The unary operator has already been applied to another expression"), DiagnosticSeverity.Error, node.expresion.pos);
					node.expresion = last;
					this.nodes.push(node);
				} else {
					this.nodes.push(last);
					this.addDiagnostic(l10n.t("Unexpected operation"), DiagnosticSeverity.Error, node.pos);
				}
			}
			else {
				if(last) {
					if(last instanceof FunctionDeclarationParameter) {
						last.defaultValue = node;
					}
					else
						this.addDiagnostic(l10n.t("Unexpected operation"), DiagnosticSeverity.Error, node.pos);
					this.nodes.push(last);

				}
				else
					this.addDiagnostic(l10n.t("Unexpected operation"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}

	enterFunctionCall(ctx: FunctionCallOperatorContext): void {
		let node = new FunctionCall();	
		this.nodes.push(node);
	}

	exitFunctionCall(ctx: FunctionCallOperatorContext): void 
	{
		let node = <FunctionCall>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);

			try {
				let id = ctx.IDENTIFIER();
				node.id = id.text;
				node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);

			} catch(e) {
				this.addDiagnostic(l10n.t("Function identifire expected"), DiagnosticSeverity.Error, node.pos);
			}
			
			let last = this.nodes.peek();
			if(last instanceof Expresion) {
				last.expresion = node;
			}
			else {
				console.debug(last);
				this.addDiagnostic(l10n.t("Unexpected function call"), DiagnosticSeverity.Error, node.pos);
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
				last.push(node);
			}
			else {
				console.log(last);
				this.addDiagnostic(l10n.t("parserErrorUnexpectedInitialization"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}

	
	// exitAssigment(ctx: AssigmentContext):void {
	// 	const node = <AssigmentOperator>this.nodes.pop();
	// 	if(ctx.stop) {
	// 		node.setPos(ctx.start, ctx.stop);
	// 		const last = this.nodes.peek();
	// 		if(last instanceof OperatorNew) {
	// 			const newVar = new VariableInit();
	// 			if(node.right)
	// 				newVar.rightValue = node.right;
	// 			if(node.left) {
	// 				var declarationVar:VarDeclaration = new VarDeclaration();
	// 				if(node.left instanceof Variable) {
	// 					declarationVar.id = node.left.id;
	// 					declarationVar.idPos = node.left.idPos;
	// 				}
	// 				declarationVar.tag = node.left.tag;
	// 				newVar.var = declarationVar;			
	// 			}

	// 			last.push(newVar);
	// 		}
	// 		else if(last instanceof CodeBlock){
	// 			last.statements.push(node);
	// 		}
	// 		else {
	// 			console.log(last);
	// 			this.addDiagnostic(l10n.t("parserErrorUnexpectedInitialization"), DiagnosticSeverity.Error, node.pos);
	// 		}
	// 	}
	// }

	enterDeclParams(ctx: DeclParamsContext): void {
		let node = new FunctionDeclarationParameter();	
		this.nodes.push(node);
	}
	exitDeclParams(ctx: DeclParamsContext):void {
		const node = <FunctionDeclarationParameter>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			if(ctx.CONST())
				node.const = true;
			if(ctx.reference())
				node.reference = true;
			const last = this.nodes.peek();
			if(last instanceof FunctionDeclaration) {
				last.push(node);
			}
			else {
				console.debug(last);
				this.addDiagnostic(l10n.t("Unexpected function parameter"), DiagnosticSeverity.Error, node.idPos);
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
			if(last instanceof Expresion) {
				last.expresion = node;
			}
			else if(last instanceof FunctionDeclarationParameter) {
				last.defaultValue = node;
			}
			else {
				console.debug(last);
				this.addDiagnostic(l10n.t("Unexpected float literal"), DiagnosticSeverity.Error, node.pos);
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
			if(last instanceof Expresion) {
				last.expresion = node;
			}
			else if(last instanceof FunctionDeclarationParameter) {
				last.defaultValue = node;
			}
			else {
				console.debug(last);
				this.addDiagnostic(l10n.t("Unexpected string"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	exitFuncDeclModif(ctx: FuncDeclModifContext): void {
		const last = this.nodes.peek();
		if(last instanceof FunctionDeclaration) {
			if(ctx.funcModif()?.STOCK())
				last.modifire = FunctionModifire.stock;
			else if(ctx.funcModif()?.PUBLIC())
				last.modifire = FunctionModifire.public;
			else if(ctx.FORWARD())
				last.modifire = FunctionModifire.forward;
			else if(ctx.NATIVE())
				last.native = true;
				// last.modifire = FunctionModifire.native;
		}
		else if(ctx.stop) {
			console.debug(last);
			const pos = new Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.stop.line - 1, ctx.stop.charPositionInLine);
			this.addDiagnostic(l10n.t("Unexpected function modifier"), DiagnosticSeverity.Error, pos);
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
				this.addDiagnostic(l10n.t("Unexpected while loop"), DiagnosticSeverity.Error, node.pos);
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
				this.addDiagnostic(l10n.t("Unexpected for loop"), DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	enterArrayIndex(ctx: ArrayIndexContext): void {
		const node = new ArrayIndexes();
		this.nodes.push(node);
	}
	exitArrayIndex(ctx: ArrayIndexContext): void {
		const node = <ArrayIndexes>this.nodes.pop();
		const last = this.nodes.pop();
		if(!last) return;
		if(last instanceof Array) {
			last.pushIndexes(node.indexes);
			this.nodes.push(last);
		}
		else {
			this.nodes.push(new Array(<Variable>last, node.indexes));
			
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
				console.log(last);
				this.addDiagnostic(l10n.t("Unexpected condition statement"), DiagnosticSeverity.Error, node.pos);
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
				this.addDiagnostic(l10n.t("Unexpected switch statement"), DiagnosticSeverity.Error, node.pos);
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
				this.addDiagnostic(l10n.t("Unexpected case statement"), DiagnosticSeverity.Error, node.pos);
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
				this.addDiagnostic(l10n.t("Unexpected default statement"), DiagnosticSeverity.Error, node.pos);
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
			last instanceof ElseStatement || 
			last instanceof CaseStatement || 
			last instanceof DefaultStatement
		) {
			last.code = node;
		}
		else if(last instanceof CodeBlock) {
			last.statements.push(node);
		}
		else {
			console.log(node);
			console.log(last);
			this.addDiagnostic(l10n.t("Unexpected code"), DiagnosticSeverity.Error, node.pos);
		}	
	}

	enterElseStatement(ctx: ElseStatementContext): void
	{
		const node = new ElseStatement();
		this.nodes.push(node);
	}
	exitElseStatement(ctx: ElseStatementContext): void
	{
		const node = <ElseStatement>this.nodes.pop();
		let last = this.nodes.peek();
		if(last instanceof IfStatement) {
			last.else = node.code;
		}
		else {
			this.addDiagnostic(l10n.t("Unexpected else block"), DiagnosticSeverity.Error, node.pos);
		}
		
	}
}