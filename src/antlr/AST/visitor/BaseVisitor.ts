import { Declarations } from "../Declarations";
import { FunctionDeclaration } from "../FunctionDeclaration";
import { IVisitor } from "./IVisitor";
import { VarDeclaration } from "../VarDeclaration";
import { EnumDeclaration } from "../EnumDeclaration";
import { EnumMember } from "../EnumMember";
import { FunctionParameter } from "../FunctionParameter";
import { CodeBlock } from "../CodeBlock";
import { ReturnStatement } from "../ReturnStatement";
import { BinarOperator } from "../Operators/BinarOperator";
import { IntLiteral } from "../Literals/IntLiteral";

export abstract class BaseVisitor implements IVisitor
{
	visitIntLiteral(node: IntLiteral): void {
		this.beforeVisitIntLiteral(node);
		this.afterVisitIntLiteral(node);
	}
	visitBinarOperator(node: BinarOperator): void {
		this.beforeVisitBinarOperator(node);
		if(node.left)
			node.left.accept(this);
		if(node.right)
			node.right.accept(this);
		this.afterVisitBinarOperator(node);
	}
	visitReturn(node: ReturnStatement): void {
		this.beforeVisitReturn(node);
		node.value.accept(this);
		this.afterVisitReturn(node);
	}
	visitCodeBlock(node: CodeBlock): void {
		this.beforeVisitCodeBlock(node);
		node.statements.statements.forEach(element => {
			element.accept(this);
		});
		this.afterVisitCodeBlock(node);
	}
	visitFunctionParameter(node: FunctionParameter): void {
		this.beforeVisitFunctionParameter(node);
		this.afterVisitFunctionParameter(node);
	}
	visitEnumMember(node: EnumMember): void {
		this.beforeVisitEnumMember(node);
		this.afterVisitEnumMember(node);
	}
	visitEnumDeclaration(node: EnumDeclaration): void {
		this.beforeVisitEnumDeclaration(node);
		node.vars.forEach(element => {
			element.accept(this);
		});
		this.afterVisitEnumDeclaration(node);
	}
	visitFunctionDeclaration(node: FunctionDeclaration): void {
		this.beforeVisitFunctionDeclaration(node);
		if(node.code)
			node.code.accept(this);
		this.afterVisitFunctionDeclaration(node);
	}
	visitVariableDeclaration(node: VarDeclaration): void {
		this.beforeVisitVariableDeclaration(node);
		this.afterVisitVariableDeclaration(node);
	}
	visitDeclarations(node: Declarations): void {
		this.beforeVisitDeclarations(node);
		node.declarations.forEach(element => {
			element.accept(this);
		});
		this.afterVisitDeclarations(node);
	}
	
	
	abstract beforeVisitDeclarations(node: Declarations): void;
	abstract afterVisitDeclarations(node: Declarations): void;
	
	abstract beforeVisitFunctionDeclaration(node: FunctionDeclaration): void;
	abstract afterVisitFunctionDeclaration(node: FunctionDeclaration): void;
	
	abstract beforeVisitVariableDeclaration(node: VarDeclaration): void;
	abstract afterVisitVariableDeclaration(node: VarDeclaration): void;
	
	abstract beforeVisitEnumDeclaration(node: EnumDeclaration): void;
	abstract afterVisitEnumDeclaration(node: EnumDeclaration): void;
	
	abstract beforeVisitEnumMember(node: EnumMember): void;
	abstract afterVisitEnumMember(node: EnumMember): void;

	abstract beforeVisitFunctionParameter(node: FunctionParameter): void;
	abstract afterVisitFunctionParameter(node: FunctionParameter): void;
	
	abstract beforeVisitCodeBlock(node: CodeBlock): void;
	abstract afterVisitCodeBlock(node: CodeBlock): void;

	abstract beforeVisitReturn(node: ReturnStatement): void;
	abstract afterVisitReturn(node: ReturnStatement): void;

	abstract beforeVisitBinarOperator(node: BinarOperator): void;
	abstract afterVisitBinarOperator(node: BinarOperator): void;

	abstract beforeVisitIntLiteral(node: IntLiteral): void;
	abstract afterVisitIntLiteral(node: IntLiteral): void;
}