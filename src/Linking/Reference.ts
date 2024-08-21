import { Range, Uri } from "vscode";
import { Linkable } from "./Linkable";
import { IHasID } from "../antlr/AST/Nodes/IHasID";

export abstract class Reference<T extends IHasID> extends Linkable
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