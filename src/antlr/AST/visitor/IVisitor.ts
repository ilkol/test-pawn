import { Declarations } from "../Declarations";
import { EnumDeclaration } from "../EnumDeclaration";
import { EnumMember } from "../EnumMember";
import { FunctionDeclaration } from "../FunctionDeclaration";
import { FunctionParameter } from "../FunctionParameter";
import { VarDeclaration } from "../VarDeclaration";

export interface IVisitor
{
	visitFunctionParameter(node: FunctionParameter): void;
	visitEnumMember(node: EnumMember): void;
	visitEnumDeclaration(node: EnumDeclaration): void;
	visitDeclarations(node: Declarations): void;
	visitFunctionDeclaration(node: FunctionDeclaration): void;
	visitVariableDeclaration(node: VarDeclaration): void;
}