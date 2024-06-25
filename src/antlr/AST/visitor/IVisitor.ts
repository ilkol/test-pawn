import { CodeBlock } from "../Nodes/CodeBlock";
import { Declarations } from "../Nodes/Declarations";
import { EnumDeclaration } from "../Nodes/EnumDeclaration";
import { EnumMember } from "../Nodes/EnumMember";
import { FunctionParameter } from "../Nodes/Functions/FunctionParameter";
import { IntLiteral } from "../Nodes/Literals/IntLiteral";
import { BinarOperator } from "../Nodes/Operators/BinarOperator";
import { OperatorNew } from "../Nodes/Operators/OperatorNew";
import { UnarOperator } from "../Nodes/Operators/UnarOperator";
import { ReturnStatement } from "../Nodes/ReturnStatement";
import { VarDeclaration } from "../Nodes/VarDeclaration";
import { FunctionDeclaration } from "../Nodes/Functions/FunctionDeclaration";
import { FunctionCall } from "../Nodes/Functions/FunctionCall";
import { VariableInit } from "../Nodes/VariableInit";
import { Variable } from "../Nodes/Variable";
import { FunctionDeclarationParameter } from "../Nodes/Functions/FunctionDeclarationParameter";
import { StringLiteral } from "../Nodes/Literals/StringLiteral";
import { WhileCycle } from "../Nodes/Cycles/WhileCycle";
import { ForCycle } from "../Nodes/Cycles/ForCycle";

export interface IVisitor
{
	visitOperatorNew(node: OperatorNew): void;
	visitUnarOperator(node: UnarOperator): void;
	visitIntLiteral(node: IntLiteral): void;
	visitBinarOperator(node: BinarOperator): void;
	visitReturn(node: ReturnStatement): void;
	visitCodeBlock(node: CodeBlock): void;
	visitFunctionParameter(node: FunctionParameter): void;
	visitEnumMember(node: EnumMember): void;
	visitEnumDeclaration(node: EnumDeclaration): void;
	visitDeclarations(node: Declarations): void;
	visitFunctionDeclaration(node: FunctionDeclaration): void;
	visitVariableDeclaration(node: VarDeclaration): void;
	visitFunctionCall(node: FunctionCall): void;
	visitVarInit(node: VariableInit): void;
	visitVariable(node: Variable): void;
	visitFunctionDeclarationParameter(node: FunctionDeclarationParameter): void;
	visitStringLiteral(node: StringLiteral): void;

	visitWhile(node: WhileCycle): void;
	visitWFor(node: ForCycle): void;
}