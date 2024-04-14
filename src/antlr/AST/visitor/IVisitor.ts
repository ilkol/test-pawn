import { CodeBlock } from "../CodeBlock";
import { Declarations } from "../Declarations";
import { EnumDeclaration } from "../EnumDeclaration";
import { EnumMember } from "../EnumMember";
import { FunctionDeclaration } from "../FunctionDeclaration";
import { FunctionParameter } from "../FunctionParameter";
import { IntLiteral } from "../Literals/IntLiteral";
import { BinarOperator } from "../Operators/BinarOperator";
import { OperatorNew } from "../Operators/OperatorNew";
import { UnarOperator } from "../Operators/UnarOperator";
import { ReturnStatement } from "../ReturnStatement";
import { VarDeclaration } from "../VarDeclaration";

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
}