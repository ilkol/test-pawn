import { Declarations } from "../Declarations";
import { FunctionDeclaration } from "../FunctionDeclaration";
import { IVisitor } from "./IVisitor";
import { VarDeclaration } from "../VarDeclaration";

export abstract class BaseVisitor implements IVisitor
{
	visitDeclarations(node: Declarations): void {
		this.beforeVisitDeclarations(node);
		node.declarations.forEach(element => {
			element.accept(this);
		});
		this.afterVisitDeclarations(node);
	}
	visitFunctionDeclaration(node: FunctionDeclaration): void {
		this.beforeVisitFunctionDeclaration(node);
		this.afterVisitFunctionDeclaration(node);
	}
	visitVariableDeclaration(node: VarDeclaration): void {
		this.beforeVisitVariableDeclaration(node);
		this.afterVisitVariableDeclaration(node);
	}
	
	
	abstract beforeVisitDeclarations(node: Declarations): void;
	abstract afterVisitDeclarations(node: Declarations): void;

	abstract beforeVisitFunctionDeclaration(node: FunctionDeclaration): void;
	abstract afterVisitFunctionDeclaration(node: FunctionDeclaration): void;

	abstract beforeVisitVariableDeclaration(node: VarDeclaration): void;
	abstract afterVisitVariableDeclaration(node: VarDeclaration): void;
	
}