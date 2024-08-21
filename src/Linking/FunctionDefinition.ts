import { Uri } from "vscode";
import * as node from "../antlr/AST/Nodes/Functions/FunctionDeclaration";
import { Definition } from "./Definition";

export class FunctionDeclaration extends Definition<node.FunctionDeclaration>
{

	constructor(declaration: node.FunctionDeclaration, file: Uri)
	{
		super(declaration, file);
		
	}
}