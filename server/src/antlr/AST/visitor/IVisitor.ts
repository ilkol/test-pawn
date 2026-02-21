import { CodeBlock } from "../Nodes/CodeBlock";
import { Declarations } from "../Nodes/Declarations";
import { EnumDeclaration } from "../Nodes/enum/EnumDeclaration";
import { EnumMember } from "../Nodes/enum/EnumMember";
import { IntLiteral } from "../Nodes/Literals/IntLiteral";
import { BinarOperator } from "../Nodes/Operators/BinarOperator";
import { OperatorNew } from "../Nodes/Operators/OperatorNew";
import { UnarOperator } from "../Nodes/Operators/UnarOperator";
import { ReturnStatement } from "../Nodes/ReturnStatement";
import { VarDeclaration } from "../Nodes/Variables/VarDeclaration";
import { FunctionDeclaration } from "../Nodes/Functions/FunctionDeclaration";
import { FunctionCall } from "../Nodes/Functions/FunctionCall";
import { VariableInit } from "../Nodes/VariableInit";
import { Variable } from "../Nodes/Variable";
import { FunctionDeclarationParameter } from "../Nodes/Functions/FunctionDeclarationParameter";
import { StringLiteral } from "../Nodes/Literals/StringLiteral";
import { WhileCycle } from "../Nodes/Cycles/WhileCycle";
import { ForCycle } from "../Nodes/Cycles/ForCycle";
import { Array } from "../Nodes/Variables/Array";
import { ArrayDeclaration } from "../Nodes/Variables/ArrayDeclaration";
import { AssigmentOperator } from "../Nodes/Operators/AssigmentOperator";
import { IfStatement } from "../Nodes/Conditions/IfStatement";
import { SwitchStatement } from "../Nodes/Conditions/switch/SwitchStatement";
import { DefaultStatement } from "../Nodes/Conditions/switch/DefaultStatement";
import { CaseStatement } from "../Nodes/Conditions/switch/CaseStatement";
import { BoolLiteral } from "../Nodes/Literals/BoolLiteral";
import { ArrayIndex } from "../Nodes/Operators/ArrayIndex";
import { ArrayChar } from "../Nodes/Operators/ArrayChar";
import { DoWhileCycle } from "../Nodes/Cycles/DoWhileCycle";
import { FloatLiteral } from "../Nodes/Literals/FloatLiteral";
import { OperatorOverload } from "../Nodes/Operators/OperatorOverload";

export interface IVisitor
{
	visitOperatorArrayIndex(node: ArrayIndex): void;
	visitOperatorArrayChar(node: ArrayChar): void;

	visitOperatorNew(node: OperatorNew): void;
	visitUnarOperator(node: UnarOperator): void;
	visitLiteral(node: IntLiteral | FloatLiteral): void;
	visitBoolLiteral(node: BoolLiteral): void;
	visitBinarOperator(node: BinarOperator): void;
	visitReturn(node: ReturnStatement): void;
	visitCodeBlock(node: CodeBlock): void;
	visitEnumMember(node: EnumMember): void;
	visitEnumDeclaration(node: EnumDeclaration): void;
	visitDeclarations(node: Declarations): void;
	visitFunctionDeclaration(node: FunctionDeclaration): void;
	visitOperatorOverload(node: OperatorOverload): void;
	visitVariableDeclaration(node: VarDeclaration): void;
	visitFunctionCall(node: FunctionCall): void;
	visitVarInit(node: VariableInit): void;
	visitVariable(node: Variable): void;
	visitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void;
	visitStringLiteral(node: StringLiteral): void;

	visitAssigment(node: AssigmentOperator): void;

	visitWhile(node: WhileCycle): void;
	visitDoWhile(node: DoWhileCycle): void;
	visitWFor(node: ForCycle): void;
	

	visitArray(ndoe: Array): void;
	visitArrayDeclaration(node: ArrayDeclaration): void;

	visitItStatement(node: IfStatement): void;

	visitSwitchStatement(node: SwitchStatement): void;
	visitCaseStatement(node: CaseStatement): void;
	visitDefaultSwitchStatement(node: DefaultStatement): void;

}