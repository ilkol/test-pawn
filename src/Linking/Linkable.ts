import { Range, Uri } from "vscode";

export abstract class Linkable
{
	constructor(public readonly file: Uri)
	{

	}
	public abstract get name(): string
	public abstract get pos(): Range
}