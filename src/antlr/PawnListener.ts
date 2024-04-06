import { DiagnosticSeverity, Range } from "vscode";
import { DiagnosticMessage } from "./diagnostic/DiagnosticMessage";
import { ASTNode } from "./AST/ASTNode";
import { Declarations } from "./AST/Declarations";
import { FunctionDeclaration } from "./AST/FunctionDeclaration";
import { Stack } from "./Stack/Stack";
import { pawnListener } from "./generated/pawnListener";
import { FileContext, FunctionDeclContext, Var_definitionContext } from "./generated/pawnParser";
import { VarDeclaration } from "./AST/VarDeclaration";

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
				node.setIDPos(id.symbol.line, id.symbol.startIndex, id.symbol.stopIndex);

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
		let node = new VarDeclaration();	
		// (<Declarations>this.nodes.peek()).declarations.push(node);
		this.nodes.push(node);
	}
	exitVar_definition?(ctx: Var_definitionContext): void 
	{
		let node = <VarDeclaration>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start, ctx.stop);
		}
	}

	enter
}