import { Range, Uri } from "vscode";
import { Declaration } from "../antlr/AST/Nodes/Declaration";
import { Linkable } from "./Linkable";

export abstract class Definition<T extends Declaration> extends Linkable
{
	public get name(): string {
		return this.declaration.id;
	}
	public get pos(): Range {
		return this.declaration.idPos;
	}
	constructor(protected declaration: T, file: Uri)
	{
		super(file);
	}
}