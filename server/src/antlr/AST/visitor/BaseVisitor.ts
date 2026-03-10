/* eslint-disable curly */
import { Declarations } from "../Nodes/Declarations";
import { IVisitor } from "./IVisitor";
import { EnumDeclaration } from "../Nodes/enum/EnumDeclaration";
import { EnumMember } from "../Nodes/enum/EnumMember";
import { CodeBlock } from "../Nodes/CodeBlock";
import { ReturnStatement } from "../Nodes/ReturnStatement";
import { BinarOperator } from "../Nodes/Operators/BinarOperator";
import { IntLiteral } from "../Nodes/Literals/IntLiteral";
import { UnarOperator } from "../Nodes/Operators/UnarOperator";
import { OperatorNew } from "../Nodes/Operators/OperatorNew";
import { FunctionDeclaration, FunctionModifire } from "../Nodes/Functions/FunctionDeclaration";
import { FunctionCall } from "../Nodes/Functions/FunctionCall";
import { IContainsVars } from "../Nodes/IContainsVars";
import { ASTNode } from "../Nodes/ASTNode";
import { Variable } from "../Nodes/Variable";
import { FunctionDeclarationParameter } from "../Nodes/Functions/FunctionDeclarationParameter";
import { StringLiteral } from "../Nodes/Literals/StringLiteral";
import { WhileCycle } from "../Nodes/Cycles/WhileCycle";
import { ForCycle } from "../Nodes/Cycles/ForCycle";
import { Cycle } from "../Nodes/Cycles/Cycle";
import * as ArrayNode from "../Nodes/Variables/Array";
import { VarDeclaration } from "../Nodes/Variables/VarDeclaration";
import { AssigmentOperator } from "../Nodes/Operators/AssigmentOperator";
import { IfStatement } from "../Nodes/Conditions/IfStatement";
import { CaseStatement } from "../Nodes/Conditions/switch/CaseStatement";
import { DefaultStatement } from "../Nodes/Conditions/switch/DefaultStatement";
import { SwitchStatement } from "../Nodes/Conditions/switch/SwitchStatement";
import { BoolLiteral } from "../Nodes/Literals/BoolLiteral";
import { ArrayChar } from "../Nodes/Operators/ArrayChar";
import { ArrayIndex } from "../Nodes/Operators/ArrayIndex";
import { DoWhileCycle } from "../Nodes/Cycles/DoWhileCycle";
import { FloatLiteral } from "../Nodes/Literals/FloatLiteral";
import { OperatorOverload } from "../Nodes/Operators/OperatorOverload";
import { TernarOperator } from "../Nodes/Operators/TernarOperator";
import { ArrayInit } from "../Nodes/Literals/ArrayInit";

export abstract class BaseVisitor implements IVisitor
{
	visitDoWhile(node: DoWhileCycle): void {
		this.beforeVisitWDohile(node);
		this.visitCycle(node);
		this.afterVisitWDohile(node);
	}

	visitOperatorArrayChar(node: ArrayChar): void {
		this.beforeVisitOperatorArrayChar(node);
		node.left?.accept(this);
		node.right?.accept(this);
		this.afterVisitOperatorArrayChar(node);
	}

	visitOperatorArrayIndex(node: ArrayIndex): void {
		this.beforeVisitOperatorArrayIndex(node);
		node.left?.accept(this);
		node.right?.accept(this);
		this.afterVisitOperatorArrayIndex(node);
	}

	visitSwitchStatement(node: SwitchStatement): void {
		node.condition?.accept(this);
		node.cases.forEach(el => {
			el.accept(this);
		});
		node.default?.accept(this);
	}
	visitCaseStatement(node: CaseStatement): void {
		node.code?.accept(this);
	}
	visitDefaultSwitchStatement(node: DefaultStatement): void {
		node.code?.accept(this);
	}
	visitItStatement(node: IfStatement): void {
		this.beforeVisitIfStatemnt(node);
		node.condition?.accept(this);
		node.code?.accept(this);
		node.else?.accept(this);
		this.afterVisitIfStatemnt(node);
	}
	visitArray(node: ArrayNode.ArrayNode): void {
		this.visitVariable(node);
		this.acceptArray(node.indexes);
	}

	visitAssigment(node: AssigmentOperator): void {
		this.beforeVisitAssigment(node);
		node.left?.accept(this);
		node.right?.accept(this);
		this.afterVisitAssigment(node);

	}
	visitArrayInit(node: ArrayInit): void {
		this.beforeVisitArrayInit(node);
		this.acceptArray(node.value);
		this.afterVisitArrayInit(node);
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
		node.code?.accept(this);
	}

	visitStringLiteral(node: StringLiteral): void {
		this.beforeVisitString(node);
		this.afterVisitString(node);
	}
	visitVariable(node: Variable): void {
		this.beforeVisitVariable(node);
		this.afterVisitVariable(node);
	}

	visitOperatorNew(node: OperatorNew): void {
		this.beforeVisitOperatorNew(node);
		this.checkVars(node);
		this.afterVisitOperatorNew(node);
	}
	visitUnarOperator(node: UnarOperator): void {
		this.beforeVisitUnarOperator(node);
		node.value?.accept(this);
		this.afterVisitUnarOperator(node);
	}
	visitLiteral(node: IntLiteral | FloatLiteral): void {
		this.beforeVisitLiteral(node);
		this.afterVisitLiteral(node);
	}
	visitBoolLiteral(node: BoolLiteral): void {
		this.beforeVisitBoolLiteral(node);
		this.afterVisitBoolLiteral(node);
	}
	visitBinarOperator(node: BinarOperator): void {
		this.beforeVisitBinarOperator(node);
		if(node.left)
			node.left.accept(this);
		if(node.right)
			node.right.accept(this);
		this.afterVisitBinarOperator(node);
	}
	visitTernarOperator(node: TernarOperator): void {
		this.beforeVisitTernarOperator(node);
		if(node.condition)
			node.condition.accept(this);
		if(node.onTrue)
			node.onTrue.accept(this);
		if(node.onFalse)
			node.onFalse.accept(this);
		this.afterVisitTernarOperator(node);
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
			element?.accept(this);
		});
		this.afterVisitCodeBlock(node);
	}
	visitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void {
		this.beforeVisitFunctionDeclarationParameter(node);
		node.initValue?.accept(this);
		this.afterVisitFunctionDeclarationParameter(node);
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
	visitOperatorOverload(node: OperatorOverload) {
		this.beforeVisitOperatorOverload(node);
		if(node.code) {
			
			if(node.hasModifier(FunctionModifire.Public)) {
				node.parameters.forEach(el => {
					el.stock = true;
				});
			}
			this.checkVars(node);
			node.code.accept(this);
		}
		this.afterVisitOperatorOverload(node);

	}
	visitFunctionDeclaration(node: FunctionDeclaration): void {
		this.beforeVisitFunctionDeclaration(node);
		this.checkVars(node);
		if(node.code) {
			node.code.accept(this);
		}
		
		this.afterVisitFunctionDeclaration(node);
	}
	visitVariableDeclaration(node: VarDeclaration): void {
		this.beforeVisitVariableDeclaration(node);
		node.dimensions.forEach(dim => dim.accept(this));
		node.initValue?.accept(this);
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

	private checkVars<T extends ASTNode>(node: IContainsVars<T>) {
		this.acceptArray(node.vars);
	}
	private acceptArray<T extends ASTNode>(array: Array<T>) {
		array.forEach(element => {
			element.accept(this);
		});
	}

	abstract beforeVisitWDohile(node: DoWhileCycle): void;
	abstract afterVisitWDohile(node: DoWhileCycle): void;

	abstract beforeVisitOperatorArrayIndex(node: ArrayIndex): void;
	abstract afterVisitOperatorArrayIndex(node: ArrayIndex): void;
	
	abstract beforeVisitOperatorArrayChar(node: ArrayChar): void;
	abstract afterVisitOperatorArrayChar(node: ArrayChar): void;

	abstract beforeVisitDeclarations(node: Declarations): void;
	abstract afterVisitDeclarations(node: Declarations): void;
	
	abstract beforeVisitFunctionDeclaration(node: FunctionDeclaration): void;
	abstract afterVisitFunctionDeclaration(node: FunctionDeclaration): void;

	abstract beforeVisitOperatorOverload(node: OperatorOverload): void;
	abstract afterVisitOperatorOverload(node: OperatorOverload): void;
	
	abstract beforeVisitVariableDeclaration(node: VarDeclaration): void;
	abstract afterVisitVariableDeclaration(node: VarDeclaration): void;
	
	abstract beforeVisitEnumDeclaration(node: EnumDeclaration): void;
	abstract afterVisitEnumDeclaration(node: EnumDeclaration): void;
	
	abstract beforeVisitEnumMember(node: EnumMember): void;
	abstract afterVisitEnumMember(node: EnumMember): void;

	abstract beforeVisitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void;
	abstract afterVisitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void;

	
	abstract beforeVisitCodeBlock(node: CodeBlock): void;
	abstract afterVisitCodeBlock(node: CodeBlock): void;

	abstract beforeVisitReturn(node: ReturnStatement): void;
	abstract afterVisitReturn(node: ReturnStatement): void;

	abstract beforeVisitBinarOperator(node: BinarOperator): void;
	abstract afterVisitBinarOperator(node: BinarOperator): void;

	abstract beforeVisitTernarOperator(node: TernarOperator): void;
	abstract afterVisitTernarOperator(node: TernarOperator): void;

	abstract beforeVisitLiteral(node: IntLiteral | FloatLiteral): void;
	abstract afterVisitLiteral(node: IntLiteral | FloatLiteral): void;

	abstract beforeVisitBoolLiteral(node: BoolLiteral): void;
	abstract afterVisitBoolLiteral(node: BoolLiteral): void;
	
	abstract beforeVisitUnarOperator(node: UnarOperator): void;
	abstract afterVisitUnarOperator(node: UnarOperator): void;

	abstract beforeVisitOperatorNew(node: OperatorNew): void;
	abstract afterVisitOperatorNew(node: OperatorNew): void;

	abstract beforeVisitFunctionCall(node: FunctionCall): void;
	abstract afterVisitFunctionCall(node: FunctionCall): void;

	abstract beforeVisitVariable(node: Variable): void;
	abstract afterVisitVariable(node: Variable): void;

	abstract beforeVisitString(node: StringLiteral): void;
	abstract afterVisitString(node: StringLiteral): void;

	abstract beforeVisitWhile(node: WhileCycle): void;
	abstract afterVisitWhile(node: WhileCycle): void;

	abstract beforeVisitFor(node: ForCycle): void;
	abstract afterVisitFor(node: ForCycle): void;

	abstract beforeVisitArrayInit(node: ArrayInit): void;
	abstract afterVisitArrayInit(node: ArrayInit): void;

	abstract beforeVisitAssigment(node: AssigmentOperator): void;
	abstract afterVisitAssigment(node: AssigmentOperator): void;

	abstract beforeVisitIfStatemnt(node: IfStatement): void;
	abstract afterVisitIfStatemnt(node: IfStatement): void;
}