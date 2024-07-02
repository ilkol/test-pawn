/* eslint-disable curly */
import { Declarations } from "../Nodes/Declarations";
import { IVisitor } from "./IVisitor";
import { EnumDeclaration } from "../Nodes/EnumDeclaration";
import { EnumMember } from "../Nodes/EnumMember";
import { FunctionParameter } from "../Nodes/Functions/FunctionParameter";
import { CodeBlock } from "../Nodes/CodeBlock";
import { ReturnStatement } from "../Nodes/ReturnStatement";
import { BinarOperator } from "../Nodes/Operators/BinarOperator";
import { IntLiteral } from "../Nodes/Literals/IntLiteral";
import { UnarOperator } from "../Nodes/Operators/UnarOperator";
import { OperatorNew } from "../Nodes/Operators/OperatorNew";
import { FunctionDeclaration } from "../Nodes/Functions/FunctionDeclaration";
import { FunctionCall } from "../Nodes/Functions/FunctionCall";
import { VariableInit } from "../Nodes/VariableInit";
import { IContainsVars } from "../Nodes/IContainsVars";
import { ASTNode } from "../Nodes/ASTNode";
import { Variable } from "../Nodes/Variable";
import { FunctionDeclarationParameter } from "../Nodes/Functions/FunctionDeclarationParameter";
import { StringLiteral } from "../Nodes/Literals/StringLiteral";
import { WhileCycle } from "../Nodes/Cycles/WhileCycle";
import { ForCycle } from "../Nodes/Cycles/ForCycle";
import { Cycle } from "../Nodes/Cycles/Cycle";
import { Array } from "../Nodes/Variables/Array";
import { VarDeclaration } from "../Nodes/Variables/VarDeclaration";

export abstract class BaseVisitor implements IVisitor
{
	visitArray(node: Array): void {
		node.indexes.forEach(el => {
			el.accept(this);
		});
	}
	
	visitWFor(node: ForCycle): void {
		this.beforeVisitFor(node);
		node.initialization?.accept(this);
		node.increment?.accept(this);
		this.visitCycle(node);
		this.afterVisitFor(node);
	}
	visitWhile(node: WhileCycle): void {
		this.beforeVisitWhile(node);
		this.visitCycle(node);
		this.afterVisitWhile(node);
	}

	visitCycle(node: Cycle): void {
		node.condition?.accept(this);
		node.code?.statements.forEach(value => {
			value.accept(this);
		});
	}

	visitStringLiteral(node: StringLiteral): void {
		this.beforeVisitString(node);
		this.afterVisitString(node);
	}
	visitVariable(node: Variable): void {
		this.beforeVisitVariable(node);
		this.afterVisitVariable(node);
	}

	private checkVars<T extends ASTNode>(node: IContainsVars<T>) {
		node.vars.forEach(element => {
			element.accept(this);
		});
	}

	visitVarInit(node: VariableInit): void {
		this.beforeVisitVarInit(node);
		if(node.rightValue)
			node.rightValue.accept(this);
		this.afterVisitVarInit(node);
	}
	visitOperatorNew(node: OperatorNew): void {
		this.beforeVisitOperatorNew(node);
		this.checkVars(node);
		this.afterVisitOperatorNew(node);
	}
	visitUnarOperator(node: UnarOperator): void {
		this.beforeVisitUnarOperator(node);
		if(node.value) {
			node.value.accept(this);
		}
		this.afterVisitUnarOperator(node);
	}
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
		if(node.value)
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
	visitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void {
		this.beforeVisitFunctionDeclarationParameter(node);
		this.afterVisitFunctionDeclarationParameter(node);
	}
	visitFunctionParameter(node: FunctionParameter): void {
		this.beforeVisitFunctionParameter(node);
		node.val.accept(this);
		this.afterVisitFunctionParameter(node);
	}
	visitEnumMember(node: EnumMember): void {
		this.beforeVisitEnumMember(node);
		this.afterVisitEnumMember(node);
	}
	visitEnumDeclaration(node: EnumDeclaration): void {
		this.beforeVisitEnumDeclaration(node);
		this.checkVars(node);
		this.afterVisitEnumDeclaration(node);
	}
	visitFunctionDeclaration(node: FunctionDeclaration): void {
		this.beforeVisitFunctionDeclaration(node);
		if(node.code) {
			this.checkVars(node);
			node.code.accept(this);
		}
		
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

	visitFunctionCall(node: FunctionCall): void {
		this.beforeVisitFunctionCall(node);
		this.checkVars(node);
		this.afterVisitFunctionCall(node);
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

	abstract beforeVisitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void;
	abstract afterVisitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void;
	
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
	
	abstract beforeVisitUnarOperator(node: UnarOperator): void;
	abstract afterVisitUnarOperator(node: UnarOperator): void;

	abstract beforeVisitOperatorNew(node: OperatorNew): void;
	abstract afterVisitOperatorNew(node: OperatorNew): void;

	abstract beforeVisitFunctionCall(node: FunctionCall): void;
	abstract afterVisitFunctionCall(node: FunctionCall): void;

	abstract beforeVisitVarInit(node: VariableInit): void;
	abstract afterVisitVarInit(node: VariableInit): void;

	abstract beforeVisitVariable(node: Variable): void;
	abstract afterVisitVariable(node: Variable): void;

	abstract beforeVisitString(node: StringLiteral): void;
	abstract afterVisitString(node: StringLiteral): void;

	abstract beforeVisitWhile(node: WhileCycle): void;
	abstract afterVisitWhile(node: WhileCycle): void;

	abstract beforeVisitFor(node: ForCycle): void;
	abstract afterVisitFor(node: ForCycle): void;
}