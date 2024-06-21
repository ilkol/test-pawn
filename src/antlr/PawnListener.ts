import { DiagnosticSeverity, Range } from "vscode";
import { DiagnosticMessage } from "./diagnostic/DiagnosticMessage";
import { Declarations } from "./AST/Nodes/Declarations";
import { Stack } from "./Stack/Stack";
import { pawnListener } from "./generated/pawnListener";
import { CodeBlockContext, EnumContext, EnumMemberContext, ExpresionContext, FileContext, FunctionCallContext, FunctionDeclContext, IntegerContext, NumberContext, OperationContext, RValueContext, ReturnContext, TagContext, Var_definitionContext, VariableContext } from "./generated/pawnParser";
import { VarDeclaration } from "./AST/Nodes/VarDeclaration";
import { OperatorNew, VariableModifire } from "./AST/Operators/OperatorNew";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { EnumDeclaration } from "./AST/Nodes/EnumDeclaration";
import { EnumMember } from "./AST/Nodes/EnumMember";
import { Tag } from "./AST/Nodes/Tag";
import { CodeBlock } from "./AST/Nodes/CodeBlock";
import { Statements } from "./AST/Nodes/Statements";
import { IntLiteral } from "./AST/Literals/IntLiteral";
import { ReturnStatement } from "./AST/Nodes/ReturnStatement";
import { Expresion } from "./AST/Nodes/Expresion";
import { AbstractOperator } from "./AST/Operators/AbstractOperator";
import { BinarOperator } from "./AST/Operators/BinarOperator";
import { UnarOperator } from "./AST/Operators/UnarOperator";
import { ASTNode } from "./AST/Nodes/ASTNode";
import { FunctionDeclaration } from "./AST/Nodes/Functions/FunctionDeclaration";

export class PawnListener implements pawnListener
{
	private nodes: Stack<ASTNode> = new Stack<ASTNode>();
	private root: Declarations | null = null;
	public readonly diagnostics: DiagnosticMessage[] = [];
	
	public get Root() : Declarations | null {
		return this.root;
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
				this.addDiagnostic("Ожидается идентификатор функции", DiagnosticSeverity.Error, node.pos);
			}
		}
	}
	addDiagnostic(msg: string, type: DiagnosticSeverity, pos: Range): void
	addDiagnostic(msg: string, type: DiagnosticSeverity, startLine: number | Range, startChar?: number, endLine?: number, endChar?: number): void {
		if(startLine instanceof Range) {
			this.diagnostics.push(new DiagnosticMessage(msg, type, startLine));
		}
		else this.diagnostics.push(new DiagnosticMessage(msg, type, startLine - 1, <number>startChar, <number>endLine - 1, <number>endChar));
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
			if(last instanceof Declarations) {
				let tmp: Declarations = last;
				node.vars.forEach(element => {
					element.modifires = node.modifires;
					tmp.declarations.push(element);
				});
			}
			else if(last instanceof CodeBlock) {
				last.statements.push(node);
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
		let node = new VarDeclaration();
		let decl = this.nodes.peek();
		if(decl instanceof OperatorNew) {
			decl.push(node);
		}
		else if(decl instanceof EnumMember)
		{
			
		}
		else this.addDiagnostic("Не ожиданная переменная", DiagnosticSeverity.Error, node.idPos);
		
		this.nodes.push(node);
	}
	exitVariable(ctx: VariableContext): void {
		let node = <VarDeclaration>this.nodes.pop();
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

			let decl = this.nodes.peek();
			if(decl instanceof OperatorNew)
				decl.push(node);
			else if(decl instanceof EnumMember) decl.setValue(node);
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

			let decl = (<Declarations>this.nodes.peek());
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
		let node = <EnumMember>this.nodes.pop();
		if(ctx.stop)
		{	
			node.setPos(ctx.start, ctx.stop);
			(<EnumDeclaration>this.nodes.peek()).push(node);
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
			try {
				let id = ctx.IDENTIFIER();
				node.id = id.text;
				node.setIDPos(id.symbol.line, id.symbol.charPositionInLine, id.symbol.charPositionInLine + id.text.length);

			} catch(e) {
				this.addDiagnostic("Ожидается идентификатор тэга", DiagnosticSeverity.Error, node.pos);
			}
			let last = this.nodes.peek();
			if(last && 'tag' in last) {
				last.tag = node;
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
		}
	}

	enterInteger(ctx: IntegerContext): void {
		let node = new IntLiteral();
		this.nodes.push(node);
	}
	exitInteger(ctx: IntegerContext): void {
		let node = <IntLiteral>this.nodes.peek();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
			node.value = +ctx.INTEGER().text;
			// let last = this.nodes.peek();
			// if(last instanceof ReturnStatement) {
			// 	last.value = node;
			// }
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
			node.value = <Expresion>this.nodes.pop();
			let last = this.nodes.peek();
			if(last instanceof CodeBlock) {
				last.statements.push(node);
			}
		}
	}
	exitExpresion(ctx: ExpresionContext): void {
		let pre = ctx.preOperators();
		if(pre) {
			if(ctx.stop) {
				let last = <Expresion>this.nodes.pop();
				let node = new UnarOperator();
				node.value = last;
				node.setPos(ctx.start, ctx.stop);
				if(pre.NOT()) {	
					node.operator = "!";
				}
				else if(pre.MINUS()) {
					node.operator = "!";			
				}
				else if(pre.DECREMENTS()) {
					node.operator = "--";			
				}
				else if(pre.DECREMENTS()) {
					node.operator = "++";			
				}
				this.nodes.push(node);
			}
		}
	}

	exitOperation(ctx: OperationContext): void 
	{
		if(ctx.stop) {
			let node: AbstractOperator;
			switch(ctx.operator().text) {
				case "--":
				case "++": {
					node = new UnarOperator();
					(<UnarOperator>node).value = <Expresion>this.nodes.pop();
					break;
				}
				default: {
					node = new BinarOperator();
					(<BinarOperator>node).right = <Expresion>this.nodes.pop();
					(<BinarOperator>node).left = <Expresion>this.nodes.pop();
					break;
				}
			}
			node.operator = ctx.operator().text;	
			node.setPos(ctx.start, ctx.stop);
			this.nodes.push(node);
		}
	}

	enterFunctionCall(ctx: FunctionCallContext): void {
		let node = new OperatorNew();	
		this.nodes.push(node);
	}
}