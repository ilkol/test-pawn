import { Definition } from "./Definition";
import * as node from "../antlr/AST/Nodes/Variables/VarDeclaration";
import { Uri } from "vscode";

export class VariableDeclaration extends Definition<node.VarDeclaration>
{
	constructor(declaration: node.VarDeclaration, file: Uri)
	{
		super(declaration, file);
		
	}
}