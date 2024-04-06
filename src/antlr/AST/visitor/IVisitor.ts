import { Declarations } from "../Declarations";
import { FunctionDeclaration } from "../FunctionDeclaration";
import { VarDeclaration } from "../VarDeclaration";

export interface IVisitor
{
	visitDeclarations(node: Declarations): void;
	visitFunctionDeclaration(node: FunctionDeclaration): void;
	visitVariableDeclaration(node: VarDeclaration): void;
}