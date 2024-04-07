import { Declarations } from "../Declarations";
import { FunctionDeclaration } from "../FunctionDeclaration";
import { IVisitor } from "./IVisitor";
import { VarDeclaration } from "../VarDeclaration";
import { EnumDeclaration } from "../EnumDeclaration";
import { EnumMember } from "../EnumMember";
import { FunctionParameter } from "../FunctionParameter";

export abstract class BaseVisitor implements IVisitor
{
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
}