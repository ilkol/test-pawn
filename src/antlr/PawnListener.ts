import { ASTNode } from "./AST/AST";
import { Declarations } from "./AST/Declarations";
import { FunctionDeclaration } from "./AST/FunctionDeclaration";
import { Stack } from "./Stack/Stack";
import { pawnListener } from "./generated/pawnListener";
import { FileContext, FunctionDeclContext } from "./generated/pawnParser";

export class PawnListener implements pawnListener
{
	private nodes: Stack<ASTNode> = new Stack<ASTNode>();
	private root: Declarations | null = null;

	
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
			node.setPos(ctx.start.startIndex, ctx.stop?.stopIndex);

		console.error(node);
	}

	enterFunctionDecl(ctx: FunctionDeclContext): void {
		let node = new FunctionDeclaration();	
		(<Declarations>this.nodes.peek()).declarations.push(node);
		this.nodes.push(node);
	}
	exitFunctionDecl(ctx: FunctionDeclContext): void {
		let node = <FunctionDeclaration>this.nodes.pop();
		if(ctx.stop) {
			node.setPos(ctx.start.startIndex, ctx.stop?.stopIndex);
			node.id = ctx.IDENTIFIER().text;
		}
	}
}