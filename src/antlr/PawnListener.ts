/* eslint-disable curly */
import { DiagnosticSeverity, Range } from "vscode";
import { DiagnosticMessage } from "./diagnostic/DiagnosticMessage";
import { Declarations } from "./AST/Nodes/Declarations";
import { Stack } from "./Stack/Stack";
import { pawnListener } from "./generated/pawnListener";
import { ArrayIndexContext, AssigmentContext, CodeBlockContext, CycleBodyContext, DeclParamsContext, EllipseContext, EnumContext, EnumMemberContext, ExpresionContext, FileContext, FloatContext, ForContext, FuncDeclModifContext, FunctionCallContext, FunctionDeclContext, IntegerContext, NumberContext, OperationContext, OperatorContext, RValueContext, ReturnContext, StringContext, TagContext, Var_definitionContext, VariableContext, WhileContext } from "./generated/pawnParser";
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

export class PawnListener implements pawnListener
{
	private nodes: Stack<ASTNode> = new Stack<ASTNode>();
	private root: Declarations | null = null;
	public readonly diagnostics: DiagnosticMessage[] = [];
	
	public get Root() : Declarations | null {
		return this.root;
	}
	addDiagnostic(msg: string, type: DiagnosticSeverity, pos: Range): void
	addDiagnostic(msg: string, type: DiagnosticSeverity, startLine: number | Range, startChar?: number, endLine?: number, endChar?: number): void {
		console.error(msg);
		if(startLine instanceof Range) {	
			this.diagnostics.push(new DiagnosticMessage(msg, type, startLine));
		}
		else this.diagnostics.push(new DiagnosticMessage(msg, type, startLine - 1, <number>startChar, <number>endLine - 1, <number>endChar));
	}

	enterFile(ctx: FileContext): void {
		let node = new Declarations();	
		if(this.root == null) {
			this.root = node;
		}	
		this.nodes.push(node);
	}
	exitFile(ctx: FileContext): void {
		let node: Declarations = <Declarations>this.nodes.pop();
		if(ctx.stop)
			node.setPos(ctx.start, ctx.stop);
	}

	enterFunctionDecl(ctx: FunctionDeclContext): void {
		let node = new FunctionDeclaration();	
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
				this.addDiagnostic("Ожидается идентификатор функции, а найден узел \"" + node.name + '"', DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	

	enterVar_definition?(ctx: Var_definitionContext): void 
	{
		let node = new OperatorNew();	
		// (<Declarations>this.nodes.peek()).declarations.push(node);
		this.nodes.push(node);
	}
	exitVar_definition?(ctx: Var_definitionContext): void 
	{
		let node = <OperatorNew>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);

			this.checkModif(ctx.varModifires().CONST(), node, VariableModifire.const, "const");
			this.checkModif(ctx.varModifires().STATIC(), node, VariableModifire.static, "static");
			this.checkModif(ctx.varModifires().STOCK(), node, VariableModifire.stock, "stock");
				
			let last = this.nodes.peek();
			node.vars.forEach(element => {
				element.modifires = node.modifires;
			});
			if(last instanceof Declarations) {
				let tmp: Declarations = last;
				node.vars.forEach(element => {
					tmp.declarations.push(element);
				});
			}
			else if(last instanceof CodeBlock) {
				last.statements.push(node);
			}
			else if(last instanceof ForCycle) {
				last.initialization = node;
			}
			else if(last instanceof Statements) {
				last.push(node);
			}
		}
	}

	private checkModif(arr: TerminalNode[], node: OperatorNew, mod: VariableModifire, text: string) {
		if(arr.length) {
			node.addModifire(mod);
			if(arr.length > 1) {
				let start = arr[1].symbol;
				let end = arr[arr.length - 1];
				this.addDiagnostic("Ожидается один модификатор \""+text+"\"", DiagnosticSeverity.Error, new Range(start.line - 1, start.charPositionInLine, end.symbol.line - 1, end.symbol.charPositionInLine + end.text.length));
			}
		}
	}

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
				this.addDiagnostic("Ожидается идентификатор переменной", DiagnosticSeverity.Error, node.pos);
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
			else if(last instanceof AssigmentOperator)
			{
				if(!last.left)
					last.left = node;
				else last.right = node;
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
			else {
				console.log(last);
				this.addDiagnostic("Неожиданная переменная", DiagnosticSeverity.Error, node.idPos);
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
			if(last instanceof FunctionDeclaration) {
				last.ellipse = node;
			}
			else {
				this.addDiagnostic("Неоижданый оператор ellipse", DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	enterCodeBlock(ctx: CodeBlockContext): void {
		let node = new CodeBlock(new Statements());	
		this.nodes.push(node);
	}

	exitCodeBlock(ctx: CodeBlockContext): void {
		let node = <CodeBlock>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			let last = this.nodes.peek();
			if(last instanceof FunctionDeclaration) {
				last.code = node;
			}
			else {
				this.addDiagnostic("Неоижданый код", DiagnosticSeverity.Error, node.pos);
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
			else {
				console.debug(last);
				this.addDiagnostic("Неожиданная целочисленная константа", DiagnosticSeverity.Error, node.pos);
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
			if(last instanceof CodeBlock) {
				last.statements.push(node);
			}
		}
	}
	enterExpresion(ctx: ExpresionContext): void {
		const node = new Expresion();
		this.nodes.push(node);
	}
	exitExpresion(ctx: ExpresionContext): void {
		const node = <Expresion>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);

			const opCtx = ctx.preOperators();
			if(opCtx) {
				const oper = new UnarOperator(new AbstractOperator(opCtx.text));
				if(opCtx.stop)
					oper.setPos(opCtx.start, opCtx.stop);
				if(node.expresion) {
					oper.value = node.expresion;
					node.expresion = oper;
				}

			}

			const last = this.nodes.peek();
			if(last instanceof AssigmentOperator) {
				last.right = node;
			}
			else if(last instanceof AbstractOperator) {
				last.expresion = node;
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
					this.addDiagnostic("Неожиданное вырожение", DiagnosticSeverity.Error, node.pos);
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
			else if(last instanceof Expresion)
			{
				last.expresion = node;
			}
			else {
				console.debug(last);
				this.addDiagnostic("Неожиданное вырожение", DiagnosticSeverity.Error, node.pos);
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

	exitOperator(ctx: OperatorContext): void {
		let node = this.nodes.pop();
		if(node instanceof AbstractOperator) {
			node.operator = ctx.text;
			switch(ctx.text) {
				case "++":
				case "--":
				case "tagof":
				case "char":
				case "defined":
				case "sizeof": {
					node = new UnarOperator(node);
					break;
				}
				default: {
					node = new BinarOperator(node);
				}
			}
			this.nodes.push(node);
		}
		else if(node){
			this.nodes.push(node);
			this.addDiagnostic("Неожиданный оператор", DiagnosticSeverity.Error, node.pos);
		}
	}
	enterOperation(ctx: OperationContext): void {
		let node = new AbstractOperator();
		this.nodes.push(node);
	}
	exitOperation(ctx: OperationContext): void 
	{
		let node = this.nodes.pop();
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
						this.addDiagnostic("Унарный оператор уже применён к другмоу вырожению", DiagnosticSeverity.Error, node.expresion.pos);
					node.expresion = last;
					this.nodes.push(node);
				} else {
					this.nodes.push(last);
					this.addDiagnostic("Неожиданая операция", DiagnosticSeverity.Error, node.pos);
				}
			}
			else {
				if(last)
					this.nodes.push(last);
				console.log(last, node);
				this.addDiagnostic("Неожиданая операция", DiagnosticSeverity.Error, node.pos);
			}
		}
	}

	enterFunctionCall(ctx: FunctionCallContext): void {
		let node = new FunctionCall();	
		this.nodes.push(node);
	}

	exitFunctionCall(ctx: FunctionCallContext): void 
	{
		let node = <FunctionCall>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);

			try {
				let id = ctx.IDENTIFIER();
				node.id = id.text;
				node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);

			} catch(e) {
				this.addDiagnostic("Ожидается идентификатор функции", DiagnosticSeverity.Error, node.pos);
			}
			
			let last = this.nodes.peek();
			if(last instanceof CodeBlock) {
				last.statements.push(node);
			}
			else if(last instanceof Expresion) {
				last.expresion = node;
			}
			else {
				console.debug(last);
				this.addDiagnostic("Неожиданный вызов функции", DiagnosticSeverity.Error, node.pos);
			}
		}
	}

	enterAssigment(ctx: AssigmentContext):void {
		let node = new AssigmentOperator();	

		this.nodes.push(node);
	}

	exitAssigment(ctx: AssigmentContext):void {
		const node = <AssigmentOperator>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			const last = this.nodes.peek();
			if(last instanceof OperatorNew) {
				const newVar = new VariableInit();
				if(node.right)
					newVar.rightValue = node.right;
				if(node.left) {
					var declarationVar:VarDeclaration = new VarDeclaration();
					if(node.left instanceof Variable) {
						declarationVar.id = node.left.id;
						declarationVar.idPos = node.left.idPos;
					}
					declarationVar.tag = node.left.tag;
					newVar.var = declarationVar;			
				}

				last.push(newVar);
			}
			else if(last instanceof CodeBlock){
				last.statements.push(node);
			}
			else {
				console.log(last);
				this.addDiagnostic("Неоижданная инициализация", DiagnosticSeverity.Error, node.pos);
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
				this.addDiagnostic("Неожиданный параметр функции", DiagnosticSeverity.Error, node.idPos);
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
			node.setPos(ctx.start, ctx.stop);
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
				this.addDiagnostic("Неожиданная вещественная константа", DiagnosticSeverity.Error, node.pos);
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
			node.setPos(ctx.start, ctx.stop);
			node.value = ctx.text;

			const last = this.nodes.peek();
			if(last instanceof Expresion) {
				last.expresion = node;
			}
			else if(last instanceof FunctionDeclarationParameter) {
				last.defaultValue = node;
			}
			else {
				console.debug(last);
				this.addDiagnostic("Неожиданная строка", DiagnosticSeverity.Error, node.pos);
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
				last.modifire = FunctionModifire.native;
		}
		else if(ctx.stop) {
			console.debug(last);
			const pos = new Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.stop.line - 1, ctx.stop.charPositionInLine);
			this.addDiagnostic("Неожиданный модификатор функции", DiagnosticSeverity.Error, pos);
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
			if(last instanceof CodeBlock) {
				last.statements.push(node);
			}
			else {
				this.addDiagnostic("Неожиданный цикл while", DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	enterCycleBody(ctx: CycleBodyContext): void {
		const node = new Statements();
		this.nodes.push(node);
	}
	exitCycleBody(ctx: CycleBodyContext): void {
		const node = <Statements>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			const last = <Cycle>this.nodes.peek();
			last.code = node;
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
			if(last instanceof CodeBlock) {
				last.statements.push(node);
			}
			else {
				this.addDiagnostic("Неожиданный цикл for", DiagnosticSeverity.Error, node.pos);
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
}