import { FunctionDeclaration } from "../AST/Nodes/Functions/FunctionDeclaration";
import { IHasID } from "../AST/Nodes/IHasID";
import { VarDeclaration } from "../AST/Nodes/VarDeclaration";

export interface IScope
{
	extend(): IScope;
	
	addVar(variable: VarDeclaration): void;
	addFunction(func: FunctionDeclaration): void;

	find(id: string): IHasID|undefined;
	findVar(id: string): VarDeclaration|undefined;
	findFunction(id: string): FunctionDeclaration|undefined;

	functions(): Map<string, FunctionDeclaration>;
	variables(): Map<string, VarDeclaration>;
	
}