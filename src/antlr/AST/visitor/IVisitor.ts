import { CodeBlock } from "../Nodes/CodeBlock";
import { Declarations } from "../Nodes/Declarations";
import { EnumDeclaration } from "../Nodes/EnumDeclaration";
import { EnumMember } from "../Nodes/EnumMember";
import { FunctionParameter } from "../Nodes/Functions/FunctionParameter";
import { IntLiteral } from "../Literals/IntLiteral";
import { BinarOperator } from "../Nodes/Operators/BinarOperator";
import { OperatorNew } from "../Nodes/Operators/OperatorNew";
import { UnarOperator } from "../Nodes/Operators/UnarOperator";
import { ReturnStatement } from "../Nodes/ReturnStatement";
import { VarDeclaration } from "../Nodes/VarDeclaration";
import { FunctionDeclaration } from "../Nodes/Functions/FunctionDeclaration";
import { FunctionCall } from "../Nodes/Functions/FunctionCall";

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
}