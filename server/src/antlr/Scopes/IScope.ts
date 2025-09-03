import { AbstractSymbol, SymbolReferance } from "../../SymbolSystem/Symbols";
import { Declaration } from "../AST/Nodes/Declaration";
import { EnumDeclaration } from "../AST/Nodes/enum/EnumDeclaration";
import { EnumMember } from "../AST/Nodes/enum/EnumMember";
import { FunctionDeclaration } from "../AST/Nodes/Functions/FunctionDeclaration";
import { VarDeclaration } from "../AST/Nodes/Variables/VarDeclaration";

export interface IScope
{
	currentSymbol: SymbolReferance | undefined;

	extend(newSymbol?: SymbolReferance | undefined): IScope;
	
	addVar(variable: Declaration): void;
	addEnum(variable: EnumDeclaration): void;
	addEnumMember(variable: EnumMember): void;
	addFunction(func: FunctionDeclaration): void;

	find(id: string): Declaration|undefined;
	findVar(id: string): VarDeclaration|undefined;
	findFunction(id: string): FunctionDeclaration|undefined;

	functions(): Map<string, FunctionDeclaration>;
	variables(): Map<string, VarDeclaration>;
	identifires(): Map<string, Declaration>;

	get parent(): IScope|undefined;

	get enums(): Map<string, EnumDeclaration>;

	get currenFunction(): FunctionDeclaration;
	set currenFunction(value: FunctionDeclaration);
}