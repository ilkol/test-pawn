import { DiagnosticSeverity, Range } from "vscode";
import { DiagnosticMessage } from "./diagnostic/DiagnosticMessage";
import { ASTNode } from "./AST/ASTNode";
import { Declarations } from "./AST/Declarations";
import { FunctionDeclaration } from "./AST/FunctionDeclaration";
import { Stack } from "./Stack/Stack";
import { pawnListener } from "./generated/pawnListener";
import { EnumContext, EnumMemberContext, FileContext, FunctionDeclContext, TagContext, Var_definitionContext, VariableContext } from "./generated/pawnParser";
import { VarDeclaration } from "./AST/VarDeclaration";
import { OperatorNew, VariableModifire } from "./AST/OperatorNew";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { EnumDeclaration } from "./AST/EnumDeclaration";
import { EnumMember } from "./AST/EnumMember";
import { Tag } from "./AST/Tag";

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
				this.addDiagnostic("Оиждается идентификатор функции", DiagnosticSeverity.Error, node.pos);
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
				
			let decl = (<Declarations>this.nodes.peek());
			node.vars.forEach(element => {
				element.modifires = node.modifires;
				decl.declarations.push(element);
			});
		}
	}

	private checkModif(arr: TerminalNode[], node: OperatorNew, mod: VariableModifire, text: string) {
		if(arr.length) {
			node.addModifire(mod);
			if(arr.length > 1) {
				let start = arr[1].symbol;
				let end = arr[arr.length - 1];
				this.addDiagnostic("Оиждается один модификатор \""+text+"\"", DiagnosticSeverity.Error, new Range(start.line - 1, start.charPositionInLine, end.symbol.line - 1, end.symbol.charPositionInLine + end.text.length));
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
				this.addDiagnostic("Оиждается идентификатор переменной", DiagnosticSeverity.Error, node.pos);
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
				this.addDiagnostic("Оиждается идентификатор тэга", DiagnosticSeverity.Error, node.pos);
			}
			let last = this.nodes.peek();
			if(last && 'tag' in last) {
				last.tag = node;
			}
		}
	}
}