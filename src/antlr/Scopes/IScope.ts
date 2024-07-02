import { Declaration } from "../AST/Nodes/Declaration";
import { FunctionDeclaration } from "../AST/Nodes/Functions/FunctionDeclaration";
import { VarDeclaration } from "../AST/Nodes/Variables/VarDeclaration";

export interface IScope
{
	extend(): IScope;
	
	addVar(variable: Declaration): void;
	addFunction(func: FunctionDeclaration): void;

	find(id: string): Declaration|undefined;
	findVar(id: string): VarDeclaration|undefined;
	findFunction(id: string): FunctionDeclaration|undefined;

	functions(): Map<string, FunctionDeclaration>;
	variables(): Map<string, VarDeclaration>;
	identifires(): Map<string, Declaration>;

	get parent(): IScope|undefined;
}